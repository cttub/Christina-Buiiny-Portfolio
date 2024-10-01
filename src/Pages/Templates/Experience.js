import React from 'react';
import Icon from '../../Components/Icon';
import Faces from '../../Components/Faces';

const getBorderColor = (faceColor) => {
    switch (faceColor) {
        case 'Blue':
            return '#007FFF'; 
        case 'Pink':
            return '#FF69B4'; 
        case 'Yellow':
            return '#FFD700'; 
        default:
            return '#000'; 
    }
};

// Function to calculate total duration
const calculateTotalDuration = (roles) => {
    return roles.reduce((total, role) => {
        const duration = parseFloat(role.duration); // Assuming duration is a string representing a number
        return total + (isNaN(duration) ? 0 : duration);
    }, 0);
};

// Experience component with dynamic roles, achievements, and feedback
const Experience = ({ roles = [], achievements = [], feedback = [], highlights }) => {
    const totalDuration = calculateTotalDuration(roles); // Calculate total duration

    return (
        <>
            {/* Roles Section */}
            <div className='roles-section'>
                <h4 className='text-center'>My Role(s)</h4>
                <div className='roles-container horizontal-flex wrap'>
                    {roles.map((role, index) => (
                        <div key={index} className='role vertical-flex col-lg-3' style={{ margin: "0px 20px" }}>
                            <Icon name={role.iconName} width="50px" height="50px" alt={role.roleName} />
                            <p className='meta text-center primary-blue-color'>{role.roleName}</p>
                            <p className='lead text-center' style={{ marginTop: "-10px" }}>{role.duration}</p>
                        </div>
                    ))}
                </div>
                <p className='text-center'>Total Duration: {totalDuration}</p> {/* Display total duration */}
            </div>

            {/* Achievements Section */}
            <div className='achievement-section'>
                <h4 className='text-center'>Achievements</h4>
                <div className='achievements-container horizontal-flex wrap'>
                    {achievements.map((achievement, index) => (
                        <div key={index} className='achievement col-lg-6 horizontal-flex'>
                            <div className='achievement-icon' style={{ marginRight: "20px" }}>
                                <Icon name={achievement.iconName} width="50px" height="50px" alt="Achievement Icon" />
                            </div>
                            <div className='achievement-description col-6'>
                                <p>{achievement.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Feedback Section */}
            <div className='feedback-section'>
                <h4 className='text-center'>Peer Feedback</h4>
                <div className='feedback-container vertical-flex'>
                    {feedback.map((item, index) => (
                        <div key={index} className='feedback horizontal-flex' style={{ marginBottom: "50px" }}>
                            {index % 2 === 0 ? ( // Even index: Face first
                                <>
                                    <Faces color={item.faceColor} hair={item.hairStyle} width="100px" />
                                    <p
                                        className='feedback-txt col-lg-4'
                                        style={{
                                            padding: '10px',
                                            margin: "5px",
                                            marginLeft: "20px",
                                            boxShadow: `2px 3px 0px 0px ${getBorderColor(item.faceColor)}`,
                                            borderRadius: "10px",
                                            border: `4px solid ${getBorderColor(item.faceColor)}`, // Apply dynamic border color
                                        }}
                                    >
                                        {item.feedbackText}
                                    </p>
                                </>
                            ) : ( // Odd index: Feedback first
                                <>
                                    <p
                                        className='feedback-txt col-lg-4'
                                        style={{
                                            padding: '10px',
                                            margin: "5px",
                                            marginRight: "20px",
                                            boxShadow: `2px 3px 0px 0px ${getBorderColor(item.faceColor)}`,
                                            borderRadius: "10px",
                                            border: `4px solid ${getBorderColor(item.faceColor)}`, // Apply dynamic border color
                                        }}
                                    >
                                        {item.feedbackText}
                                    </p>
                                    <Faces color={item.faceColor} hair={item.hairStyle} width="100px" />
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Highlights Section */}
            <div className='highlights-section'>
                {highlights}
            </div>
        </>
    );
};

export default Experience;
