import React from 'react';
import { AboutContainer } from './AboutUs.styled';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { Hero } from '../../components/AboutUS/Hero/Hero';
import OurMission from '../../components/AboutUS/OurMission/OurMission';


const AboutUs: React.FC = () => {
  return (
    <AboutContainer>
      <Hero/>
      <OurMission/>
      <TeamMember />
    </AboutContainer>
  );
};

export default AboutUs;
