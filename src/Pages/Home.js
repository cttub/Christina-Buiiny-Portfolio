import React from 'react';
import Button from '../Components/Button';
import './Styles/Home.css';
import Card from '../Components/Card';
import Image from '../Components/Image';

function Home() {
  return (
    <>
    <section>
 


        <Card 
      type="Big Vertical"
      imgSrc={"RageRoomMobile"}
      companyType = "Marketing Agency"
      companyName="The Rage Room"
      title="Increasing Revenue by 83% with optimized UX UI"
      position="Web Design & Developer"
      linkHref="https://example.com"
      linkText="View Project"
      description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    />
 
        
    </section>
 
    </>
  );
}

export default Home;
