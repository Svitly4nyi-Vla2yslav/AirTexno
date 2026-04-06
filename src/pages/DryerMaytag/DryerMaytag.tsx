import React from 'react';
import { styled } from 'styled-components';
import { DryerBrandHero, DryerBrandProblems, DryerBrandFAQ, PhotoGallery } from '../../components/DryerBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import img1 from '../../assets/brands/dryer/maytag/maytag_01.jpg';
import img2 from '../../assets/brands/dryer/maytag/maytag_02.jpg';
import img3 from '../../assets/brands/dryer/maytag/maytag_03.jpg';
import img4 from '../../assets/brands/dryer/maytag/maytag_04.jpg';
import img5 from '../../assets/brands/dryer/maytag/maytag_05.jpg';

const maytagModels = [
  'Maytag electric dryers and Maytag gas dryers',
  'Front-load dryer units and stacked laundry center configurations',
  'Standard vented residential dryer models',
  'Units with moisture-sensing dry cycles and electronic controls',
];

const maytagProblems = [
  'Dryer not heating or producing weak heat',
  'Clothes still damp after one cycle / long dry times',
  'Dryer will not start or shuts off mid-cycle',
  'Drum not turning, squealing, grinding, or thumping noises',
  'Burning smell or overheating',
  'Error codes or control panel issues',
  'Dryer tumbles but does not dry properly',
  'Door switch, latch, or safety-related shutoff problems',
];

const maytagDiagnostics = [
  {
    title: 'Airflow and venting check',
    text: 'We verify proper airflow and inspect for vent restrictions that can cause long dry times, overheating, or repeat thermal failures.',
  },
  {
    title: 'Heat system testing',
    text: 'We test heating components in electric units and ignition or gas-related components in gas dryers, along with associated safety controls.',
  },
  {
    title: 'Drum and drive system inspection',
    text: 'We check the belt, idler pulley, rollers, motor behavior, and internal movement components for noise or no-tumble symptoms.',
  },
  {
    title: 'Sensor and control verification',
    text: 'We evaluate moisture sensors, thermostats, fuses, wiring, and control responses to confirm correct cycle operation.',
  },
  {
    title: 'Electrical safety checks',
    text: 'We inspect connections, terminal areas, and protective cutoffs to help prevent repeat failures and unsafe overheating conditions.',
  },
  {
    title: 'Clear repair recommendations',
    text: 'After diagnosis, we explain what failed, what caused the symptom, and which repair options make the most sense based on reliability and cost.',
  },
];

const maytagFAQ = [
  {
    question: 'Why is my Maytag dryer running but not heating?',
    answer: 'This can be caused by a failed heating element, thermal fuse, thermostat, igniter, gas valve components, control issue, power supply problem, or restricted airflow. Several different failures can create the same symptom, so testing is important.',
  },
  {
    question: 'Why does my Maytag dryer take two cycles to dry clothes?',
    answer: 'Long dry times are often caused by weak heat, restricted venting, poor airflow, sensor issues, or internal heating component failure. A clogged vent can also make the dryer overheat while still drying poorly.',
  },
  {
    question: 'What causes loud squealing or thumping noise?',
    answer: 'Worn rollers, an idler pulley, a damaged belt, blower issues, or other drum support components can cause squealing, grinding, rumbling, or thumping sounds. These problems usually get worse over time if ignored.',
  },
  {
    question: 'Is a burning smell from my dryer dangerous?',
    answer: 'Yes. A burning smell can be related to lint buildup, overheating components, electrical issues, or restricted airflow. Stop using the dryer until the cause is checked.',
  },
  {
    question: 'Do you repair Maytag dryers in stacked or tight laundry spaces?',
    answer: 'Yes, in many cases we service stacked or closet-installed dryer units as long as the appliance is reasonably accessible for diagnosis and repair.',
  },
  {
    question: 'Do I need to replace my dryer if it is not heating?',
    answer: 'Not necessarily. Many no-heat problems are repairable. The best answer depends on the age of the machine, the failed part, the overall condition of the unit, and the total repair cost after diagnosis.',
  },
  {
    question: 'Do you serve areas outside Thousand Oaks?',
    answer: 'Yes. We also serve nearby areas including Westlake Village, Newbury Park, Camarillo, Moorpark, Simi Valley, and surrounding Ventura County communities.',
  },
];

const DryerMaytag: React.FC = () => {
  return (
    <Container id='ap'>
      <DryerBrandHero
        brandName="Maytag"
        description="If your Maytag dryer is not heating, takes too long to dry, will not start, stops mid-cycle, or makes unusual noises, you need accurate diagnosis — not guesswork. At Airtexno Appliance Repair, we provide professional Maytag dryer repair in Thousand Oaks and nearby Ventura County areas for both electric and gas models. We identify the root cause, explain it clearly, and perform repairs focused on safe, reliable operation."
        image1={img1}
        image2={img2}
      />
      <Partners />
      <DryerBrandProblems
        brandName="Maytag"
        models={maytagModels}
        problems={maytagProblems}
        diagnostics={maytagDiagnostics}
        brandSpecificTitle="Why Customers Call Us for Maytag Dryer Repair"
        brandSpecificText="Dryer problems are disruptive, especially when the appliance is heating poorly, damaging clothes, or stopping in the middle of a cycle. Customers call Airtexno Appliance Repair because they want practical diagnosis, straightforward communication, and professional service. If your Maytag dryer is running but not heating, taking too long to dry, making loud sounds, or repeatedly shutting off, it may be caused by airflow restriction, worn drive parts, heating failure, control problems, or safety cutoffs."
      />
      <PhotoGallery
        brandName="Maytag Dryer"
        photos={[
          { src: img3, alt: 'Maytag dryer repair work' },
          { src: img4, alt: 'Maytag dryer maintenance' },
          { src: img5, alt: 'Maytag dryer service' },
        ]}
      />
      <DryerBrandFAQ faqData={maytagFAQ} />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default DryerMaytag;

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
