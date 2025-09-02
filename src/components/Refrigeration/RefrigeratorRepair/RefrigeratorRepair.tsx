import React, { useRef } from 'react';
import { motion, useScroll, useTransform, easeOut, backOut } from 'framer-motion';
import styled, { css, keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import image1 from '../../../assets/icons/frigde/1.png';
import image2 from '../../../assets/icons/frigde/2.png';
import image3 from '../../../assets/icons/frigde/3.png';
import image4 from '../../../assets/icons/frigde/4.png';
import image5 from '../../../assets/icons/frigde/5.png';
import { Autoplay, Navigation } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';

// Дані для слайдів
const slides = [
  {
    img: image1,
    title: 'Built-In Refrigerators',
    description:
      'High-end models seamlessly integrated into your kitchen. We specialize in servicing premium brands like Sub-Zero, Viking, Thermador, and Monogram.',
  },
  {
    img: image2,
    title: 'Freezers',
    description:
      'From upright and chest freezers to commercial units — we fix cooling issues, thermostat problems, and compressor failures.',
  },
  {
    img: image3,
    title: 'French Door & Side-by-Side Refrigerators',
    description:
      'Modern models with large capacity and dual-door convenience. We repair cooling imbalances, ice maker failures, and electronic control issues.',
  },
  {
    img: image4,
    title: 'Wine Coolers',
    description:
      'Repairs for temperature fluctuations, thermostat malfunctions, and compressor failures to keep your wine collection safe.',
  },
  {
    img: image5,
    title: 'Two-compressor refrigerators',
    description:
      'Advanced appliances with independent systems for cooling and freezing, ensuring flexibility and reliability.',
  },
];

const RefrigeratorRepair: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1439px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const slidesPerView = isMobile ? 1 : isTablet ? 2 : isDesktop ? 4 : 2;
  const shouldLoop = slides.length > slidesPerView;

  const { scrollY } = useScroll();

  // Паралакс ефекти
  const titleY = useTransform(scrollY, [0, 500], [0, 80]);
  const titleScale = useTransform(scrollY, [0, 300], [1, 1.05]);

  // Унікальні анімаційні варіанти
  const frostEffect = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: 'blur(20px) brightness(0.8)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px) brightness(1)',
      transition: {
        duration: 1.2,
        ease: backOut,
      },
    },
  };

  const iceSlideAnimation = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      y: 50,
      rotate: index % 2 === 0 ? -5 : 5,
      scale: 0.7,
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        delay: index * 0.2,
        ease: backOut,
      },
    }),
    hover: {
      y: -20,
      scale: 1.05,
      rotate: 0,
      boxShadow: '0 30px 60px rgba(0,0,0,0.25)',
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  const coolContentReveal = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: easeOut,
        delay: 0.3,
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        ease: easeOut,
      },
    },
  };

  const chillButtonEffect = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
    hover: {
      scale: 1.15,
      backgroundColor: '#2a8ad8',
      boxShadow: '0 0 40px rgba(48, 152, 238, 0.6)',
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  const titleFreezeAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      textShadow: '0 0 0px rgba(255, 255, 255, 0)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      textShadow: [
        '0 0 0px rgba(255, 255, 255, 0)',
        '0 0 30px rgba(255, 255, 255, 0.8)',
        '0 0 15px rgba(255, 255, 255, 0.4)',
      ],
      transition: {
        duration: 1.5,
        ease: easeOut,
      },
    },
  };

  return (
    <Wrapper>
      <motion.div
        style={{ y: titleY, scale: titleScale }}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={titleFreezeAnimation}
      >
        <HeaderSection>
          <Subtitle>Refrigerator Repair</Subtitle>
          <Title>
            We repair <span> all types </span> of refrigerators
          </Title>
        </HeaderSection>
      </motion.div>

      <SwiperContainer>
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={swiper => (swiperRef.current = swiper)}
          spaceBetween={20}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            waitForTransition: true,
            pauseOnMouseEnter: true,
          }}
          speed={6000}
          loop={shouldLoop}
          slidesPerView={slidesPerView}
          centeredSlides={isMobile}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                custom={index}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                variants={iceSlideAnimation}
                whileHover='hover'
              >
                <Card>
                  <motion.div
                    variants={frostEffect}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image src={slide.img} alt={slide.title} />
                  </motion.div>

                  <motion.div variants={coolContentReveal} whileHover='hover'>
                    <CardText>
                      <CardTitle>{slide.title}</CardTitle>
                      <CardDescription>{slide.description}</CardDescription>
                    </CardText>
                  </motion.div>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <NavigationContainer>
          <motion.div
            variants={chillButtonEffect}
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
            variants={chillButtonEffect}
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
      </SwiperContainer>
    </Wrapper>
  );
};

export default RefrigeratorRepair;

// ================= styled-components =================

const SwiperContainer = styled.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: 100%;
  }
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

export const NavigationContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  position: relative;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    max-width: 322px;
  }

  @media screen and (min-width: 1440px) {
    width: fit-content;
  }
`;

const Image = styled.img`
  border-radius: 8px;
  width: 322px;
  height: 485px;
  object-fit: cover;
  transition: all 0.3s ease;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  bottom: 1px;
  background: var(--white);
  padding: 10px;
  margin: 5px;
  border-radius: 4px;
  transition: all 0.3s ease;
`;

const CardTitle = styled.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;

const CardDescription = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
