import React, { useState } from 'react';
import { backOut, easeOut, motion } from 'framer-motion';
import avatar from '../../../assets/icons/Team Member Image.png';
import X from '../../../assets/icons/X.svg';
import {
  Container,
  Content,
  TopSection,
  Avatar,
  TextBlock,
  Heading,
  SubHeading,
  CallButton,
  CallText,
  BottomSection,
  IconWrapper,
  CircleBg,
  EmailText,
  AnswerText,
  ContainerF,
  ContentContainer,
  FrequentlyTitle,
  FrequentlyWrapper,
  QuestionButton,
  QuestionItem,
  XIcon,
} from './Styled.styled';

export const TeamMember: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // const { scrollY } = useScroll();

  // Паралакс ефекти
  // const y = useTransform(scrollY, [0, 500], [0, 50]);
  // const rotate = useTransform(scrollY, [0, 800], [0, -3]);

  const frequentlyQuestions = [
    {
      question: 'How quickly can you repair my appliance?',
      answer:
        'Most repairs are completed within 2-4 hours. We offer same-day service for urgent cases and typically schedule appointments within 24-48 hours of your call.',
    },
    {
      question: 'Do you offer emergency repair services?',
      answer:
        'Yes, we provide urgent repairs for urgent situations to minimize your inconvenience. Our emergency service is available 7 days a week with response times as quick as 2 hours.',
    },
    {
      question: 'What brands and appliances do you service?',
      answer:
        'We service all major brands including Samsung, LG, Whirlpool, GE, KitchenAid, Maytag, and more. We repair refrigerators, ovens, dishwashers, washing machines, dryers, microwaves, and other household appliances.',
    },
    {
      question: 'How do I schedule a repair?',
      answer:
        "You can schedule a repair by calling our hotline, filling out the online form on our website, or texting us. We'll arrange a convenient time slot and provide a technician with the necessary parts.",
    },
    {
      question: "What if I'm not satisfied with the repair?",
      answer:
        "We offer a 90-day warranty on all repairs and parts. If you're not satisfied, we'll re-repair your appliance at no additional cost or provide a full refund for the service.",
    },
    {
      question: 'How much will the repair cost?',
      answer:
        'Repair costs vary based on the appliance type and issue complexity. We provide free diagnostics and transparent upfront pricing before any work begins. Typical repairs range from $150-$400 including parts and labor.',
    },
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  // Унікальні анімаційні варіанти
  const avatarAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -20,
      x: -50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      x: 0,
      transition: {
        duration: 1.2,
        ease: backOut,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  const phonePulseAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.7,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: '0 0 40px rgba(48, 152, 238, 0.6)',
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const emailFloatAnimation = {
    hidden: {
      opacity: 0,
      y: 30,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.9,
        ease: backOut,
        delay: 0.6,
      },
    },
    hover: {
      y: -5,
      rotate: 2,
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
  };

  // Окремі варіанти для парних та непарних елементів
  const questionAnimationEven = {
    hidden: {
      opacity: 0,
      x: -100,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: easeOut,
      },
    },
  };

  const questionAnimationOdd = {
    hidden: {
      opacity: 0,
      x: 100,
      rotate: 10,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: easeOut,
      },
    },
  };

  const answerRevealAnimation = {
    hidden: {
      opacity: 0,
      height: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      height: 'auto',
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const titleGlowAnimation = {
    hidden: {
      opacity: 0,
      y: -30,
      textShadow: '0 0 0px rgba(48, 152, 238, 0)',
    },
    visible: {
      opacity: 1,
      y: 0,
      textShadow: [
        '0 0 0px rgba(48, 152, 238, 0)',
        '0 0 30px rgba(48, 152, 238, 0.8)',
        '0 0 15px rgba(48, 152, 238, 0.4)',
      ],
      transition: {
        duration: 1.5,
        ease: easeOut,
        delay: 0.1,
      },
    },
  };

  // Функція для отримання затримки на основі індексу
  const getDelay = (index: number) => index * 0.15;

  return (
    <Container>
      <Content>
        <TopSection>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            variants={avatarAnimation}
            whileHover='hover'
          >
            <Avatar src={avatar} alt='Team Member Image' />
          </motion.div>

          <TextBlock>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false, amount: 0.3 }}
              variants={titleGlowAnimation}
            >
              <Heading>Book a Call</Heading>
            </motion.div>

            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false, amount: 0.3 }}
              variants={titleGlowAnimation}
              transition={{ delay: 0.2 }}
            >
              <SubHeading>Time to get introduced and explore how we can help</SubHeading>
            </motion.div>

            <motion.div
              variants={phonePulseAnimation}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false, amount: 0.3 }}
              // whileHover='hover'
              whileTap='tap'
            >
              <a href='tel:+18055002705'>
                <CallButton>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z'
                      stroke='white'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <CallText>Call us now</CallText>
                </CallButton>
              </a>
            </motion.div>
          </TextBlock>
        </TopSection>

        <BottomSection>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            variants={emailFloatAnimation}
            whileHover='hover'
          >
            <IconWrapper>
              <CircleBg />
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                style={{ position: 'absolute', left: '10px', top: '10px' }}
              >
                <path
                  d='M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z'
                  stroke='#808080'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </IconWrapper>

            <EmailText>
              Prefer email communication?
              <br />
              <a href='mailto:Airtexnola@gmail.com'>airtexno@gmail.com</a>
            </EmailText>
          </motion.div>
        </BottomSection>
      </Content>

      <FrequentlyWrapper>
        <ContainerF>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            variants={titleGlowAnimation}
          >
            <FrequentlyTitle>Frequently Asked Questions</FrequentlyTitle>
          </motion.div>
        </ContainerF>

        <ContentContainer>
          {frequentlyQuestions.map((item, index) => (
            <motion.div
              key={index}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false, amount: 0.3 }}
              variants={index % 2 === 0 ? questionAnimationEven : questionAnimationOdd}
              transition={{ delay: getDelay(index) }}
            >
              <QuestionItem>
                <QuestionButton onClick={() => toggleAnswer(index)}>
                  {item.question}
                  <XIcon src={X} alt='Toggle answer' $rotate={activeIndex === index} />
                </QuestionButton>

                <motion.div
                  initial='hidden'
                  animate={activeIndex === index ? 'visible' : 'hidden'}
                  variants={answerRevealAnimation}
                  style={{ overflow: 'hidden' }}
                >
                  <AnswerText $isOpen={activeIndex === index}>{item.answer}</AnswerText>
                </motion.div>
              </QuestionItem>
            </motion.div>
          ))}
        </ContentContainer>
      </FrequentlyWrapper>
    </Container>
  );
};
