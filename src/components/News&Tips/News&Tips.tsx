import React, { useRef } from 'react';
import { motion, easeOut } from 'framer-motion';
import styled, { css, keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react'; // Додано SwiperSlide
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

import image from '../../assets/icons/news&tips/News Article 2 Image Container (3).png';
import image1 from '../../assets/icons/equipment/Image3.png';
import image2 from '../../assets/icons/news&tips/News Article 2 Image Container (4).png';
import image3 from '../../assets/icons/news&tips/bosch-dishwasher-door-open.jpg';
import image4 from '../../assets/icons/news&tips/News Article 2 Image Container (6).png';
import image5 from '../../assets/icons/news&tips/News Article 2 Image Container (7).png';

interface Article {
  id: number;
  image: string;
  title: string;
  description: string;
  path: string;
}

const articles: Article[] = [
  {
    id: 1,
    image: image5,
    title: 'HOW TO MAINTAIN YOUR REFRIGERATOR AND AVOID COSTLY REPAIRS',
    description:
      'Keep your fridge running smoothly with easy maintenance tips to prevent expensive breakdowns.',
    path: '/tips/refrigerator-maintenance#ap',
  },
  {
    id: 2,
    image: image1,
    title: 'TOP 5 SIGNS YOUR OVEN OR RANGE NEEDS REPAIR',
    description:
      'Gas range clicking? Oven not heating evenly? Discover common signs your oven needs professional attention.',
    path: '/tips/oven-repair-signs#ap',
  },
  {
    id: 3,
    image: image2,
    title: 'WASHER & DRYER MAINTENANCE TIPS EVERY HOMEOWNER SHOULD KNOW',
    description:
      'Extend the life of your laundry appliances with simple maintenance practices to avoid breakdowns.',
    path: '/tips/laundry-appliance-maintenance#ap',
  },
  {
    id: 4,
    image: image3,
    title: 'DISHWASHER NOT DRAINING? COMMON CAUSES AND EASY FIXES',
    description:
      'Learn how to troubleshoot and fix common dishwasher drainage problems quickly and effectively.',
    path: '/tips/dishwasher-drainage#ap',
  },
  {
    id: 5,
    image: image4,
    title: 'WHEN TO REPLACE VS. REPAIR YOUR APPLIANCE: EXPERT ADVICE',
    description:
      'Make smart decisions about whether to repair or replace your appliances based on cost, age, and efficiency.',
    path: '/tips/repair-vs-replace#ap',
  },
  {
    id: 6,
    image: image,
    title: 'WHY OEM PARTS MATTER IN APPLIANCE REPAIR',
    description:
      'Discover the importance of using genuine manufacturer parts for reliable and long-lasting appliance repairs.',
    path: '/tips/oem-parts#ap',
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
      ease: easeOut,
    },
  },
};

// Анімаційні варіанти для карток
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
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
      ease: easeOut,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
    },
  },
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
      ease: easeOut,
    },
  },
};

const NewsAndTips: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  const slidesPerView = isMobile ? 1 : isTablet ? 2 : 3;
  const shouldLoop = articles.length > slidesPerView;

  return (
    <Wrapper>
      <HeaderSection>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <Subtitle>NEWS &amp; TIPS</Subtitle>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
          transition={{ delay: 0.1 }}
        >
          <Title>
            APPLIANCE <span>ADVICE</span> REPAIR <span>TIPS</span> BLOG
          </Title>
        </motion.div>
      </HeaderSection>

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
          speed={600}
          loop={shouldLoop}
          slidesPerView={slidesPerView}
          centeredSlides={isMobile}
          touchRatio={1.5}
          touchAngle={45}
          simulateTouch={true}
          allowTouchMove={true}
        >
          {articles.map((article, _index) => (
            <SwiperSlide key={article.id}>
              {' '}
              {/* Використовуємо SwiperSlide */}
              <StyledNavLink to={article.path}>
                <motion.div
                  variants={cardVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.2 }}
                  // whileHover='hover'
                >
                  <Card>
                    <motion.div variants={imageVariants} whileHover='hover'>
                      <Image
                        src={article.image}
                        alt={article.title}
                        loading='lazy'
                        decoding='async'
                      />
                    </motion.div>

                    <CardText>
                      <motion.div variants={textVariants}>
                        <CardTitle>{article.title}</CardTitle>
                      </motion.div>

                      <motion.div variants={textVariants}>
                        <CardDescription>{article.description}</CardDescription>
                      </motion.div>
                    </CardText>
                  </Card>
                </motion.div>
              </StyledNavLink>
            </SwiperSlide>
          ))}
        </Swiper>

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
      </SwiperContainer>
    </Wrapper>
  );
};

export default NewsAndTips;

// ================= styled-components =================

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  width: 100%;
  -webkit-tap-highlight-color: transparent;
`;

const SwiperContainer = styled.div`
  width: 100%;
  padding: 20px 0;

  .swiper-slide {
    width: 100%;
    -webkit-tap-highlight-color: transparent;
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

export const NavigationContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  width: 100%;
  justify-content: flex-end;
`;

export const NavButton = styled.button<{ bg: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background-color: ${props => props.bg};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  touch-action: manipulation;

  &:hover {
    animation: ${pulseAnimation} 0.6s ease;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    ${props =>
      props.bg === '#DBDBD8' &&
      css`
        background-color: #c8c8c5;
      `}

    ${props =>
      props.bg === '#3098EE' &&
      css`
        background-color: #2580d6;
      `}
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 767px) {
    width: 44px;
    height: 44px;
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
  font-size: 32px;
  line-height: 90%;
  color: var(--black-500);
  width: 40%;
  span {
    color: var(--blue-500);
  }

  @media screen and (min-width: 768px) {
    font-size: 52px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 72px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;

  @media screen and (min-width: 768px) {
    /* max-width: 322px; */
  }

  @media screen and (min-width: 1440px) {
    /* max-width: 380px; */
  }
`;

const Image = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 250px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 300px;
  }

  @media screen and (min-width: 1440px) {
    height: 350px;
  }
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px 0;
`;

const CardTitle = styled.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 110%;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

const CardDescription = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
