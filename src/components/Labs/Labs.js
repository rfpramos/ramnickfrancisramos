import { useState } from 'react'
import uniqid from 'uniqid'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import LockIcon from '@mui/icons-material/Lock'
import Tooltip from '@mui/material/Tooltip'
import { labs } from '../../portfolio'
import LabContainer from '../LabContainer/LabContainer'
import './Labs.css'


const Labs = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [input, setInput] = useState('')
  const [isHovered, setIsHovered] = useState(false)

  if (!labs.length) return null

  const handleUnlock = (e) => {
    e.preventDefault()
    if (input.toUpperCase() === 'VIEW') {
      setIsUnlocked(true)
      setInput('')
    } else {
      setInput('')
    }
  }

  if (!isUnlocked) {
    return (
      <Tooltip title="$Type 'VIEW' and press Unlock to access the lab exercises." placement='bottom' 
       componentsProps={{
    tooltip: {
      sx: {
        bgcolor: '#3c3c3c',
        color: '#76ad30',
        fontSize: '14px',
        fontFamily: 'monospace',
        border: '1px solid #76ad30',
        '& .MuiTooltip-arrow': {
          color: '#3c3c3c',
        },
      },
    },
  }}>
        <section id='labs' className='section labs' style={{ textAlign: 'center' }}>
          <h2 className='section__title'>Cybersecurity Laboratory</h2>

          <img
            src={`${process.env.PUBLIC_URL}/images/seed_labs.png`}
            alt='SEED Security Labs Logo'
            className='labs__seed-logo'
          />

          <p style={{ marginBottom: '1rem' }}>This section contains answers to SEED Labs exercises. Type VIEW and press Unlock.</p>
          <form onSubmit={handleUnlock} style={{ display: 'inline-block' }}>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'VIEW' to unlock"
              style={{ marginRight: '0.5rem', textAlign: 'center' }} 
            />
            <button 
              type='submit' 
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)}
              style={{ color: isHovered ? 'green' : 'inherit' }}
            >
              <span style={{ color: isHovered ? 'green' : 'inherit' }}>Unlock</span>
              <span style={{ marginLeft: '0.5rem', display: 'inline', verticalAlign: 'middle' }}>
                {isHovered ? (
                  <LockOpenIcon className='lock-open-icon' style={{ display: 'inline', color: 'green' }} />
                ) : (
                  <LockIcon className='lock-icon' style={{ display: 'inline' }} />
                )}
              </span>
            </button>
          </form>
        </section>
      </Tooltip>
    )
  }

  return (
    <section id='labs' className='section labs'>
      <h2 className='section__title'>Cybersecurity Laboratory</h2>

      <img
        src={`${process.env.PUBLIC_URL}/images/seed_labs.png`}
        alt='SEED Security Labs Logo'
        className='labs__seed-logo'
      />
      <p>The laboratory prompts for this was provided by SEED Security Labs adjunct the completion of the CMSC 191: Cybersecurity coursework. SEED Security Labs is an education instiitution that aims to promote literaciy in technical skills on information security through hands-on laboratory exercises. Visit them at <a href='https://seedsecuritylabs.org/' target='_blank' rel='noopener noreferrer'>https://seedsecuritylabs.org/.</a>  </p>

      <div className='labs__grid'>
        {labs.map((lab) => (
          <LabContainer key={uniqid()} lab={lab} />
        ))}
      </div>
    </section>
  )
}

export default Labs