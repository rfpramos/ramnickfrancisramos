import React, { useState, useEffect } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social, picture } = about

  let pictureSrc = null
  if (picture) {
    if (picture.startsWith('http') || picture.startsWith('/')) {
      pictureSrc = picture
    } else {
      pictureSrc = `${process.env.PUBLIC_URL}/${picture}`
    }
  }

  const [displayText, setDisplayText] = useState('')
  const fullText = `root:~$ whoami\n${name}`

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index += 1
      } else {
        clearInterval(interval)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [fullText])

  return (
    <div className='about center'>
      <div className='about__header'>
   
        {pictureSrc && (
          <img
            src={pictureSrc}
            alt={name}
            className='about__picture'
          />
        )}

        <div className='about__intro'>
          <p className='about__terminal'>
            {displayText.split('\n')[0] && (
              <span className='about__terminal-prompt'>{displayText.split('\n')[0]}</span>
            )}
            {displayText.split('\n')[1] && (
              <>
                <br />
                <span>{displayText.split('\n')[1]}</span>
              </>
            )}
            <span className='cursor'>|</span>
          </p>

          {role && <h2 className='about__role'>A {role}.</h2>}
          <p className='about__desc'>{description && description}</p>
        </div>
      </div>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
