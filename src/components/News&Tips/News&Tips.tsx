import React, { useRef } from 'react'
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import image1 from "../../assets/icons/news&tips/News Article 2 Image Container.png"
import image2 from "../../assets/icons/news&tips/Review Image-Elizabeth Castorena.png"
import image3 from "../../assets/icons/news&tips/Review Image-Wendy Bailey.png"
import image4 from "../../assets/icons/news&tips/Review Image-sanal-avatar.png"; 
import { Autoplay, Navigation } from 'swiper/modules';

// Дані для слайдів
const slides = [
  {
    img: image1,
    title: "APPLIANCE INSTALLATION SERVICES",
    description: "Professional installation for appliances, ensuring safety.",
  },
  {
    img: image2,
    title: "WHEN YOUR REFRIGERATOR STOPS COOLING: URGENT REPAIR SIGNS",
    description: "Don't wait for food to spoil. Know the signs needing urgent help.",
  },
  {
    img: image3,
    title: "WASHING MACHINE TROUBLESHOOTING",
    description: "Quick solutions for common washing machine issues.",
  },
  {
    img: image4,
    title: "DISHWASHER MAINTENANCE TIPS",
    description: "Keep your dishwasher running smoothly with these tips.",
  },
];

const NewsAndTips: React.FC = () => {
  const swiperRef = useRef<any>(null);

  return (
    <Wrapper>
      <HeaderSection>
        <Subtitle>NEWS &amp; TIPS</Subtitle>
        <Title>APPLIANCE <span>ADVICE</span> REPAIR  <span>TIPS</span> BLOG</Title>
      </HeaderSection>

      <Swiper
       modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // записуємо інстанс у реф
        spaceBetween={20}
           autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          waitForTransition: true,
          pauseOnMouseEnter: true,
        }}
        speed={6000}
        slidesPerView={1}
        style={{ width: "100%", padding: "20px 0" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Card>
              <Image src={slide.img} alt={slide.title} />
              <CardText>
                <CardTitle>{slide.title}</CardTitle>
                <CardDescription>{slide.description}</CardDescription>
              </CardText>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <NavigationContainer>
        <NavButton onClick={() => swiperRef.current?.slidePrev()} bg="#DBDBD8">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavButton>

        <NavButton onClick={() => swiperRef.current?.slideNext()} bg="#3098EE">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavButton>
      </NavigationContainer>
    </Wrapper>
  );
};

export default NewsAndTips;

// ================= styled-components =================

const NavigationContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
  justify-content: center; /* центрування */
`;

const NavButton = styled.button<{ bg: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: ${(props) => props.bg};
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
`;

const Title = styled.p`
 font-family: var(--second-family);
 font-weight: 400;
 font-size: 52px;
 line-height: 90%;
 color: var(--black-500);

 span{
   color: var(--blue-500);
 }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 288px;
  height: 517px;
  margin: 0 auto;
`;

const Image = styled.img`
  border-radius: 8px;
  width: 288px;
  height: 395px;
  object-fit: cover;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardTitle = styled.p`
 font-family: var(--second-family);
 font-weight: 400;
 font-size: 32px;
 line-height: 90%;
 color: var(--black-500);
`;

const CardDescription = styled.p`
 font-family: var(--font-family);
 font-weight: 400;
 font-size: 16px;
 line-height: 125%;
 color: var(--black-500);
`;
