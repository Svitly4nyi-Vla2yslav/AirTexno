import React from 'react';
import {
  Blue,
  Section,
  TextWrapper,
  Title,
  Text,
  BlueCard,
  ImageSection,
  CenteredSlideContainer,
  TeamContainer,
  TeamImage,
  Content,
  Description,
} from './OurMission.styled';
import Person from '../../../assets/icons/about/Services Image.png';
import Team from '../../../assets/icons/about/Team Image.png';
import { useMediaQuery } from 'react-responsive';
const OurMission: React.FC = () => {
    const isLargeDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  return (
    <Section>
      <TextWrapper>
        <Title>
          Our mission is to provide <Blue>reliable</Blue> and <Blue>efficient</Blue>
          appliance repair services that improve<Blue>everyday </Blue>life{' '}
        </Title>
      </TextWrapper>
      <Content>
        <ImageSection>
          <img src={Person} alt='image' />
          <CenteredSlideContainer>
            <Text>
              “Our goal is to bring comfort and convenience back to your home with every repair. We
              believe in honest service, quality workmanship, and building lasting relationships
              with our customers,”
            </Text>
            <BlueCard>Sanal Gariaev</BlueCard>
            <Text>Chief Executive Officer</Text>
          </CenteredSlideContainer>
          <Description>
            As a highly regarded and trusted appliance repair company, we take immense pride in
            having served our community with exceptional repair services since [год основания]. Our
            extensive experience and commitment to excellence have allowed us to build strong
            relationships with our customers. We fully recognize how vital it is for your household
            to have functioning appliances, as they play a crucial role in your daily routine.
            Whether it's your refrigerator keeping your food fresh, your washing machine ensuring
            your clothes are clean, or your oven preparing meals for your family, any malfunction
            can disrupt your life. That’s why our primary goal is to restore the performance of your
            appliances swiftly and affordably, ensuring that you can return to your normal routine
            with minimal interruption. <br />
          
            {isLargeDesktop && (<>
            <br />
            Through years of experience and a commitment to excellence, we offer trusted, fast, and
            sustainable solutions tailored to each client’s needs. Whether it's a refrigerator,
            washing machine, or oven, our expert technicians are equipped to handle a wide range of
            appliances, ensuring your home stays comfortable and functional.
          </>)} </Description>
        </ImageSection>
        <TeamContainer>
         {!isLargeDesktop && (<Description>
            <br />
            Through years of experience and a commitment to excellence, we offer trusted, fast, and
            sustainable solutions tailored to each client’s needs. Whether it's a refrigerator,
            washing machine, or oven, our expert technicians are equipped to handle a wide range of
            appliances, ensuring your home stays comfortable and functional.
          </Description>)} 
          <TeamImage src={Team} alt='team' />
        </TeamContainer>
      </Content>
    </Section>
  );
};

export default OurMission;
