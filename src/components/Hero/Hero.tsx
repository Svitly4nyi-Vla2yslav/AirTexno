import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, easeOut } from 'framer-motion';
import {
  HeroContainer,
  VideoBackground,
  ContentWrapper,
  TextBlock,
  HeroTitle,
  HeroSubtitle,
  ButtonGroup,
  PrimaryButton,
  VideoOverlay
} from './Hero.styled';
import HeroVideo from '../../assets/video/Sub_Zero_Refrigerator_Cinematic_Reveal.mov'; // Імпортуйте ваше відео
import { TransparentButton } from '../Header/Header.styled';
import AutoVerticalSwiper from './Swipper';
import { useMediaQuery } from 'react-responsive';

// Анімаційні варіанти для тексту - оптимізовані
const textVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

// Анімаційні варіанти для кнопок
const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export const Hero: React.FC = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const [hasAnimated, setHasAnimated] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: "-10%" });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // Оптимізований паралакс для мобільних пристроїв
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, isDesktop ? 80 : isTablet ? 20 : 40]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Функція для запуску відео
  const handleVideoLoad = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Auto-play was prevented:', error);
      });
    }
  };

  return (
    <>
      <HeroContainer id='hero' ref={heroRef}>
        <motion.div
          style={{
            y: y,
            opacity: opacity,
          }}
        >
          <VideoBackground
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={handleVideoLoad}
            preload="auto"
          >
            <source src={HeroVideo} type="video/mp4" />
            {/* Додайте альтернативні формати для кращої сумісності */}
            <source src={HeroVideo.replace('.mp4', '.webm')} type="video/webm" />
            Ваш браузер не підтримує відео тег.
          </VideoBackground>
          <VideoOverlay />
        </motion.div>

        {isDesktop && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <AutoVerticalSwiper />
          </motion.div>
        )}

        <ContentWrapper>
          <TextBlock>
            <motion.div
              initial='hidden'
              animate={hasAnimated ? 'visible' : 'hidden'}
              variants={textVariants}
            >
              <HeroTitle>Your Local Appliance Repair &amp; Maintenance Specialists</HeroTitle>
            </motion.div>

            <motion.div
              initial='hidden'
              animate={hasAnimated ? 'visible' : 'hidden'}
              variants={textVariants}
              transition={{ delay: 0.1 }}
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
              animate={hasAnimated ? 'visible' : 'hidden'}
              variants={buttonVariants}
            >
              <PrimaryButton to='/contact#ap'>Contact Us</PrimaryButton>
            </motion.div>

            <motion.div
              initial='hidden'
              animate={hasAnimated ? 'visible' : 'hidden'}
              variants={buttonVariants}
              transition={{ delay: 0.05 }}
            >
              <TransparentButton>
                <a href='tel:+18055002705'>Call Us</a>
              </TransparentButton>
            </motion.div>
          </ButtonGroup>
        </ContentWrapper>
      </HeroContainer>
    </>
  );
};