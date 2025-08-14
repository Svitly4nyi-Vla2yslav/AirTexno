import React from 'react'
import BackgroundImage from '../../assets/icons/Service Area Section.webp'
import styled from 'styled-components';

export const MainContainer = styled.div<{ $bg: string }>`
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
    width: 100vh;
    height: 1413px; /* щоб було видно фон */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;

export const TitleServing = styled.h2`
font-family: var(--second-family);
font-weight: 400;
font-size: 52px;
line-height: 90%;
text-align: center;
color: var(--white);
margin: 0 auto;
`

const ServingVentura: React.FC = () => {
  return (
    <MainContainer $bg={BackgroundImage}>
      <TitleServing>Serving Ventura and Los Angeles Counties</TitleServing>
    </MainContainer>
  )
}

export default ServingVentura