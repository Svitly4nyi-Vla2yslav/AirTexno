import React from 'react';
import {
  Container,
  Subtitle,
  Title,
  Description,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  ContentWrapper,
  HeaderWrapper,
  MainContent,
} from './Professional.styled';
import {
  SwiperContainer,
  SwiperWrapper,
  SwiperTrack,
  SwiperSlide,
  SlideContent,
} from './Professional.styled';

interface ServiceCard {
  title: string;
  description: string;
  price: string;
}

interface VerticalSwiperProps {
  services: ServiceCard[];
}

interface ServiceCard {
  title: string;
  description: string;
  price: string;
}

const Professional: React.FC = () => {
  const services: ServiceCard[] = [
    {
      title: 'Not Freezing / Not Cooling',
      description:
        "If your refrigerator can't keep food cold or frozen, our technicians will diagnose the cooling system and restore proper temperature.",
      price: 'from <span>$200</span>',
    },
    {
      title: 'Leaking Water',
      description:
        "Leaks under or inside your fridge often mean clogged drains or broken valves. We'll quickly locate the problem and repair it with lasting results.",
      price: 'from <span>$225</span>',
    },
    {
      title: 'Loud Noises',
      description:
        'Buzzing, grinding, or knocking sounds usually come from the fan or compressor. Our team will fix the issue and make your fridge run quietly again.',
      price: 'from <span>$200</span>',
    },
    {
      title: "Won't Turn On",
      description:
        "From faulty wiring to failed control boards, we'll troubleshoot and get your refrigerator running again.",
      price: 'from <span> $250 </span>',
    },
    {
      title: 'Not Cooling Properly',
      description:
        'We check thermostats, heating elements, and compressors to restore temperature control.',
      price: 'from <span> $55 </span> ',
    },
  ];

  return (
    <Container>
      <ContentWrapper>
        <HeaderWrapper>
          <Subtitle>Typical Refrigerator Issues We Fix</Subtitle>
          <Title>Professional Refrigerator Repair <span> and Installation Services</span></Title>
        </HeaderWrapper>

        <MainContent>
          <VerticalSwiper services={services} />

          <div>
            <Description>
              Having issues with your fridge? Call us today — we’ll fix it and restore normal
              operation fast.
            </Description>
            <ButtonGroup>
              <PrimaryButton to='/contact#ap'>Contact Us</PrimaryButton>
              <a href='tel:+18055002705'>
                <SecondaryButton>Call Us</SecondaryButton>
              </a>
            </ButtonGroup>
          </div>
        </MainContent>
      </ContentWrapper>
    </Container>
  );
};

const VerticalSwiper: React.FC<VerticalSwiperProps> = ({ services }) => {
  // Подвоюємо масив для безперервної прокрутки
  const duplicatedServices = [...services, ...services];

  return (
    <SwiperContainer>
      <SwiperWrapper>
        <SwiperTrack>
          {duplicatedServices.map((service, index) => (
            <SwiperSlide key={index}>
              <SlideContent>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <p dangerouslySetInnerHTML={{ __html: service.price }} />
              </SlideContent>
            </SwiperSlide>
          ))}
        </SwiperTrack>
      </SwiperWrapper>
    </SwiperContainer>
  );
};

export default Professional;
