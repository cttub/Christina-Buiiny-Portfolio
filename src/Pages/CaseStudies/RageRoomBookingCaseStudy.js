import React from 'react';
import Button from '../../Components/Button';
import CaseStudy from '../Templates/CaseStudy';
import PDF from '../../Assets/Case Studies/RageRoomBooking.pdf';


function RageRoomBookingCaseStudy() {
  return (
    <section>
       
        <CaseStudy
        title ="Enhancing UX booking with design laws and principles."
        pdf = {PDF}
        />
  </section>
  );
}

export default RageRoomBookingCaseStudy;
