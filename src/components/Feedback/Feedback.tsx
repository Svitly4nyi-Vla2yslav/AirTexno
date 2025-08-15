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
  position: relative; /* Додаємо для позиціонування тіней */
  width: 100%;
  height: 784px;
  overflow: hidden; /* Ховаємо виступаючий контент */
  margin-bottom: 140px;
  .swiper {
    height: 100%;
    cursor: grab;
    
    &:active {
      cursor: grabbing;
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
  return (
    <div>
      <TextContainer>
        <TextFeedback>Your Feedback Matters</TextFeedback>
        <TitleFeedback>
          Discover why clients <span> trust </span> our repairs
        </TitleFeedback>
      </TextContainer>
      <Container>
           <BackgroundTop />
        <BackgroundBottom />
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={20}
          mousewheel={{
            forceToAxis: true, // Обмежуємо скрол тільки по вертикалі
            sensitivity: 1, // Чутливість скролу
            releaseOnEdges: true, // Дозволяємо "відскок" на краях
          }}
          modules={[Mousewheel, Autoplay, FreeMode]} // Додано FreeMode
          freeMode={{
            enabled: true, // Включаємо вільний режим
            momentum: true, // Інерція після перетягування
            momentumBounce: true, // Дозволяємо "відскок"
            momentumRatio: 1, // Співвідношення інерції
            momentumVelocityRatio: 1, // Співвідношення швидкості
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true, // Зупиняємо при взаємодії
            pauseOnMouseEnter: true,
            waitForTransition: true,
          }}
          speed={9000}
          grabCursor={true} // Показуємо курсор "grab"
          resistance={true} // Додаємо опір при досягненні країв
          resistanceRatio={0.85} // Сила опору
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
