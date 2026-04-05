import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  padding: 4rem 1rem;
  background: var(--gray-50);

  @media (min-width: 1440px) {
    padding: 6rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 1.2;
  color: var(--blue-500);
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const SubTitle = styled.h3`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 1.3;
  color: var(--black-500);
  margin: 2rem 0 1rem;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  font-family: var(--main-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: var(--black-500);
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-family: var(--main-family);
  font-size: 16px;
  line-height: 1.5;
  color: var(--black-500);

  &:before {
    content: '✓';
    color: var(--blue-500);
    font-weight: bold;
    font-size: 20px;
    flex-shrink: 0;
  }
`;

interface RefrigeratorBrandProblemsProps {
  brandName: string;
  models?: string[];
  problems?: string[];
  diagnostics?: { title: string; text: string }[];
  introText?: string;
  closingText?: string;
  problemsIntro?: string;
}

export const RefrigeratorBrandProblems: React.FC<RefrigeratorBrandProblemsProps> = ({
  brandName,
  models,
  problems,
  diagnostics,
  introText,
  closingText,
  problemsIntro,
}) => {
  const defaultProblems = [
    'Not cooling or inadequate cooling',
    'Freezer not freezing properly',
    'Water leaking inside or outside',
    'Ice maker not working or making noise',
    'Unusual noises (buzzing, clicking, humming)',
    'Error codes or display malfunctions',
    'Door seal problems or air leaks',
    'Compressor or cooling system issues',
  ];

  const defaultDiagnostics = [
    { title: 'Temperature testing', text: 'We verify cooling performance in all compartments' },
    { title: 'System inspection', text: 'Check compressor, evaporator, and condenser operation' },
    { title: 'Control board diagnosis', text: 'Test electronic controls and temperature sensors' },
    { title: 'Seal and airflow check', text: 'Inspect door seals, fans, and air circulation' },
    { title: 'Ice maker service', text: 'Diagnose water supply, ice production, and dispenser' },
  ];

  const actualProblems = problems || defaultProblems;
  const actualDiagnostics = diagnostics || defaultDiagnostics;

  return (
    <Section>
      <Container>
        <Title>{brandName} Refrigerator Units We Commonly Service</Title>
        {models && models.length > 0 ? (
          <ModelsList>
            {models.map((model, i) => (
              <ModelItem key={i}><span>•</span> {model}</ModelItem>
            ))}
          </ModelsList>
        ) : (
          <Description>
            {introText || `We specialize in professional ${brandName} refrigerator repair for all models including built-in refrigerators, French door models, side-by-side units, and freezer compartments.`}
          </Description>
        )}

        <SubTitle>Common {brandName} Refrigerator Problems We Fix</SubTitle>
        {problemsIntro && <Description>{problemsIntro}</Description>}
        <List>
          {actualProblems.map((p, i) => <ListItem key={i}>{p}</ListItem>)}
        </List>

        <SubTitle>How We Diagnose {brandName} Refrigerators & Freezers</SubTitle>
        <List>
          {actualDiagnostics.map((d, i) => (
            <ListItem key={i}>
              <strong>{d.title}:</strong> {d.text}
            </ListItem>
          ))}
        </List>

        <Description>
          {closingText || `After diagnosis, you get clear recommendations and repair options based on reliability and total cost—not guesswork.`}
        </Description>
      </Container>
    </Section>
  );
};

const ModelsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem 0;
`;

const ModelItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-family: var(--main-family);
  font-size: 16px;
  line-height: 1.5;
  color: var(--black-500);

  span {
    color: var(--blue-500);
    font-weight: 500;
  }
`;
