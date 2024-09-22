import React from 'react';

import RageRoomMobile from '../Assets/Images/RageRoomMobile.png';
import LandingImage from '../Assets/Images/LandingImage.png';
import PFP from '../Assets/Images/PFP.png';
const images = {
    RageRoomMobile,
    LandingImage,
    PFP,
  };

const Image = ({ name, alt, className, width,height }) => {
    const src = images[name];
  
    if (!src) {
      console.error(`Image with name "${name}" not found.`);
      return null;
    }
  
    return <img src={src} alt={alt} className={className} width={width} height={height}/>;
  };
  
  export default Image;