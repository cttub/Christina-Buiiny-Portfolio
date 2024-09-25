import React from 'react';
import Bubble from '../Assets/Icons/Bubble.svg';
import BubbleCircle from '../Assets/Icons/Bubble_Circle.svg';
import BubbleWhite from '../Assets/Icons/Bubble_White.svg';
import Bunny from '../Assets/Icons/Bunny.svg';
import BunnyCircle from '../Assets/Icons/Bunny_Circle.svg';
import BunnyWhite from '../Assets/Icons/Bunny_White.svg';
import Chart from '../Assets/Icons/Chart.svg';
import Clock from '../Assets/Icons/Clock.svg';
import Computer from '../Assets/Icons/Computer.svg';
import ComputerCircle from '../Assets/Icons/Computer_Circle.svg';
import ComputerWhite from '../Assets/Icons/Computer_White.svg';
import Cursor from '../Assets/Icons/Cursor.svg';
import Dev from '../Assets/Icons/Dev.svg'; 
import Frown from '../Assets/Icons/Frown.svg';
import Game from '../Assets/Icons/Game.svg';
import GitHub from '../Assets/Icons/GitHub.svg';
import Heart from '../Assets/Icons/Heart.svg';
import IPad from '../Assets/Icons/IPad.svg';
import LinkedIn from '../Assets/Icons/LinkedIn.svg';
import Mail from '../Assets/Icons/Mail.svg';
import MailCircle from '../Assets/Icons/Mail_Circle.svg';
import MailWhite from  '../Assets/Icons/Mail_White.svg';
import Smile from '../Assets/Icons/Smile.svg';
import Star from '../Assets/Icons/Star.svg';

const icons = {
    Bubble,
    BubbleCircle, 
    BubbleWhite,
    Bunny,
    BunnyCircle,
    BunnyWhite,
    Chart,
    Clock,
    Computer,
    ComputerCircle,
    ComputerWhite,
    Cursor,
    Dev,
    Frown,
    Game,
    GitHub,
    Heart,
    IPad,
    LinkedIn,
    Mail,
    MailCircle,
    MailWhite,
    Smile,
    Star,
  };

const Icon = ({ name, alt, className, width,height }) => {
    const src = icons[name];
  
    if (!src) {
      console.error(`Icon with name "${name}" not found.`);
      return null;
    }
  
    return <img src={src} alt={alt} className={className} width={width} height={height}/>;
  };
  
  export default Icon;