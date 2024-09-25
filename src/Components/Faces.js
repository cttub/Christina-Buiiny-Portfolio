import React, { useState } from 'react';

// Import all your images
import BlueLong from '../Assets/Faces/Blue_Long.png';
import BlueLongHover from '../Assets/Faces/Blue_Long_Hover.png';
import BlueMedium from '../Assets/Faces/Blue_Medium.png';
import BlueMediumHover from '../Assets/Faces/Blue_Medium_Hover.png';
import BlueShort from '../Assets/Faces/Blue_Short.png';
import BlueShortHover from '../Assets/Faces/Blue_Short_Hover.png';
import PinkLong from '../Assets/Faces/Pink_Long.png';
import PinkLongHover from '../Assets/Faces/Pink_Long_Hover.png';
import PinkMedium from '../Assets/Faces/Pink_Medium.png';
import PinkMediumHover from '../Assets/Faces/Pink_Medium_Hover.png';
import PinkShort from '../Assets/Faces/Pink_Short.png';
import PinkShortHover from '../Assets/Faces/Pink_Short_Hover.png';
import YellowLong from '../Assets/Faces/Yellow_Long.png';
import YellowLongHover from '../Assets/Faces/Yellow_Long_Hover.png';
import YellowMedium from '../Assets/Faces/Yellow_Medium.png';
import YellowMediumHover from '../Assets/Faces/Yellow_Medium_Hover.png';
import YellowShort from '../Assets/Faces/Yellow_Short.png';
import YellowShortHover from '../Assets/Faces/Yellow_Short_Hover.png';

// Create a mapping for the images based on color and hair type
const images = {
    Blue: {
        Long: { normal: BlueLong, hover: BlueLongHover },
        Medium: { normal: BlueMedium, hover: BlueMediumHover },
        Short: { normal: BlueShort, hover: BlueShortHover },
    },
    Pink: {
        Long: { normal: PinkLong, hover: PinkLongHover },
        Medium: { normal: PinkMedium, hover: PinkMediumHover },
        Short: { normal: PinkShort, hover: PinkShortHover },
    },
    Yellow: {
        Long: { normal: YellowLong, hover: YellowLongHover },
        Medium: { normal: YellowMedium, hover: YellowMediumHover },
        Short: { normal: YellowShort, hover: YellowShortHover },
    },
};

const Faces = ({ color, hair, width, height }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Retrieve the correct image based on props
    const faceImage = isHovered
        ? images[color][hair].hover
        : images[color][hair].normal;

    // Handle click to toggle hover state
    const handleClick = () => {
        setIsHovered(prev => !prev);
    };

    return (
        <div>
            <img onClick={handleClick} src={faceImage} alt={`${color} ${hair}`} width = {width} height={height} />
        </div>
    );
};

export default Faces;
