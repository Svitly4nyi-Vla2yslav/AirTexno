import React from 'react';
import { motion, easeOut } from 'framer-motion';
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

  // Прості анімаційні варіанти
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 30 
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

  const fadeInLeft = {
    hidden: { 
      opacity: 0, 
      x: -30 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const fadeInRight = {
    hidden: { 
      opacity: 0, 
      x: 30 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
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
          variants={fadeInUp}
        >
          <Title>
            Our mission is to provide <Blue>reliable</Blue> and <Blue>efficient</Blue>
            appliance repair services that improve<Blue>everyday </Blue>life{' '}
          </Title>
        </motion.div>
      </TextWrapper>
      
      <Content>
        <ImageSection>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <img src={Person} alt='image' />
          </motion.div>
          
          <CenteredSlideContainer>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <Text>
                “Our goal is to bring comfort and convenience back to your home with every repair. We
                believe in honest service, quality workmanship, and building lasting relationships
                with our customers,”
              </Text>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <BlueCard>Sanal Gariaev</BlueCard>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <Text>Chief Executive Officer</Text>
            </motion.div>
          </CenteredSlideContainer>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <Description>
              As a highly regarded and trusted appliance repair company, we take immense pride in
              having served our community with exceptional repair services since [год основания]. Our
              extensive experience and commitment to excellence have allowed us to build strong
              relationships with our customers. We fully recognize how vital it is for your household
              to have functioning appliances, as they play a crucial role in your daily routine.
              Whether it's your refrigerator keeping your food fresh, your washing machine ensuring
              your clothes are clean, or your oven preparing meals for your family, any malfunction
              can disrupt your life. That's why our primary goal is to restore the performance of your
              appliances swiftly and affordably, ensuring that you can return to your normal routine
              with minimal interruption. <br />
            
              {isLargeDesktop && (<>
              <br />
              Through years of experience and a commitment to excellence, we offer trusted, fast, and
              sustainable solutions tailored to each client's needs. Whether it's a refrigerator,
              washing machine, or oven, our expert technicians are equipped to handle a wide range of
              appliances, ensuring your home stays comfortable and functional.
            </>)}
            </Description>
          </motion.div>
        </ImageSection>
        
        <TeamContainer>
          {!isLargeDesktop && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <Description>
                <br />
                Through years of experience and a commitment to excellence, we offer trusted, fast, and
                sustainable solutions tailored to each client's needs. Whether it's a refrigerator,
                washing machine, or oven, our expert technicians are equipped to handle a wide range of
                appliances, ensuring your home stays comfortable and functional.
              </Description>
            </motion.div>
          )}
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInRight}
            transition={{ delay: 0.7 }}
          >
            <TeamImage src={Team} alt='team' />
          </motion.div>
        </TeamContainer>
      </Content>
    </Section>
  );
};

export default OurMission;