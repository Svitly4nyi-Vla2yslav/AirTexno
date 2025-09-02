import React from 'react';
import { motion, useScroll, useTransform, easeOut, easeInOut } from 'framer-motion';
import ServicesImage from '../../assets/icons/ServicesImage.png';
import {
  Section,
  SmallText,
  ContentWrapper,
  ServiceBlock,
  TitleRow,
  TitleBlue,
  Title,
  ServiceImage,
  InfoBlock,
  InfoText,
  ButtonText,
  Button,
  Number,
  ButtonRow,
  ButtonTextBlack,
  ButtonTextWhite,
  Container,
  Description,
  HeaderWrapper,
  PrimaryButton,
  SecondaryButton,
  TextBlock,
  ImageSection,
  TitleCard,
} from './ServicesSection.styled';
import { useMediaQuery } from 'react-responsive';

// Анімаційні варіанти
const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easeOut
    }
  }
};

const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -80,
    rotate: -2 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.9,
      ease: easeOut
    }
  }
};

const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 80,
    scale: 1.05 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: easeOut
    }
  }
};

const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: easeInOut
    }
  }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const ServicesSection: React.FC = () => {
  const isDeckstop = useMediaQuery({ query: '(min-width: 1440px)' });
  
  // Анімації для паралакс ефекту
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, -50]);
  const contentScale = useTransform(scrollY, [0, 400], [1, 1.02]);

  return (
    <Section>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
      >
        <SmallText>Our Service</SmallText>
      </motion.div>
      
      <ContentWrapper>
        <ServiceBlock>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInLeft}>
              <TitleRow>
                <Number>01.</Number>
                <TitleBlue>Appliance Care & Tune-Ups</TitleBlue>
              </TitleRow>
            </motion.div>
            
            <motion.div variants={fadeInLeft} transition={{ delay: 0.1 }}>
              <Title>Professional Installations</Title>
            </motion.div>
            
            <motion.div variants={fadeInLeft} transition={{ delay: 0.2 }}>
              <Title>Fast & Reliable Emergency Repairs</Title>
            </motion.div>
          </motion.div>

          {isDeckstop && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <InfoBlock>
                <InfoText>Do you want to know more about our service?</InfoText>
                <Button to='/fridge#ap'>
                  <ButtonText>Learn more</ButtonText>
                </Button>
              </InfoBlock>
            </motion.div>
          )}
        </ServiceBlock>

        <ImageSection>
          <motion.div
            style={{ y: imageY, scale: contentScale }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={scaleIn}
          >
            <ServiceImage src={ServicesImage} alt='Services Image' />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInRight}
          >
            <Container>
              <HeaderWrapper>
                <motion.div
                  variants={fadeInRight}
                  transition={{ delay: 0.1 }}
                >
                  <TitleRow>
                    <TitleCard>Preventive Care</TitleCard>
                  </TitleRow>
                </motion.div>
                
                <motion.div
                  variants={fadeInRight}
                  transition={{ delay: 0.2 }}
                >
                  <TextBlock>
                    <Description>
                      Preventive Care to Keep Your Appliances Running Longer Regular maintenance keeps
                      your appliances working smoothly, prevents costly breakdowns, and extends their
                      lifespan. We take the time to inspect and fine-tune your appliances, so they
                      perform at their best and last longer.
                    </Description>
                  </TextBlock>
                </motion.div>
              </HeaderWrapper>
              
              <motion.div
                variants={fadeInRight}
                transition={{ delay: 0.3 }}
              >
                <ButtonRow>
                  <PrimaryButton to='/contact#ap'>
                    <ButtonTextWhite>Contact Us</ButtonTextWhite>
                  </PrimaryButton>
                  <SecondaryButton>
                    <a href='tel:+18055002705'>
                      <ButtonTextBlack>Call Us</ButtonTextBlack>
                    </a>
                  </SecondaryButton>
                </ButtonRow>
              </motion.div>
            </Container>
          </motion.div>
        </ImageSection>

        {!isDeckstop && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            <InfoBlock>
              <InfoText>Do you want to know more about our service?</InfoText>
              <Button to='/fridge#ap'>
                <ButtonText>Learn more</ButtonText>
              </Button>
            </InfoBlock>
          </motion.div>
        )}
      </ContentWrapper>
    </Section>
  );
};

export default ServicesSection;