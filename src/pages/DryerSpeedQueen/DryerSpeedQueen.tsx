import React from 'react';
import { styled } from 'styled-components';
import { DryerBrandHero, DryerBrandProblems, DryerBrandFAQ, PhotoGallery } from '../../components/DryerBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import img1 from '../../assets/brands/dryer/speed-queen/sq_01.jpg';
import img2 from '../../assets/brands/dryer/speed-queen/sq_02.jpg';
import img3 from '../../assets/brands/dryer/speed-queen/sq_03.jpg';
import img4 from '../../assets/brands/dryer/speed-queen/sq_04.jpg';
import img5 from '../../assets/brands/dryer/speed-queen/sq_05.jpg';

const DryerSpeedQueen: React.FC = () => {
  return (
    <Container id='ap'>
      <DryerBrandHero
        brandName="Speed Queen"
        description="Speed Queen dryers are known for straightforward controls, durable construction, and a reputation for long service life. When one starts taking too long to dry, loses heat, or develops drive-system noise, the best results usually come from careful testing rather than trial-and-error parts replacement. Airtexno Appliance Repair provides Speed Queen dryer repair in Thousand Oaks and nearby Ventura County areas. We diagnose both residential Speed Queen dryers and laundry setups that feel more heavy-duty than typical household machines."
        image1={img1}
        image2={img2}
      />
      <Partners />
      <DryerBrandProblems
        brandName="Speed Queen"
        models={[
          'Speed Queen electric dryers and gas dryers',
          'Laundry room setups with simple mechanical controls or electronic cycle controls',
          'Heavy-duty home dryer units used frequently by larger households',
          'Residential machines with commercial-style feel and high-duty-cycle use',
        ]}
        problems={[
          'Dryer heats poorly or does not heat at all',
          'Cycle finishes but clothing still feels damp',
          'Drum turns slowly, struggles to start, or does not tumble',
          'Loud rumbling, scraping, or belt-related noise',
          'Dryer starts and then shuts down unexpectedly',
          'Airflow feels weak at the vent outlet',
          'Cabinet becomes unusually hot during use',
          'Timer, selector, or control response does not feel normal',
        ]}
        diagnostics={[
          { title: 'Heat output and cycling behavior', text: 'We check whether the dryer is generating heat correctly and whether thermostatic or control-related cycling is acting as expected.' },
          { title: 'Air movement and vent efficiency', text: 'Drying performance depends heavily on airflow. We look for weak exhaust, vent restriction, or lint-related conditions that can reduce efficiency.' },
          { title: 'Drum support and drive-system wear', text: 'If the dryer is noisy or the drum movement feels rough, we inspect rollers, belt condition, pulley behavior, and related support points.' },
          { title: 'Safety components and thermal protection', text: 'Overheating and shutdown problems can involve thermal fuses, limit devices, or operating conditions that triggered a protective response.' },
          { title: 'Control and cycle verification', text: 'We verify whether the timer, selector, or electronic control logic is matching the cycle behavior the dryer is actually producing.' },
          { title: 'Repair practicality', text: 'After testing, we explain whether the issue looks like a straightforward repair, a wear-related service, or a larger decision point.' },
        ]}
        brandSpecificTitle="Why Speed Queen dryers often need a different repair approach"
        brandSpecificText="On many brands, customers expect more electronics-related complaints. With Speed Queen, we often see a different pattern: machines that have worked for years and then develop one specific fault tied to airflow, heating, drive wear, support rollers, belt tension, or a safety device. The machine may still look solid overall, which makes accurate diagnosis especially important because the best repair is often targeted and practical — not a full rebuild. We pay close attention to how the dryer behaves under load, whether the airflow supports proper drying, and whether internal wear is starting to affect the drum system."
      />
      <PhotoGallery
        brandName="Speed Queen Dryer"
        photos={[
          { src: img3, alt: 'Speed Queen dryer repair work' },
          { src: img4, alt: 'Speed Queen dryer maintenance' },
          { src: img5, alt: 'Speed Queen dryer service' },
        ]}
      />
      <DryerBrandFAQ faqData={[
        {
          question: 'Why is my Speed Queen dryer taking much longer to dry clothes?',
          answer: 'Long dry times are often related to weak airflow, vent restriction, reduced heat production, or a component that is not allowing the dryer to maintain normal drying conditions.',
        },
        {
          question: 'Why does my Speed Queen dryer make a rumbling or scraping sound?',
          answer: 'That kind of sound can come from worn rollers, belt-related wear, pulley issues, blower-related problems, or drum support components that are no longer moving smoothly.',
        },
        {
          question: 'Can a Speed Queen dryer run without drying properly?',
          answer: 'Yes. A dryer can still tumble even when the heating system, airflow path, or cycling behavior is not working correctly. That is why "it runs" does not always mean "it is working."',
        },
        {
          question: 'Are Speed Queen dryers usually repairable?',
          answer: 'Many of them are. Because these machines are often built with durability in mind, a focused repair can be worthwhile when the issue is isolated and the overall appliance condition is still strong.',
        },
        {
          question: 'What if my dryer gets very hot on the outside?',
          answer: 'Excessive cabinet heat can point to airflow restriction, overheating, cycling problems, or internal lint-related issues. It should be checked before the dryer continues regular use.',
        },
        {
          question: 'Do you service nearby cities outside Thousand Oaks?',
          answer: 'Yes. We also serve Westlake Village, Newbury Park, Camarillo, Moorpark, Simi Valley, and nearby Ventura County communities.',
        },
      ]} />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default DryerSpeedQueen;

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
