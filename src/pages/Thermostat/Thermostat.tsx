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

import image1 from '../../assets/brands/thermostat/therm_01.jpg';
import image2 from '../../assets/brands/thermostat/therm_02.jpg';
import image3 from '../../assets/brands/thermostat/therm_03.png';
import image4 from '../../assets/brands/thermostat/therm_04.jpg';
import image5 from '../../assets/brands/thermostat/therm_05.jpg';

const Thermostat: React.FC = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'Why is my thermostat not turning on the AC?',
      answer: 'Common causes include dead batteries, tripped breakers, faulty wiring, or a defective thermostat. Our technician can diagnose the issue and recommend the right solution.',
    },
    {
      question: 'How much does thermostat replacement cost?',
      answer: 'Service call is $95. Replacement starts from $150 depending on the thermostat type and complexity of installation.',
    },
    {
      question: 'Can you install a smart thermostat?',
      answer: 'Yes, we install all major smart thermostat brands including Nest, Ecobee, and Honeywell. We also handle Wi-Fi setup and HVAC compatibility checks.',
    },
    {
      question: 'Do I need a C-wire for a smart thermostat?',
      answer: 'Many smart thermostats require a C-wire (common wire) for continuous power. If your system does not have one, we can install it during the thermostat setup.',
    },
    {
      question: 'How long does thermostat installation take?',
      answer: 'Most thermostat replacements and installations are completed within 1 hour. Smart thermostat setup with Wi-Fi configuration may take slightly longer.',
    },
    {
      question: 'My thermostat shows the wrong temperature. What should I do?',
      answer: 'Incorrect temperature readings can be caused by a failing sensor, poor placement, or internal malfunction. We can recalibrate or replace the thermostat.',
    },
  ];

  return (
    <PageContainer id='ap'>
      {/* Hero Section */}
      <HeroContainer>
        <TabletContainer>
          <ContentWrapper>
            <Title>
              <span>AC Thermostat</span> Replacement & Repair{' '}
              <span>in </span>Thousand Oaks & Ventura County
            </Title>

            <ReviewsWidget />

            <Description>
              Expert AC thermostat installation, replacement, and repair in Thousand Oaks and throughout Ventura County. We work with standard and smart thermostats, including Nest, Ecobee, and other leading brands. Whether you're upgrading your system, troubleshooting wiring issues, or replacing a faulty unit, we provide clean, precise installation and reliable performance for your home comfort. Starting at: $95
            </Description>

            <FeaturesList>
              <FeatureItem>
                <span>🔧</span>
                <p>Standard and smart thermostat installation</p>
              </FeatureItem>
              <FeatureItem>
                <span>⏱️</span>
                <p>Same-day service available in Ventura County</p>
              </FeatureItem>
              <FeatureItem>
                <span>📱</span>
                <p>Wi-Fi thermostat setup and configuration</p>
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
                alt='Thermostat Installation Service'
                loading='lazy'
              />
              <Image
                src={image2}
                alt='Smart Thermostat Nest'
                loading='lazy'
              />
            </ImageContainer>
          )}
        </TabletContainer>

        {!isDesktop && (
          <ImageContainer>
            <Image
              src={image1}
              alt='Thermostat Installation Service'
              loading='lazy'
            />
            <Image
              src={image2}
              alt='Smart Thermostat Nest'
              loading='lazy'
            />
          </ImageContainer>
        )}
      </HeroContainer>

      <Partners />

      {/* Services Section */}
      <Section>
        <SectionContainer>
          <SectionTitle>Thermostat Services We Provide</SectionTitle>
          <SectionDescription>
            <InlineLink to="/about"> Airtexno Appliance Repair</InlineLink> provides thermostat repair and replacement
            services in Thousand Oaks and nearby cities. Our technicians work
            with traditional thermostats, programmable models, and modern smart
            thermostats with Wi-Fi connectivity.
          </SectionDescription>

          <SectionGrid>
            <div>
              <SectionSubTitle>Our Thermostat Services</SectionSubTitle>
              <ServiceList>
                <ServiceItem>Thermostat diagnostics</ServiceItem>
                <ServiceItem>Thermostat replacement</ServiceItem>
                <ServiceItem>Smart thermostat installation</ServiceItem>
                <ServiceItem>Wi-Fi thermostat setup</ServiceItem>
                <ServiceItem>C-wire installation</ServiceItem>
                <ServiceItem>Thermostat wiring repair</ServiceItem>
                <ServiceItem>HVAC compatibility check</ServiceItem>
              </ServiceList>
            </div>
            <SectionImage
              src={image3}
              alt='Technician installing thermostat'
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
              alt='Checking central AC temperature'
              loading='lazy'
            />
            <div>
              <SectionTitle>Signs Your Thermostat May Be Faulty</SectionTitle>
              <ServiceList>
                <ServiceItem>AC not turning on</ServiceItem>
                <ServiceItem>Furnace not responding</ServiceItem>
                <ServiceItem>Incorrect temperature readings</ServiceItem>
                <ServiceItem>System running constantly</ServiceItem>
                <ServiceItem>Frequent cycling</ServiceItem>
                <ServiceItem>Blank thermostat screen</ServiceItem>
                <ServiceItem>Wi-Fi thermostat disconnecting</ServiceItem>
              </ServiceList>
            </div>
          </SectionGrid>
        </SectionContainer>
      </Section>

      {/* Smart Thermostat Section */}
      <Section>
        <SectionContainer>
          <SectionGrid>
            <div>
              <SectionTitle>Smart Thermostat Installation</SectionTitle>
              <SectionDescription>
                Smart thermostats allow you to control your home's temperature
                from your phone, create schedules, and improve energy
                efficiency.
              </SectionDescription>
              <ServiceList>
                <ServiceItem>Remote temperature control</ServiceItem>
                <ServiceItem>Energy savings</ServiceItem>
                <ServiceItem>Smart home integration</ServiceItem>
                <ServiceItem>HVAC monitoring</ServiceItem>
              </ServiceList>
            </div>
            <SectionImage
              src={image4}
              alt='Thermostat on wall'
              loading='lazy'
            />
          </SectionGrid>
        </SectionContainer>
      </Section>

      {/* Before Scheduling */}
      <Section $highlight>
        <SectionContainer>
          <SectionTitle>Before Scheduling Service</SectionTitle>
          <SectionDescription>
            Before calling a technician, try these quick steps:
          </SectionDescription>
          <ServiceList>
            <ServiceItem>Replace thermostat batteries</ServiceItem>
            <ServiceItem>Restart or reset the thermostat</ServiceItem>
          </ServiceList>
          <SectionDescription>
            If this does not solve the issue, our technician can diagnose the
            system and repair or replace the thermostat. Our service are: Thousand Oaks, Westlake
            Village, Newbury Park, Camarillo, Moorpark, Simi Valley, Oak Park, Agoura Hills, and other
            nearby Ventura County communities.
          </SectionDescription>
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

export default Thermostat;

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

const SectionSubTitle = styled.h3`
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

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
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
