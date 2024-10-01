import React from 'react';

import RageRoomMobile from '../Assets/Images/RageRoomMobile.png';
import LandingImage from '../Assets/Images/LandingImage.png';
import IPadImage from '../Assets/Images/IPadDrawing.png';
import Bunny from '../Assets/Images/Bunny.png';
import PFP from '../Assets/Images/PFP.png';
import DiMe from '../Assets/Images/DiMe.png';
import RageRoom from '../Assets/Images/RageRoom.png';
import Markitfly from '../Assets/Images/Markitfly.png';
import MarkitflyMockup from '../Assets/Images/MarkitflyMockup.png';
import RageRoomMockup from '../Assets/Images/RageRoomMockup.png';
import TransformationMockup from '../Assets/Images/TransformationMockup.png';


const images = {
    RageRoomMobile,
    LandingImage,
    PFP,
    IPadImage,
    Bunny,
    Markitfly, 
    RageRoom,
    DiMe,
    MarkitflyMockup,
    RageRoomMockup,
    TransformationMockup,
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