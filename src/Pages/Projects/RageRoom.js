import React from 'react';
import Button from '../../Components/Button';
import Image from '../../Components/Image';
import SubPage from '../Templates/SubPage';
import Icon from '../../Components/Icon';
import Experience from '../Templates/Experience';
import Card from '../../Components/Card';
import "./projects.css";
function RageRoom() {
  return (
    <section>
        <SubPage
          previousPage="My Work"
          previousPageURL="/Work"
          title= "The Rage Room"
          description="In this role as a Designer and Website Developer for The Rage Room, I led the redesign and development of their website to enhance user experience and increase functionality, resulting in a significant revenue growth of 83% over one year. I also revamped the branding through a new logo design that incorporates the business's themes and services, and experimented with various graphic design styles for promotional materials, utilizing tools such as WordPress, HTML, CSS, Midjourney, and Canva. My contributions directly improved user engagement metrics, including a 53% increase in clicks and a notable reduction in drop-off rates."
        />
         <Experience 
            totalDuration= "1+ years"
            roles={[
                { iconName: "IPad", roleName: "Designer & Website Developer", duration: "Sept 2023 - Present" },
           
            ]}
            achievements={[
                { iconName: "Chart", description: "Increased company revenue by 83%, growing from $60K in 2022 to $114K in 2023." },
                { iconName: "Cursor", description: "Achieved a 53% increase in clicks and a 45% rise in user sessions." },
                { iconName: "Computer", description: "Decreased drop-off by 21.8% & increased time on page by 5.7%" },
                { iconName: "Clock", description: "Reduced the drop-off rate by 11% and increased average time on page by 30%." }
                
            ]}
          
            highlights={
            <>
            <div className='highlight-container horizontal-flex reverse-wrap' style={{justifyContent: "space-between"}}> 
                <div className='highlight-info col-lg-6'>
                  <h2>Website Development</h2>
                  <p>Designed and developed The Rage Room’s website to upgrade from their limited-feature Fareharbor site. This new website offers enhanced customization for the user experience while maintaining their existing branding.</p>
                  <p>Tools Utilized: Wordpress, YooTheme, HTML, CSS</p>
                  <p>You can see the live version <a href='https://therageroomspringfield.com/' target='_blank'>here.</a></p>

                </div>
                <div className='highlight-thumbnail col-lg-5' style={{objectFit: "cover"}}>
                  <Image name = "RageRoomWebsiteThumbnail" width="100%"/>
                </div>
            </div>

            <div className='highlight-container' style={{marginTop: "150px"}}>
              <div className='highlight-info'>
                <h2>Logo Redesign</h2>
                <p className='highlight-desc'>Developed an enhanced logo that better represents their branding, incorporating a "rage" and "cool" aesthetic. The design also integrates their new axe-throwing service into the logo.</p>
               
              </div>
              <div className='highlight-img horizontal-flex wrap' style={{justifyContent: "space-between"}}>
                  <div className='col-lg-6 highlight-thumbnail'>
                      <Image name= "RageRoomLogoMockup" width="100%" height="100%"/>
                  </div>
                  <div className='col-lg-6 logo-mockups horizontal-flex wrap' style={{justifyContent: "space-around"}}>
                     <Image className= "col-4" name = "RageRoomFullLogo1"/>
                     <Image className= "col-3" name = "RageRoomRLogo1"/>
                     <Image className= "col-4" name = "RageRoomFullLogo2"/>
                     <Image className= "col-3" name = "RageRoomRLogo2"/>

                  </div>
              </div>

            </div>

            <div className='highlight-container' style={{marginTop: "150px"}}>
              <div className='highlight-info'>
                <h2>Graphic Design</h2>
                <p className='highlight-desc'>Experimented with various graphic design styles for their social media and promotional posts.</p>
               
              </div>
              <div className='highlight-img horizontal-flex wrap' style={{justifyContent: "space-evenly"}}>
                  <div className='col-lg-4'>
                      <Image name= "RageGraphic" width="100%" height="100%"/>
                  </div>
                  <div className='col-lg-6 logo-mockups horizontal-flex wrap' style={{justifyContent: "space-between"}}>
                     <Image className= "rage-squareGraphic col-lg-5 col-12" name = "RageGraphic1"/>
                     <Image className= "rage-squareGraphic col-lg-5 col-12" name = "RageGraphic2"/>
                     <Image className= "rage-squareGraphic col-lg-5 col-12" name = "RageGraphic3"/>
                     <Image className= "rage-squareGraphic col-lg-5 col-12" name = "RageGraphic4"/>

                  </div>
              </div>
              <p>Tools Utilized: Midjourney, Canva, Freepik</p>
            </div>
            
            
            </>

            }
      
            />

          <div className='more-projects' style={{marginTop: "150px"}}>
            <h4 className='text-center'>More Projects</h4>

            <div className='more-project-container horizontal-flex wrap'>
              <Card
               type="Smaller"
               imgSrc="Markitfly"
               linkHref="/Work/Markitfly"
               companyName="Markitfly Media"
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

export default RageRoom;
