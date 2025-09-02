// HeaderHero.tsx
import React from 'react';
import { motion, useScroll, useTransform, easeOut, backOut } from 'framer-motion';
import {
  HeroContainer,
  HeroImage,
  ContentWrapper,
  TextBlock,
  HeroTitle,
  HeroSubtitle,
  ButtonGroup,
  PrimaryButton,
} from './Hero.styled';
import HeroImages from '../../assets/icons/Hero Image.png';
import { TransparentButton } from '../Header/Header.styled';
import AutoVerticalSwiper from './Swipper';
import { useMediaQuery } from 'react-responsive';

// Анімаційні варіанти для тексту
const textVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

// Анімаційні варіанти для кнопок
const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: backOut,
    },
  },
};

export const Hero: React.FC = () => {
  const isDeckstop = useMediaQuery({ query: '(min-width: 1440px)' });

  // Використовуємо хук скролу для паралакс ефекту
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.03]);
  const rotate = useTransform(scrollY, [0, 600], [0, -2]);

  return (
    <HeroContainer id='hero'>
      <motion.div
        style={{
          y: y,
          opacity: opacity,
          scale: scale,
          rotate: rotate,
        }}
      >
        <HeroImage
          src={HeroImages}
          alt='Hero Image'
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(0)',
          }}
        />
      </motion.div>

      {isDeckstop && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5, ease: easeOut }}
        >
          <AutoVerticalSwiper />
        </motion.div>
      )}

      <ContentWrapper>
        <TextBlock>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariants}
          >
            <HeroTitle>Your Local Appliance Repair &amp; Maintenance Specialists</HeroTitle>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariants}
            transition={{ delay: 0.2 }}
          >
            <HeroSubtitle>
              We provide reliable appliance repair services, so your fridge, oven, or washer works
              like new — and you can get back to your day.
            </HeroSubtitle>
          </motion.div>
        </TextBlock>

        <ButtonGroup>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            variants={buttonVariants}
          >
            <PrimaryButton to='/contact#ap'>Contact Us</PrimaryButton>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            variants={buttonVariants}
            transition={{ delay: 0.1 }}
          >
            <TransparentButton>
              <a href='tel:+18055002705'> Call Us</a>
            </TransparentButton>
          </motion.div>
        </ButtonGroup>
      </ContentWrapper>
    </HeroContainer>
  );
};
