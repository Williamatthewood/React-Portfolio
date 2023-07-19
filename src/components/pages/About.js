import React from 'react';

export default function About() {

  return (
    <div>
      <h2 className="d-flex flex-start mx-5 my-2 section-title">About Me</h2>
      <hr className="hr"></hr>
      <div className="container row">
        <div className="col-md-4">
          <img className="img-fluid" src='./images/avatar.jpeg'/>
        </div>
        <div className="col-md-8">
          <p className="paragraph my-3 mx-5">
            I am currently finishing my Full Stack Web Development certification at SMU. I am experience building applications using the MERN stack and also have experience using Angular and MySQL. 
            I created this portfolio to showcase the projects I've built during my education. 
            <br/>
            <br/>
            In addition to skills as a full stack developer, I have a background in music composition, audio engineering, and video game development. The tools I have used to develop these skills include, Pro Tools, Logic Pro, Sibelius, and Unity. 
            <br/>
            <br/>
            I am looking forward to developing new applications and projects of all kind!
            <br/>
          </p>
        </div>
        
      </div>
      
    </div>
  );
}