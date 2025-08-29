import React from 'react';
import {
  Container,
  Title,
  Subtitle,
  ImagesContainer,
  ImageRow,
  TeamImage,
} from './TeamSection.styles';
import image from '../../../assets/icons/about/Why Airtexno Image 1.png';
import image1 from '../../../assets/icons/about/Why Airtexno Image 2.png';
import image2 from '../../../assets/icons/about/Why Airtexno Image 3.png';
import image3 from '../../../assets/icons/about/Why Airtexno Image 4.png';

const TeamSection: React.FC = () => {
  return (
    <Container>
      <div>
        <Title>Meet the Team</Title>
        <Subtitle>Professionals committed to <span>quality</span> service</Subtitle>
      </div>

      <ImagesContainer>
        <ImageRow>
          <TeamImage src={image} alt='Why Airtexno Image 1' />
          <TeamImage src={image1} alt='Why Airtexno Image 2' />
        </ImageRow>
        <ImageRow>
          <TeamImage src={image2} alt='Why Airtexno Image 3' />
          <TeamImage src={image3} alt='Why Airtexno Image 4' />
        </ImageRow>
      </ImagesContainer>
    </Container>
  );
};

export default TeamSection;
