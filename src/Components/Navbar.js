import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Styles/Navbar.css';
import logo from '../Assets/Logo.png';
import Button from '../Components/Button';

// Importing icons
import { ReactComponent as BunnyIcon } from '../Assets/Icons/Bunny_White.svg';
import { ReactComponent as BubbleIcon } from '../Assets/Icons/Bubble_White.svg';
import { ReactComponent as ComputerIcon } from '../Assets/Icons/Computer_White.svg';
import { ReactComponent as MailIcon } from '../Assets/Icons/Mail_White.svg';

// Active versions of the icons
import { ReactComponent as BunnyIconActive } from '../Assets/Icons/Bunny.svg';
import { ReactComponent as BubbleIconActive } from '../Assets/Icons/Bubble.svg';
import { ReactComponent as ComputerIconActive } from '../Assets/Icons/Computer.svg';
import { ReactComponent as MailIconActive } from '../Assets/Icons/Mail.svg';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {/* Desktop Navbar */}
      <div className={`navbar-desktop ${currentPath === '/' ? 'homepage-navbar' : 'otherpage-navbar'}`}>
        <div className="navbar-container">
          <div className="navbar-item">
            <Link to="/" className="navbar-link">
              <img width="200px" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="navbar-item main">
            <div> <Link 
                to="/About" 
                className={`navbar-link ${currentPath === '/About' ? 'active' : ''}`}
              >
                About Me
              </Link></div>
              
            <div>  <Link 
                to="/Work" 
                className={`navbar-link ${currentPath === '/Work' ? 'active' : ''}`}
              >
                My Work
              </Link></div>

            <div>
                <Link 
                    to="/Contact" 
                    className={`navbar-link ${currentPath === '/Contact' ? 'active' : ''}`}
                >
                    <Button
                    type="button"
                    className={currentPath === '/Contact' ? 'button--disabled' : 'button--blue'}
                    >
                    Contact Me
                    </Button>
                </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="navbar-mobile">
        <div className="navbar-item">
          <Link to="/" className="navbar-link">
            <div className="icon-container">
              {currentPath === '/' ? <BunnyIconActive className="nav-icon" /> : <BunnyIcon className="nav-icon" />}
            </div>
            <p className="nav-txt">Home</p>
          </Link>
        </div>

        <div className="navbar-item">
          <Link to="/Work" className="navbar-link">
            <div className="icon-container">
              {currentPath === '/Work' ? <ComputerIconActive className="nav-icon" /> : <ComputerIcon className="nav-icon" />}
            </div>
            <p className="nav-txt">Work</p>
          </Link>
        </div>

        <div className="navbar-item">
          <Link to="/About" className="navbar-link">
            <div className="icon-container">
              {currentPath === '/About' ? <BubbleIconActive className="nav-icon" /> : <BubbleIcon className="nav-icon" />}
            </div>
            <p className="nav-txt">About</p>
          </Link>
        </div>

        <div className="navbar-item">
          <Link to="/Contact" className="navbar-link">
            <div className="icon-container">
              {currentPath === '/Contact' ? <MailIconActive className="nav-icon" /> : <MailIcon className="nav-icon" />}
            </div>
            <p className="nav-txt">Contact</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
