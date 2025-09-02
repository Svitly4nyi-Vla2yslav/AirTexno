import React from 'react';
import { motion, useScroll, useTransform, easeOut } from 'framer-motion';
import {
  Container,
  Title,
  Subtitle,
  ImagesContainer,
  ImageRow,
  TeamImage,
} from './TeamSection.styles';
import image from '../../../assets/icons/about/Why Airtexno Image 1.png';
import image1 from '../../../assets/icons/about/Why Airtexno Image 2.png';
import image2 from '../../../assets/icons/about/Why Airtexno Image 3.png';
import image3 from '../../../assets/icons/about/Why Airtexno Image 4.png';

const TeamSection: React.FC = () => {
  const { scrollY } = useScroll();

  // Паралакс ефекти для заголовків
  const titleY = useTransform(scrollY, [0, 300], [0, 50]);
  const titleOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);

  // Унікальні анімаційні варіанти
  const titleStaggerAnimation = {
    hidden: {
      opacity: 0,
      y: 60,
      skewY: 5,
    },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        duration: 1.2,
        ease: easeOut,
      },
    },
  };

  const imageMorphAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      borderRadius: '50%',
      filter: 'blur(10px) grayscale(100%)',
    },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      borderRadius: '8px',
      filter: 'blur(0px) grayscale(0%)',
      transition: {
        duration: 1.4,
        delay: index * 0.2,
        ease: easeOut,
      },
    }),
    hover: {
      scale: 1.08,
      borderRadius: '4px',
      filter: 'grayscale(0%) brightness(110%)',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
      zIndex: 10,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const containerGlowAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: easeOut,
        staggerChildren: 0.1,
      },
    },
  };

  const spanHighlightAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      color: '#000000',
    },
    visible: {
      opacity: 1,
      scale: 1,
      color: '#3098EE',
      transition: {
        duration: 1.5,
        ease: easeOut,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.1,
      textShadow: '0 0 20px rgba(48, 152, 238, 0.8)',
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
  };

  const rowFloatAnimation = {
    hidden: {
      opacity: 0,
      y: 80,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: easeOut,
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  return (
    <Container>
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={containerGlowAnimation}
      >
        <motion.div variants={titleStaggerAnimation}>
          <Title>Meet the Team</Title>
        </motion.div>

        <motion.div variants={titleStaggerAnimation} transition={{ delay: 0.2 }}>
          <Subtitle>
            Professionals committed to{' '}
            <motion.span variants={spanHighlightAnimation} whileHover='hover'>
              quality
            </motion.span>{' '}
            service
          </Subtitle>
        </motion.div>
      </motion.div>

      <ImagesContainer>
        <motion.div
          variants={rowFloatAnimation}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          whileHover='hover'
        >
          <ImageRow>
            <motion.div custom={0} variants={imageMorphAnimation} whileHover='hover'>
              <TeamImage src={image} alt='Team Member 1' />
            </motion.div>

            <motion.div custom={1} variants={imageMorphAnimation} whileHover='hover'>
              <TeamImage src={image1} alt='Team Member 2' />
            </motion.div>
          </ImageRow>
        </motion.div>

        <motion.div
          variants={rowFloatAnimation}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3 }}
          whileHover='hover'
        >
          <ImageRow>
            <motion.div custom={2} variants={imageMorphAnimation} whileHover='hover'>
              <TeamImage src={image2} alt='Team Member 3' />
            </motion.div>

            <motion.div custom={3} variants={imageMorphAnimation} whileHover='hover'>
              <TeamImage src={image3} alt='Team Member 4' />
            </motion.div>
          </ImageRow>
        </motion.div>
      </ImagesContainer>
    </Container>
  );
};

export default TeamSection;
