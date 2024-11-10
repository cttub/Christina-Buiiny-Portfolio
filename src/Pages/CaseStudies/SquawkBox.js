import React from 'react';
import Button from '../../Components/Button';
import CaseStudy from '../Templates/CaseStudy';
import SquawkBoxPic from '../../Assets/Case Studies/Optimizing UX Through Strategic Design Adjustments.png';


function SquawkBox() {
  return (
    <section className='case-study-section'>
       
        <CaseStudy
        title ="Optimizing UX Through Strategic Design Adjustments"
        pdf = "1-teZhF7dw8v_5S03_xKHdIwB4tXnfzTZ"
        pdfImg={SquawkBoxPic}
        description={
        <>
        <p>For this project, I conducted a UX/UI critique of Squawk Box, focusing on enhancing the user experience by improving visual consistency, clarity, and usability. My approach included analyzing the existing interface to identify opportunities for reducing cognitive load and organizing key elements for greater intuitive access.
        </p>
        </>}
        />
  </section>
  );
}

export default SquawkBox;
