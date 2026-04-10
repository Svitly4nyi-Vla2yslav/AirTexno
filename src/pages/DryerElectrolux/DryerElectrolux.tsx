import React from 'react';
import { styled } from 'styled-components';
import { DryerBrandHero, DryerBrandProblems, DryerBrandFAQ, PhotoGallery } from '../../components/DryerBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import img1 from '../../assets/brands/dryer/electrolux/elx_01.jpg';
import img2 from '../../assets/brands/dryer/electrolux/elx_02.jpg';
import img3 from '../../assets/brands/dryer/electrolux/elx_03.jpg';
import img4 from '../../assets/brands/dryer/electrolux/elx_04.jpg';
import img5 from '../../assets/brands/dryer/electrolux/elx_05.jpg';

const DryerElectrolux: React.FC = () => {
  return (
    <Container id='ap'>
      <DryerBrandHero
        brandName="Electrolux"
        description="Electrolux dryers are often chosen for their modern design, fabric-care features, and cycle options built around efficiency and gentler drying performance. When one stops heating properly, begins ending cycles too early, or leaves clothes damp after a normal load, the cause is not always obvious from the symptom alone. Airtexno Appliance Repair provides Electrolux dryer repair in Thousand Oaks and nearby Ventura County areas. With Electrolux dryers, the repair process often depends on understanding how the appliance is reading moisture, airflow, and cycle conditions."
        image1={img1}
        image2={img2}
      />
      <Partners />
      <DryerBrandProblems
        brandName="Electrolux"
        models={[
          'Electrolux electric dryers and Electrolux gas dryers',
          'Front-load laundry sets with matching washer and dryer designs',
          'Dryers with moisture-sensing cycles and fabric-care settings',
          'Household units with digital controls, specialty cycles, and modern interface panels',
        ]}
        problems={[
          'Dryer runs but clothes do not come out fully dry',
          'Cycles end too early or feel unusually short',
          'No heat or weak heat during operation',
          'Dryer takes much longer than normal to finish loads',
          'Error messages or unusual control behavior',
          'Drum noise, vibration, or rough movement',
          'Dryer starts but stops before the load is complete',
          'Overheating or cabinet getting too warm',
        ]}
        diagnostics={[
          { title: 'Heat and cycle consistency testing', text: 'We verify whether the dryer is creating proper heat and whether cycle behavior matches the selected drying program.' },
          { title: 'Moisture-sensing performance review', text: 'If loads finish too early or come out inconsistently dry, we consider how the dryer is reading and reacting to load conditions.' },
          { title: 'Airflow and venting inspection', text: 'Weak exhaust, restricted venting, or poor air movement can reduce efficiency and create symptoms that look like component failure.' },
          { title: 'Drum movement and internal wear checks', text: 'Noise, vibration, or rough tumbling can point to worn support parts, drive wear, or related internal mechanical issues.' },
          { title: 'Control response and fault evaluation', text: 'If the dryer shows error messages or behaves unpredictably, we check how the control system is interacting with the appliance\'s operating conditions.' },
          { title: 'Repair decision guidance', text: 'Once the cause is confirmed, we explain whether the issue looks like a focused repair, a maintenance-related condition, or a larger problem affecting overall reliability.' },
        ]}
        brandSpecificTitle="Why Electrolux dryer problems often involve performance, not just power"
        brandSpecificText="Some dryers fail in obvious ways — they stop turning on or stop heating completely. Electrolux dryers can also develop a different kind of complaint: they still run, the controls still respond, but drying quality drops. That can happen when moisture sensing becomes inaccurate, airflow changes reduce efficiency, or heat and cycle behavior stop working together the way the machine was designed to. Because of that, diagnosis should not focus only on whether the dryer powers on. It should also look at how the cycle is progressing, whether the load is being sensed correctly, and whether the machine is delivering consistent drying results across normal household use."
      />
      <PhotoGallery
        brandName="Electrolux Dryer"
        photos={[
          { src: img3, alt: 'Electrolux dryer repair work' },
          { src: img4, alt: 'Electrolux dryer maintenance' },
          { src: img5, alt: 'Electrolux dryer service' },
        ]}
      />
      <DryerBrandFAQ faqData={[
        {
          question: 'Why does my Electrolux dryer stop before clothes are fully dry?',
          answer: 'That can happen when the dryer is not sensing load moisture correctly, when airflow is restricted, or when cycle performance is being interrupted by a heat-related issue.',
        },
        {
          question: 'Can an Electrolux dryer run normally but still have a problem?',
          answer: 'Yes. A dryer may still start and tumble even when drying quality has dropped because of weak heat, poor airflow, or moisture-sensing problems.',
        },
        {
          question: 'Why is my Electrolux dryer taking longer on regular loads?',
          answer: 'Long dry times can be caused by restricted venting, reduced heating performance, sensor-related issues, or cycle behavior that is no longer working efficiently.',
        },
        {
          question: 'Do error messages on an Electrolux dryer always mean a control board problem?',
          answer: 'Not always. Error messages can also reflect sensor issues, airflow conditions, overheating, or other operating problems that the control system is detecting.',
        },
        {
          question: 'Is an Electrolux dryer worth repairing?',
          answer: 'In many cases, yes. If the dryer is otherwise in good condition and the problem is isolated, a properly diagnosed repair can be a practical choice.',
        },
        {
          question: 'Do you service cities outside Thousand Oaks?',
          answer: 'Yes. We also serve Westlake Village, Newbury Park, Camarillo, Moorpark, Simi Valley, and nearby Ventura County communities.',
        },
      ]} />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default DryerElectrolux;

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
