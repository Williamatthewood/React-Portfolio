import React from 'react';
import Project from '../Project';

export default function Portfolio() {
  const projects = [
    {
      id: 0,
      name: 'Dinner and a Movie',
      appLink: 'https://mvincent15.github.io/Dinner-and-a-Movie/',
      gitHubLink: 'https://github.com/Williamatthewood/Dinner-and-a-Movie',
      image: '../../../public/images/dinnerAndAMovie.png'
    },
    {
      id: 1,
      name: 'furfacebook',
      appLink: 'https://furfacebook-app.herokuapp.com/',
      gitHubLink: 'https://github.com/Williamatthewood/FurFaceBook',
      image: '../../../public/images/furfacebook.png'
    },
    {
      id: 2,
      name: 'Password Generator',
      appLink: 'https://williamatthewood.github.io/Password-Generator-Challenge/',
      gitHubLink: 'https://github.com/Williamatthewood/Password-Generator-Challenge',
      image: '../../../public/images/passwordGenerator.png'
    },
    {
      id: 3,
      name: 'Coding Quiz',
      appLink: 'https://williamatthewood.github.io/Code-Quiz-Challenge/',
      gitHubLink: 'https://github.com/Williamatthewood/Code-Quiz-Challenge',
      image: '../../../public/images/codingQuiz.png'
    },
    {
      id: 4,
      name: 'Work Day Scheduler',
      appLink: 'https://williamatthewood.github.io/Work-Day-Scheduler-Challenge/',
      gitHubLink: 'https://github.com/Williamatthewood/Work-Day-Scheduler-Challenge',
      image: '../../../public/images/workDayScheduler.png'
    },
    {
      id: 5,
      name: 'Weather Dashboard',
      appLink: 'https://williamatthewood.github.io/Weather-Dashboard-Challenge/',
      gitHubLink: 'https://github.com/Williamatthewood/Weather-Dashboard-Challenge',
      image: '../../../public/images/weatherDashboard.png'
    },
    
  ]
  return (
    <div>
      <h1>Portfolio</h1>
      <Project projects = {projects} />
    </div>
  );
}