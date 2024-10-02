import React from 'react';
import Button from '../../Components/Button';
import Image from '../../Components/Image';
import SubPage from '../Templates/SubPage';
import Icon from '../../Components/Icon';
import Card from '../../Components/Card';
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
            
            <>
              <div className='highlight-container horizontal-flex reverse-wrap' style={{justifyContent: "space-between"}}> 
                  <div className='highlight-info col-lg-6'>
                    <h2>Website Development</h2>
                    <p>Designed & Developed Markitfly’s website and online presence, going through multiple iterations to create a sleek professional look.</p>
                    <p>Tools Utilized: Wordpress,  Bricks Builder, HTML, CSS</p>
                    <p>You can see the live version <a href='https://markitfly.com/' target='_blank'>here.</a></p>

                  </div>
                  <div className='highlight-thumbnail col-lg-5' style={{objectFit: "cover"}}>
                    <Image name = "MarkitflyWebsite" width="100%"/>
                  </div>
              </div>

              <div className='highlight-container' style={{marginTop: "150px"}}>
              <div className='highlight-info'>
                <h2>Logo Redesign</h2>
                <p className='highlight-desc'>Created a logo with a professional and modern look.</p>
               
              </div>
              <div className='highlight-img horizontal-flex wrap' style={{justifyContent: "space-between"}}>
                  <div className='col-lg-6 highlight-thumbnail'>
                      <Image name= "MarkitflyLogoMockup" width="100%" height="100%"/>
                  </div>
                  <div className='col-lg-6 logo-mockups horizontal-flex wrap' style={{justifyContent: "space-around"}}>
                     <Image className= "col-6" name = "MarkitflyLogo1"/>
                     <Image className= "col-4" name = "MarkitflyLogo2"/>
                     <Image className= "col-6" name = "MarkitflyLogo3"/>
                     <Image className= "col-4" name = "MarkitflyLogo4"/>

                  </div>
              </div>

            </div>
              
            
            </>

            }
            />
            <div className='more-projects' style={{marginTop: "150px"}}>
            <h4 className='text-center'>More Projects</h4>

            <div className='more-project-container horizontal-flex wrap'>
              <Card
               type="Smaller"
               imgSrc="RageRoom"
               linkHref="/Work/TheRageRoomSpringfield"
               companyName="The Rage Room"
               position="Creativity & Technology"
               linkText= "See Project"
              />
              <Card
               type="Smaller"
               imgSrc="DiMe"
               linkHref="/Work/DiMe"
               companyName="Digital Medicine Society"
               position="Website Development"
               linkText= "See Project"
              />

            </div>
          </div>
   


  </section>
  );
}

export default Markitfly;
