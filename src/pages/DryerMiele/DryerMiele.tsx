import React from 'react';
import { styled } from 'styled-components';
import { DryerBrandHero, DryerBrandProblems, DryerBrandFAQ, PhotoGallery } from '../../components/DryerBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import img1 from '../../assets/brands/dryer/miele/miele_01.jpg';
import img2 from '../../assets/brands/dryer/miele/miele_02.jpg';
import img3 from '../../assets/brands/dryer/miele/miele_03.jpg';
import img4 from '../../assets/brands/dryer/miele/miele_04.jpg';
import img5 from '../../assets/brands/dryer/miele/miele_05.jpg';
import img6 from '../../assets/brands/dryer/miele/miele_06.jpg';

const DryerMiele: React.FC = () => {
  return (
    <Container id='ap'>
      <DryerBrandHero
        brandName="Miele"
        description="Miele dryers are not the same as standard household dryers. Many models use advanced moisture sensing, condenser or heat-pump systems, and specialized cycle logic. When a Miele dryer is not drying correctly, stops with an error, fails to heat, or leaves laundry damp, the repair should start with careful testing instead of generic trial-and-error part replacement. Airtexno Appliance Repair provides Miele dryer repair in Thousand Oaks and nearby Ventura County communities. We help homeowners with premium laundry appliances by diagnosing performance issues, explaining the problem clearly, and recommending practical next steps based on the condition of the machine."
        image1={img1}
        image2={img2}
      />
      <Partners />
      <DryerBrandProblems
        brandName="Miele"
        models={[
          'Compact Miele dryers',
          'Stacked Miele laundry units',
          'Ventless condenser dryers',
          'Heat-pump style drying systems',
          'Units with moisture sensor programs',
          'Electronic control / display models',
        ]}
        problems={[
          'Dryer runs but clothes come out damp',
          'Cycle ends too early or seems inaccurate',
          'Dryer is not heating normally',
          'Unit displays warning or fault messages',
          'Condenser or water container related issues',
          'Noise, vibration, or unusual drum sounds',
          'Laundry is warm but not fully dry at the end of the cycle',
          'Program time behaves oddly or changes unexpectedly',
        ]}
        diagnostics={[
          {
            title: 'Cycle and sensor behavior',
            text: 'We observe program behavior, moisture-sensing response, and whether the cycle is ending too early or operating inconsistently.',
          },
          {
            title: 'Heating and drying performance',
            text: 'We evaluate whether the unit is producing the correct level of heat and whether the drying system is actually transferring moisture out of the load.',
          },
          {
            title: 'Condenser / drainage path',
            text: 'On relevant models, we inspect parts of the condensation and water-handling system that can affect drying efficiency or trigger alerts.',
          },
          {
            title: 'Air circulation and lint buildup',
            text: 'Restricted airflow inside the system can reduce performance even if the dryer still turns on and runs a full cycle.',
          },
          {
            title: 'Drum movement and sound',
            text: 'We check for wear in rollers, belt-related components, motor behavior, and other causes of abnormal noise or movement problems.',
          },
          {
            title: 'Controls and safety logic',
            text: 'We review warnings, electronic responses, and safety-related shutdown behavior to understand whether the problem is mechanical, thermal, or control-related.',
          },
        ]}
        brandSpecificTitle="What makes Miele dryer repair different"
        brandSpecificText="Miele dryers often behave differently from many standard American dryer models. Depending on the unit, drying results may be affected not only by heat output, but also by sensor readings, condenser performance, air circulation, drainage handling, lint buildup in less obvious areas, and cycle programming. That means symptoms such as long dry times, cool or barely warm laundry, condensation-related messages, or stopping before clothes are dry should not be diagnosed by assumption alone. The same complaint can come from multiple causes, and premium appliances usually benefit from a more methodical inspection."
      />
      <PhotoGallery
        brandName="Miele Dryer"
        photos={[
          { src: img3, alt: 'Miele dryer repair work' },
          { src: img4, alt: 'Miele dryer maintenance' },
          { src: img5, alt: 'Miele dryer service' },
          { src: img6, alt: 'Miele dryer diagnostics' },
        ]}
      />
      <DryerBrandFAQ
        faqData={[
          {
            question: 'Why is my Miele dryer running but laundry is still damp?',
            answer: 'This can happen when the dryer has reduced heating performance, poor air circulation, moisture-sensor issues, condensation or drainage problems, or internal lint buildup affecting the drying system. The exact cause should be tested because several different issues can look the same from the outside.',
          },
          {
            question: 'Do Miele dryers need a different kind of diagnosis than standard dryers?',
            answer: 'In many cases, yes. Miele dryers often use more advanced drying logic and, depending on the model, may rely on condenser or heat-pump style systems. That makes a methodical inspection more important than guessing based on one symptom alone.',
          },
          {
            question: 'Why does my Miele dryer stop before the clothes are fully dry?',
            answer: 'A cycle that ends too early may be related to moisture sensing, program behavior, airflow problems, heating performance, or issues in the system that manages condensation or moisture removal.',
          },
          {
            question: 'What if my Miele dryer shows a container or drainage-related warning?',
            answer: 'On models that collect or manage condensed moisture, warnings can be caused by drainage restrictions, collection issues, sensor-related behavior, or performance problems elsewhere in the drying system. The warning should be evaluated together with the dryer\'s overall performance.',
          },
          {
            question: 'Is a noisy Miele dryer always a serious problem?',
            answer: 'Not always, but unusual rubbing, squealing, humming, or rattling should not be ignored. Noise can point to wear in moving components or developing mechanical issues that may become more expensive if used for too long without service.',
          },
          {
            question: 'Do you repair Miele dryers in stacked laundry closets?',
            answer: 'Yes, in many cases we can diagnose and repair Miele dryers installed in stacked or compact laundry spaces, as long as the unit is reasonably accessible for service.',
          },
        ]}
      />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default DryerMiele;

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
