#!/usr/bin/env node
const crypto = require('crypto');

/**
 * Generate encrypted token (base64url of salt(16) + iv(12) + ciphertext) for a given path and passphrase.
 * Usage: node scripts/gen_secure_link.js /assets/malware_analysis/malware_1.pdf mySecretPass
 */

function b64url(buf) {
  return Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function deriveKey(pass, salt) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(pass, salt, 200000, 32, 'sha256', (err, key) => {
      if (err) reject(err); else resolve(key);
    });
  });
}

async function main() {
  const [,, pathArg, passArg] = process.argv;
  if (!pathArg || !passArg) {
    console.error('Usage: node scripts/gen_secure_link.js <path> <passphrase>');
    process.exit(1);
  }
  const salt = crypto.randomBytes(16);
  const iv = crypto.randomBytes(12);
  const key = await deriveKey(passArg, salt);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const ct = Buffer.concat([cipher.update(Buffer.from(pathArg, 'utf8')), cipher.final()]);
  const tag = cipher.getAuthTag();
  // Append tag to ciphertext for WebCrypto compatibility (WebCrypto returns ct only; GCM tag is implicit)
  const full = Buffer.concat([salt, iv, ct, tag]);
  const token = b64url(full);
  const title = encodeURIComponent(pathArg.split('/').pop());
  const url = `/pdf-viewer.html?esrc=${token}&title=${title}`;
  console.log(url);
}

main().catch(err => { console.error(err); process.exit(1); });
