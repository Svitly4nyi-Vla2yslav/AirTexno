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
} from '../../components/DryerLG/LGDryerHero.styled';
import { useMediaQuery } from 'react-responsive';
import { ReviewsWidget } from '../../components/ReviewsWidget/ReviewsWidget';
import Partners from '../../components/PartnersBanner/PartnersBanner';
import ReviewCardContainer from '../../components/Feedback/Feedback';
import { TeamMember } from '../../components/AboutUS/TeamMember/TeamMember';
import { ContactForm } from '../../components/ContactComponents/ContactForm';

import image1 from '../../assets/brands/garbage-disposal/gd_01.jpg';
import image2 from '../../assets/brands/garbage-disposal/gd_02.jpg';
import image3 from '../../assets/brands/garbage-disposal/gd_03.png';
import image4 from '../../assets/brands/garbage-disposal/gd_04.png';

const GarbageDisposal: React.FC = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'Why is my garbage disposal humming but not spinning?',
      answer: 'This usually means the disposal is jammed. Something may be stuck between the impeller and the grinding ring. Our technician can safely remove the obstruction and restore normal operation.',
    },
    {
      question: 'Should I repair or replace my garbage disposal?',
      answer: 'If your unit is badly worn, leaking from the body, repeatedly jamming, or has internal motor failure, replacement may be the more practical long-term solution. We can help you decide.',
    },
    {
      question: 'How much does garbage disposal repair cost?',
      answer: 'Repair costs vary depending on the issue. Simple jams and resets are quick fixes, while motor or seal replacement may cost more. We provide a clear estimate before starting work.',
    },
    {
      question: 'Can you install a new garbage disposal?',
      answer: 'Yes, we can remove your old unit and install a new compatible garbage disposal. We will make sure everything is properly connected and working.',
    },
    {
      question: 'Why does my garbage disposal leak?',
      answer: 'Leaks can come from the sink flange, dishwasher connection, drain pipe, or the body of the disposal itself. We will inspect and identify the exact source of the leak.',
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
              <span>Garbage Disposal</span> Repair & Installation{' '}
              <span>in Thousand Oaks</span>
            </Title>

            <ReviewsWidget />

            <Description>
              Professional garbage disposal repair, replacement, and
              installation for kitchens in Thousand Oaks and nearby cities. We
              help homeowners with jammed disposals, humming units, leaks,
              clogs, and replacement of old or damaged garbage disposals.
            </Description>

            <FeaturesList>
              <FeatureItem>
                <span>🔧</span>
                <p>Garbage disposal repair and replacement</p>
              </FeatureItem>
              <FeatureItem>
                <span>⏱️</span>
                <p>Same-day service available in Ventura County</p>
              </FeatureItem>
              <FeatureItem>
                <span>🏠</span>
                <p>Professional installation of new units</p>
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
                alt='Garbage disposal unit'
                loading='lazy'
              />
              <Image
                src={image2}
                alt='Garbage disposal installation'
                loading='lazy'
              />
            </ImageContainer>
          )}
        </TabletContainer>

        {!isDesktop && (
          <ImageContainer>
            <Image
              src={image1}
              alt='Garbage disposal unit'
              loading='lazy'
            />
            <Image
              src={image2}
              alt='Garbage disposal installation'
              loading='lazy'
            />
          </ImageContainer>
        )}
      </HeroContainer>

      <Partners />

      {/* Services Section */}
      <Section>
        <SectionContainer>
          <SectionTitle>What Our Garbage Disposal Service May Include</SectionTitle>
          <SectionDescription>
            Airtexno Appliance Repair provides garbage disposal repair and
            installation in Thousand Oaks and nearby cities. We help homeowners
            restore kitchen sink disposal systems when the unit stops working
            properly or needs replacement.
          </SectionDescription>

          <SectionGrid>
            <div>
              <ServiceList>
                <ServiceItem>Garbage disposal diagnostics</ServiceItem>
                <ServiceItem>Garbage disposal repair</ServiceItem>
                <ServiceItem>Garbage disposal replacement</ServiceItem>
                <ServiceItem>Installation of new disposal unit</ServiceItem>
                <ServiceItem>Checking for jams or blockages</ServiceItem>
                <ServiceItem>Leak inspection under the sink</ServiceItem>
                <ServiceItem>Reset and power connection check</ServiceItem>
                <ServiceItem>Basic troubleshooting of disposal-related sink issues</ServiceItem>
              </ServiceList>
            </div>
            <SectionImage
              src={image3}
              alt='Garbage disposal repair service'
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
              src={image4}
              alt='Garbage disposal maintenance'
              loading='lazy'
            />
            <div>
              <SectionTitle>Signs Your Garbage Disposal May Need Repair</SectionTitle>
              <ServiceList $single>
                <ServiceItem>Garbage disposal not turning on</ServiceItem>
                <ServiceItem>Unit humming but not spinning</ServiceItem>
                <ServiceItem>Leaking under the sink</ServiceItem>
                <ServiceItem>Bad odors that do not go away</ServiceItem>
                <ServiceItem>Slow draining near the disposal area</ServiceItem>
                <ServiceItem>Grinding or unusual noises</ServiceItem>
                <ServiceItem>Frequent resets</ServiceItem>
                <ServiceItem>Disposal tripping power or shutting off</ServiceItem>
              </ServiceList>
            </div>
          </SectionGrid>
        </SectionContainer>
      </Section>

      {/* Repair or Replace */}
      <Section>
        <SectionContainer>
          <SectionTitle>Repair or Replace the Garbage Disposal?</SectionTitle>
          <SectionDescription>
            Some garbage disposal problems can be repaired, while others are
            better solved by replacing the unit. The best option often depends
            on the age of the disposal, the type of failure, and the overall
            condition of the system.
          </SectionDescription>
          <SectionDescription>
            If your unit is badly worn, leaking from the body, repeatedly
            jamming, or has internal motor failure, replacement may be the more
            practical long-term solution.
          </SectionDescription>
          <ServiceList $single>
            <ServiceItem>Repair for certain jams or minor issues</ServiceItem>
            <ServiceItem>Replacement for old or failed units</ServiceItem>
            <ServiceItem>Installation of compatible new garbage disposal</ServiceItem>
            <ServiceItem>Help choosing the right next step</ServiceItem>
          </ServiceList>
        </SectionContainer>
      </Section>

      {/* Before Scheduling */}
      <Section $highlight>
        <SectionContainer>
          <SectionTitle>Before Scheduling Service</SectionTitle>
          <SectionDescription>
            Before calling for service, here are a few quick things you can
            check:
          </SectionDescription>
          <ServiceList $single>
            <ServiceItem>Press the reset button on the bottom of the disposal if your unit has one</ServiceItem>
            <ServiceItem>Check whether the wall switch is working properly</ServiceItem>
            <ServiceItem>Make sure the unit has power</ServiceItem>
            <ServiceItem>Do not place your hand inside the disposal</ServiceItem>
          </ServiceList>
          <SectionDescription>
            If the disposal is jammed, humming, leaking, or still not working
            after a reset, we will be happy to help.
          </SectionDescription>
        </SectionContainer>
      </Section>

      {/* Service Area */}
      <Section>
        <SectionContainer>
          <SectionTitle>Service Area</SectionTitle>
          <ServiceList>
            <ServiceItem>Thousand Oaks</ServiceItem>
            <ServiceItem>Westlake Village</ServiceItem>
            <ServiceItem>Newbury Park</ServiceItem>
            <ServiceItem>Agoura Hills</ServiceItem>
            <ServiceItem>Camarillo</ServiceItem>
            <ServiceItem>Moorpark</ServiceItem>
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

export default GarbageDisposal;

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
