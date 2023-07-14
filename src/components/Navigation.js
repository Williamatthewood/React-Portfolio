import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return (
      <nav className="navigation col-4 ">
        <a className="m-3" href="#About"
        onClick={() => handlePageChange('About')}>About Me</a>
        <a className="m-3" href="#Portfolio"
        onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
        <a className="m-3" href="#Contact"
        onClick={() => handlePageChange('Contact')}>Contact</a>
        <a className="m-3" href="#Resume"
        onClick={() => handlePageChange('Resume')}>Resume</a>
      </nav>
    );
  }
  
  export default Navigation;