import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import YouTubeIcon from '@material-ui/icons/YouTube'
import PDFIcon from '@material-ui/icons/PictureAsPdf'

import { SiFigma } from 'react-icons/si'


import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>

    {project.image && (<img
    src={
      project.image.startsWith("http")
        ? project.image
        : `${process.env.PUBLIC_URL}/images/${project.image}`
    }
    alt={`${project.name} screenshot`}
    style={{ width: '100%', objectFit: 'cover' }}
    />
    )}

    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.type && (
      <p className='project__type'>{project.type}</p>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}

    {project.pdf && (
      <a
        href={project.pdf}
        aria-label='pdf link'
        className='link link--icon'
      >
       <PDFIcon />
      </a>
    )}

    {project.ytLink && (
      <a
        href={project.ytLink}
        aria-label='youtube link'
        className='link link--icon'
      >
        <YouTubeIcon />
      </a>
    ) }

    {project.figmaLink && (


      <a href={project.figmaLink} aria-label="figma" className="link link--icon">
        <SiFigma />
      </a>

    ) }
  </div>
)

export default ProjectContainer
