import React from 'react';
import { styled } from 'styled-components';
import { RefrigeratorBrandHero, RefrigeratorBrandProblems, RefrigeratorBrandFAQ } from '../../components/RefrigeratorBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import image1 from '../../assets/brands/refrigerator/kitchenaid/r_kad_01.jpg';
import image2 from '../../assets/brands/refrigerator/kitchenaid/r_kad_02.jpg';

const RefrigeratorKitchenAid: React.FC = () => {
  return (
    <Container id='ap'>
      <RefrigeratorBrandHero 
        brandName="KitchenAid"
        description="If your KitchenAid refrigerator is not cooling, leaking water, making unusual noise, or showing error codes, you need accurate diagnostics—not guesswork. At Airtexno Appliance Repair, we specialize in KitchenAid refrigerator and freezer repair with a technician-first approach: confirm the root cause, explain it clearly, and repair it for long-term reliability."
        image1={image1}
        image2={image2}
      />
      <Partners />
      <RefrigeratorBrandProblems
        brandName="KitchenAid"
        models={[
          "Built-in refrigerators and built-in freezers (model-dependent)",
          "Side-by-side, French-door, and bottom-freezer configurations",
          "Column refrigerators and column freezers (when applicable)",
          "Units with ice makers, water dispensers, and filtration systems",
          "Integrated units (when access allows and model supports service in-place)",
        ]}
        problems={[
          "Refrigerator warm / freezer warm / inconsistent temperatures",
          "Frost or ice buildup, poor airflow, or repeated defrost issues",
          "Ice maker not making ice, small cubes, slow production, or leaking",
          "Water leaks inside the unit or underneath (drain, inlet, or line issues)",
          "Unusual noises (fan noise, buzzing, vibration, clicking)",
          "Error codes, display issues, or intermittent operation",
          "Door not sealing, condensation, or moisture buildup",
          "Freezing food in the fresh-food section (too cold / temperature drift)",
          "Freezer not freezing / soft ice cream / food thawing",
          "Freezer temperature swings or inconsistent freezing",
          "Excessive frost in the freezer or freezer drawer",
          "Freezer door/drawer not sealing (frost, moisture, warm spots)",
        ]}
        problemsIntro="Many symptoms look similar from the outside. A 'not cooling' complaint may be caused by an airflow restriction, a fan failure, a defrost issue, a sensor/control problem, or a sealed-system fault. Correct testing is the fastest way to avoid unnecessary parts and repeat breakdowns."
        diagnostics={[
          { title: "Temperature and airflow verification", text: "We measure actual compartment temperatures and confirm airflow patterns." },
          { title: "Defrost and fan system checks", text: "We evaluate frost patterns, fans, and defrost components that affect airflow." },
          { title: "Sensor and control testing", text: "We test thermistors/sensors and control responses to confirm accurate operation." },
          { title: "Water and ice system inspection (when needed)", text: "We inspect drains, inlet valves, filters, and line routing." },
          { title: "Sealed system assessment (only when indicated)", text: "When symptoms point to compressor or refrigerant issues, we explain realistic repair options." },
          { title: "Freezer-specific checks", text: "We verify freezer airflow and frost patterns, test freezer temperature sensors/thermistors, inspect the evaporator fan and defrost system, and confirm proper door/drawer sealing. For units with ice makers, we also evaluate freezer temperature stability and water/ice components to ensure consistent ice production and reliable freezing." },
        ]}
        closingText="After diagnosis, you receive clear recommendations and repair options based on reliability and total cost-not guesswork."
      />
      <RefrigeratorBrandFAQ
        brandName="KitchenAid"
        faqData={[
          { question: "Why is my KitchenAid refrigerator warm but the freezer seems okay (or the opposite)?", answer: "This often points to airflow or defrost-related issues, a fan problem, or a sensor/control issue affecting one compartment more than the other. We confirm airflow and component operation before recommending parts." },
          { question: "What causes ice or frost buildup inside the unit?", answer: "Frost buildup is commonly tied to defrost system failures, airflow restrictions, or door seal issues. We identify the cause and repair the correct components so frost does not return." },
          { question: "My freezer is not freezing properly\u2014what are common causes?", answer: "Freezer issues can be caused by airflow restrictions, evaporator fan problems, defrost failures, sensor/control issues, or sealed-system problems. Diagnosis confirms the root cause and the most reliable repair option." },
          { question: "My refrigerator is making unusual noises. Is that serious?", answer: "Noises may come from fan motors, airflow obstruction, vibration, or compressor-related behavior. We pinpoint the source and address it early to prevent additional damage." },
          { question: "My ice maker stopped making ice. Do I always need an ice maker replacement?", answer: "Not always. Ice issues can be caused by water supply, inlet valves, filters, a frozen fill path, temperature problems, or control/sensor faults. Diagnosis helps avoid replacing the wrong part." },
          { question: "Why is the unit leaking water?", answer: "Leaks may come from a clogged defrost drain, loose water lines, inlet valve issues, or ice maker-related causes. We locate the source and fix it to prevent cabinet and floor damage." },
          { question: "Is it worth repairing a KitchenAid refrigerator?", answer: "In many cases, yes\u2014especially for built-in installations. Many failures can be repaired cost-effectively once the root cause is confirmed." },
          { question: "How quickly can you come out?", answer: "Availability varies by day, but we aim for prompt scheduling\u2014especially for not-cooling situations and active leaks." },
        ]}
      />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default RefrigeratorKitchenAid;

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

  @media (max-width: 767px) {
    gap: 40px;
    padding: 0 12px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 768px;
    padding: 0 24px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    max-width: 1024px;
    padding: 0 32px;
  }

  @media (min-width: 1280px) and (max-width: 1439px) {
    max-width: 1280px;
    padding: 0 48px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 64px;
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 120px;
  }
`;
