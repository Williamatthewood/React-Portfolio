import React from 'react';
import Project from '../Project';

export default function Portfolio() {
  const projects = [
    {

      id: 0,
      name: 'Premier Neighborhood Services',
      appLink: 'https://quiet-escarpment-66655-0aff3ec3178e.herokuapp.com/',
      gitHubLink: 'https://github.com/JerrickJohnson/Premier_Neighborhood_Services',
      image: './images/premier-neighborhood-services.png'
    },
    
    {
      id: 1,
      name: 'Dinner and a Movie',
      appLink: 'https://mvincent15.github.io/Dinner-and-a-Movie/',
      gitHubLink: 'https://github.com/Williamatthewood/Dinner-and-a-Movie',
      image: './images/dinnerAndAMovie.png'
    },
    {
      id: 2,
      name: 'Password Generator',
      appLink: 'https://williamatthewood.github.io/Password-Generator-Challenge/',
      gitHubLink: 'https://github.com/Williamatthewood/Password-Generator-Challenge',
      image: './images/passwordGenerator.png'
    },
    {
      id: 3,
      name: 'Coding Quiz',
      appLink: 'https://williamatthewood.github.io/Code-Quiz-Challenge/',
      gitHubLink: 'https://github.com/Williamatthewood/Code-Quiz-Challenge',
      image: './images/codingQuiz.png'
    },
    {
      id: 4,
      name: 'Work Day Scheduler',
      appLink: 'https://williamatthewood.github.io/Work-Day-Scheduler-Challenge/',
      gitHubLink: 'https://github.com/Williamatthewood/Work-Day-Scheduler-Challenge',
      image: './images/workDayScheduler.png'
    },
    {
      id: 5,
      name: 'Weather Dashboard',
      appLink: 'https://williamatthewood.github.io/Weather-Dashboard-Challenge/',
      gitHubLink: 'https://github.com/Williamatthewood/Weather-Dashboard-Challenge',
      image: './images/weatherDashboard.png'
    },
    
  ]

  return (
    <div>
      <h2 className="d-flex flex-start mx-5 my-2 section-title">Projects</h2>
      <hr className="hr"></hr>
      <div className="row d-flex justify-content-evenly">
        <Project projects = {projects} />
      </div>
      
    </div>
  );
}