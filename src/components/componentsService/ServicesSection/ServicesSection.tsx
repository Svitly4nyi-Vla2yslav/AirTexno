import React from 'react';
import { motion, useScroll, useTransform, easeOut, backOut } from 'framer-motion';
import ServicesImage from '../../../assets/icons/ServicesImage.png';
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

const ServicesSection: React.FC = () => {
  const isDeckstop = useMediaQuery({ query: '(min-width: 1440px)' });
  const { scrollY } = useScroll();

  // Паралакс ефекти для зображення
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const rotate = useTransform(scrollY, [0, 800], [0, -2]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.05]);

  // Унікальні анімаційні варіанти
  const floatingAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
      rotate: -10,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: easeOut,
        delay: 0.2,
      },
    },
    hover: {
      y: -15,
      rotate: 2,
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  const numberGlowAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      textShadow: '0 0 0px rgba(48, 152, 238, 0)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      textShadow: [
        '0 0 0px rgba(48, 152, 238, 0)',
        '0 0 20px rgba(48, 152, 238, 0.8)',
        '0 0 10px rgba(48, 152, 238, 0.4)',
      ],
      transition: {
        duration: 1.5,
        ease: easeOut,
        delay: 0.1,
      },
    },
  };

  const textRevealAnimation = {
    hidden: {
      opacity: 0,
      x: -50,
      skewX: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: {
        duration: 0.8,
        ease: backOut,
      },
    },
  };

  const cardFlipAnimation = {
    hidden: {
      opacity: 0,
      rotateY: 90,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: easeOut,
        delay: 0.3,
      },
    },
    hover: {
      rotateY: 5,
      scale: 1.02,
      boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
  };

  const buttonPulseAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: '0 0 30px rgba(48, 152, 238, 0.4)',
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const image3DEffect = {
    hidden: {
      opacity: 0,
      rotateX: 45,
      scale: 1.2,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: easeOut,
      },
    },
    hover: {
      rotateX: 5,
      rotateY: 5,
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  return (
    <Section id='all'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.3 }}
        variants={textRevealAnimation}
      >
        <SmallText>Our Service</SmallText>
      </motion.div>

      <ContentWrapper>
        <ServiceBlock>
          <TitleRow>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false, amount: 0.3 }}
              variants={numberGlowAnimation}
            >
              <Number>01.</Number>
            </motion.div>

            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false, amount: 0.3 }}
              variants={textRevealAnimation}
              transition={{ delay: 0.2 }}
            >
              <TitleBlue>Appliance Care & Tune-Ups</TitleBlue>
            </motion.div>
          </TitleRow>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            variants={textRevealAnimation}
            transition={{ delay: 0.3 }}
          >
            <Title>Professional Installations</Title>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            variants={textRevealAnimation}
            transition={{ delay: 0.4 }}
          >
            <Title>Fast & Reliable Emergency Repairs</Title>
          </motion.div>

          {isDeckstop && (
            <InfoBlock>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, amount: 0.3 }}
                variants={textRevealAnimation}
                transition={{ delay: 0.5 }}
              >
                <InfoText>Do you want to know more about our service?</InfoText>
              </motion.div>

              <motion.div variants={buttonPulseAnimation}  whileTap='tap'>
                <Button to='/fridge#ap'>
                  <ButtonText>Learn more</ButtonText>
                </Button>
              </motion.div>
            </InfoBlock>
          )}
        </ServiceBlock>

        <ImageSection>
          <motion.div
            style={{ y, rotate, scale }}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            variants={image3DEffect}
            whileHover='hover'
          >
            <ServiceImage src={ServicesImage} alt='Services Image' />
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            variants={cardFlipAnimation}
            whileHover='hover'
          >
            <Container>
              <HeaderWrapper>
                <TitleRow>
                  <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: false, amount: 0.3 }}
                    variants={textRevealAnimation}
                  >
                    <TitleCard>Preventive Care</TitleCard>
                  </motion.div>
                </TitleRow>

                <TextBlock>
                  <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: false, amount: 0.3 }}
                    variants={textRevealAnimation}
                    transition={{ delay: 0.2 }}
                  >
                    <Description>
                      Preventive Care to Keep Your Appliances Running Longer Regular maintenance
                      keeps your appliances working smoothly, prevents costly breakdowns, and
                      extends their lifespan. We take the time to inspect and fine-tune your
                      appliances, so they perform at their best and last longer.
                    </Description>
                  </motion.div>
                </TextBlock>
              </HeaderWrapper>

              <ButtonRow>
                <motion.div variants={buttonPulseAnimation} whileHover='hover' whileTap='tap'>
                  <PrimaryButton>
                    <ButtonTextWhite>Contact Us</ButtonTextWhite>
                  </PrimaryButton>
                </motion.div>

                <motion.div
                  variants={buttonPulseAnimation}
                  whileHover='hover'
                  whileTap='tap'
                  transition={{ delay: 0.1 }}
                >
                  <SecondaryButton>
                    <a href='tel:+18055002705'>
                      <ButtonTextBlack>Call Us</ButtonTextBlack>
                    </a>
                  </SecondaryButton>
                </motion.div>
              </ButtonRow>
            </Container>
          </motion.div>
        </ImageSection>

        {!isDeckstop && (
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            variants={floatingAnimation}
          >
            <InfoBlock>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: false, amount: 0.3 }}
                variants={textRevealAnimation}
              >
                <InfoText>Do you want to know more about our service?</InfoText>
              </motion.div>

              <motion.div variants={buttonPulseAnimation} whileHover='hover' whileTap='tap'>
                <Button to='/fridge#ap'>
                  <ButtonText>Learn more</ButtonText>
                </Button>
              </motion.div>
            </InfoBlock>
          </motion.div>
        )}
      </ContentWrapper>
    </Section>
  );
};

export default ServicesSection;
