import React from 'react';
import Button from '../Components/Button';
import Image from '../Components/Image';
import SubPage from './Templates/SubPage';
import './Styles/About.css';
function About() {
  return (
    <section>
        <SubPage
          previousPage="Homepage"
          previousPageURL="/"
        />

        <div className='about-information horizontal-flex'>
            <div className='pfp col-3'>
              <Image
               className="pfpImage"
               name = "PFP"
               width="100%"
               height="100%"/>
              </div>
            <div className='information'>
                  <h1>Hello! I am Christina</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <div className='quick-links'>

                  </div>
            </div>
        </div>
  </section>
  );
}

export default About;
