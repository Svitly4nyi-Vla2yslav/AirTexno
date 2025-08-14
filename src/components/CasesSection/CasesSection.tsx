import { useRef } from 'react';
import { Navigation} from 'swiper/modules';
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
  IconRow,
  ReviewText,
  Section,
  SlideImage,
  SlideWrapper,
  StyledSwiper,
  StyledSwiperSlide,
  Subtitle,
  Title,
  TopSection,
} from './CasesSection.styled';

import ReviewImage2 from '../../assets/icons/cases/Review Image 3.png';
import ReviewImage3 from '../../assets/icons/cases/Review Image 2.png';
import ReviewImage4 from '../../assets/icons/cases/Review Image 3.png';
import ReviewImage5 from '../../assets/icons/cases/Review Image 4.png';
import { Blue } from '../WhyAirtexnoSection/WhyAirtexnoSection.styled';

export default function CasesSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const images = [ReviewImage2, ReviewImage3, ReviewImage4, ReviewImage5];

  return (
    <Section>
      <Header>
        <Subtitle>Our Cases</Subtitle>
        <Title>
          <Blue>Success Stories </Blue> That Bring Your Appliances Back to Life
        </Title>
      </Header>

      {/* Кнопки навігації — винесені поза слайди */}
      {/* <IconRow>
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
      </IconRow> */}

      <StyledSwiper
        modules={[Navigation, Autoplay]}
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
        onInit={swiper => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {images.map((src, i) => (
          <StyledSwiperSlide key={i}>
            <SlideWrapper>
              <SlideImage src={src} alt={`Slide ${i + 1}`} />
              <Container>
                <IconRow>
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
                </IconRow>
                <ContentWrapper>
                  <TopSection>
                    <ReviewText>
                      "Our client's washing machine started making horrible
                      noises and leaking everywhere, causing water damage. Our
                      technicians quickly diagnosed the issue as a faulty water
                      pump and explained the repair process clearly. We
                      efficiently replaced the pump and tested the machine,
                      fixing it for much less than buying a new one. The client
                      was highly satisfied with the prompt and effective
                      solution!"
                    </ReviewText>
                  </TopSection>
                  <BottomSection>
                    <BlueCard>Washing Machine Leak Repair</BlueCard>
                    <ReviewText>Washing Machine Repair</ReviewText>
                  </BottomSection>
                </ContentWrapper>
              </Container>
            </SlideWrapper>
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </Section>
  );
}
