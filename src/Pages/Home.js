import React from 'react';
import Button from '../Components/Button';
import './Styles/Home.css';
import Card from '../Components/Card';
import Image from '../Components/Image';

function Home() {
  return (
    <>
    <section className='landing hero'>
 
    
    <div className='col-lg-5 img-container'>
      <Image 
          name={"LandingImage"} 
          alt="LandingImage" 
          className={"landing-img"}
      />

    </div>
    <div className='col-lg-6'>
      <h1 className='white-color landing-header'>Driving Innovation and Growth Through Seamless Digital Experiences</h1>
      <div className='button-side'>
      <Button type="button" className="button--primary" href="/Contact">
      Contact Me
      </Button>  
      <Button type="button" className="button--secondary" href="/Work">
      View Case Studies
      </Button>  
      </div>
    </div>
    
        
    </section>

    <section className = "introdution" style={{display:"flex", justifyContent:"space-between"}}>
      <div className='col-6'>
         <h1 className='primary-blue-color'>Hello I am Christina.</h1>
         <p>A passionate web developer with a growing focus on crafting intuitive user experiences.</p>
         <p>Learn more about me, my experiences and skills! I am excited to meet you and make a positive impact for you and your company.</p>
         <br></br>
         <Button type="button" className="button--primary" href="/Contact">
          Contact Me
          </Button>  
      </div>
     
    </section>

    <section className="case-studies vertical-flex">

      <div style={{margin: "auto"}}>
        <h4 className='primary-pink-color text-center'>Case Studies</h4>
        <h1 className='primary-blue-color text-center heading-with-top-subheading' >Delivering positive results.</h1>
        <p className='text-center'>With a strong foundation in web development, I bring a unique blend of technical proficiency and creative vision to every project.</p>
      </div>
      
      <div className='small-card-container'>
          <Card
          type="Small"
          imgSrc={"RageRoomMobile"}
          companyName="The Rage Room"
          title="Enhancing UX booking with design laws and principles."
          position="Web Design & Developer"
          linkHref="/Work/Case-Studies/Enhancing-UX-Booking"
          linkText="View Case Study"
        />
      </div>

      <Button type="button" className="button--blue" href="/Work">
          View all Case Studies
          </Button>  



    </section>


    <section>

    <div className='col-6'>
         <h4 className='primary-pink-color'>Project Portfolio</h4>
         <h1 className='primary-blue-color heading-with-top-subheading'>See my experience.</h1>
         <p>A passionate web developer with a growing focus on crafting intuitive user experiences.</p>
         <p>Learn more about me, my experiences and skills! I am excited to meet you and make a positive impact for you and your company.</p>
         <br></br>
         <Button type="button" className="button--primary" href="/Work">
         View Projects
          </Button>  
      </div>
    </section>
 
    </>
  );
}

export default Home;
