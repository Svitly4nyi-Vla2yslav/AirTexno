import React from 'react';
import { styled } from 'styled-components';
import { DryerBrandHero, DryerBrandProblems, DryerBrandFAQ, PhotoGallery } from '../../components/DryerBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import img1 from '../../assets/brands/dryer/ge/ge_01.jpg';
import img2 from '../../assets/brands/dryer/ge/ge_02.jpg';
import img3 from '../../assets/brands/dryer/ge/ge_03.jpg';
import img4 from '../../assets/brands/dryer/ge/ge_04.jpg';

const geModels = [
  'GE electric dryers and GE gas dryers',
  'Front-load laundry setups and standard side-by-side dryer installations',
  'Household dryers with timer cycles, sensor cycles, or digital control panels',
  'Older GE dryer designs and newer models with updated cycle-management features',
];

const geProblems = [
  'Dryer runs with little or no heat',
  'Dry cycles take longer than normal',
  'Dryer starts but stops before clothes are dry',
  'Drum does not tumble correctly',
  'Unusual thumping, squealing, or scraping noise',
  'Control panel or cycle settings respond inconsistently',
  'Dryer becomes too hot during operation',
  'Machine will not start at all',
];

const geDiagnostics = [
  {
    title: 'Heat production testing',
    text: 'We verify whether the dryer is generating proper heat and whether temperature-related operation is staying consistent during the cycle.',
  },
  {
    title: 'Airflow performance checks',
    text: 'Restricted venting and weak exhaust can cause long dry times, overheating, and repeat no-heat complaints, so airflow is a core part of diagnosis.',
  },
  {
    title: 'Drum and movement inspection',
    text: 'If the dryer is noisy or not tumbling properly, we inspect the support system, belt path, and related drive components.',
  },
  {
    title: 'Cycle and control review',
    text: 'We compare the selected cycle to the dryer\'s actual behavior to determine whether the control system is responding normally.',
  },
  {
    title: 'Shutdown and overheating analysis',
    text: 'Mid-cycle stops and excessive heat can point to vent restriction, protective cutoffs, or operational faults that need to be identified clearly.',
  },
  {
    title: 'Repair recommendation based on condition',
    text: 'After testing, we explain what appears to have failed and whether the repair makes practical sense for the machine\'s overall condition.',
  },
];

const geFAQ = [
  {
    question: 'Why is my GE dryer taking two cycles to dry clothes?',
    answer: 'This can happen when the dryer has weak heat, restricted airflow, or a cycle-related issue that prevents proper drying performance in a single run.',
  },
  {
    question: 'Why does my GE dryer stop before the cycle should be finished?',
    answer: 'A dryer that ends early may be reacting to overheating, vent restriction, sensor-related behavior, or control-system problems that interrupt normal operation.',
  },
  {
    question: 'What causes thumping or squealing sounds in a GE dryer?',
    answer: 'Those noises are often linked to worn support parts, drive-system wear, or internal movement components that are no longer operating smoothly.',
  },
  {
    question: 'Is a GE dryer with long dry times always a heating problem?',
    answer: 'Not always. Long dry times can also be caused by poor airflow, vent restriction, or cycle performance issues, which is why proper diagnosis matters.',
  },
  {
    question: 'Can an older GE dryer still be worth repairing?',
    answer: 'Yes, in many cases. If the machine is otherwise in decent shape and the problem is limited to a repairable issue, service can still make practical sense.',
  },
  {
    question: 'Do you service nearby cities outside Thousand Oaks?',
    answer: 'Yes. We also serve Westlake Village, Newbury Park, Camarillo, Moorpark, Simi Valley, and nearby Ventura County communities.',
  },
];

const DryerGE: React.FC = () => {
  return (
    <Container id='ap'>
      <DryerBrandHero
        brandName="GE"
        description="GE dryers are common in many homes because they offer familiar controls, practical cycle options, and a broad mix of gas and electric models. When a GE dryer begins leaving clothes damp, shuts off before a cycle should end, or starts making a new noise, the issue can come from heat production, airflow, drum support wear, or control-related problems. Airtexno Appliance Repair provides GE dryer repair in Thousand Oaks and nearby Ventura County areas. We focus on identifying the actual cause of the symptom instead of replacing parts by guesswork."
        image1={img1}
        image2={img2}
      />
      <Partners />
      <DryerBrandProblems
        brandName="GE"
        models={geModels}
        problems={geProblems}
        diagnostics={geDiagnostics}
        brandSpecificTitle="Why GE Dryer Symptoms Can Be Misleading"
        brandSpecificText="One reason GE dryer problems should be tested carefully is that the same symptom can have more than one explanation. For example, a dryer that takes too long to dry may be dealing with weak heating, poor airflow, cycle-management issues, or a moisture-sensing problem. A machine that shuts off early may be overheating, reacting to vent restriction, or experiencing a control-related interruption. Because of that, we do not treat a symptom as proof of one specific failed part. We evaluate how the dryer behaves, how it heats, how air moves through it, and whether the cycle logic appears normal for the selected setting."
      />
      <PhotoGallery
        brandName="GE Dryer"
        photos={[
          { src: img3, alt: 'GE dryer repair work' },
          { src: img4, alt: 'GE dryer maintenance' },
        ]}
      />
      <DryerBrandFAQ faqData={geFAQ} />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default DryerGE;

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
