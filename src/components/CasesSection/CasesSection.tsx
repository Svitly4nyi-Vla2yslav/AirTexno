import { useRef, useState } from 'react';
import { easeOut, motion } from 'framer-motion';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import {
  BlueCard,
  BottomSection,
  Container,
  ContentWrapper,
  Header,
  IconButton,
  ReviewText,
  Section,
  SlideImage,
  SlideWrapper,
  StyledSwiper,
  StyledSwiperSlide,
  Subtitle,
  Title,
  TopSection,
  NavigationWrapper,
  SwiperContainer,
} from './CasesSection.styled';

import ReviewImage2 from '../../assets/icons/cases/Review Image 3.png';
import ReviewImage1 from '../../assets/icons/cases/Review Image 1.png';
import ReviewImage3 from '../../assets/icons/cases/Review Image 2.png';
import ReviewImage4 from '../../assets/icons/cases/Review Image 5.png';
import ReviewImage5 from '../../assets/icons/cases/Review Image 4.png';
import { Blue } from '../WhyAirtexnoSection/WhyAirtexnoSection.styled';

export default function CasesSection() {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const cards = [
    {
      image: ReviewImage2,
      description:
        'A broken washing machine that stopped mid-cycle was fully restored by our team in just one visit. The family can now enjoy clean laundry again without stress.',
      title: 'Quick Fix for a Washing Machine Breakdown',
      type: 'Washing Machine Repair',
    },
    {
      image: ReviewImage3,
      description:
        'We installed a brand-new dishwasher for a busy household, ensuring proper water connections and energy efficiency. The client now saves both time and water daily.',
      title: 'Professional Dishwasher Installation',
      type: 'Dishwasher Installation',
    },
    {
      image: ReviewImage4,
      description:
        'A fridge that was leaking water and not cooling properly was diagnosed and repaired. The customer avoided costly food spoilage and gained reliable performance again.',
      title: 'Refrigerator Leak and Cooling Repair',
      type: 'Refrigerator Repair',
    },
    {
      image: ReviewImage5,
      description:
        'The dryer was overheating and shutting down after a few minutes. Our experts replaced faulty parts and cleaned the vent system, restoring safe and efficient drying.',
      title: 'Dryer Overheating Problem Solved',
      type: 'Dryer Repair',
    },
    {
      image: ReviewImage1,
      description:
        "An oven that wouldn't heat evenly was repaired by recalibrating the thermostat and replacing heating elements. The family can now cook meals perfectly again.",
      title: 'Oven Heating Restored for Perfect Meals',
      type: 'Oven Repair',
    },
    {
      image: ReviewImage4,
      description:
        'We handled a complete installation of a modern washing machine, ensuring proper setup, water connection, and vibration-free operation.',
      title: 'Seamless Washing Machine Installation',
      type: 'Washing Machine Installation',
    },
    {
      image: ReviewImage3,
      description:
        'A freezer full of food was saved when we quickly repaired the compressor and restored full cooling capacity within hours.',
      title: 'Emergency Freezer Repair',
      type: 'Freezer Repair',
    },
    {
      image: ReviewImage1,
      description:
        "A customer's stove stopped working during family dinner preparation. Our team replaced defective wiring and burners, restoring it the same day.",
      title: 'Stove Emergency Fixed Same Day',
      type: 'Stove Repair',
    },
  ];

  // Анімаційні варіанти для заголовків
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  // Анімаційні варіанти для карток
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  // Анімаційні варіанти для кнопок навігації
  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <Section>
      <Header>
        <motion.div initial='hidden' whileInView='visible' variants={titleVariants}>
          <Subtitle>Our Cases</Subtitle>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
          transition={{ delay: 0.1 }}
        >
          <Title>
            <Blue>Success Stories </Blue> That Bring Your Appliances Back to Life
          </Title>
        </motion.div>
      </Header>

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
      >
        <SwiperContainer>
          <StyledSwiper
            modules={[Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              waitForTransition: true,
              pauseOnMouseEnter: true,
            }}
            speed={4000}
            onSwiper={setSwiper}
            onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              1440: {
                slidesPerView: 6,
                spaceBetween: 30,
                centeredSlides: true,
              },
            }}
          >
            {cards.map(({ image, description, title, type }, index) => (
              <StyledSwiperSlide key={index} $isActive={activeIndex === index} $index={index}>
                <motion.div
                  whileHover={{
                    scale: activeIndex === index ? 1.05 : 1.02,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SlideWrapper $isActive={activeIndex === index} $index={index}>
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.4 },
                      }}
                    >
                      <SlideImage
                        src={image}
                        alt={type}
                        $isActive={activeIndex === index}
                        $index={index}
                      />
                    </motion.div>

                    <Container $isActive={activeIndex === index} $index={index}>
                      <ContentWrapper>
                        <TopSection>
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                              opacity: activeIndex === index ? 1 : 0.7,
                              y: activeIndex === index ? 0 : 5,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <ReviewText>{description}</ReviewText>
                          </motion.div>
                        </TopSection>

                        <BottomSection>
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                              opacity: activeIndex === index ? 1 : 0.8,
                              y: activeIndex === index ? 0 : 5,
                            }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            <BlueCard>{title}</BlueCard>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                              opacity: activeIndex === index ? 1 : 0.6,
                              y: activeIndex === index ? 0 : 5,
                            }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            <ReviewText>{type}</ReviewText>
                          </motion.div>
                        </BottomSection>
                      </ContentWrapper>
                    </Container>
                  </SlideWrapper>
                </motion.div>
              </StyledSwiperSlide>
            ))}
          </StyledSwiper>
        </SwiperContainer>
      </motion.div>

      <NavigationWrapper>
        <motion.div
          variants={buttonVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          whileHover='hover'
          whileTap='tap'
        >
          <IconButton ref={prevRef} $bg='#DBDBD8' onClick={handlePrev}>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M15 18L9 12L15 6'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </IconButton>
        </motion.div>

        <motion.div
          variants={buttonVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1 }}
          whileHover='hover'
          whileTap='tap'
        >
          <IconButton ref={nextRef} $bg='#3098EE' onClick={handleNext}>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M9 18L15 12L9 6'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </IconButton>
        </motion.div>
      </NavigationWrapper>
    </Section>
  );
}
