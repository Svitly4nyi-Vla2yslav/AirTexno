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

interface OvenBrandProblemsProps {
  brandName: string;
  models?: string[];
  problems?: string[];
  diagnostics?: { title: string; text: string }[];
  problemsIntro?: string;
}

export const OvenBrandProblems: React.FC<OvenBrandProblemsProps> = ({
  brandName,
  models,
  problems,
  diagnostics,
  problemsIntro,
}) => {
  const defaultProblems = [
    'Oven not heating or uneven temperature',
    'Self-cleaning cycle issues',
    'Control panel errors and malfunctions',
    'Door won\'t close properly or seal issues',
    'Burner or heating element problems',
    'Ignition system failures (gas ovens)',
    'Fan or convection issues',
    'Error codes and diagnostic alerts',
  ];

  const defaultDiagnostics = [
    { title: 'Temperature testing', text: 'We verify heating accuracy and distribution' },
    { title: 'Component inspection', text: 'Check heating elements, igniters, and thermostats' },
    { title: 'Control board diagnosis', text: 'Test electronic controls and sensors' },
    { title: 'Safety system check', text: 'Inspect door locks, gas valves, and safety cutoffs' },
    { title: 'Calibration', text: 'Ensure temperature accuracy for precise cooking' },
  ];

  const actualProblems = problems || defaultProblems;
  const actualDiagnostics = diagnostics || defaultDiagnostics;

  return (
    <Section>
      <Container>
        <Title>{brandName} Oven Units We Commonly Service</Title>
        {models && models.length > 0 ? (
          <ModelsList>
            {models.map((model, i) => (
              <ModelItem key={i}><span>•</span> {model}</ModelItem>
            ))}
          </ModelsList>
        ) : (
          <Description>
            We specialize in professional {brandName} oven repair for all models including wall ovens,
            ranges, double ovens, and combination units.
          </Description>
        )}

        <SubTitle>Common {brandName} Oven Problems We Fix</SubTitle>
        {problemsIntro && <Description>{problemsIntro}</Description>}
        <List>
          {actualProblems.map((p, i) => <ListItem key={i}>{p}</ListItem>)}
        </List>

        <SubTitle>How We Diagnose {brandName} Oven Issues</SubTitle>
        <List>
          {actualDiagnostics.map((d, i) => (
            <ListItem key={i}>
              <strong>{d.title}:</strong> {d.text}
            </ListItem>
          ))}
        </List>

        <Description>
          After diagnosis, you get clear recommendations and repair options based on reliability and total cost—not guesswork.
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
