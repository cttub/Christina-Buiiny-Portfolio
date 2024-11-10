import React from 'react';
import Button from '../Components/Button';
import './Styles/Home.css';
import Card from '../Components/Card';
import Image from '../Components/Image';
import { Link, useLocation } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className='landing hero'>
        <div className='col-lg-4 img-container'>
          <Image name="LandingImage" alt="Landing" className="landing-img" />
        </div>
        <div className='col-lg-7'>
          <h1 className='white-color landing-header'>
            Driving Innovation and Growth Through Seamless Digital Experiences
          </h1>
          <div className='button-side'>
          
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction homepage-section">
        <div className='col-12 col-lg-6'>
          <h4 className='primary-pink-color'>Welcome to my portfolio!</h4>
          <h1 className='primary-blue-color heading-with-top-subheading'>
            Where creativity meets technical proficiency.
          </h1>
          <p>My name is Christina. A passionate web developer with a growing focus on crafting intuitive user experiences.</p>
          <p style={{marginBottom: "40px"}}>Learn more about me, my experiences, and skills! I am excited to meet you and make a positive impact for you and your company.</p>
          <Button type="button" className="button--primary" href="/Contact">Contact Me</Button>
        </div>
        <div className="image col-lg-5 col-12">
          <Image name="IPadImage" alt="iPad" />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="homepage case-studies-section vertical-flex">
        <div style={{ margin: "auto" }}>
          <h4 className='primary-pink-color text-center'>Case Studies</h4>
          <h1 className='primary-blue-color text-center heading-with-top-subheading'>
            Delivering positive results.
          </h1>
          <p className='text-center'>
            With a strong foundation in web development, I bring a unique blend of technical proficiency and creative vision to every project.
          </p>
        </div>
        <div className='small-card-container'>
          <Card
            type="Small"
            imgSrc="RageRoomMobile"
            companyName="The Rage Room"
            title="Enhancing UX booking with design laws and principles."
            position="Web Design & Developer"
            linkHref="/Work/Case-Studies/Enhancing-UX-Booking"
            linkText="View Case Study"
          />
          <Card
            type = "Small"
            imgSrc = "SquawkBox"
            companyName= "Personal Project"
            position="UX Designer"
            title = "Optimizing UX Through Strategic Design Adjustments"
            companyType= "Website UX Design"
            linkText= "View Case Study"
            linkHref="/Work/Case-Studies/Strategic-Design-Squawk"
          />
        </div>
        <Button type="button" className="button--blue" href="/Work">View all Case Studies</Button>
      </section>

      {/* Project Portfolio Section */}
      <section className="">
        <div>
          <h4 className='primary-pink-color text-center'>Project Portfolio</h4>
          <h1 className='primary-blue-color heading-with-top-subheading text-center'>See my experience.</h1>
          <p className="text-center" style={{marginBottom: "40px"}}>Along with my case studies, I foster many skills and experiences through various roles and responsibilities.</p>
          <div className='horizontal-flex wrap' id='projects'>
            <Card 
              type="Smaller"
              companyName="Digital Medicine Society"
              position="Website Development"
              linkHref="/Work/DiMe"
              linkText="View Project"
              imgSrc="DiMe"
            />
            <Card 
              type="Smaller"
              companyName="Markitfly"
              position="Creativity & Technology"
              linkHref="/Work/Markitfly"
              linkText="View Project"
              imgSrc="Markitfly"
            />
            <Card 
              type="Smaller"
              companyName="The Rage Room"
              position="Creativity & Technology"
              linkHref="/Work/TheRageRoomSpringfield"
              linkText="View Project"
              imgSrc="RageRoom"
            />
          </div>
          <div className='horizontal-flex' style={{marginTop: "30px"}}>
            <p>See my full project portfolio <Link to='/Work'>here.</Link></p>
          </div>
        </div>
      </section>


    </>
  );
}

export default Home;
