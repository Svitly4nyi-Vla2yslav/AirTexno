import React from 'react';
import styled from 'styled-components';

interface DryerBrandProblemsProps {
  brandName: string;
  models: string[];
  problems: string[];
  diagnostics: { title: string; text: string }[];
  brandSpecificTitle?: string;
  brandSpecificText?: string;
}

export const DryerBrandProblems: React.FC<DryerBrandProblemsProps> = ({
  brandName,
  models,
  problems,
  diagnostics,
  brandSpecificTitle,
  brandSpecificText,
}) => {
  return (
    <Section>
      <Container>
        <Title>{brandName} Dryer Repair Units We Commonly Service</Title>
        <ModelsList>
          {models.map((model, i) => (
            <ModelItem key={i}>
              <span>•</span> {model}
            </ModelItem>
          ))}
        </ModelsList>

        <SubTitle>Common {brandName} Dryer Problems We Fix</SubTitle>
        <Description>
          Many symptoms can have multiple causes. A structured diagnosis is the fastest way to avoid
          replacing the wrong part and to reduce repeat failures.
        </Description>

        <List>
          {problems.map((problem, i) => (
            <ListItem key={i}>{problem}</ListItem>
          ))}
        </List>

        {brandSpecificTitle && brandSpecificText && (
          <>
            <SubTitle>{brandSpecificTitle}</SubTitle>
            <Description>{brandSpecificText}</Description>
          </>
        )}

        <SubTitle>How We Diagnose {brandName} Dryer Issues</SubTitle>
        <List>
          {diagnostics.map((item, i) => (
            <ListItem key={i}>
              <strong>{item.title}:</strong> {item.text}
            </ListItem>
          ))}
        </List>

        <Description>
          After diagnosis, you get clear recommendations and repair options based on reliability and
          total cost—not guesswork.
        </Description>
      </Container>
    </Section>
  );
};

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
