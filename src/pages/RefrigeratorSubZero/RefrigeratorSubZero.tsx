import React from 'react';
import { styled } from 'styled-components';
import { RefrigeratorBrandHero, RefrigeratorBrandProblems, RefrigeratorBrandFAQ } from '../../components/RefrigeratorBrands';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';
import image1 from '../../assets/brands/refrigerator/sub-zero/r_sub_01.jpg';
import image2 from '../../assets/brands/refrigerator/sub-zero/r_sub_02.jpg';

const RefrigeratorSubZero: React.FC = () => {
  return (
    <Container id='ap'>
      <RefrigeratorBrandHero 
        brandName="Sub-Zero"
        description="If your Sub-Zero refrigerator isn't cooling properly, is building up ice, leaking water, or making unusual noise, you need a technician who understands how these high-end systems are built and how to diagnose them correctly. At Airtexno Appliance Repair, we specialize in Sub-Zero refrigerator and freezer repair with a technician-first approach: accurate diagnostics, clear explanations, and repair solutions designed for long-term reliability."
        image1={image1}
        image2={image2}
      />
      <Partners />
      <RefrigeratorBrandProblems
        brandName="Sub-Zero"
        models={[
          "Built-in refrigerators and built-in freezers",
          "Side-by-side built-in units",
          "Column refrigerators and column freezers",
          "Undercounter / beverage / wine units (depending on model)",
          "Units with ice makers, water filtration, and internal dispensers",
        ]}
        problems={[
          "Not cooling / warm temperatures (fridge or freezer)",
          "Temperature swings (too warm, too cold, or inconsistent)",
          "Ice buildup / frost on the back wall",
          "Loud or unusual noise (fan noise, buzzing, vibration, clicking)",
          "Water leaks (inside the unit or underneath)",
          "Ice maker issues (no ice, small cubes, leaking, slow production)",
          "Defrost problems (blocked airflow, repeated frost, warming episodes)",
          "Door sealing issues (condensation, warm spots, humidity)",
          "Error codes / control issues (display problems, resets, intermittent operation)",
          "Freezer not freezing / soft ice cream / food thawing",
          "Freezer temperature swings or inconsistent freezing",
          "Excessive frost in the freezer or freezer drawer",
        ]}
        problemsIntro="Many of these symptoms can have multiple causes. For example, \u201cnot cooling\u201d might be airflow-related, defrost-related, sensor-related, or sealed-system-related. That\u2019s why correct testing matters."
        diagnostics={[
          { title: "Temperature and airflow checks", text: "Verify actual compartment temperatures and confirm proper airflow patterns." },
          { title: "Fan and defrost system evaluation", text: "Check evaporator fan operation, frost patterns, defrost components, and airflow restrictions." },
          { title: "Sensor and control testing", text: "Test temperature sensors (thermistors), control signals, and related electrical behavior." },
          { title: "Leak and water system inspection (when applicable)", text: "Inspect drains, water inlet components, and line routing." },
          { title: "Sealed system assessment (only when indicated)", text: "When symptoms suggest compressor or refrigerant issues, proceed with deeper testing and provide realistic options." },
          { title: "Freezer-specific checks", text: "We verify freezer airflow and frost patterns, test freezer temperature sensors/thermistors, inspect the evaporator fan and defrost system, and confirm proper door/drawer sealing. For units with ice makers, we also evaluate freezer temperature stability and water/ice components to ensure consistent ice production and reliable freezing." },
        ]}
        closingText="After diagnosis, you\u2019ll get a clear explanation of what failed, why it likely happened, and the best repair plan based on reliability\u2014not just the cheapest short-term option."
      />
      <RefrigeratorBrandFAQ
        brandName="Sub-Zero"
        faqData={[
          { question: "Why is my Sub-Zero refrigerator warm but the freezer seems okay (or the opposite)?", answer: "This often points to airflow or defrost-related issues, a fan problem, or a sensor/control issue affecting one compartment more than the other. We confirm airflow, frost patterns, and component operation before recommending repairs." },
          { question: "My Sub-Zero has ice buildup in the freezer\u2014what causes that?", answer: "Ice buildup is commonly tied to defrost system failures, airflow restrictions, or sealing issues. We identify the cause and repair the correct components so frost doesn\u2019t return." },
          { question: "Why is my Sub-Zero making loud or unusual noises?", answer: "Noises can come from fan motors, airflow obstruction, vibration, or compressor-related behavior. We\u2019ll pinpoint the source and address it before it causes additional damage." },
          { question: "Is a Sub-Zero refrigerator worth repairing?", answer: "In many cases, yes\u2014especially for built-in units where replacement can be expensive and complicated. The answer depends on the failure type and overall condition, which we determine during diagnosis." },
          { question: "Do you repair built-in Sub-Zero models and column units?", answer: "Yes. Built-in and column refrigeration systems require careful diagnostics and safe access. We troubleshoot these systems in-place and recommend repairs that make sense for long-term use." },
          { question: "My Sub-Zero is leaking water\u2014what should I do?", answer: "Leaks may come from drain issues, water inlet components, line connections, or ice maker-related causes. It\u2019s best to schedule diagnosis quickly to prevent cabinet and floor damage." },
          { question: "My ice maker stopped making ice. Is it always an ice maker replacement?", answer: "Not always. Ice production problems can be caused by water supply issues, valves, a frozen fill path, temperature problems, or sensor/control issues. Diagnosis helps avoid replacing the wrong part." },
          { question: "Why does the refrigerator cool sometimes and then warm up again?", answer: "Intermittent cooling can be caused by control/sensor issues, defrost problems, fan failures, or electrical faults. We test the system under real operating conditions to find the root cause." },
          { question: "Do you offer preventive maintenance for Sub-Zero?", answer: "Preventive checks can help catch airflow restrictions, door seal issues, early fan problems, and temperature irregularities before they become major failures. We can recommend a practical schedule based on your unit\u2019s age and usage." },
          { question: "How quickly can you come out?", answer: "Availability varies by day, but we aim for prompt scheduling\u2014especially for urgent \u201cnot cooling\u201d situations and active leaks." },
          { question: "Do you use genuine parts?", answer: "Whenever the correct genuine part is available and appropriate, we prioritize parts that maintain performance and reliability for high-end built-in refrigeration." },
          { question: "Can you help if my unit is too cold / freezing food in the refrigerator section?", answer: "Yes. Over-freezing can be related to sensor placement, airflow issues, control problems, or component failures. We diagnose why temperatures are drifting and correct the cause." },
          { question: "Will you tell me the price before coming out?", answer: "We can often share general ranges, but Sub-Zero repairs vary widely depending on the specific failure. The most accurate pricing comes after an on-site diagnosis." },
        ]}
      />
      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </Container>
  );
};

export default RefrigeratorSubZero;

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
