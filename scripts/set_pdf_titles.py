import os
from pypdf import PdfReader, PdfWriter

BASE = os.path.join(os.path.dirname(__file__), '..', 'public')
TARGETS = [
    os.path.join(BASE, 'assets'),
]
# Include resume.pdf at root of public if present
RESUME = os.path.join(BASE, 'resume.pdf')

changed = []
errors = []

for root in TARGETS:
    if not os.path.isdir(root):
        continue
    for dirpath, dirnames, filenames in os.walk(root):
        for name in filenames:
            if name.lower().endswith('.pdf'):
                path = os.path.join(dirpath, name)
                try:
                    reader = PdfReader(path)
                    writer = PdfWriter()
                    for page in reader.pages:
                        writer.add_page(page)
                    md = reader.metadata or {}
                    new_md = {k: v for k, v in md.items() if k != '/Title'}
                    new_md['/Title'] = name  # include extension
                    writer.add_metadata(new_md)
                    try:
                        writer.add_viewer_preference('DisplayDocTitle', True)
                    except Exception:
                        pass
                    tmp = path + '.tmp'
                    with open(tmp, 'wb') as f:
                        writer.write(f)
                    os.replace(tmp, path)
                    changed.append(path)
                except Exception as e:
                    errors.append((path, str(e)))

# Handle resume.pdf if present in public
if os.path.isfile(RESUME):
    try:
        name = os.path.basename(RESUME)
        reader = PdfReader(RESUME)
        writer = PdfWriter()
        for page in reader.pages:
            writer.add_page(page)
        md = reader.metadata or {}
        new_md = {k: v for k, v in md.items() if k != '/Title'}
        new_md['/Title'] = name
        writer.add_metadata(new_md)
        try:
            writer.add_viewer_preference('DisplayDocTitle', True)
        except Exception:
            pass
        tmp = RESUME + '.tmp'
        with open(tmp, 'wb') as f:
            writer.write(f)
        os.replace(tmp, RESUME)
        changed.append(RESUME)
    except Exception as e:
        errors.append((RESUME, str(e)))

print('UPDATED PDF TITLES:', len(changed))
for p in changed:
    print(' -', os.path.relpath(p))
if errors:
    print('\nERRORS:', len(errors))
    for p, msg in errors:
        print(' !', os.path.relpath(p))
        print('   ', msg)
