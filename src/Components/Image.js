import React from 'react';

import RageRoomMobile from '../Assets/Images/RageRoomMobile.png';


const images = {
    RageRoomMobile,
  };

const Image = ({ name, alt, className }) => {
    const src = images[name];
  
    if (!src) {
      console.error(`Image with name "${name}" not found.`);
      return null;
    }
  
    return <img src={src} alt={alt} className={className} />;
  };
  
  export default Image;