// WhyAirtexnoTextContainer1.tsx
import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
  background-color: #e5e0e0;
  border-radius: 4px;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  bottom: 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const Title = styled.p`
  color: #3098ee;
  font-family: "Bebas Neue", sans-serif;
  font-size: 2.25rem;
  font-weight: 400;
  line-height: 1em;
  width: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`;

const Text = styled.p`
  color: #242424;
  font-family: "Geist", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25em;
  width: 225px;
`;

export const WhyAirtexnoTextContainer1: React.FC = () => {
  const slides = [
    {
      title: "Tailored to your appliance needs",
      text: "Are you interested in learning how our service can meet your appliance needs?",
    },
    {
      title: "High-quality and reliable service",
      text: "We deliver quality solutions that keep your appliances running smoothly.",
    },
    {
      title: "Your comfort is our priority",
      text: "We customize our services to make your daily life easier.",
    },
  ];

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <SlideContainer>
            <Header>
              <Title>{slide.title}</Title>
              <IconWrapper>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99996 14.6667H6.13329C5.38656 14.6667 5.01319 14.6667 4.72797 14.812C4.47709 14.9398 4.27312 15.1438 4.14528 15.3947C3.99996 15.6799 3.99996 16.0533 3.99996 16.8V28M22 14.6667H25.8666C26.6134 14.6667 26.9867 14.6667 27.2719 14.812C27.5228 14.9398 27.7268 15.1438 27.8546 15.3947C28 15.6799 28 16.0533 28 16.8V28M22 28V8.26667C22 6.77319 22 6.02646 21.7093 5.45603C21.4536 4.95426 21.0457 4.54631 20.5439 4.29065C19.9735 4 19.2268 4 17.7333 4H14.2666C12.7732 4 12.0264 4 11.456 4.29065C10.9542 4.54631 10.5463 4.95426 10.2906 5.45603C9.99996 6.02646 9.99996 6.77319 9.99996 8.26667V28M29.3333 28H2.66663M14.6666 9.33333H17.3333M14.6666 14.6667H17.3333M14.6666 20H17.3333"
                    stroke="#3098EE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconWrapper>
            </Header>
            <Text>{slide.text}</Text>
          </SlideContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
