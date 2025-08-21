import { useEffect, useRef } from 'react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import {
  BlueCard,
  BottomSection,
  Container,
  ContentWrapper,
  Header,
  IconButton,
  ReviewText,
  Section,
  SlideImage,
  SlideWrapper,
  StyledSwiper,
  StyledSwiperSlide,
  Subtitle,
  Title,
  TopSection,
  NavigationWrapper, // Додаємо новий компонент
} from './CasesSection.styled';

import ReviewImage2 from '../../assets/icons/cases/Review Image 3.png';
import ReviewImage1 from '../../assets/icons/cases/Review Image 1.png';
import ReviewImage3 from '../../assets/icons/cases/Review Image 2.png';
import ReviewImage4 from '../../assets/icons/cases/Review Image 5.png';
import ReviewImage5 from '../../assets/icons/cases/Review Image 4.png';
import { Blue } from '../WhyAirtexnoSection/WhyAirtexnoSection.styled';

export default function CasesSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  const cards = [
    {
      image: ReviewImage2,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magnam labore fuga quos explicabo ipsam ad, natus cumque dignissimos eaque!',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      type: 'Washing Machine Repair',
    },
    {
      image: ReviewImage3,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magnam labore fuga quos explicabo ipsam ad, natus cumque dignissimos eaque!',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      type: 'Washing Machine Repair',
    },
    {
      image: ReviewImage4,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magnam labore fuga quos explicabo ipsam ad, natus cumque dignissimos eaque!',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      type: 'Washing Machine Repair',
    },
    {
      image: ReviewImage5,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magnam labore fuga quos explicabo ipsam ad, natus cumque dignissimos eaque!',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      type: 'Washing Machine Repair',
    },
    {
      image: ReviewImage1,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magnam labore fuga quos explicabo ipsam ad, natus cumque dignissimos eaque!',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      type: 'Washing Machine Repair',
    },
  ];

  return (
    <Section>
      <Header>
        <Subtitle>Our Cases</Subtitle>
        <Title>
          <Blue>Success Stories </Blue> That Bring Your Appliances Back to Life
        </Title>
      </Header>

      {/* Кнопки навігації ВИНЕСЕНІ ПОЗА СЛАЙДЕР */}
    

      <StyledSwiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          waitForTransition: true,
          pauseOnMouseEnter: true,
        }}
        speed={6000}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {cards.map(({ image, description, title, type }) => (
          <StyledSwiperSlide key={image}>
            <SlideWrapper>
              <SlideImage src={image} alt={type} style={{borderRadius: 8}}/>
              <Container>
                {/* ВИДАЛЯЄМО КНОПКИ ЗСЕРЕДИНИ СЛАЙДІВ */}
                <ContentWrapper>
                  <TopSection>
                    <ReviewText>{description}</ReviewText>
                  </TopSection>
                  <BottomSection>
                    <BlueCard>{title}</BlueCard>
                    <ReviewText>{type}</ReviewText>
                  </BottomSection>
                </ContentWrapper>
              </Container>
            </SlideWrapper>
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
        <NavigationWrapper>
        <IconButton ref={prevRef} $bg="#DBDBD8">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
        <IconButton ref={nextRef} $bg="#3098EE">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
      </NavigationWrapper>
    </Section>
  );
}