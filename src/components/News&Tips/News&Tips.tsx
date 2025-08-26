import React, { useRef } from 'react';
import styled from 'styled-components';
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
        <Subtitle>NEWS &amp; TIPS</Subtitle>
        <Title>
          APPLIANCE <span>ADVICE</span> REPAIR <span>TIPS</span> BLOG
        </Title>
      </HeaderSection>
      <NavigationContainer>
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
              <Card $isTablet={isTablet}>
                <Image src={slide.img} alt={slide.title} $isTablet={isTablet} />
                <CardText>
                  <CardTitle $isTablet={isTablet}>{slide.title}</CardTitle>
                  <CardDescription $isTablet={isTablet}>{slide.description}</CardDescription>
                </CardText>
              </Card>
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

const NavigationContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`;

const NavButton = styled.button<{ bg: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: ${props => props.bg};
  border: none;
  cursor: pointer;
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