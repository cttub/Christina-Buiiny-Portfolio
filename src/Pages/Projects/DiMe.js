import React from 'react';
import Button from '../../Components/Button';
import Image from '../../Components/Image';
import SubPage from '../Templates/SubPage';
import Icon from '../../Components/Icon';
import Experience from '../Templates/Experience';

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
                { iconName: "Star", roleName: "Technical Manager", duration: "Jun 2023 - May 2024", totalDuration: "1 year & 7 months" }
            ]}
            achievements={[
                { iconName: "Chart", description: "Increased web performance at least by 10% across multiple company websites." },
                { iconName: "Dev", description: "Created & developed customized web solutions to ease bulkier code, optimizing web performance." },
                { iconName: "Computer", description: "Created several web new features for various projects as requested by the team." },
                { iconName: "Bubble", description: "Developed SOPs and organized documentation to streamline the team’s workflow." }
                
            ]}
            feedback={[
                { faceColor: "Blue", hairStyle: "Long", feedbackText: "She puts a lot of time and effort into making our website pages look appealing to the eye and also flow smoother for our users" },
                { faceColor: "Pink", hairStyle: "Short", feedbackText: "Christina is dedicated to improving UX/UI for a better user experience, also easy to communicate so it makes collaborations at ease." }
            ]}
            highlights={<p>Some highlights or custom HTML here</p>}
            />


  </section>
  );
}

export default DiMe;
