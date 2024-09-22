import React from 'react';
import Button from '../Components/Button';
import SubPage from './Templates/SubPage';
function Work() {
  return (
    <section>
        <SubPage
          title = "My Work"
          previousPage= "Homepage"
          description="Here are some of my highlighted work relating to website development, design and or other services I have offered for some of the companies I worked for. "
          previousPageURL="/"
        />
  </section>
  );
}

export default Work;
