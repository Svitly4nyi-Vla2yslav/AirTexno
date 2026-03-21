import React, { useState } from 'react';
import { styled } from 'styled-components';
import {
  Container as HeroContainer,
  TabletContainer,
  Title,
  Description,
  ContentWrapper,
  ImageContainer,
  Image,
  ButtonRow,
  PrimaryButton,
  SecondaryButton,
  ButtonText,
  FeaturesList,
  FeatureItem,
  InlineLink,
} from '../../components/DryerLG/LGDryerHero.styled';
import { useMediaQuery } from 'react-responsive';
import { ReviewsWidget } from '../../components/ReviewsWidget/ReviewsWidget';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';

import image1 from '../../assets/brands/dryer-vent/dv_01.jpg';
import image2 from '../../assets/brands/dryer-vent/dv_02.jpg';
import image3 from '../../assets/brands/dryer-vent/dv_03.jpg';
import image4 from '../../assets/brands/dryer-vent/dv_04.jpg';
import image5 from '../../assets/brands/dryer-vent/dv_05.jpg';

const DryerVentCleaning: React.FC = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How often should I clean my dryer vent?',
      answer: 'It is recommended to clean your dryer vent at least once a year. If you notice longer drying times, excess lint, or heat buildup, you may need cleaning sooner.',
    },
    {
      question: 'How do I know if my dryer vent is clogged?',
      answer: 'Signs include clothes taking too long to dry, the dryer getting very hot, a burning smell during drying, weak airflow from the outside vent, and excess lint around the dryer.',
    },
    {
      question: 'Can a clogged dryer vent cause a fire?',
      answer: 'Yes. Lint is highly flammable, and when airflow is restricted, the dryer can overheat. Heavy lint accumulation combined with high temperatures may increase the risk of a dryer fire.',
    },
    {
      question: 'How long does dryer vent cleaning take?',
      answer: 'Most dryer vent cleaning services are completed within 30-60 minutes, depending on the length and condition of the vent system.',
    },
    {
      question: 'Do you also repair dryers?',
      answer: 'Yes. If the issue is not only the vent, we can also diagnose the dryer itself and explain the next best step, including heating issues, early shutoffs, or long drying times.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve Thousand Oaks, Westlake Village, Newbury Park, Agoura Hills, Camarillo, Moorpark, Oak Park, and nearby cities.',
    },
  ];

  return (
    <PageContainer id='ap'>
      {/* Hero Section */}
      <HeroContainer>
        <TabletContainer>
          <ContentWrapper>
            <Title>
              <span>Dryer Vent</span> Cleaning{' '}
              <span>in </span>Thousand Oaks & Ventura County
            </Title>

            <ReviewsWidget />

            <Description>
              Professional dryer vent cleaning to improve airflow, reduce
              overheating, and help your dryer work more efficiently. Dryer vent
              cleaning also helps reduce potential fire hazards caused by lint
              buildup inside the vent system. Starting at: $95
            </Description>

            <FeaturesList>
              <FeatureItem>
                <span>🔥</span>
                <p>Reduce fire hazards from lint buildup</p>
              </FeatureItem>
              <FeatureItem>
                <span>⏱️</span>
                <p>Improve drying performance and efficiency</p>
              </FeatureItem>
              <FeatureItem>
                <span>🏠</span>
                <p>Serving Thousand Oaks and nearby cities</p>
              </FeatureItem>
            </FeaturesList>

            <ButtonRow>
              <PrimaryButton to='/contact'>
                <ButtonText>Request Service</ButtonText>
              </PrimaryButton>
              <SecondaryButton>
                <a href='tel:+18055002705'>📞 (805) 500-2705</a>
              </SecondaryButton>
            </ButtonRow>
          </ContentWrapper>

          {isDesktop && (
            <ImageContainer>
              <Image
                src={image1}
                alt='Dirty dryer vent with lint buildup'
                loading='lazy'
              />
              <Image
                src={image2}
                alt='Clean dryer vent after service'
                loading='lazy'
              />
            </ImageContainer>
          )}
        </TabletContainer>

        {!isDesktop && (
          <ImageContainer>
            <Image
              src={image1}
              alt='Dirty dryer vent with lint buildup'
              loading='lazy'
            />
            <Image
              src={image2}
              alt='Clean dryer vent after service'
              loading='lazy'
            />
          </ImageContainer>
        )}
      </HeroContainer>

      <Partners />

      {/* Services Section */}
      <Section>
        <SectionContainer>
          <SectionTitle>What Our Dryer Vent Cleaning Service May Include</SectionTitle>
          <SectionDescription>
            <InlineLink to="/about">Airtexno Appliance Repair</InlineLink> provides professional dryer vent cleaning
            in Thousand Oaks and nearby cities. We help homeowners improve dryer
            performance, reduce overheating, and restore proper airflow through
            the vent line.
          </SectionDescription>

          <SectionGrid>
            <div>
              <ServiceList>
                <ServiceItem>Dryer vent inspection</ServiceItem>
                <ServiceItem>Lint removal from vent line</ServiceItem>
                <ServiceItem>Airflow check</ServiceItem>
                <ServiceItem>Exterior vent cap inspection</ServiceItem>
                <ServiceItem>Cleaning of accessible vent sections</ServiceItem>
                <ServiceItem>Basic troubleshooting of poor airflow</ServiceItem>
                <ServiceItem>Checking for heavy lint buildup behind the dryer</ServiceItem>
                <ServiceItem>Identifying vent-related drying issues</ServiceItem>
              </ServiceList>
            </div>
            <SectionImage
              src={image3}
              alt='Dryer vent cleaning process'
              loading='lazy'
            />
          </SectionGrid>
        </SectionContainer>
      </Section>

      {/* Signs Section */}
      <Section $highlight>
        <SectionContainer>
          <SectionGrid>
            <SectionImage
              src={image5}
              alt='Full dirty dryer vent'
              loading='lazy'
            />
            <div>
              <SectionTitle>Signs You May Need Dryer Vent Cleaning</SectionTitle>
              <ServiceList $single>
                <ServiceItem>Clothes taking too long to dry</ServiceItem>
                <ServiceItem>Dryer getting very hot</ServiceItem>
                <ServiceItem>Laundry still damp after one cycle</ServiceItem>
                <ServiceItem>Burning smell during drying</ServiceItem>
                <ServiceItem>Weak airflow from the outside vent</ServiceItem>
                <ServiceItem>Excess lint around the dryer</ServiceItem>
                <ServiceItem>Dryer shutting off unexpectedly</ServiceItem>
                <ServiceItem>Laundry room becoming hot during use</ServiceItem>
              </ServiceList>
            </div>
          </SectionGrid>
        </SectionContainer>
      </Section>

      {/* Fire Safety Section */}
      <Section>
        <SectionContainer>
          <SectionTitle>Dryer Vent Cleaning and Fire Safety</SectionTitle>
          <SectionDescription>
            Dryer vent cleaning is not only about improving drying performance —
            it is also an important home safety measure. Over time, dryer vents
            can collect large amounts of lint, dust, and debris. Lint is highly
            flammable, and when airflow is restricted, the dryer can overheat.
          </SectionDescription>
          <SectionDescription>A clogged vent may lead to:</SectionDescription>
          <ServiceList $single>
            <ServiceItem>Excessive heat inside the dryer</ServiceItem>
            <ServiceItem>Lint buildup inside the vent line</ServiceItem>
            <ServiceItem>Reduced airflow</ServiceItem>
            <ServiceItem>Increased strain on the dryer motor and heating element</ServiceItem>
          </ServiceList>
          <SectionDescription>
            Regular dryer vent cleaning helps remove lint buildup and restore
            proper airflow, which helps your dryer operate more safely and
            efficiently. It may also help extend the life of the dryer and
            reduce unnecessary wear on internal components.
          </SectionDescription>
        </SectionContainer>
      </Section>

      {/* Why It Matters Section */}
      <Section $highlight>
        <SectionContainer>
          <SectionGrid>
            <div>
              <SectionTitle>Why Dryer Vent Cleaning Matters</SectionTitle>
              <SectionDescription>
                Proper dryer vent airflow helps your dryer work more efficiently
                and reduces unnecessary strain on the appliance. Keeping the
                vent line clean is an important part of dryer maintenance.
              </SectionDescription>
              <ServiceList $single>
                <ServiceItem>Better drying performance</ServiceItem>
                <ServiceItem>Improved airflow</ServiceItem>
                <ServiceItem>Reduced overheating</ServiceItem>
                <ServiceItem>Shorter drying times</ServiceItem>
                <ServiceItem>Less strain on the dryer</ServiceItem>
                <ServiceItem>Better overall efficiency</ServiceItem>
              </ServiceList>
            </div>
            <SectionImage
              src={image4}
              alt='Dryer vent system'
              loading='lazy'
            />
          </SectionGrid>
        </SectionContainer>
      </Section>

      {/* Before Scheduling */}
      <Section>
        <SectionContainer>
          <SectionTitle>Before Scheduling Service</SectionTitle>
          <SectionDescription>
            Before calling for service, try these simple steps:
          </SectionDescription>
          <ServiceList $single>
            <ServiceItem>Clean the lint filter before running the dryer</ServiceItem>
            <ServiceItem>Check whether the outside vent flap opens properly</ServiceItem>
            <ServiceItem>Avoid overloading the dryer with heavy loads</ServiceItem>
          </ServiceList>
          <SectionDescription>
            If the issue continues, we will be happy to help. Our technician can
            inspect the vent system and determine whether the problem is caused
            by lint buildup, restricted airflow, or possibly the dryer itself.
          </SectionDescription>
        </SectionContainer>
      </Section>

      {/* Service Area */}
      <Section $highlight>
        <SectionContainer>
          <SectionTitle>Service Area</SectionTitle>
          <ServiceList>
            <ServiceItem>Thousand Oaks</ServiceItem>
            <ServiceItem>Westlake Village</ServiceItem>
            <ServiceItem>Newbury Park</ServiceItem>
            <ServiceItem>Agoura Hills</ServiceItem>
            <ServiceItem>Camarillo</ServiceItem>
            <ServiceItem>Moorpark</ServiceItem>
            <ServiceItem>Simi Valley</ServiceItem>
            <ServiceItem>Oak Park</ServiceItem>
          </ServiceList>
        </SectionContainer>
      </Section>

      {/* FAQ Section */}
      <FAQSection>
        <FAQContainer>
          <FAQTitle>Frequently Asked Questions</FAQTitle>
          <FAQList>
            {faqData.map((faq, index) => (
              <FAQItem key={index} $isOpen={openIndex === index}>
                <Question onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  <span>{openIndex === index ? '−' : '+'}</span>
                </Question>
                <Answer $isOpen={openIndex === index}>
                  <p>{faq.answer}</p>
                </Answer>
              </FAQItem>
            ))}
          </FAQList>
        </FAQContainer>
      </FAQSection>

      <ReviewCardContainer />
      <TeamMember />
      <ContactForm />
    </PageContainer>
  );
};

export default DryerVentCleaning;

const PageContainer = styled.div`
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

const Section = styled.section<{ $highlight?: boolean }>`
  width: 100%;
  padding: 4rem 1rem;
  background: ${({ $highlight }) => ($highlight ? 'var(--gray-50)' : 'white')};

  @media (min-width: 1440px) {
    padding: 6rem 2rem;
  }
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SectionImage = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  min-height: 280px;
  max-height: 400px;
`;

const SectionTitle = styled.h2`
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

const SectionDescription = styled.p`
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

const ServiceList = styled.ul<{ $single?: boolean }>`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: ${({ $single }) => ($single ? '1fr' : '1fr 1fr')};
  }
`;

const ServiceItem = styled.li`
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

const FAQSection = styled.section`
  width: 100%;
  padding: 4rem 1rem;
  background: white;

  @media (min-width: 1440px) {
    padding: 6rem 2rem;
  }
`;

const FAQContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const FAQTitle = styled.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 1.2;
  color: var(--blue-500);
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled.div<{ $isOpen: boolean }>`
  border: 1px solid
    ${({ $isOpen }) => ($isOpen ? 'var(--blue-500)' : 'var(--gray-200)')};
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--blue-500);
  }
`;

const Question = styled.button`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: var(--main-family);
  font-size: 16px;
  font-weight: 500;
  color: var(--black-500);
  transition: background 0.3s ease;

  &:hover {
    background: var(--gray-50);
  }

  span {
    font-size: 24px;
    color: var(--blue-500);
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const Answer = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${({ $isOpen }) => ($isOpen ? '0 1.5rem 1.5rem' : '0 1.5rem')};

  p {
    font-family: var(--main-family);
    font-size: 16px;
    line-height: 1.6;
    color: var(--black-500);
    margin: 0;
  }
`;
