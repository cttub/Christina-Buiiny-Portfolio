import React from 'react';
import Button from '../../Components/Button';
import CaseStudy from '../Templates/CaseStudy';
import pdfImg from '../../Assets/Case Studies/Enhancing UX booking with design laws and principles..png'

function RageRoomBookingCaseStudy() {
  return (
    <section className='case-study-section'>
       
        <CaseStudy
        title ="Enhancing UX booking with design laws and principles."
        pdf = "1KWQFBoDcBt4r_YW11BswUu3ofV_dESpG"
        pdfImg={pdfImg}
        description={
        <>
        <p>In this case study, I will detail the iterative redesign of a rage room booking experience that 
          aimed to enhance user engagement and streamline the booking process. <p>Initially, users faced 
            difficulties navigating an extensive list of packages, which led to confusion and high drop-off rates. 
            Recognizing the need for a more intuitive design, I implemented user-centered design principles to improve the overall experience.</p>
        </p>
        </>}
        />
  </section>
  );
}

export default RageRoomBookingCaseStudy;
