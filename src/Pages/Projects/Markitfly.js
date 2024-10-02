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
          description="In this role, I enhanced company branding by providing comprehensive website design services, including logo creation and social media post design. I collaborated closely with clients to understand their goals and translated their vision into effective solutions. Through user behavior research and SEO strategies, I improved website visibility and engagement, leading to measurable growth in traffic and conversions."
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
           
            
              ]}
            highlights={
            
            <p>Some highlights or custom HTML here</p>

            }
            />
   


  </section>
  );
}

export default Markitfly;
