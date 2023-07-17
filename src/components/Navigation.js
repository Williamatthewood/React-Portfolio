import React from 'react';

function Navigation({ handlePageChange }) {

  const styles = {
    navStyle: {
      color: '#EDF2F4'
    }
  }
    return (
      <nav className="d-flex align-items-end mb-3 mx-4">
        <ul className="nav nav-underline navigation">
          <li className="nav-item">
            <a className="nav-link" href="#About"
            onClick={() => handlePageChange('About')}>About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
          </li>
            <a className="nav-link" href="#Contact"
            onClick={() => handlePageChange('Contact')}>Contact</a>
          <li className="nav-item">
            <a className="nav-link" href="#Resume"
            onClick={() => handlePageChange('Resume')}>Resume</a>
          </li>   
        </ul>
      </nav>
      
    );
  }
  
  export default Navigation;