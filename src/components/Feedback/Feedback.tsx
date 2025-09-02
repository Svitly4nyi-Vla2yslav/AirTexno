import React from 'react';
import { motion, easeOut } from 'framer-motion';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';
import avatarAlex from '../../assets/icons/feedback/Ellipse 4aleksey.png';
import avatarSanal from '../../assets/icons/feedback/Ellipse 4-sanal-avatar.png';
import avatarWendy from '../../assets/icons/feedback/Ellipse 4-Wendy Bailey.png';
import avatarElizabeth from '../../assets/icons/feedback/Ellipse 4-Elizabeth Castorena.png';
import reviewImageAlex from '../../assets/icons/feedback/Review Image-alexey.png';
import reviewImageSanal from '../../assets/icons/feedback/Review Image-sanal-avatar.png';
import reviewImageWendy from '../../assets/icons/feedback/Review Image-Wendy Bailey.png';
import reviewImageElizabeth from '../../assets/icons/feedback/Review Image-Elizabeth Castorena.png';
import { useMediaQuery } from 'react-responsive';

interface Review {
  avatar: string;
  name: string;
  time: string;
  text: string;
  image: string;
}

const reviews: Review[] = [
  {
    avatar: avatarAlex,
    name: 'Aleksei Sabitov',
    time: 'a week ago',
    text: `My Sub-Zero refrigerator stopped cooling, so the next day I called
      AirTexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      AirTexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,
    image: reviewImageAlex,
  },
  {
    avatar: avatarSanal,
    name: 'Sanal Kandymov',
    time: 'a week ago',
    text: `Great service! AirTexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,
    image: reviewImageSanal,
  },
  {
    avatar: avatarWendy,
    name: 'Wendy Bailey',
    time: 'a week ago',
    text: `I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,
    image: reviewImageWendy,
  },
  {
    avatar: avatarElizabeth,
    name: 'Elizabeth Castorena',
    time: '2 месяца назад',
    text: `Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,
    image: reviewImageElizabeth,
  },
  {
    avatar: avatarAlex,
    name: 'Aleksei Sabitov',
    time: 'a week ago',
    text: `My Sub-Zero refrigerator stopped cooling, so the next day I called
      AirTexno Appliance Repair. Their technician arrived the same day
      and got straight to work. He diagnosed and repaired the issue
      within just a few hours, explained everything clearly, and even
      gave me helpful maintenance tips. The pricing was very reasonable.
      I’m extremely happy with the service and will definitely be using
      AirTexno Appliance Repair for all my future appliance needs.
      Highly recommend them for Sub-Zero refrigerator repair and more!`,
    image: reviewImageAlex,
  },
  {
    avatar: avatarSanal,
    name: 'Sanal Kandymov',
    time: 'a week ago',
    text: `Great service! AirTexno repaired our Sub-Zero fridge in Thousand
      Oaks the same day we called. Fast diagnosis, fair price, real OEM
      parts. Fridge is perfect again. Will use them for any appliance
      repair.`,
    image: reviewImageSanal,
  },
  {
    avatar: avatarWendy,
    name: 'Wendy Bailey',
    time: 'a week ago',
    text: `I've had Sunny from Airtexno come to my house twice over the last
      year. Each time he has arrived on time, has diagnosed the issues
      with my cooktop and ovens correctly and has resolved my problems
      quickly. He is extremely knowledgeable and conscientious. I have
      been very pleased with his work, and highly recommend him!`,
    image: reviewImageWendy,
  },
  {
    avatar: avatarElizabeth,
    name: 'Elizabeth Castorena',
    time: 'a week ago',
    text: `Replaced a refrigerator door that had been dented. Did an
      excellent job hooking up the ice maker, water dispenser, etc. from
      new door into the refrigerator. Sunny is extremely knowledgeable
      and thorough. Will definitely use Airtexno again.`,
    image: reviewImageElizabeth,
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
    y: 50,
    scale: 0.95,
    rotateX: -5,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
  hover: {
    y: -5,
    scale: 1.02,
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
};

// Анімаційні варіанти для аватарів
const avatarVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.2,
    },
  },
};

// Анімаційні варіанти для зображень
const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
    },
  },
};

export const TextContainer = styled.div`
  padding: 0px 16px;
  width: 375px;
  height: 170px;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const TitleFeedback = styled.h2`
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 52px;
  line-height: 90%;
  color: var(--black-500);
  span {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 52px;
    line-height: 90%;
    color: var(--blue-500);
  }

  @media screen and (min-width: 768px) {
    font-size: 72px;
    min-width: 750px;
    span {
      font-size: 72px;
    }
  }
`;

export const TextFeedback = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  padding-bottom: 16px;
  color: var(--black-500);

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`;

// Оновлений контейнер для покращеної мобільної взаємодії
const SwipersContainer = styled.div`
  position: relative;
  width: 100%;
  height: 684px;
  overflow: hidden;
  margin-bottom: 0px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
    height: 800px;
  }
`;

const SingleSwiperContainer = styled.div<{ $isVisible?: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: ${props => (props.$isVisible ? 'block' : 'none')};

  /* Заборонити будь-яку взаємодію з свайпером на мобільних */
  @media (max-width: 767px) {
    pointer-events: none;
    
    /* Але дозволити скрол сторінки через цю область */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 20;
      pointer-events: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    display: block;
    pointer-events: auto;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background-color: #f5faff;
  border-radius: 8px;
  height: 600px;
  
  /* На мобільних дозволяємо скрол сторінки через картки */
  @media (max-width: 767px) {
    pointer-events: none;
  }

  @media screen and (min-width: 768px) {
    pointer-events: auto;
  }
`;

const Header = styled.div`
  display: flex;
  gap: 19px;
  align-items: center;
`;

const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  loading: lazy;
  decoding: async;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Name = styled.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  font-weight: 500;
`;

const Time = styled.p`
  color: rgba(33, 33, 33, 0.5);
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Text = styled.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 1rem;
  line-height: 1.25em;
  flex-grow: 1;
  overflow: hidden;
`;

const ReviewImage = styled.img`
  width: 100%;
  height: 370px;
  border-radius: 4px;
  object-fit: cover;
  loading: lazy;
  decoding: async;
`;

const BackgroundTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`;

const BackgroundBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 10;
  pointer-events: none;
`;

const TouchBlockingLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 30;
  pointer-events: auto;
  -webkit-overflow-scrolling: touch;
  
  /* Тільки для мобільних пристроїв */
  @media (min-width: 768px) {
    display: none;
  }
`;

const ReviewCardContainer: React.FC = () => {
  const [, setIsScrolling] = React.useState(false);
  const swiperRefTop = React.useRef<any>(null);
  const swiperRefBottom = React.useRef<any>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return (
    <div>
      <TextContainer>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <TextFeedback>Your Feedback Matters</TextFeedback>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
          transition={{ delay: 0.1 }}
        >
          <TitleFeedback>
            Discover why clients <span> trust </span> our repairs
          </TitleFeedback>
        </motion.div>
      </TextContainer>

      <SwipersContainer ref={containerRef}>
        {/* Шар для блокування тач-взаємодії з свайпером на мобільних */}
        <TouchBlockingLayer />
        
        {/* Перший свайпер (зверху вниз) */}
        <SingleSwiperContainer $isVisible={true}>
          <BackgroundTop />
          <BackgroundBottom />
          <Swiper
            ref={swiperRefTop}
            direction='vertical'
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={4000}
            loop={true}
            modules={[Autoplay]}
            allowTouchMove={false}
            simulateTouch={false}
            touchRatio={0}
            grabCursor={false}
            mousewheel={{ enabled: false }}
            noSwiping={true}
            noSwipingClass='swiper-slide'
            resistance={false}
            onReachBeginning={() => setIsScrolling(false)}
            onReachEnd={() => setIsScrolling(false)}
            style={{ 
              height: '100%',
              // Блокуємо всі події на свайпері
              pointerEvents: 'none'
            }}
            // Додаткові параметри для блокування взаємодії
            preventInteractionOnTransition={true}
            watchOverflow={true}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={`top-${index}`}>
                <motion.div
                  variants={cardVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover='hover'
                >
                  <Card>
                    <Header>
                      <motion.div variants={avatarVariants} whileHover='hover'>
                        <Avatar 
                          src={review.avatar} 
                          alt={review.name}
                          loading="lazy"
                          decoding="async"
                        />
                      </motion.div>
                      <UserInfo>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <Name>{review.name}</Name>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Time>{review.time}</Time>
                        </motion.div>
                      </UserInfo>
                    </Header>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Text>{review.text}</Text>
                    </motion.div>
                    <motion.div variants={imageVariants} whileHover='hover'>
                      <ReviewImage 
                        src={review.image} 
                        alt={`Review by ${review.name}`}
                        loading="lazy"
                        decoding="async"
                      />
                    </motion.div>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </SingleSwiperContainer>

        {/* Другий свайпер (знизу вгору) - тільки для планшетів */}
        <SingleSwiperContainer $isVisible={isTablet}>
          <BackgroundTop />
          <BackgroundBottom />
          <Swiper
            ref={swiperRefBottom}
            direction='vertical'
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: true,
            }}
            speed={2000}
            loop={true}
            modules={[Autoplay]}
            allowTouchMove={false}
            simulateTouch={false}
            touchRatio={0}
            grabCursor={false}
            mousewheel={{ enabled: false }}
            noSwiping={true}
            noSwipingClass='swiper-slide'
            resistance={false}
            initialSlide={reviews.length - 1}
            onReachBeginning={() => setIsScrolling(false)}
            onReachEnd={() => setIsScrolling(false)}
            style={{ 
              height: '100%',
              pointerEvents: 'none'
            }}
            preventInteractionOnTransition={true}
            watchOverflow={true}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={`bottom-${index}`}>
                <motion.div
                  variants={cardVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover='hover'
                >
                  <Card>
                    <Header>
                      <motion.div variants={avatarVariants} whileHover='hover'>
                        <Avatar src={review.avatar} alt={review.name} />
                      </motion.div>
                      <UserInfo>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <Name>{review.name}</Name>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Time>{review.time}</Time>
                        </motion.div>
                      </UserInfo>
                    </Header>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Text>{review.text}</Text>
                    </motion.div>
                    <motion.div variants={imageVariants} whileHover='hover'>
                      <ReviewImage src={review.image} alt={`Review by ${review.name}`} />
                    </motion.div>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </SingleSwiperContainer>

        {/* Третій свайпер для десктопу */}
        {isDesktop && (
          <SingleSwiperContainer $isVisible={true}>
            <BackgroundTop />
            <BackgroundBottom />
            <Swiper
              direction='vertical'
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={6000}
              loop={true}
              modules={[Autoplay]}
              allowTouchMove={false}
              simulateTouch={false}
              touchRatio={0}
              grabCursor={false}
              mousewheel={{ enabled: false }}
              noSwiping={true}
              noSwipingClass='swiper-slide'
              resistance={false}
              onReachBeginning={() => setIsScrolling(false)}
              onReachEnd={() => setIsScrolling(false)}
              style={{ 
                height: '100%',
                pointerEvents: 'none'
              }}
              preventInteractionOnTransition={true}
              watchOverflow={true}
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={`desktop-${index}`}>
                  <motion.div
                    variants={cardVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover='hover'
                  >
                    <Card>
                      <Header>
                        <motion.div variants={avatarVariants} whileHover='hover'>
                          <Avatar src={review.avatar} alt={review.name} />
                        </motion.div>
                        <UserInfo>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            <Name>{review.name}</Name>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <Time>{review.time}</Time>
                          </motion.div>
                        </UserInfo>
                      </Header>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Text>{review.text}</Text>
                      </motion.div>
                      <motion.div variants={imageVariants} whileHover='hover'>
                        <ReviewImage src={review.image} alt={`Review by ${review.name}`} />
                      </motion.div>
                    </Card>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </SingleSwiperContainer>
        )}
      </SwipersContainer>
    </div>
  );
};

export default ReviewCardContainer;