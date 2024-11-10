import React, { useEffect, useRef } from 'react';
import Button from '../../Components/Button';
import Image from '../../Components/Image';
import { Link, useLocation } from 'react-router-dom';

import './template.css';
const CaseStudy = ({ title, description, buttonText, pdf, pdfImg}) => {

  const pdfURL = `https://drive.google.com/file/d/${pdf}/view`;
  const pdfDownload = `https://drive.google.com/uc?id=${pdf}&export=download`;

  return (
    <>
    <div className='caseStudyInfo'>
      <Link to="/Work" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '70px' }}>
          <span style={{ display: 'flex', marginRight: '20px' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              style={{ margin: 'auto' }}
            >
              <path
                d="M1.6938 13.6196C-0.356829 12.4752 -0.356833 9.52483 1.69379 8.38037L15.038 0.932915C17.0377 -0.183119 19.5 1.26251 19.5 3.55254L19.5 18.4475C19.5 20.7375 17.0377 22.1831 15.038 21.0671L1.6938 13.6196Z"
                fill="#1E90FF"
              />
            </svg>
          </span>
          <p>Back to Case Studies</p>
        </div>
      </Link>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className='case-btn-container horizontal-flex wrap'>
          <Button className='button--blue case-study-btn' href={pdfDownload}>Download PDF</Button>
          <Button className='button--blue case-study-btn' target="_blank" href = {pdfURL}>View Fullscreen</Button>

        </div>

    </div>
    <div className="caseStudyContainer">
    <img className= "caseStudyImg" src={pdfImg} width={"100%"}/>
    </div>

    </>
  );
};

export default CaseStudy;
