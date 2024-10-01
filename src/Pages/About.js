import React from 'react';
import Button from '../Components/Button';
import Image from '../Components/Image';
import SubPage from './Templates/SubPage';
import Icon from '../Components/Icon';
import './Styles/About.css';

function About() {
  return (
    <section>
        <SubPage previousPage="Homepage" previousPageURL="/" />

        <div className="about-information">
            <div className="pfp col-3">
              <Image className="pfpImage" name="PFP" width="100%" height="100%" />
            </div>
            <div className="information">
                  <h1>Hello! I am Christina</h1>
                  <p>I am driven by opportunities that provide room for continuous learning and personal growth, both in my career and personal interests. I am dedicated to not only delivering high-quality work, but also fostering a collaborative environment where we thrive on each other's success and grow by learning from our experiences.</p>
                  <div className="quick-links horizontal-flex col-12">
                      <a className="link-container vertical-flex">
                          <Icon name="LinkedIn" height="60px" />
                          <p className="meta primary-blue-color">LinkedIn</p>
                      </a>
                      <a className="link-container vertical-flex">
                          <Icon name="GitHub" height="60px" />
                          <p className="meta primary-blue-color">GitHub</p>
                      </a>
                      <a className="link-container vertical-flex">
                          <Icon name="Mail" height="60px" />
                          <p className="meta primary-blue-color">Email</p>
                      </a>
                      <a className="link-container vertical-flex">
                          <Icon name="Heart" height="60px" />
                          <p className="meta primary-blue-color">Resume</p>
                      </a>
                  </div>
            </div>
        </div>

        <div className="hobbies">
          <h4 className="text-center">My hobbies & passions</h4>
          <div className="hobbies-container wrap"> 
            <div className="hobby horizontal-flex col-lg-5">
              <div className="hobby-icon horizontal-flex col-1">
                <Icon name="IPad" />
              </div>
              <div className="hobby-information col-8">
                <h4 className="primary-blue-color">Creative Arts</h4>
                <p>I love to draw and bring creative ideas to life.</p>
              </div>
            </div>

            <div className="hobby horizontal-flex col-lg-5">
              <div className="hobby-icon horizontal-flex col-1">
                <Icon name="Star" />
              </div>
              <div className="hobby-information col-8">
                <h4 className="primary-blue-color">Gaming & Anime</h4>
                <p>I am a nerd at heart, enjoying being immersed into different realities through various genres.</p>
              </div>
            </div>

            <div className="hobby horizontal-flex col-lg-5">
              <div className="hobby-icon horizontal-flex col-1">
                <Icon name="Bunny" />
              </div>
              <div className="hobby-information col-8">
                <h4 className="primary-blue-color">Pets & Wildlife</h4>
                <p>I love spending time with animals and my pets. I have two parrots and two bunnies.</p>
              </div>
            </div>

            <div className="hobby horizontal-flex col-lg-5">
              <div className="hobby-icon horizontal-flex col-1">
                <Icon name="Bubble" />
              </div>
              <div className="hobby-information col-8">
                <h4 className="primary-blue-color">Networking</h4>
                <p>Meeting so many people brings me joy! To learn and grow from one another is what motivates me.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center applications">
           <h4>Familiar Applications</h4>
           <div className="application-container horizontal-flex wrap">
            <p className="col-3">Figma</p>
            <p className="col-3">HTML / CSS</p>
            <p className="col-3">Wordpress</p>
            <p className="col-3">Miro</p>
            <p className="col-3">Javascript</p>
            <p className="col-3">Elementor</p>
            <p className="col-3">Adobe Premiere</p>
            <p className="col-3">Canva</p>
            <p className="col-3">WooCommerce</p>
            <p className="col-3">Adobe Illustrator</p>
            <p className="col-3">Procreate</p>
            <p className="col-3">Advanced Custom Fields</p>
            <p className="col-3">Adobe XD</p>
           </div>
        </div>


        <div className='education-certificates'>
          <h4 className='text-center'>Education & Certificates</h4>

          <div className='education-container'>

          </div>

          <div className='certificates-container'>

          </div>

          
        </div>
    </section>
  );
}

export default About;
