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

import image1 from '../../assets/brands/ring-doorbell/ring_01.png';
import image2 from '../../assets/brands/ring-doorbell/ring_02.png';
import image3 from '../../assets/brands/ring-doorbell/ring_03.png';
import image4 from '../../assets/brands/ring-doorbell/ring_04.png';

const RingDoorbell: React.FC = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'Do you install both wired and battery-powered smart doorbells?',
      answer: 'Yes, we install both types. We can also check your existing wiring and transformer to determine the best option for your home.',
    },
    {
      question: 'How long does video doorbell installation take?',
      answer: 'Most installations are completed within 30-60 minutes, including mounting, wiring connection, and basic device setup.',
    },
    {
      question: 'Do I need to provide the smart doorbell with camera device?',
      answer: 'Yes, please have the Ring device available before scheduling installation. If you are not sure which model is best, we can inspect the location and advise.',
    },
    {
      question: 'Can you replace my old doorbell with a new smart doorbell?',
      answer: 'Yes, we can remove your old doorbell and install a smart one in its place. We will check whether the existing wiring is compatible with the new device.',
    },
    {
      question: 'Will you help set up the app?',
      answer: 'We provide basic device setup assistance including Wi-Fi connection. For full app configuration, smart device provides step-by-step guides in their app.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve Thousand Oaks, Westlake Village, Newbury Park, Agoura Hills, Camarillo, Moorpark, Simi Valley, Oak Park, and nearby cities.',
    },
  ];

  return (
    <PageContainer id='ap'>
      {/* Hero Section */}
      <HeroContainer>
        <TabletContainer>
          <ContentWrapper>
            <Title>
              <span>Smart Doorbell</span> Installation & Repair{' '}
              <span>in</span> Thousand Oaks & Ventura County
            </Title>

            <ReviewsWidget />

            <Description>
              <InlineLink to="/about">Airtexno Appliance Repair</InlineLink> provides smart doorbell
              installation and repair for homeowners who need a new smart doorbell installed, an old unit replaced, wiring checked, or
              an existing video doorbell repaired or re-mounted. We service Ring, Nest, Eufy, Arlo,
              and other wired or battery-powered smart doorbells across Thousand Oaks and
              Ventura County. Whether you need a new installation, troubleshooting, wiring,
              replacement, or repair, we help make sure everything is mounted and working
              correctly.
            </Description>

            <FeaturesList>
              <FeatureItem>
                <span>🔔</span>
                <p>Wired and battery-powered Ring installation</p>
              </FeatureItem>
              <FeatureItem>
                <span>⏱️</span>
                <p>Same-day service available in Ventura County</p>
              </FeatureItem>
              <FeatureItem>
                <span>🏠</span>
                <p>Clean and professional mounting</p>
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
                alt='Doorbell camera device'
                loading='lazy'
              />
              <Image
                src={image4}
                alt='Modern doorbell camera'
                loading='lazy'
              />
            </ImageContainer>
          )}
        </TabletContainer>

        {!isDesktop && (
          <ImageContainer>
            <Image
              src={image1}
              alt='Doorbell camera device'
              loading='lazy'
            />
            <Image
              src={image4}
              alt='Modern doorbell camera'
              loading='lazy'
            />
          </ImageContainer>
        )}
      </HeroContainer>

      <Partners />

      {/* Services Section */}
      <Section>
        <SectionContainer>
          <SectionTitle>
            What Our Smart Doorbell Installation Service May Include
          </SectionTitle>
          <SectionDescription>
            <InlineLink to="/about">Airtexno Appliance Repair</InlineLink> provides doorbell with camera installation in
            Thousand Oaks and nearby cities. We help homeowners install and set
            up smart doorbells neatly and professionally.
          </SectionDescription>

          <SectionGrid>
            <div>
              <ServiceList>
                <ServiceItem>Installation of smart doorbell device</ServiceItem>
                <ServiceItem>Repair of smart doorbell device</ServiceItem>
                <ServiceItem>Replacement of existing doorbell button</ServiceItem>
                <ServiceItem>Mounting on exterior wall or door frame</ServiceItem>
                <ServiceItem>Basic wiring connection for compatible systems</ServiceItem>
                <ServiceItem>Battery-powered camera doorbell installation</ServiceItem>
                <ServiceItem>Wired video doorbell device installation</ServiceItem>
                <ServiceItem>Basic device setup assistance</ServiceItem>
                <ServiceItem>Checking doorbell transformer compatibility</ServiceItem>
              </ServiceList>
            </div>
            <SectionImage
              src={image3}
              alt='Ring doorbell installation'
              loading='lazy'
            />
          </SectionGrid>
        </SectionContainer>
      </Section>

      {/* Why Install Section */}
      <Section $highlight>
        <SectionContainer>
          <SectionGrid>
            <SectionImage
              src={image2}
              alt='Ring camera on door'
              loading='lazy'
            />
            <div>
              <SectionTitle>Why Homeowners Install Smart Doorbells</SectionTitle>
              <ServiceList $single>
                <ServiceItem>See who is at the door from a phone</ServiceItem>
                <ServiceItem>Get motion alerts</ServiceItem>
                <ServiceItem>Improve front door visibility</ServiceItem>
                <ServiceItem>Replace an old or damaged doorbell</ServiceItem>
                <ServiceItem>Add convenience for package deliveries</ServiceItem>
                <ServiceItem>Get safety alerts</ServiceItem>
                <ServiceItem>Upgrade to a modern smart home device</ServiceItem>
              </ServiceList>
            </div>
          </SectionGrid>
        </SectionContainer>
      </Section>

      {/* Wired vs Battery */}
      <Section>
        <SectionContainer>
          <SectionTitle>Wired and Battery Smart Doorbell Installation</SectionTitle>
          <SectionDescription>
            Some homeowners prefer a battery-powered video doorbell for easier
            installation, while others want a wired setup connected to the
            existing doorbell system. We can help with both options and check
            whether the existing location, wiring, and transformer are suitable
            for installation. We work with popular brands such
            as Ring, Nest, Eufy, Arlo and other brands.
          </SectionDescription>
          <ServiceList $single>
            <ServiceItem>Battery-powered smart doorbell device installation</ServiceItem>
            <ServiceItem>Basic wired doorbell with camera installation</ServiceItem>
            <ServiceItem>Replacement of old doorbell button with smart doorbell</ServiceItem>
            <ServiceItem>Checking basic compatibility before installation</ServiceItem>
          </ServiceList>
        </SectionContainer>
      </Section>

      {/* Before Scheduling */}
      <Section $highlight>
        <SectionContainer>
          <SectionTitle>Before Scheduling Service</SectionTitle>
          <SectionDescription>
            Before scheduling installation, here are a few helpful things to
            check:
          </SectionDescription>
          <ServiceList $single>
            <ServiceItem>Make sure you have the smart device available</ServiceItem>
            <ServiceItem>Check whether you want a wired or battery-powered installation</ServiceItem>
            <ServiceItem>Confirm your home Wi-Fi signal is strong near the front door</ServiceItem>
            <ServiceItem>If replacing an old doorbell, note whether the current button still works</ServiceItem>
          </ServiceList>
          <SectionDescription>
            If you are not sure which model is best or whether your current
            setup is compatible, we can inspect the location and help you choose
            the next step.
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

export default RingDoorbell;

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
