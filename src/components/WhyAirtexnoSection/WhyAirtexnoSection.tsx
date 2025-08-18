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
      title: 'Manufacturer-Trained Technicians',
      text: 'Our team is trained to service leading brands like Sub-Zero, Viking, GE Monogram, and more — ensuring expert repairs done right the first time.',
      image: WhyAirtexnoImage1,
      icon: buildung,
    },
    {
      title: 'Genuine Parts in Stock',
      text: 'We use only original manufacturer parts. With our fully stocked local warehouse, most repairs are done without waiting for delivery.',
      image: WhyAirtexnoImage2,
      icon: clock,
    },
    {
      title: 'Fast, Hassle-Free Service',
      text: 'One quick call and our Thousand Oaks team is on the way — no long waits, no hassle.',
      image: WhyAirtexnoImage3,
      icon: buildung,
    },
    {
      title: 'Local & Fair Pricing',
      text: 'As a local Thousand Oaks company, we treat our community like neighbors. With direct access to parts and highly trained techs, we keep our prices fair — without steep markups. While costs keep rising everywhere, we work hard to keep appliance repair affordable.',
      image: WhyAirtexnoImage3,
      icon: buildung,
    },
  ];

  return (
    <Section>
      <TextWrapper>
        <SubTitle>why airtexno</SubTitle>
        <Title>
          Same-Day Appliance Repair <Blue>You Can Rely On</Blue>{' '}
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
