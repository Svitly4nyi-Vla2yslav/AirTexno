// CasesSection.styled.ts
import styled from "styled-components";
import { Swiper as SwiperBase, SwiperSlide as SwiperSlideBase } from "swiper/react";

export const StyledSwiper = styled(SwiperBase)`
  position: relative;
  border-radius: 4px;
  width: 320px;
  // height: 184px;
  overflow: hidden; /* важливо для слайдів */
  background: transparent; /* щоб не було прозорим */
  z-index: 1;
  margin: px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination-bullet {
    background: #3098ee; /* колір точок */
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: #005fa3;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlideBase)`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 0 1rem;
  overflow: hidden;
  margin-bottom: 2rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`;

export const Subtitle = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
line-height: 90%;
text-transform: uppercase;
color: var(--black-500);
`;

export const Title = styled.p`
 font-family: var(--second-family);
font-weight: 400;
font-size: 52px;
line-height: 90%;
color: var(--black-500);
`;

export const SlideImage = styled.img`
     display: flex;
    padding: 0.5rem;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.5rem;
    width: 100%;
    height: 647px;
    object-fit: cover;
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #242424;
  background: transparent;
  color: #242424;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #242424;
    color: #fff;
  }
`;



export const SlideWrapper = styled.div`
 position: relative;
    width: auto;
    height: 692px;
`;

export const Container = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    margin: 12px;
    margin-bottom: 56px;
    background-color: rgba(255, 255, 255, 1);
    border-radius:  8px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`;

export const IconRow = styled.div`
      display: flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    position: relative;
    // top: 40vh;
    // right: 10vh;
    // z-index: 400;
`;

export const IconButton = styled.button<{ $bg: string }>`
  display: flex;
  padding: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({ $bg }) => $bg};
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;

  svg {
    pointer-events: cursor;
  }
`;


export const ReviewText = styled.p`
 font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
line-height: 125%;
color: var(--black-500);
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
`;
export const BlueCard = styled.div`
font-family: var(--second-family);
font-weight: 400;
font-size: 28px;
line-height: 90%;
color: var(--blue-500);
`;

