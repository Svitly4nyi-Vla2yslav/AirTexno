import { styled } from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  min-width: 100vw;
  overflow: auto;
  padding: 1rem;
`;

export const SmallText = styled.p`
  color: #242424;
  font-family: "Geist", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  width: 100%;
`;

export const ServiceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;
`;

export const Number = styled.p`
  color: #242424;
  font-family: "Bebas Neue", sans-serif;
  font-family: var(--second-family);
font-weight: 400;
font-size: 35px;
line-height: 90%;
`;

export const TitleBlue = styled.p`
 font-family: var(--second-family);
font-weight: 400;
font-size: 35px;
line-height: 90%;
color: var(--blue-500);
`;

export const Title = styled.p`
  color: #242424;
   font-family: var(--second-family);
  font-size: 35px;
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;
`;

export const ServiceImage = styled.img`
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

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`;

export const InfoText = styled.p`
  color: #242424;
  font-family: "Geist", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`;

export const Button = styled.button`
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  padding: 0.625rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #242424;
  width: fit-content;
  background: transparent;
`;

export const ButtonText = styled.p`
  color: #242424;
  font-family: "Geist", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 4px;
  background: #fff;
  bottom: 0%;
  overflow: auto;
  margin: 0 auto;
  margin: 16px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

// const TitleRow = styled.div`
//   display: flex;
//   align-items: flex-start;
//   gap: 20px;
//   width: 100%;
// `;

// const Title = styled.p`
//   color: #242424;
//   font-family: "Bebas Neue", sans-serif;
//   font-size: 2.25rem; /* 36px */
//   font-weight: 400;
//   line-height: 0.9em;
//   width: fit-content;
// `;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

export const Description = styled.p`
  color: #242424;
  font-family: "Geist", sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const PrimaryButton = styled.button`
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: #3098ee;
  width: 100%;
  border: none;
`;

export const SecondaryButton = styled.button`
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #242424;
  width: 100%;
  background: transparent;
`;

export const ButtonTextWhite = styled.p`
  color: #fff;
  font-family: "Geist", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25em;
  width: fit-content;
`;

export const ButtonTextBlack = styled(ButtonTextWhite)`
  color: #242424;
`;

export const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
`;
