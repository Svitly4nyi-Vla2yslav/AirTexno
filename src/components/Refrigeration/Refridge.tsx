import React from 'react';
import { motion, easeOut } from 'framer-motion';
import {
  Container,
  Title,
  ContentWrapper,
  ImageContainer,
  Image,
  Description,
  PrimaryButton,
  SecondaryButton,
  ButtonRow,
  ButtonTextBlack,
  ButtonTextWhite,
  TextWrapper,
  TextAndIconWrap,
  TabletContainer,
  TabletContentWrapper,
  TabletImageRow,
  TabletImage,
  TabletDescription,
  TabletButtonRow,
  TabletPrimaryButton,
  TabletSecondaryButton,
  TabletButtonTextWhite,
  TabletButtonTextBlack,
  MainWrapImage,
  DeckstopTitleWrapp,
  DeckstopImageContainer,
  RatingIcon,
} from './Refridge.styled';
import fridge from '../../assets/icons/frigde/fridge.png';
import fridge1 from '../../assets/icons/frigde/fridge1.png';
import rating from '../../assets/icons/frigde/rating.svg';
import { useMediaQuery } from 'react-responsive';

export const Fridge: React.FC = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1439px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  // Спрощені анімаційні варіанти для кращої роботи на тачскрінах
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: easeOut, delay: 0.1 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: easeOut, delay: 0.2 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: easeOut, delay: 0.3 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  if (isDesktop) {
    return (
      <TabletContainer>
        <DeckstopTitleWrapp>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={titleVariants}
          >
            <Title>
              <span>Refrigeration</span> maintenance <span>and </span> setup services
            </Title>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={textVariants}
          >
            <TabletDescription>
              We specialize in expert appliance repairs, bringing your home essentials back to life
              with care and precision — so your family can get back to what matters.
            </TabletDescription>
          </motion.div>

          <TabletButtonRow>
            <motion.div
              variants={buttonVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
            >
              <TabletPrimaryButton>
                <TabletButtonTextWhite>Contact Us</TabletButtonTextWhite>
              </TabletPrimaryButton>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
            >
              <TabletSecondaryButton>
                <a href='tel:+18055002705'>
                  <TabletButtonTextBlack>Call Us</TabletButtonTextBlack>
                </a>
              </TabletSecondaryButton>
            </motion.div>
          </TabletButtonRow>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={textVariants}
          >
            <RatingIcon src={rating} alt='⭐⭐⭐⭐⭐' loading='lazy' />
          </motion.div>
        </DeckstopTitleWrapp>

        <DeckstopImageContainer>
          <TabletContentWrapper>
            <TabletImageRow>
              <MainWrapImage>
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.2 }}
                  variants={imageVariants}
                >
                  <TabletImage 
                    src={fridge} 
                    alt='Why Airtexno Image 1' 
                    className='main-image'
                    loading='lazy'
                  />
                </motion.div>

                <TextWrapper className='tablet-text-wrapper'>
                  {[
                    { icon: '🔧', text: 'Free diagnostics on the day of the request' },
                    { icon: '⏱️', text: 'The specialist will arrive at your home in 45 minutes' },
                    { icon: '🚚', text: 'Delivery of spare parts from our own warehouse' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial='hidden'
                      whileInView='visible'
                      viewport={{ once: true, amount: 0.2 }}
                      variants={iconVariants}
                      transition={{ delay: index * 0.1 }}
                    >
                      <TextAndIconWrap>
                        <span style={{ fontSize: '20px' }}>{item.icon}</span>
                        <p>{item.text}</p>
                      </TextAndIconWrap>
                    </motion.div>
                  ))}
                </TextWrapper>
              </MainWrapImage>

              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                variants={imageVariants}
              >
                <TabletImage 
                  src={fridge1} 
                  alt='Why Airtexno Image 2' 
                  className='secondary-image'
                  loading='lazy'
                />
              </motion.div>
            </TabletImageRow>
          </TabletContentWrapper>
        </DeckstopImageContainer>
      </TabletContainer>
    );
  }

  if (isTablet) {
    return (
      <TabletContainer>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
        >
          <Title>
            <span>Refrigeration</span> maintenance <span>and </span> setup services
          </Title>
        </motion.div>

        <TabletContentWrapper>
          <TabletImageRow>
            <MainWrapImage>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                variants={imageVariants}
              >
                <TabletImage 
                  src={fridge} 
                  alt='Why Airtexno Image 1' 
                  className='main-image'
                  loading='lazy'
                />
              </motion.div>

              <TextWrapper className='tablet-text-wrapper'>
                {[
                  { icon: '🔧', text: 'Free diagnostics on the day of the request' },
                  { icon: '⏱️', text: 'The specialist will arrive in 45 minutes' },
                  { icon: '🚚', text: 'Delivery of spare parts from warehouse' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                    variants={iconVariants}
                    transition={{ delay: index * 0.1 }}
                  >
                    <TextAndIconWrap>
                      <span style={{ fontSize: '18px' }}>{item.icon}</span>
                      <p>{item.text}</p>
                    </TextAndIconWrap>
                  </motion.div>
                ))}
              </TextWrapper>
            </MainWrapImage>

            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              variants={imageVariants}
            >
              <TabletImage 
                src={fridge1} 
                alt='Why Airtexno Image 2' 
                className='secondary-image'
                loading='lazy'
              />
            </motion.div>
          </TabletImageRow>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={textVariants}
          >
            <TabletDescription>
              We specialize in expert appliance repairs, bringing your home essentials back to life
              with care and precision — so your family can get back to what matters.
            </TabletDescription>
          </motion.div>

          <TabletButtonRow>
            <motion.div
              variants={buttonVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
            >
              <TabletPrimaryButton>
                <TabletButtonTextWhite>Contact Us</TabletButtonTextWhite>
              </TabletPrimaryButton>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
            >
              <TabletSecondaryButton>
                <a href='tel:+18055002705'>
                  <TabletButtonTextBlack>Call Us</TabletButtonTextBlack>
                </a>
              </TabletSecondaryButton>
            </motion.div>
          </TabletButtonRow>
        </TabletContentWrapper>
      </TabletContainer>
    );
  }

  return (
    <Container>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={titleVariants}
      >
        <Title>
          <span>Refrigeration</span> maintenance <span>and </span> setup services
        </Title>
      </motion.div>

      <ContentWrapper>
        <ImageContainer>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={imageVariants}
          >
            <Image 
              src={fridge} 
              alt='Why Airtexno Image 1' 
              loading='lazy'
            />
          </motion.div>

          <TextWrapper>
            {[
              { icon: '🔧', text: 'Free diagnostics on the day of the request' },
              { icon: '⏱️', text: 'The specialist will arrive in 45 minutes' },
              { icon: '🚚', text: 'Delivery of spare parts from warehouse' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                variants={iconVariants}
                transition={{ delay: index * 0.1 }}
              >
                <TextAndIconWrap>
                  <span style={{ fontSize: '16px' }}>{item.icon}</span>
                  <p>{item.text}</p>
                </TextAndIconWrap>
              </motion.div>
            ))}
          </TextWrapper>
        </ImageContainer>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={textVariants}
        >
          <Description>
            We specialize in expert appliance repairs, bringing your home essentials back to life
            with care and precision — so your family can get back to what matters.
          </Description>
        </motion.div>

        <ButtonRow>
          <motion.div
            variants={buttonVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
          >
            <PrimaryButton to='/contact#ap'>
              <ButtonTextWhite>Contact Us</ButtonTextWhite>
            </PrimaryButton>
          </motion.div>

          <motion.div
            variants={buttonVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
          >
            <SecondaryButton>
              <a href='tel:+18055002705'>
                <ButtonTextBlack>Call Us</ButtonTextBlack>
              </a>
            </SecondaryButton>
          </motion.div>
        </ButtonRow>
      </ContentWrapper>
    </Container>
  );
};