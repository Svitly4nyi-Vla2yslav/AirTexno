// ReviewCardContainer.tsx
import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Mousewheel } from 'swiper/modules';
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
    time: 'месяц назад',
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
];

export const TextContainer = styled.div`
  padding: 0px 16px;
  width: 375px;
  height: 170px;
  margin-bottom: 36px;
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
`;

export const TextFeedback = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 90%;
  text-transform: uppercase;
  padding-bottom: 16px;
  color: var(--black-500);
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 684px;
  overflow: hidden;
  margin-bottom: 0px;
  
  .swiper {
    height: 100%;
    cursor: grab;
    -webkit-overflow-scrolling: touch; /* Покращує скрол на iOS */
    
    &:active {
      cursor: grabbing;
    }
    
    /* Стилі для мобільних пристроїв */
    @media (hover: none) and (pointer: coarse) {
      touch-action: pan-y;
    }
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  background-color: #f5faff;
  border-radius: 8px;
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
`;

const ReviewImage = styled.img`
  width: 100%;
  height: 370px;
  border-radius: 4px;
  object-fit: cover;
`;

const BackgroundTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px; /* Змініть висоту за потребою */
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 10;
  pointer-events: none;
`;

const BackgroundBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px; /* Змініть висоту за потребою */
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  z-index: 10;
  pointer-events: none;
`;
const ReviewCardContainer: React.FC = () => {
  const [, setIsScrolling] = React.useState(false);
  const swiperRef = React.useRef<any>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Функція для обробки скролу
  const handleTouchMove = (e: TouchEvent) => {
    if (!swiperRef.current || !containerRef.current) return;
    
    const swiper = swiperRef.current;
    const container = containerRef.current;
    const touchY = e.touches[0].clientY;
    const { top, bottom } = container.getBoundingClientRect();
    const isAtTop = swiper.isBeginning && touchY > top + 50;
    const isAtBottom = swiper.isEnd && touchY < bottom - 50;

    // Якщо свайпер в крайньому положенні і користувач хоче скролити сторінку
    if (isAtTop || isAtBottom) {
      setIsScrolling(true);
      swiper.allowTouchMove = false;
    } else {
      setIsScrolling(false);
      swiper.allowTouchMove = true;
    }
  };

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  

  return (
    <div>
      <TextContainer>
        <TextFeedback>Your Feedback Matters</TextFeedback>
        <TitleFeedback>
          Discover why clients <span> trust </span> our repairs
        </TitleFeedback>
      </TextContainer>
      <Container ref={containerRef}>
        <BackgroundTop />
        <BackgroundBottom />
        <Swiper
          ref={swiperRef}
          direction="vertical"
          slidesPerView={1}
          spaceBetween={20}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          touchEventsTarget="container"
          modules={[Mousewheel, Autoplay, FreeMode]}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumBounce: true,
            momentumRatio: 1,
            momentumVelocityRatio: 1,
            sticky: true, // Додаємо "липкість" для кращого контролю
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            waitForTransition: true,
          }}
          speed={9000}
          grabCursor={true}
          resistance={true}
          resistanceRatio={0.85}
          onReachBeginning={() => setIsScrolling(false)}
          onReachEnd={() => setIsScrolling(false)}
          onTouchEnd={() => {
            setTimeout(() => {
              if (swiperRef.current) {
                swiperRef.current.allowTouchMove = true;
              }
            }, 100);
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Card>
                <Header>
                  <Avatar src={review.avatar} alt={review.name} />
                  <UserInfo>
                    <Name>{review.name}</Name>
                    <Time>{review.time}</Time>
                  </UserInfo>
                </Header>
                <Text>{review.text}</Text>
                <ReviewImage
                  src={review.image}
                  alt={`Review by ${review.name}`}
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default ReviewCardContainer;
