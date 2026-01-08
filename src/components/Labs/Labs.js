import uniqid from 'uniqid'
import { labs } from '../../portfolio'
import LabContainer from '../LabContainer/LabContainer'
import './Labs.css'

const Labs = () => {
  if (!labs.length) return null

  return (
    <section id='labs' className='section labs'>
      <h2 className='section__title'>Cybersecurity Laboratory</h2>

      <div className='labs__grid'>
        {labs.map((lab) => (
          <LabContainer key={uniqid()} lab={lab} />
        ))}
      </div>
    </section>
  )
}

export default Labs
