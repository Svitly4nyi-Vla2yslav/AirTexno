import React from 'react';
import { styled } from 'styled-components';
import { DryerBrandHero, DryerBrandProblems, DryerBrandFAQ, PhotoGallery } from '../../components/DryerBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import img1 from '../../assets/brands/dryer/kenmore/kenmore_01.jpg';
import img2 from '../../assets/brands/dryer/kenmore/kenmore_02.jpg';
import img3 from '../../assets/brands/dryer/kenmore/kenmore_03.jpg';
import img4 from '../../assets/brands/dryer/kenmore/kenmore_04.jpg';
import img5 from '../../assets/brands/dryer/kenmore/kenmore_05.jpg';

const DryerKenmore: React.FC = () => {
  return (
    <Container id='ap'>
      <DryerBrandHero
        brandName="Kenmore"
        description="Kenmore dryers are found in many homes because they cover a wide range of laundry needs, from older dependable models to newer units with electronic controls and sensor-based cycles. When a Kenmore dryer stops heating, dries unevenly, or begins making new sounds, the repair should start with real diagnosis — not assumptions. Airtexno Appliance Repair provides Kenmore dryer repair in Thousand Oaks and nearby Ventura County communities. One of the challenges with Kenmore appliances is that the same brand name can include dryers built with different internal designs depending on the model series. That is why we focus on symptom-based testing and component verification, so the repair plan is based on the actual machine in front of us, not on guesswork."
        image1={img1}
        image2={img2}
      />
      <Partners />
      <DryerBrandProblems
        brandName="Kenmore"
        models={[
          'Kenmore electric dryers and Kenmore gas dryers',
          'Older Kenmore dryers with simpler timer-based controls',
          'Newer Kenmore dryers with electronic or sensor-dry features',
          'Front-load laundry setups and standard household dryer installations',
        ]}
        problems={[
          'Dryer runs but does not heat',
          'Clothing comes out warm but still damp',
          'Dryer will not start or respond normally',
          'Cycle ends too soon or shuts down unexpectedly',
          'Drum does not turn or turns with unusual noise',
          'Dryer feels too hot during operation',
          'Burning smell or strong lint-related odor',
          'Timer or cycle selection does not act correctly',
        ]}
        diagnostics={[
          {
            title: 'Heating system evaluation',
            text: 'We verify whether the dryer is producing and regulating heat correctly, including related safety components and cycle behavior.',
          },
          {
            title: 'Airflow and drying efficiency checks',
            text: 'Long dry times are often linked to weak exhaust or restricted venting, so airflow is a key part of diagnosis.',
          },
          {
            title: 'Drum movement and support inspection',
            text: 'If the dryer is noisy, not tumbling, or feels rough during operation, we inspect belt, pulley, rollers, and related drive parts.',
          },
          {
            title: 'Control and cycle response testing',
            text: 'We compare the dryer\'s actual behavior to what the selected cycle should be doing, especially on sensor-dry or electronic models.',
          },
          {
            title: 'Overheating and shutdown analysis',
            text: 'If the machine stops mid-cycle or gets too hot, we check protective cutoffs, vent conditions, and operating temperatures.',
          },
          {
            title: 'Clear repair recommendations',
            text: 'Once the cause is confirmed, we explain what failed, what the symptom means, and whether the repair looks practical.',
          },
        ]}
        brandSpecificTitle="Why Kenmore dryer repair often requires careful model matching"
        brandSpecificText="Kenmore is a broad appliance brand, and many Kenmore dryers share design patterns with different manufacturers depending on the series and production history. That means the name on the front does not always tell the whole story about the internal configuration. For repair purposes, this matters because heating systems, drum supports, sensors, controls, and safety components may vary significantly from one Kenmore model to another. Instead of treating every Kenmore dryer the same, we look at how the specific machine is built and how the symptom appears during operation. This helps narrow down whether the issue is heat generation, airflow restriction, cycling behavior, drive-system wear, or control failure."
      />
      <PhotoGallery
        brandName="Kenmore Dryer"
        photos={[
          { src: img3, alt: 'Kenmore dryer repair work' },
          { src: img4, alt: 'Kenmore dryer maintenance' },
          { src: img5, alt: 'Kenmore dryer service' },
        ]}
      />
      <DryerBrandFAQ
        faqData={[
          {
            question: 'Why is my Kenmore dryer running but not drying clothes?',
            answer: 'A dryer can tumble without drying properly if the heat system is weak, airflow is restricted, or the cycle is not operating the way it should.',
          },
          {
            question: 'Why does my Kenmore dryer stop before the clothes are dry?',
            answer: 'This can happen because of overheating protection, airflow issues, sensor-related problems, or control behavior that is ending the cycle too early.',
          },
          {
            question: 'Are Kenmore dryers difficult to diagnose because of different model designs?',
            answer: 'They can be. Kenmore covers many model families, so diagnosis often works best when based on the exact construction and symptoms of the individual unit.',
          },
          {
            question: 'Can a Kenmore dryer still be worth repairing if it is older?',
            answer: 'Yes, in many cases. Some older Kenmore dryers are still practical to repair if the overall machine is in decent condition and the problem is limited to serviceable parts.',
          },
          {
            question: 'What causes a burning smell in a Kenmore dryer?',
            answer: 'A burning smell may be related to lint buildup, overheating, worn moving parts, or electrical issues. It should be inspected before continued use.',
          },
          {
            question: 'Do you service areas outside Thousand Oaks?',
            answer: 'Yes. We also serve Westlake Village, Newbury Park, Camarillo, Moorpark, Simi Valley, and nearby Ventura County communities.',
          },
        ]}
      />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default DryerKenmore;

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
