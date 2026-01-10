import React from 'react';
import uniqid from 'uniqid';
import './Affiliations.css';
import { affiliations } from '../../portfolio';

/**
 * 
 * @returns const affiliations = [
  {
    institution: 'Alliance of Computer Science Students (ACSS) - UPLB',
    position: 'Logistics and Public Relations Officer',
    duration: 'December 2021 - Present',
    details:
      'Helps in managing partnerships with external organizations and partner university organizations. Aids in the management of the organization’s inventory.',
  },
  {
    institution: 'UPLB ROTC - Corps of Cadets',
    position: 'Non-Commissioned Cadet Officer',
    duration: 'November 2021 - May 2022',
    details:
      'Held a leadership position as the Acting G6, Communications, and Information Technology Officer. Led the team managing the official social media page of the UPLB ROTC.',
  },
]
 */

const Affiliations = () =>
  (
    <section className='section affiliations' id='affiliations'>
      <h2 className='section__title'>Affiliations</h2>
      {affiliations.map((aff) => (
        <div key={uniqid()} className='affiliations__item'>
          <h3 className='affiliations__institution'>{aff.institution}</h3>
          <p className='affiliations__position'>{aff.position} &mdash; {aff.duration}</p>


{/* 
           details:[
      'Hosted events for external activities such as seminars and workshops',
      'Works primarily in the management of the physical assets of the organization through inventory curating.',
      'Worked on managing partnerships with external organizations' */}
          <ul className='affiliations__details'>
            {aff.details.map((detail) => (
              <li key={uniqid()}>{detail}</li>
            ))}
          </ul>

        </div>
      ))}
    </section>

  );

export default Affiliations;