import React from 'react';
import { styled } from 'styled-components';
import { DryerBrandHero, DryerBrandProblems, DryerBrandFAQ } from '../../components/DryerBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import img1 from '../../assets/brands/dryer/samsung/samsung_01.jpg';
import img2 from '../../assets/brands/dryer/samsung/samsung_02.jpg';

const samsungModels = [
  'Samsung electric dryers',
  'Samsung gas dryers',
  'Front-load Samsung dryer units',
  'Stacked Samsung washer and dryer systems',
  'Samsung smart dryers with Wi-Fi connectivity',
];

const samsungProblems = [
  'Dryer not heating',
  'Dryer runs but clothes stay damp',
  'Dryer not starting',
  'Dryer stopping mid-cycle',
  'Unusual noise or vibration',
  'Error codes on control panel',
  'Drum not spinning',
  'Dryer overheating',
];

const samsungDiagnostics = [
  {
    title: 'Heating element and temperature sensor testing',
    text: 'We test heating elements and temperature sensors to determine whether the dryer is producing and maintaining proper heat throughout the cycle.',
  },
  {
    title: 'Airflow and vent restriction check',
    text: 'We check airflow and vent restrictions that can cause long dry times, overheating, or repeated no-heat complaints.',
  },
  {
    title: 'Drum rollers, belts, and motor inspection',
    text: 'We inspect drum rollers, belts, and motor components to identify sources of noise, vibration, or failure to tumble.',
  },
  {
    title: 'Moisture sensor and control board evaluation',
    text: 'We evaluate moisture sensors and control boards to confirm the dryer is reading cycle conditions accurately and responding correctly.',
  },
  {
    title: 'Electrical connections and safety device verification',
    text: 'We verify electrical connections and safety devices to ensure safe, reliable dryer operation and prevent repeat failures.',
  },
];

const samsungFAQ = [
  {
    question: 'Why is my Samsung dryer running but not heating?',
    answer: 'This may be caused by a faulty heating element, thermal fuse, temperature sensor, or restricted airflow inside the dryer vent system.',
  },
  {
    question: 'Why does my Samsung dryer show an error code?',
    answer: 'Samsung dryers display error codes when the appliance detects issues such as overheating, airflow problems, or sensor malfunctions.',
  },
  {
    question: 'Why does my Samsung dryer stop during the cycle?',
    answer: 'Dryers may stop mid-cycle if sensors detect overheating, blocked airflow, or electrical control issues.',
  },
  {
    question: 'Is it worth repairing a Samsung dryer?',
    answer: 'In many cases yes. Many Samsung dryer problems involve replaceable components and can be repaired when properly diagnosed.',
  },
];

const DryerSamsung: React.FC = () => {
  return (
    <Container id='ap'>
      <DryerBrandHero
        brandName="Samsung"
        description="Samsung dryers combine modern electronics, digital controls, and advanced sensor-dry technology. When one of these systems stops working correctly, accurate diagnosis is important before any parts are replaced. Airtexno Appliance Repair provides Samsung dryer repair in Thousand Oaks and throughout Ventura County. If your Samsung dryer is not heating, takes too long to dry clothes, shows error codes, or stops during the cycle, our technicians can inspect the appliance and identify the exact cause of the issue."
        image1={img1}
        image2={img2}
      />
      <Partners />
      <DryerBrandProblems
        brandName="Samsung"
        models={samsungModels}
        problems={samsungProblems}
        diagnostics={samsungDiagnostics}
        brandSpecificTitle="Samsung Dryer Error Code Diagnostics"
        brandSpecificText="Many Samsung dryers display diagnostic error codes when the appliance detects a system malfunction. These alerts may indicate airflow restrictions, sensor problems, heating failures, or electronic control issues. Proper troubleshooting requires testing the components related to the error code instead of simply resetting the machine."
      />
      <DryerBrandFAQ faqData={samsungFAQ} />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default DryerSamsung;

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
