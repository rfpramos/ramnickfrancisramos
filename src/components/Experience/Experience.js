import React from 'react';
import uniqid from 'uniqid';
import './Experience.css';
import { experiences } from '../../portfolio';

/**
 * 
 * @returns const experiences = [
  {
    institution: 'UPLB Computational Interdisciplinary Research Labs (CINTERLABS)',
    position: 'Software Development Intern',
    duration: 'June 2024 - August 2024',
    details:
      'Develops web application using MERN Stack for the projects under Center for Cave Ecosystems Research (CAVES) – The Museum of Natural History NICER Program on Center for Cave Ecosystems Research.',
  },
  {
    institution: 'KUMU, INC.',
    position: 'Software Quality Assurance Intern',
    duration: 'August 2023',
    details:
      'Utilized Jira to report bugs and issues in a mobile live-streaming application. Worked with other technology interns to ensure the functionality of new features. Experienced leading intern team on smoke testing for product deployment.',
  },
] 
 */

const Experience = () =>
  (
    <section className='section experience' id='experience'>
      <h2 className='section__title'>Experience</h2>
      {experiences.map((exp) => (
        <div key={uniqid()} className='experience__item'>
          <h3 className='experience__institution'>{exp.institution}</h3>
          <p className='experience__position'>{exp.position} &mdash; {exp.duration}</p>
          <ul className='experience__details'>
            {exp.details.map((detail) => (
              <li key={uniqid()}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );

export default Experience;