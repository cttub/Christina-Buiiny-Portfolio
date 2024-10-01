import React from 'react';
import Button from '../Components/Button';
import SubPage from './Templates/SubPage';
import Faces from '../Components/Faces';
import Card from '../Components/Card';
function Work() {
  return (
    <>
       <section>
        <SubPage
          title = "My Work"
          previousPage= "Homepage"
          description="Here are some of my highlighted work relating to website development, design and or other services I have offered for some of the companies I worked for. "
          previousPageURL="/"
        />
       
     
        <h1 className='text-center secondary-blue-color'>Case Studies</h1>
        <div className='horizontal-flex wrap' id='case-studies'>
          <Card
            type = "Big Vertical"
            imgSrc = "RageRoomMobile"
            companyName= "The Rage Room"
            description= "In this case study, I will detail the iterative redesign of a rage room booking experience that aimed to enhance user engagement and streamline the booking process."
            companyType= "Website UX Design"
            linkText= "View Case Study"
            linkHref="/Work/Case-Studies/Enhancing-UX-Booking"
          />
        </div>
       </section>

       {/* Project Portfolio */}
       <h1 className='text-center secondary-blue-color'>Case Studies</h1>
       <div className='horizontal-flex wrap' id='projects'>
            <Card 
              type = "Smaller"
              companyName="Digital Medicine Society"
              position="Website Development"
              linkHref="/Work/DiMe"
              linkText="View Project"
              imgSrc="DiMe"
            />
            <Card 
              type = "Smaller"
              companyName="Markitfly"
              position="Website Development"
              linkHref="/Work/Markitfly"
              linkText="View Project"
              imgSrc="Markitfly"
            />

            <Card 
              type = "Smaller"
              companyName="The Rage Room"
              position="Website Development"
              linkHref="/Work/Markitfly"
              linkText="View Project"
              imgSrc="Markitfly"
            />


       </div>

  </>
  );
}

export default Work;
