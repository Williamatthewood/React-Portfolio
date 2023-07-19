import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';


function Footer() {
    return (
      <footer className="footer my-4 text-center">
        <IconContext.Provider value={{ className: 'shared-class', size: 40}}>
          <>
          <a className="m-3" href="https://github.com/Williamatthewood" target="_blank"><AiOutlineGithub /></a>
          <a className="m-3" href="https://www.linkedin.com/in/williamatthewood/" target="_blank"><AiOutlineLinkedin/></a>
          </>
        </IconContext.Provider>
      </footer>
    );
  }
  
  export default Footer;