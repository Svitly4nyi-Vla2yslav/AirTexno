import React from 'react';
import { styled } from 'styled-components';
import { DryerBrandHero, DryerBrandProblems, DryerBrandFAQ, PhotoGallery } from '../../components/DryerBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import img1 from '../../assets/brands/dryer/bosch/bosch_01.jpg';
import img2 from '../../assets/brands/dryer/bosch/bosch_02.jpg';
import img3 from '../../assets/brands/dryer/bosch/bosch_03.jpg';
import img4 from '../../assets/brands/dryer/bosch/bosch_04.jpg';
import img5 from '../../assets/brands/dryer/bosch/bosch_05.jpg';
import img6 from '../../assets/brands/dryer/bosch/bosch_06.jpg';
import img7 from '../../assets/brands/dryer/bosch/bosch_07.jpg';
import img8 from '../../assets/brands/dryer/bosch/bosch_08.jpg';

const DryerBosch: React.FC = () => {
  return (
    <Container id='ap'>
      <DryerBrandHero
        brandName="Bosch"
        description="Bosch dryers are designed with advanced European technology, including condenser and heat-pump drying systems. When something goes wrong, accurate diagnostics are essential. Airtexno Appliance Repair provides Bosch dryer repair in Thousand Oaks and nearby Ventura County communities. If your Bosch dryer stops heating, displays an error code, or takes much longer than usual to dry clothes, our technicians can inspect the system and identify the root cause of the problem."
        image1={img1}
        image2={img2}
      />
      <Partners />
      <DryerBrandProblems
        brandName="Bosch"
        models={[
          'Bosch condenser dryers',
          'Bosch heat pump dryers',
          'Compact Bosch laundry systems',
          'Stacked washer and dryer units',
          'European-style ventless dryers',
        ]}
        problems={[
          'Dryer does not start',
          'Dryer stops during cycle',
          'Dryer not heating',
          'Drying takes too long',
          'Error codes on display',
          'Water container filling too fast',
          'Drum not rotating',
          'Unusual vibration or noise',
        ]}
        diagnostics={[
          { title: 'Testing heating and temperature controls', text: 'We verify heating elements and thermostatic controls to ensure proper heat output and safe cycling behavior.' },
          { title: 'Checking airflow and lint accumulation', text: 'We inspect internal airflow channels and lint buildup that can restrict air movement and reduce drying efficiency.' },
          { title: 'Inspecting drum rollers and drive components', text: 'We check drum rollers, belts, and drive parts for wear that could cause noise, vibration, or drum rotation failure.' },
          { title: 'Reviewing control board signals and error codes', text: 'We read and interpret error codes and control board signals to identify system faults such as overheating, sensor failure, or drainage problems.' },
          { title: 'Evaluating condensation and moisture systems', text: 'We test the condensation reservoir, drain pump, and moisture channels to ensure proper water management in ventless Bosch dryers.' },
        ]}
        brandSpecificTitle="Bosch heat pump & condenser dryer issues"
        brandSpecificText="Unlike traditional vented dryers, Bosch dryers often rely on internal condensation systems. Moisture is collected inside a reservoir or pumped to a drain line. If airflow channels become restricted or sensors fail, the dryer may stop early or display warning messages. These systems require proper testing of sensors, pumps, and airflow paths to determine what is affecting performance."
      />
      <PhotoGallery
        brandName="Bosch Dryer"
        photos={[
          { src: img3, alt: 'Bosch dryer repair work' },
          { src: img4, alt: 'Bosch dryer maintenance' },
          { src: img5, alt: 'Bosch dryer service' },
          { src: img6, alt: 'Bosch dryer diagnostics' },
          { src: img7, alt: 'Bosch dryer component repair' },
          { src: img8, alt: 'Bosch dryer technician work' },
        ]}
      />
      <DryerBrandFAQ faqData={[
        {
          question: 'Why does my Bosch dryer take longer to dry clothes?',
          answer: 'This may be caused by restricted airflow, sensor issues, or reduced heating performance. Condenser dryers can also slow down if moisture channels are partially blocked.',
        },
        {
          question: 'Why does my Bosch dryer show an error code?',
          answer: 'Error codes indicate that the appliance detected a system fault such as overheating, sensor failure, or drainage problems.',
        },
        {
          question: 'Do Bosch dryers need ventilation?',
          answer: 'Most Bosch dryers are ventless, meaning they use condensation or heat pump technology instead of external ventilation ducts.',
        },
        {
          question: 'Is it worth repairing a Bosch dryer?',
          answer: 'Bosch appliances are generally built with high-quality components, and many issues can be repaired when diagnosed correctly.',
        },
      ]} />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default DryerBosch;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
  @media (max-width: 767px) { gap: 40px; padding: 0 12px; }
  @media (min-width: 768px) and (max-width: 1023px) { max-width: 768px; padding: 0 24px; }
  @media (min-width: 1024px) and (max-width: 1279px) { max-width: 1024px; padding: 0 32px; }
  @media (min-width: 1280px) and (max-width: 1439px) { max-width: 1280px; padding: 0 48px; }
  @media (min-width: 1440px) { max-width: 1440px; padding: 0 64px; }
  @media (min-width: 1920px) { max-width: 1920px; padding: 0 120px; }
`;
