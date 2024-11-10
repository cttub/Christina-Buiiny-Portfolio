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
        
        <div className='horizontal-flex wrap'>
          <Card
            type = "Big Vertical"
            imgSrc = "RageRoomMobile"
            companyName= "The Rage Room"
            description= "In this case study, I will detail the iterative redesign of a rage room booking experience that aimed to enhance user engagement and streamline the booking process."
            companyType= "Website UX Design"
            linkText= "View Case Study"
            linkHref="/Work/Case-Studies/Enhancing-UX-Booking-RageRoom"
          />
          <Card
            type = "Big Vertical"
            imgSrc = "SquawkBox"
            companyName= "Personal Project"
            description= "I conducted a UX/UI critique of Squawk Box to improve visual consistency, clarity, and usability. I conducted a UX/UI critique of Squawk Box to improve visual consistency, clarity, and usability."
            companyType= "Website UX Design"
            linkText= "View Case Study"
            linkHref="/Work/Case-Studies/Strategic-Design-Squawk"
          />
        </div>
      

       {/* Project Portfolio */}
       <h1 style={{marginTop: "150px"}} className='text-center secondary-blue-color' id='project-portfolio'>Project Portfolio</h1>
       <p className='text-center' style={{marginTop: "-20px"}}>Get to know some of my highlighted work experiences throughout different job titles and responsibilities.</p>
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
              position="Creativity & Technology"
              linkHref="/Work/Markitfly"
              linkText="View Project"
              imgSrc="Markitfly"
            />

            <Card 
              type = "Smaller"
              companyName="The Rage Room"
              position="Creativity & Technology"
              linkHref="/Work/TheRageRoomSpringfield"
              linkText="View Project"
              imgSrc="RageRoom"
            />


       </div>

       {/* Website Design & Development */}
       <h1 style={{marginTop: "150px"}} className='text-center secondary-blue-color'>Website Design & Development</h1>
       <p className='text-center' style={{marginTop: "-20px"}}>Some current websites I designed and developed.</p>
       <div className='horizontal-flex wrap' id='websites'>
            <Card 
              type = "Smaller"
              companyName="Markitfly"
              position="Marketing Agency"
              linkHref="https://markitfly.com/"
              linkText="View Website"
              imgSrc="MarkitflyMockup"
              target="_blank"
            />
            <Card 
              type = "Smaller"
              companyName="Transformation"
              position="Lawn & Landscaping"
              linkHref="https://transformlandmo.com/"
              linkText="View Website"
              imgSrc="TransformationMockup"
              target="_blank"
            />

            <Card 
              type = "Smaller"
              companyName="The Rage Room"
              position="Creativity & Technology"
              linkHref="https://therageroomspringfield.com/"
              linkText="View Website"
              imgSrc="RageRoomMockup"
              target="_blank"
            />


       </div>
       </section>
  </>
  );
}

export default Work;
