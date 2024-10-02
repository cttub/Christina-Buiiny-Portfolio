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
import RageRoomWebsiteThumbnail from '../Assets/Images/TheRageRoomWebsiteThumbnail.png';
import RageRoomLogoMockup from  '../Assets/Images/RageRoomLogoMockup.png';
import RageRoomFullLogo1 from  '../Assets/Images/RageRoomLogoBlack.png';
import RageRoomFullLogo2 from  '../Assets/Images/RageRoomLogoWhite.png';
import RageRoomRLogo1 from  '../Assets/Images/RageRoomLogoRBlack.png';
import RageRoomRLogo2 from  '../Assets/Images/RageRoomLogoRWhite.png';
import RageGraphic from '../Assets/Images/RageGraphic.png';
import RageGraphic1 from '../Assets/Images/RageGraphic1.png';
import RageGraphic2 from '../Assets/Images/RageGraphic2.png';
import RageGraphic3 from '../Assets/Images/RageGraphic3.png';
import RageGraphic4 from '../Assets/Images/RageGraphic4.png';

import MarkitflyLogoMockup from '../Assets/Images/MarkitflyLogoMockup.png';
import MarkitflyLogo1 from '../Assets/Images/MarkitflyLogo1.svg';
import MarkitflyLogo2 from '../Assets/Images/MarkitflyLogo2.svg';
import MarkitflyLogo3 from '../Assets/Images/MarkitflyLogo3.svg';
import MarkitflyLogo4 from '../Assets/Images/MarkitflyLogo4.svg';
import MarkitflyWebsite from '../Assets/Images/MarkitflyWebsite.png';

import DiMeBadging from '../Assets/Images/DiMeBadging.png';
import DiMeCancer from '../Assets/Images/DiMeCancerX.png';
import DiMeGlossary from '../Assets/Images/DiMeGlossary.png';

import UNO from '../Assets/Images/UNO.png';
import TestDome from '../Assets/Images/TestDome.png';
import FigmaCert from '../Assets/Images/FigmaCert.png';
import Google from '../Assets/Images/Google.png';
import FreeCamp from  '../Assets/Images/FreeCamp.png';
const images = {
    UNO,
    FreeCamp,
    TestDome,
    FigmaCert,
    Google,
    MarkitflyLogo1,
    MarkitflyLogo2,
    MarkitflyLogo3,
    MarkitflyLogo4,
    MarkitflyLogoMockup,
    MarkitflyWebsite,
    DiMeGlossary,
    DiMeBadging,
    DiMeCancer,
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
    RageRoomWebsiteThumbnail,
    RageRoomRLogo2,
    RageRoomRLogo1, 
    RageRoomFullLogo2,
    RageRoomFullLogo1,
    RageRoomLogoMockup,
    RageGraphic,
    RageGraphic1,
    RageGraphic2,
    RageGraphic3,
    RageGraphic4
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