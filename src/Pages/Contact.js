import React from 'react';
import Button from '../Components/Button';
import SubPage from './Templates/SubPage';
function Contact() {
  return (
    <section>
        <SubPage
          title = "Contact Me"
          previousPage= "Homepage"
          description=""
          previousPageURL="/"
        />
  </section>
  );
}

export default Contact;
