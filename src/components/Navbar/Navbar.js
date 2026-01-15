import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import {
  projects,
  skills,
  contact,
  affiliations,
  cybersecuritySkills,
  labs,
  education,
  experiences,
} from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='nav'>
      {/* ---------- Terminal window controls + title ---------- */}
      <div className='nav__controls'>
        <span className='nav__dot nav__dot--close' />
        <span className='nav__dot nav__dot--min' />
        <span className='nav__dot nav__dot--max' />
        <a href="#top" onClick={toggleNavList} className='link link--nav'>
        <span className='nav__title'>ramnickfrancisramos@dev:~</span></a>
      </div>

      {/* ---------- Nav links ---------- */}
      <ul
        className='nav__list'
        style={{ display: showNavList ? 'flex' : undefined }}
      >
        {education.length > 0 && (
          <li className='nav__list-item'>
            <a href='#education' onClick={toggleNavList} className='link link--nav'>
              Education
            </a>
          </li>
        )}

        {experiences.length > 0 && (
          <li className='nav__list-item'>
            <a href='#experience' onClick={toggleNavList} className='link link--nav'>
              Experiences
            </a>
          </li>
        )}
        {affiliations.length > 0 && (
          <li className='nav__list-item'>
            <a href='#affiliations' onClick={toggleNavList} className='link link--nav'>
              Affiliations
            </a>
          </li>
        )}  

        {labs.length > 0 && (
          <li className='nav__list-item'>
            <a href='#labs' onClick={toggleNavList} className='link link--nav'>
              Info. Sec.
            </a>
          </li>
        )}

        {projects.length > 0 && (
          <li className='nav__list-item'>
            <a href='#projects' onClick={toggleNavList} className='link link--nav'>
              Software Dev.
            </a>
          </li>
        )}

        {skills.length > 0 && (
          <li className='nav__list-item'>
            <a href='#skills' onClick={toggleNavList} className='link link--nav'>
              Skills
            </a>
          </li>
        )}

        {contact.email && (
          <li className='nav__list-item'>
            <a href='#contact' onClick={toggleNavList} className='link link--nav'>
              Contact
            </a>
          </li>
        )}
      </ul>

      {/* ---------- Theme toggle ---------- */}
      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      {/* ---------- Mobile hamburger ---------- */}
      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
