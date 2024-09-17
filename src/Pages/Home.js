import React from 'react';
import Button from '../Components/Button';
import './Styles/Home.css';
import Card from '../Components/Card';
import Image from '../Components/Image';

function Home() {
  return (
    <>
    <section className='landing'>
 
    
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
 
    </>
  );
}

export default Home;
