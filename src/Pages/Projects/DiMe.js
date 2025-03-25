import React from 'react';
import Button from '../../Components/Button';
import Image from '../../Components/Image';
import SubPage from '../Templates/SubPage';
import Icon from '../../Components/Icon';
import Experience from '../Templates/Experience';
import Card from '../../Components/Card';
function DiMe() {
  return (
    <section>
        <SubPage
          previousPage="My Work"
          previousPageURL="/Work"
          title= "Digital Medicine Society"
          description="During my time at DiMe, I led key projects to enhance website performance and user experience, developed streamlined processes for web updates, and provided crucial support during team onboarding. My dedication to UX/UI design and collaborative nature resulted in some of the best web outputs in DiMe's history. Additionally, my effective remote work communication ensured seamless project delivery, even across time zones."
        />
           <Experience 
            roles={[
                { iconName: "Dev", roleName: "Front-End Dev", duration: "Dec 2023 - Jun 2023" },
                { iconName: "Star", roleName: "Technical Manager", duration: "Jun 2023 - May 2024"}
            ]}
            achievements={[
                { iconName: "Chart", description: "Increased web performance at least by 10% across multiple company websites." },
                { iconName: "Dev", description: "Created & developed customized web solutions to ease bulkier code, optimizing web performance." },
                { iconName: "Computer", description: "Created several web new features for various projects as requested by the team." },
                { iconName: "Bubble", description: "Developed SOPs and organized documentation to streamline the team’s workflow." }
                
            ]}
            feedback={[
                { faceColor: "Blue", hairStyle: "Long", feedbackText: (
                  <span>
                  “She <b>puts a lot of time and effort</b> into making our <b>website pages look appealing</b> to the eye and also <b>flow smoother for our users.</b>”
                  </span>)},
                { faceColor: "Pink", hairStyle: "Medium", feedbackText:(
                  <span>
                  “Christina is <b>dedicated to improving UX/UI</b> for a better user experience, also <b>easy to communicate</b> so it makes collaborations at ease.”


                  </span>)},
                { faceColor: "Yellow", hairStyle: "Short", feedbackText: (
                  <span>
                  “She is always <b>looking for new ways to improve</b> and up level our website and, making her <b>strongest skill subject matter expertise and content creation.</b>”
                  </span>) }
            
              ]}
            highlights={
            
            <>
            <div className='highlight-container horizontal-flex wrap' style={{justifyContent: "space-between"}}> 
                  <div className='highlight-info col-lg-6'>
                    <h2>DiMe a Day Glossary</h2>
                    <p>Designed and developed DiMe's glossary for users and subscribers. This involved creating wireframes, facilitating team feedback, integrating the website’s database with Advanced Custom Field, and developing the webpage to align with branding guidelines.</p>
                    <p>Tools Utilized: YooTheme, Wordpress, Miro, CSS</p>
                    <p>You can see the live version <a href='https://dimesociety.org/glossary/' target='_blank'>here.</a></p>

                  </div>
                  <div className='highlight-thumbnail col-lg-5' style={{objectFit: "cover"}}>
                    <Image name = "DiMeGlossary" width="100%"/>
                  </div>
              </div>


              <div className='highlight-container horizontal-flex wrap' style={{justifyContent: "space-between", marginTop: "150px"}}> 
                  <div className='highlight-info col-lg-6'>
                    <h2>CancerX</h2>
                    <p>Created an interactive navigation bar by using open-source code from <a href='https://codepen.io/magnificode/pen/bdWYwy' target='_blank'>this CodePen</a> and tweaking it with JavaScript, HTML, and CSS to meet the project's standards and team’s guidelines.</p>
                    <p>Tools Utilized: Elementor, HTML / CSS, Javascript</p>
                    

                  </div>
                  <div className='highlight-thumbnail col-lg-5' style={{height: "500px"}}>
                    <Image className = "objectFit dime-cancer" name = "DiMeCancer" width="100%" height="100%"/>
                  </div>
              </div>
              

              <div className='highlight-container horizontal-flex wrap' style={{justifyContent: "space-between", marginTop: "150px"}}> 
                  <div className='highlight-info col-lg-6'>
                    <h2>Education</h2>
                    <p>Integrated DiMe Academy’s digital badging system using JavaScript, HTML, and CSS, replacing a bulkier plugin that slowed down the website's performance, and directing users to DiMe's online badging platform, Credly.</p>
                    <p>WooCommerce, Javascript, CSS, LearnDash API</p>
                    <p>Only enrolled users can access the live version.</p>

                  </div>
                  <div className='highlight-thumbnail col-lg-5' style={{objectFit: "cover"}}>
                    <Image name = "DiMeBadging" width="100%"/>
                  </div>
              </div>
            </>

            }
             totalDuration="1 Year 7 Months"
            />
          <p style={{marginTop: "150px"}}>This is only an example of projects I have worked on during my experience. If you are curious to know more projects I have worked on, don’t be afraid to <a href='/Contact'>contact me!</a></p>
          

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
               imgSrc="Markitfly"
               linkHref="/Work/Markitfly"
               companyName="Markitfly Media"
               position="Creativity & Technology"
               linkText= "See Project"
              />

            </div>
          </div>
  </section>
  );
}

export default DiMe;
