import CasesSection from '../../components/CasesSection/CasesSection';
import { Hero } from '../../components/Hero/Hero';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import ServingVentura from '../../components/ServingVentura/ServingVentura';
import WhyAirtexnoSection from '../../components/WhyAirtexnoSection/WhyAirtexnoSection';

import { HomeContainer } from './HomePage.styled';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <HomeContainer id="hero">
        <Hero />
        <ServicesSection />
        <WhyAirtexnoSection />
        <CasesSection/>
        <ServingVentura/>
      </HomeContainer>
    </>
  );
};

export default Home;
