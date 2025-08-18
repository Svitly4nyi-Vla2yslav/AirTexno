import React from 'react';
import { AboutContainer } from './AboutUs.styled';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';


const AboutUs: React.FC = () => {
  return (
    <AboutContainer>
      <TeamMember />
    </AboutContainer>
  );
};

export default AboutUs;
