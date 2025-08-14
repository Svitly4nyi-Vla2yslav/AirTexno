import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem; /* gap-12 */
  overflow: auto;
  position: relative;
  margin-bottom: 3rem; /* mb-12 */
`;

export const TextWrapper = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
`;

export const SubTitle = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 14px;
line-height: 90%;
text-transform: uppercase;
text-align: center;
color: var(--black-500);
`;

export const Title = styled.p`
font-family: var(--second-family);
font-weight: 400;
font-size: 52px;
line-height: 90%;
text-align: center;
color: var(--black-500);
`;

export const Blue = styled.span`
 font-family: var(--second-family);
font-weight: 400;
font-size: 52px;
line-height: 90%;
text-align: center;
color: var(--blue-500);
`;

export const BlueCard = styled.div`
font-family: var(--second-family);
font-weight: 400;
font-size: 32px;
line-height: 100%;
color: var(--blue-500);
`;

export const StyledImage = styled.img`
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
width: 343px;
height: 485px;
  object-fit: cover;
`;

export const SwiperContainer = styled.div`
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

export const SlideContainer = styled.div`
display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 16px 12px;
    gap: 12px;
    border-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0 4px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    height: 485px;
    align-items: center;

  .overlay {
    background: rgba(255, 255, 255, 0.85); /* легкий фон під текст */
    border-radius: 4px;
    margin: 6px;
    padding: 10px;
    // width: 343px;
position: absolute;
    bottom: 0;
    box-sizing: border-box;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: fit-content;
`;



export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding-bottom: 14px;
`;

export const Text = styled.p`
  color: #242424;
  font-family: "Geist", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25em;
  padding-bottom: 20px;
  // width: 225px;
`;

export const ImageSection = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;


