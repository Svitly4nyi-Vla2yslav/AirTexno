import React, { useRef } from 'react';
import { motion, easeOut } from 'framer-motion';
import styled, { css, keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import image1 from '../../assets/icons/news&tips/News Article 2 Image Container.png';
import image2 from '../../assets/icons/news&tips/Review Image-Elizabeth Castorena.png';
import image3 from '../../assets/icons/news&tips/Review Image-Wendy Bailey.png';
import image4 from '../../assets/icons/news&tips/Review Image-sanal-avatar.png';
import { Autoplay, Navigation } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';

// Дані для слайдів
const slides = [
  {
    img: image1,
    title: 'APPLIANCE INSTALLATION SERVICES',
    description: 'Professional installation for appliances, ensuring safety.',
  },
  {
    img: image2,
    title: 'WHEN YOUR REFRIGERATOR STOPS COOLING: URGENT REPAIR SIGNS',
    description: "Don't wait for food to spoil. Know the signs needing urgent help.",
  },
  {
    img: image3,
    title: 'WASHING MACHINE TROUBLESHOOTING',
    description: 'Quick solutions for common washing machine issues.',
  },
  {
    img: image4,
    title: 'DISHWASHER MAINTENANCE TIPS',
    description: 'Keep your dishwasher running smoothly with these tips.',
  },
];

// Анімаційні варіанти для заголовків
const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut
    }
  }
};

// Анімаційні варіанти для карток
const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.95,
    rotateX: -5
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: easeOut
    }
  },
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: {
      duration: 0.3,
      ease: easeOut
    }
  }
};

// Анімаційні варіанти для зображень
const imageVariants = {
  hidden: { 
    opacity: 0,
    scale: 1.1,
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeOut
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4
    }
  }
};

// Анімаційні варіанти для тексту
const textVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut
    }
  }
};

const NewsAndTips: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const slidesPerView = isMobile ? 1 : isTablet ? 2 : isDesktop ? 2 : 2;
  const shouldLoop = slides.length > slidesPerView;

  return (
    <Wrapper>
      <HeaderSection>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={titleVariants}
        >
          <Subtitle>NEWS &amp; TIPS</Subtitle>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={titleVariants}
          transition={{ delay: 0.1 }}
        >
          <Title>
            APPLIANCE <span>ADVICE</span> REPAIR <span>TIPS</span> BLOG
          </Title>
        </motion.div>
      </HeaderSection>
      
      <NavigationContainer>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, delay: 0.1 }}
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
                variants={cardVariants}
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card $isTablet={isTablet}>
                  <motion.div
                    variants={imageVariants}
                    whileHover="hover"
                  >
                    <Image src={slide.img} alt={slide.title} $isTablet={isTablet} />
                  </motion.div>
                  
                  <CardText>
                    <motion.div
                      variants={textVariants}
                      transition={{ delay: index * 0.1 + 0.1 }}
                    >
                      <CardTitle $isTablet={isTablet}>{slide.title}</CardTitle>
                    </motion.div>
                    
                    <motion.div
                      variants={textVariants}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <CardDescription $isTablet={isTablet}>{slide.description}</CardDescription>
                    </motion.div>
                  </CardText>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </Wrapper>
  );
};

export default NewsAndTips;

// ================= styled-components =================

const SwiperContainer = styled.div<{ $isTablet: boolean }>`
  width: 100%;
  padding: 20px 0;
  
  .swiper-slide {
    width: ${props => props.$isTablet ? '50%' : 'auto'};
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

    ${props => props.bg === '#DBDBD8' && css`
      background-color: #c8c8c5;
      svg {
        animation: ${slideInLeft} 0.4s ease;
      }
    `}

    ${props => props.bg === '#3098EE' && css`
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

const Card = styled.div<{ $isTablet: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: ${props => props.$isTablet ? '100%' : '288px'};
  height: 517px;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    max-width: ${props => props.$isTablet ? '100%' : '288px'};
  }

  @media screen and (min-width: 1440px) {
    width: 656px;
  }
`;

const Image = styled.img<{ $isTablet: boolean }>`
  border-radius: 8px;
  width: ${props => props.$isTablet ? '100%' : '288px'};
  height: 395px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    max-width: ${props => props.$isTablet ? '100%' : '288px'};
  }

  @media screen and (min-width: 1440px) {
  max-width: ${props => props.$isTablet ? '100%' : '656px'};
  }
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
   border-radius: 10px;
`;

const CardTitle = styled.p<{ $isTablet: boolean }>`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: ${props => props.$isTablet ? '24px' : '32px'};
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;

const CardDescription = styled.p<{ $isTablet: boolean }>`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: ${props => props.$isTablet ? '14px' : '16px'};
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;