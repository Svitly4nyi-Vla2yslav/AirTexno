import React from 'react';
import {
  Blue,
  Header,
  IconWrapper,
  Section,
  SlideContainer,
  SubTitle,
  TextWrapper,
  Title,
  Text,
  SwiperContainer,
  BlueCard,
  ImageSection,
} from './WhyAirtexnoSection.styled';
import WhyAirtexnoImage1 from '../../assets/icons/WhyAirtexnoImage.png';
import WhyAirtexnoImage2 from '../../assets/icons/WhyAirtexnoImage2.png';
import WhyAirtexnoImage3 from '../../assets/icons/WhyAirtexnoImage3.png';
import buildung from '../../assets/icons/building-07.svg';
import clock from '../../assets/icons/clock.svg';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

const WhyAirtexnoSection: React.FC = () => {
  const slides = [
    {
      title: 'Tailored to your appliance needs',
      text: 'Are you interested in learning how our service can meet your appliance needs?',
      image: WhyAirtexnoImage1,
      icon: buildung,
    },
    {
      title: '0 waiting time, 0 hassle',
      text: '',
      image: WhyAirtexnoImage2,
      icon: clock,
    },
    {
      title: '',
      text: '',
      image: WhyAirtexnoImage3,
      icon: '',
    },
  ];

  return (
    <Section>
      <TextWrapper>
        <SubTitle>why airtexno</SubTitle>
        <Title>
          GET YOUR APPLIANCE FIXED <Blue>QUICKLY, SAME DAY</Blue>{' '}
        </Title>
      </TextWrapper>
      <ImageSection>
        {/* <StyledImage src={WhyAirtexnoImage1} alt="Why Airtexno Image 1" /> */}
        <SwiperContainer>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              waitForTransition: true,
              pauseOnMouseEnter: true,
            }}
            speed={6000}
            className="businessSwiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <SlideContainer
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {(slide.title || slide.text || slide.icon) && (
                    <div className="overlay">
                      {(slide.title || slide.icon) && (
                        <Header>
                          {slide.title && <BlueCard>{slide.title}</BlueCard>}
                          {slide.icon && (
                            <IconWrapper>
                              <img
                                src={slide.icon}
                                alt={slide.title || 'icon'}
                              />
                            </IconWrapper>
                          )}
                        </Header>
                      )}
                      {slide.text && <Text>{slide.text}</Text>}
                    </div>
                  )}
                </SlideContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </ImageSection>
    </Section>
  );
};

export default WhyAirtexnoSection;
