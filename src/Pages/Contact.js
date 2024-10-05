import React, { useState } from 'react';
import Button from '../Components/Button';
import SubPage from './Templates/SubPage';
import Icon from '../Components/Icon';
import './Styles/Contact.css';

function Contact() {
  // State to manage whether the email is copied
  const [emailCopied, setEmailCopied] = useState(false);

  // Function to copy email to the clipboard
  const copyEmailToClipboard = () => {
    const email = 'christinatbuii@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true); // Update the state to show the message
      // Hide the message after 3 seconds
      setTimeout(() => setEmailCopied(false), 3000);
    });
  };

  return (
    <section>
      <SubPage
        title="Let's Connect!"
        previousPage="Homepage"
        description={<p>Want to chat? Connect with me on LinkedIn OR Contact Me via email christinatbuii@gmail.com.</p>}
        previousPageURL="/"
      />
      <div className='horizontal-flex wrap contact-card-container'>
        <div className='contact-card vertical-flex'>
          <Icon name="Bubble" />
          <h3 style={{ marginTop: '-5px' }}>Let's Network!</h3>
          <Button
            className="button--primary text-center contact-btn"
            href="https://www.linkedin.com/in/cttub/"
            target="_blank"
          >
            Message on LinkedIn
          </Button>
          <p>This will open LinkedIn on another tab.</p>
        </div>

        <div className='contact-card vertical-flex'>
          <Icon name="Mail" />
          <h3 style={{ marginTop: '-5px' }}>Email Me!</h3>
          <Button
            className="button--primary text-center contact-btn"
            href = "mailto:christinatbuii@gmail.com"
     
          >
            Email Me
          </Button>
          <p>This will open your default email application.</p>
        </div>
      </div>
 
      <h3 className='text-center'>Don't want to contact yet? Copy my email to save for later!</h3>
      <div className='horizontal-flex'>
          <Button className="button--blue text-center contact-btn" onClick={copyEmailToClipboard}>Copy Email</Button>
         
      </div>
      {emailCopied && (
                <p className='success-color text-center' style={{ marginTop: '10px' }}>Email Copied</p>
              )}
    </section>
  );
}

export default Contact;
