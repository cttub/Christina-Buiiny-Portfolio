import React from 'react';
import Button from '../../Components/Button';
import Image from '../../Components/Image';

const CaseStudy = ({ title, description, buttonText, pdf}) => {
  return (
    <div className='case-study-container'>
        <h2>{title}</h2>
        <p>CASE STUDY TEMPLATE</p>
        <p>{description}</p>
     
    </div>
  );
}

export default CaseStudy;

