import React from 'react';

export default function Resume() {

  const frontEndSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "JQuery",
    "responsive design",
    "React",
    "Angular",
    "Bootstrap"
  ]

  const backEndSkills = [
    "APIs",
    "Node",
    "Express",
    "MySQL, Sequelize",
    "MongoDB, Mongoose",
    "REST",
    "GraphQL"
  ]
  return (
    <div>
      <h2 className="d-flex flex-start mx-5 my-2 section-title">Resume</h2>
      <hr className='hr'></hr>
      <div className='container row m-4'>
        <div className='col-md-6'>
          <h4 className='fst-italic'>Front-end Proficiencies</h4>
          <ul>
            {frontEndSkills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
        <div className='col-md-6'>
          <h4 className='fst-italic'>Back-end Proficiencies</h4>
          <ul>
          {backEndSkills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      
      
    </div>
  );
}