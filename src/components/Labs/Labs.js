import uniqid from 'uniqid'
import { labs } from '../../portfolio'
import LabContainer from '../LabContainer/LabContainer'
import './Labs.css'

const Labs = () => {
  if (!labs.length) return null

  return (
    <section id='labs' className='section labs'>
      <h2 className='section__title'>Cybersecurity Laboratory</h2>

      <img
        src={`${process.env.PUBLIC_URL}/images/seed_labs.png`}
        alt='SEED Security Labs Logo'
        className='labs__seed-logo'
      />
      <p>The laboratory prompts for this was provided by <a href='https://seedsecuritylabs.org/' target='_blank' rel='noopener noreferrer'>SEED Security Labs</a> in completion of the CMSC 191: Cybersecurity coursework. SEED Security Labs is a project focused on enhancing cybersecurity education through hands-on laboratory exercises. Visit them at https://seedsecuritylabs.org/.  </p>

      <div className='labs__grid'>
        {labs.map((lab) => (
          <LabContainer key={uniqid()} lab={lab} />
        ))}
      </div>
    </section>
  )
}

export default Labs
