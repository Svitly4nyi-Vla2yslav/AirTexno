// CasesSection.styled.ts
import styled from 'styled-components';
import { Swiper as SwiperBase, SwiperSlide as SwiperSlideBase } from 'swiper/react';

export const StyledSwiper = styled(SwiperBase)`
  position: relative;
  border-radius: 4px;
  width: 320px;
  height: 692px;
  overflow: hidden;
  background: transparent;
  z-index: 1;
  border-radius: 8px;

  .swiper-wrapper {
    align-items: center;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    transition: all 0.5s ease;
  }

  .swiper-pagination-bullet {
    background: #3098ee;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #005fa3;
  }

  @media screen and (min-width: 768px) {
    width: 760px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    height: 500px;

    .swiper-wrapper {
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
  }
`;

export const StyledSwiperSlide = styled(SwiperSlideBase)<{ $isActive: boolean; $index: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: all 0.5s ease;

  @media screen and (min-width: 1440px) {
    width: ${props => (props.$isActive ? '898px' : '437px')} !important;
    height: ${props => (props.$isActive ? '100%' : '285px')} !important;
    opacity: ${props => {
      if (props.$isActive) return 1;
      if (props.$index === 0 || props.$index === 4) return 0.6;
      return 0.8;
    }};
    transform: ${props => {
      if (props.$isActive) return 'scale(1)';

      // Визначаємо відстань від активного слайда
      const distanceFromCenter = Math.abs(props.$index - 2);

      switch (distanceFromCenter) {
        case 1: // Сусідні слайди (2 і 4)
          return props.$index < 2 ? 'translateX(-100px) scale(0.9)' : 'translateX(100px) scale(0.9)';
        case 2: // Крайні слайди (1 і 5)
          return props.$index < 2 ? 'translateX(-200px) scale(0.8)' : 'translateX(200px) scale(0.8)';
        default:
          return 'scale(0.9)';
      }
    }};
    z-index: ${props => {
      if (props.$isActive) return 10;
      const distanceFromCenter = Math.abs(props.$index - 2);
      return 10 - distanceFromCenter;
    }};
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  overflow: hidden;
  margin-bottom: 2rem;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  max-width: 1440px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const Subtitle = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const Title = styled.p`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 72px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 72px;
    margin: 0 auto;
    width: 70%;
    text-align: center;
  }
`;

export const SlideImage = styled.img<{ $isActive: boolean; $index: number }>`
  width: 100%;
  height: 647px;
  object-fit: cover;
  border-radius: 8px;
  transition: all 0.5s ease;

  @media screen and (min-width: 768px) {
    height: 650px;
    width: 696px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    height: ${props => (props.$isActive ? '500px' : '285px')};
    border-radius: 8px;
  }
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
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

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const SlideWrapper = styled.div<{ $isActive: boolean; $index: number }>`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: all 0.5s ease;

  @media screen and (min-width: 1440px) {
    width: ${props => (props.$isActive ? '898px' : '437px')};
    height: ${props => (props.$isActive ? '500px' : '285px')};
  }
`;

export const Container = styled.div<{ $isActive: boolean; $index: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  margin: 12px;
  margin-bottom: 56px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  transition: all 0.5s ease;

  @media screen and (min-width: 1440px) {
    margin: ${props => (props.$isActive ? '20px' : '10px')};
    margin-bottom: ${props => (props.$isActive ? '40px' : '30px')};
    opacity: ${props => (props.$isActive ? 1 : 0.9)};
    transform: ${props => (props.$isActive ? 'scale(1.05)' : 'scale(0.95)')};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const IconRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  position: relative;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
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
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const ReviewText = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const BlueCard = styled.div`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 28px;
  line-height: 90%;
  color: var(--blue-500);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  @media screen and (min-width: 1440px) {
    width: 1800px;
    height: 600px;
    margin: 0 auto;
    overflow: visible;
    display: flex;
    justify-content: center;
  }
`;
