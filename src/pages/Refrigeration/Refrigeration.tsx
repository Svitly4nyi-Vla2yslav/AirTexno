import React from 'react';
import { Container } from './Refrigeration.styled';
import { Fridge } from '../../components/Refrigeration/Refridge';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import Profi from '../../components/Refrigeration/Professional';

const Refrigeration: React.FC = () => {
  return (
    <Container id='ap'>
      <Fridge />
      <Partners />
      <Profi />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default Refrigeration;
