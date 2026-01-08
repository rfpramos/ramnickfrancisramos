// import uniqid from 'uniqid'
// import { skills } from '../../portfolio'
// import './Skills.css'

// const Skills = () => {
//   if (!skills.length) return null

//   return (
//     <section className='section skills' id='skills'>
//       <h2 className='section__title'>Skills</h2>
//       <ul className='skills__list'>
//         {skills.map((skill) => (
//           <li key={uniqid()} className='skills__list-item btn btn--plain'>
//             {skill}
//           </li>
//         ))}
//       </ul>
//     </section>
//   )
// }

// export default Skills

import uniqid from 'uniqid'
import { cybersecuritySkills } from '../../portfolio'
import './CybersecuritySkills.css'



const CybersecuritySkills = () => {
  if (!cybersecuritySkills.length) return null
  return (
    <section className='section cybersecurity-skills' id='cybersecurity-skills'>
      <h2 className='section__title'>Cybersecurity Skills</h2>
      <ul className='skills__list'>
        {cybersecuritySkills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CybersecuritySkills