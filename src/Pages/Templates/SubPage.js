import React from 'react';
import Button from '../../Components/Button';
import Image from '../../Components/Image';

const SubPage = ({ title, description, previousPageURL, previousPage }) => {
  return (
    <>
      <a href={previousPageURL} style={{ textDecoration: 'none', color: 'inherit' }}>
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
          <p>Back to {previousPage}</p>
        </div>
      </a>

      <div style={{marginBottom: "100px"}}>
        <h1 style={{ marginBottom: '-10px' }}>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  );
};

export default SubPage;
