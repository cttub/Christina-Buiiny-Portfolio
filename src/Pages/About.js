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
                  <p>I am driven by opportunities that provide room for continuous learning and personal growth, both in my career and personal interests. I am dedicated to not only delivering high-quality work, but also fostering a collaborative environment where we thrive on each other's success and grow by learning from our experiences.</p>
                  <div className='quick-links'>

                  </div>
            </div>
        </div>
  </section>
  );
}

export default About;
