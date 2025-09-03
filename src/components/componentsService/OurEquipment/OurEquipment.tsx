import React, { useRef } from 'react';
import { motion, easeOut, backOut } from 'framer-motion';
import styled, { css, keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import image1 from '../../../assets/icons/equipment/Image1.png';
import image2 from '../../../assets/icons/equipment/Image2.png';
import image3 from '../../../assets/icons/equipment/Image3.png';
import image4 from '../../../assets/icons/equipment/Image4.png';
import image5 from '../../../assets/icons/equipment/Image5.png';
import { Autoplay, Navigation } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';
import Partners from '../../componentsService/PartnersBanner/PartnersBanner';

// Дані для слайдів
const slides = [
  {
    img: image1,
    title: 'Refrigerator',
    description: 'Fixing cooling issues and leaks.',
  },
  {
    img: image2,
    title: 'Washing Machine',
    description: 'Restoring heating and control functions.',
  },
  {
    img: image3,
    title: 'Oven',
    description: 'Fixing magnetron and door issues.',
  },
  {
    img: image4,
    title: 'Microwave',
    description: 'Fixing cooling issues and leaks.',
  },
  {
    img: image5,
    title: 'Dishwasher',
    description: 'Repairing leaks and drainage problems.',
  },
];

const OurEquipment: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const slidesPerView = isMobile ? 1 : isTablet ? 3 : isDesktop ? 4 : 4;
  const shouldLoop = slides.length > slidesPerView;

  // Унікальні анімаційні варіанти
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotate: -5,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: easeOut,
        delay: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -45,
      scale: 0.8,
      filter: 'blur(10px)',
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: easeOut,
        delay: index * 0.15,
      },
    }),
    hover: {
      y: -20,
      rotateY: 10,
      scale: 1.05,
      boxShadow: '0 30px 60px rgba(0,0,0,0.25)',
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.3,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.5,
        ease: easeOut,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 2,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const textSlideVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      y: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: backOut,
        delay: 0.3,
      },
    },
    hover: {
      x: 10,
      transition: {
        duration: 0.3,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      boxShadow: '0 0 25px rgba(48, 152, 238, 0.6)',
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
    tap: {
      scale: 0.95,
      rotate: -2,
    },
  };

  return (
    <Wrapper>
      <HeaderSection>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <Subtitle>Our Equipment</Subtitle>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
          transition={{ delay: 0.1 }}
        >
          <Title>
            <span>Trusted</span> brands we service
          </Title>
        </motion.div>
      </HeaderSection>

      <Partners />

      <NavigationContainer>
        <motion.div
          variants={buttonVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          whileHover='hover'
          whileTap='tap'
        >
          <NavButton onClick={() => swiperRef.current?.slidePrev()} bg='#DBDBD8'>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M15 18L9 12L15 6'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </NavButton>
        </motion.div>

        <motion.div
          variants={buttonVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1 }}
          whileHover='hover'
          whileTap='tap'
        >
          <NavButton onClick={() => swiperRef.current?.slideNext()} bg='#3098EE'>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M9 18L15 12L9 6'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </NavButton>
        </motion.div>
      </NavigationContainer>

      <SwiperContainer $isTablet={isTablet}>
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={swiper => (swiperRef.current = swiper)}
          spaceBetween={isTablet ? 20 : 20}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            waitForTransition: true,
            pauseOnMouseEnter: true,
          }}
          speed={6000}
          loop={shouldLoop}
          slidesPerView={slidesPerView}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                custom={index}
                variants={cardVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                whileHover='hover'
              >
                <Card $isTablet={isTablet}>
                  <motion.div variants={imageVariants} whileHover='hover'>
                    <Image src={slide.img} alt={slide.title} $isTablet={isTablet} />
                  </motion.div>

                  <motion.div variants={textSlideVariants} whileHover='hover'>
                    <CardText>
                      <CardTitle $isTablet={isTablet}>{slide.title}</CardTitle>
                      <CardDescription $isTablet={isTablet}>{slide.description}</CardDescription>
                    </CardText>
                  </motion.div>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </Wrapper>
  );
};

export default OurEquipment;

// ================= styled-components =================

const SwiperContainer = styled.div<{ $isTablet: boolean }>`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: ${props => (props.$isTablet ? '50%' : 'auto')};
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(2px);
  }
  to {
    transform: translateX(0);
  }
`;

export const NavButton = styled.button<{ bg: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: ${props => props.bg};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    animation: ${pulseAnimation} 0.6s ease;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    &::before {
      opacity: 1;
    }

    ${props =>
      props.bg === '#DBDBD8' &&
      css`
        background-color: #c8c8c5;
        svg {
          animation: ${slideInLeft} 0.4s ease;
        }
      `}

    ${props =>
      props.bg === '#3098EE' &&
      css`
        background-color: #2580d6;
        svg {
          animation: ${slideInRight} 0.4s ease;
        }
      `}
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 16px;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 60px;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const Subtitle = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`;

const Title = styled.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  color: var(--black-500);

  span {
    color: var(--blue-500);
  }

  @media screen and (min-width: 768px) {
    font-size: 72px;
    min-width: 750px;

    span {
      font-size: 72px;
    }
  }
`;

const Card = styled.div<{ $isTablet?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  height: 485px;
  margin: 0 0px;
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;
  perspective: 1000px;
`;

const Image = styled.img<{ $isTablet?: boolean }>`
  border-radius: 8px;
  width: 322px;
  height: 485px;
  object-fit: cover;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 200px;
  background-color: white;
  position: absolute;
  bottom: 10px;
  padding: 16px;
  left: 10px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transform-style: preserve-3d;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
`;

const CardTitle = styled.p<{ $isTablet: boolean }>`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${props => (props.$isTablet ? '24px' : '28px')};
  line-height: 90%;
  color: var(--black-500);
  margin: 0;

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;

const CardDescription = styled.p<{ $isTablet: boolean }>`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${props => (props.$isTablet ? '14px' : '16px')};
  line-height: 125%;
  color: var(--black-500);
  margin: 0;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
