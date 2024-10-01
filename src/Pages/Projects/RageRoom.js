import React from 'react';
import Button from '../../Components/Button';
import Image from '../../Components/Image';
import SubPage from '../Templates/SubPage';
import Icon from '../../Components/Icon';
import Experience from '../Templates/Experience';
function RageRoom() {
  return (
    <section>
        <SubPage
          previousPage="My Work"
          previousPageURL="/Work"
          title= "The Rage Room"
          description=""
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
            
            <p>Some highlights or custom HTML here</p>

            }
            />

  </section>
  );
}

export default RageRoom;
