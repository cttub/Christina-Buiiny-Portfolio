import React from 'react';
import Button from '../../Components/Button';
import Image from '../../Components/Image';
import SubPage from '../Templates/SubPage';
import Icon from '../../Components/Icon';
import Experience from '../Templates/Experience';
function Markitfly() {
  return (
    <section>
        <SubPage
          previousPage="My Work"
          previousPageURL="/Work"
          title= "Markitfly"
          description=""
        />
        <Experience 
            totalDuration= "1+ years"
            roles={[
                { iconName: "IPad", roleName: "Creative & Technical Co-Founder", duration: "Sept 2023 - Present" },
           
            ]}
            achievements={[
                { iconName: "Chart", description: "Boosted clients' revenue by 20-80% through tailored web and graphic solutions." },
                { iconName: "Heart", description: "Collaborate with diverse clients and industries to enhance skillsets." },
                { iconName: "Computer", description: "Delivered a range of web and branding solutions to numerous clients." },
                { iconName: "Bubble", description: "Conduct user research and case studies to deliver optimal solutions for clients' projects." }
                
            ]}
            feedback={[
                { faceColor: "Blue", hairStyle: "Long", feedbackText: (
                  <span>
                  “She <b>puts a lot of time and effort</b> into making our <b>website pages look appealing</b> to the eye and also <b>flow smoother for our users.</b>”
                  </span>)}
            
              ]}
            highlights={
            
            <p>Some highlights or custom HTML here</p>

            }
            />
   


  </section>
  );
}

export default Markitfly;
