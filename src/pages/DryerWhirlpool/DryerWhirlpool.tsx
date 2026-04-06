import React from 'react';
import { styled } from 'styled-components';
import { DryerBrandHero, DryerBrandProblems, DryerBrandFAQ, PhotoGallery } from '../../components/DryerBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import img1 from '../../assets/brands/dryer/whirlpool/whirlpool_01.jpg';
import img2 from '../../assets/brands/dryer/whirlpool/whirlpool_02.jpg';
import img3 from '../../assets/brands/dryer/whirlpool/whirlpool_03.jpg';
import img4 from '../../assets/brands/dryer/whirlpool/whirlpool_04.jpg';

const DryerWhirlpool: React.FC = () => {
  return (
    <Container id='ap'>
      <DryerBrandHero
        brandName="Whirlpool"
        description="If your Whirlpool dryer is not heating, takes too long to dry, will not start, shuts off unexpectedly, or makes unusual noises, accurate diagnosis matters. At Airtexno Appliance Repair, we provide Whirlpool dryer repair in Thousand Oaks and nearby Ventura County areas for electric and gas models. We focus on identifying the actual cause of the problem, explaining it clearly, and performing repairs built for dependable everyday use."
        image1={img1}
        image2={img2}
      />
      <Partners />
      <DryerBrandProblems
        brandName="Whirlpool"
        models={[
          'Whirlpool electric dryers and Whirlpool gas dryers',
          'Front-load dryer models and laundry center configurations',
          'Standard household vented dryer units',
          'Dryers with sensor-dry cycles, timed dry, and electronic controls',
        ]}
        problems={[
          'Dryer not heating or producing weak heat',
          'Clothes still damp after one cycle / long dry times',
          'Dryer will not start or shuts off during operation',
          'Drum not turning, squealing, grinding, or thumping noises',
          'Overheating or hot / burning smell',
          'Control issues, timer problems, or cycle not advancing correctly',
          'Dryer runs but airflow feels weak',
          'Intermittent operation or unit stops and restarts unpredictably',
        ]}
        diagnostics={[
          {
            title: 'Airflow and venting check',
            text: 'We verify proper airflow and inspect for lint restrictions or vent issues that can create long dry times, overheating, and repeated thermal failures.',
          },
          {
            title: 'Heating system testing',
            text: 'We test the heating circuit in electric models and the ignition / gas heating system in gas models, along with related thermostats and safety components.',
          },
          {
            title: 'Drive system inspection',
            text: 'We inspect the belt, idler pulley, rollers, blower area, and motor behavior for no-tumble symptoms, friction sounds, and abnormal drum movement.',
          },
          {
            title: 'Sensor and control evaluation',
            text: 'We verify moisture sensing, temperature response, cycle control behavior, and wiring connections to determine why the dryer is not running correctly.',
          },
          {
            title: 'Electrical safety checks',
            text: 'We inspect terminal connections, internal wiring condition, thermal protection, and safety cutoffs to help prevent repeat breakdowns.',
          },
          {
            title: 'Clear repair recommendations',
            text: 'After diagnosis, we explain what failed, which repair options are reasonable, and what makes the most sense based on reliability, age of the dryer, and total cost.',
          },
        ]}
        brandSpecificTitle="Why homeowners call us for Whirlpool dryer repair"
        brandSpecificText="Whirlpool dryers are common in many homes because they are practical and familiar, but when they stop heating, stop tumbling properly, or begin making noise, the problem is rarely solved by guesswork. Homeowners call Airtexno Appliance Repair because they want a clear answer, honest communication, and service based on real diagnosis instead of random part swapping. A Whirlpool dryer that runs without heat, dries slowly, or overheats can be affected by airflow issues, worn moving parts, heating failures, sensor problems, or control-related faults. Similar symptoms can come from very different causes, so a careful inspection is the best way to avoid wasting time and money."
      />
      <PhotoGallery
        brandName="Whirlpool Dryer"
        photos={[
          { src: img3, alt: 'Whirlpool dryer repair work' },
          { src: img4, alt: 'Whirlpool dryer maintenance' },
        ]}
      />
      <DryerBrandFAQ
        faqData={[
          {
            question: 'Why is my Whirlpool dryer running but not heating?',
            answer: 'This can be caused by a failed heating element, thermostat, thermal fuse, igniter, gas heating component, control problem, or power supply issue. Restricted airflow can also affect drying performance and heat behavior.',
          },
          {
            question: 'Why does my Whirlpool dryer take too long to dry clothes?',
            answer: 'Long dry times are often related to weak heat, reduced airflow, clogged venting, moisture-sensing issues, or partial heating failure. The dryer may still appear to run normally while drying very inefficiently.',
          },
          {
            question: 'What causes squealing, rumbling, or thumping sounds?',
            answer: 'Noise is commonly caused by worn rollers, belt problems, an idler pulley, blower wheel issues, or other moving parts inside the dryer. These sounds usually become worse over time.',
          },
          {
            question: 'Is a hot or burning smell from the dryer a safety concern?',
            answer: 'Yes. A burning smell can be caused by lint buildup, overheating components, friction from worn parts, or electrical issues. The dryer should not continue to be used until the cause is checked.',
          },
          {
            question: 'Do you repair Whirlpool gas and electric dryers?',
            answer: 'Yes. We diagnose and repair both Whirlpool gas dryers and Whirlpool electric dryers, including common heating, airflow, noise, and control-related problems.',
          },
          {
            question: 'Do I need a repair if the dryer still tumbles?',
            answer: 'Yes, if it is not heating correctly, drying efficiently, or shutting off unexpectedly. A dryer that still tumbles can still have a heating, airflow, sensor, or safety-related issue.',
          },
          {
            question: 'Can a clogged dryer vent affect Whirlpool dryer performance?',
            answer: 'Absolutely. Poor venting can cause long dry times, overheating, reduced efficiency, and repeat failures of heat-related safety parts. Airflow is always an important part of dryer diagnosis.',
          },
          {
            question: 'Do you serve areas outside Thousand Oaks?',
            answer: 'Yes. We also serve nearby communities including Westlake Village, Newbury Park, Camarillo, Moorpark, Simi Valley, Agoura Hills, and surrounding Ventura County areas.',
          },
        ]}
      />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default DryerWhirlpool;

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
