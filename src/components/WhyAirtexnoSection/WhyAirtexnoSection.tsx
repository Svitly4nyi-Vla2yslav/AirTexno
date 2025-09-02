import React from 'react';
import { easeOut, motion } from 'framer-motion';
import {
  Blue,
  Header,
  IconWrapper,
  Section,
  SubTitle,
  TextWrapper,
  Title,
  Text,
  SwiperContainer,
  BlueCard,
  ImageSection,
  CenteredSlideContainer,
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
import { useMediaQuery } from 'react-responsive';

const WhyAirtexnoSection: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 743px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 744px) and (max-width: 1023px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isLargeDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

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
      image: WhyAirtexnoImage2,
      icon: buildung,
    },
  ];

  const slidesPerView = isMobile ? 1 : isTablet ? 2 : isDesktop ? 3 : 3;
  const shouldLoop = slides.length > slidesPerView;

  // Анімаційні варіанти для тексту
  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  // Анімаційні варіанти для карток
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  return (
    <Section>
      <TextWrapper>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={textVariants}
        >
          <SubTitle>why airtexno</SubTitle>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={textVariants}
          transition={{ delay: 0.1 }}
        >
          <Title>
            Same-Day Appliance Repair <Blue>You Can Rely On</Blue>{' '}
          </Title>
        </motion.div>
      </TextWrapper>
      
      <ImageSection>
        <SwiperContainer $isLargeDesktop={isLargeDesktop}>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={isLargeDesktop ? 0 : 20}
            loop={shouldLoop}
            slidesPerView={slidesPerView}
            centeredSlides={isLargeDesktop}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              waitForTransition: true,
              pauseOnMouseEnter: true,
            }}
            speed={6000}
            className='businessSwiper'
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <CenteredSlideContainer
                  style={{ backgroundImage: `url(${slide.image})` }}
                  $isLargeDesktop={isLargeDesktop}
                  className="slide-container"
                >
                  {(slide.title || slide.text || slide.icon) && (
                    <motion.div 
                      className='overlay'
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      variants={cardVariants}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {(slide.title || slide.icon) && (
                        <Header>
                          {slide.title && (
                            <motion.div
                              variants={textVariants}
                            >
                              <BlueCard>{slide.title}</BlueCard>
                            </motion.div>
                          )}
                          {slide.icon && (
                            <motion.div
                              variants={textVariants}
                              transition={{ delay: 0.2 }}
                            >
                              <IconWrapper className="icon-wrapper">
                                <img 
                                  src={slide.icon} 
                                  alt={slide.title || 'icon'} 
                                  className="icon-image"
                                />
                              </IconWrapper>
                            </motion.div>
                          )}
                        </Header>
                      )}
                      {slide.text && (
                        <motion.div
                          variants={textVariants}
                          transition={{ delay: 0.3 }}
                        >
                          <Text className="slide-text">{slide.text}</Text>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </CenteredSlideContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </ImageSection>
    </Section>
  );
};

export default WhyAirtexnoSection;