import React from 'react';
import uniqid from 'uniqid';
import './Education.css';
import { education } from '../../portfolio';

const Education = () =>
  (
    <section className='section education' id='education'>
      <h2 className='section__title'>Education</h2>
      {education.map((edu) => (
        <div key={uniqid()} className='education__item'>
          <h3 className='education__institution'>{edu.institution}</h3>
          <p className='education__degree'>{edu.degree} &mdash; {edu.graduationDate}</p>
          <p className='education__gwa'>GWA: {edu.gwa}</p>
          <p className='education__details'>{edu.details}</p>
          {edu.awards && edu.awards.length > 0 && (
            <div className='education__awards'>
              <h4>Awards & Honors:</h4>
              <ul>
                {edu.awards.map((award) => (
                  <li key={uniqid()}>{award}</li>
                ))}
              </ul>
            </div>
          )}
          {edu.relevantCourses && edu.relevantCourses.length > 0 && (
            <div className='education__courses'>
              <h4>Relevant Courses:</h4>
              <ul>
                {edu.relevantCourses.map((course) => (
                  <li key={uniqid()}>{course}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </section>
  );

export default Education;