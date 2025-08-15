import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { useMediaQuery } from 'react-responsive';
import {
  SwiperContainer,
  Image,
  ShadowLeft,
  ShadowRight,
  TitlePartner,
} from './Partners.styled';
import i1 from '../../assets/icons/partners/1.svg';
import i2 from '../../assets/icons/partners/2.svg';
import i3 from '../../assets/icons/partners/3.svg';
import i4 from '../../assets/icons/partners/4.svg';
import i5 from '../../assets/icons/partners/5.svg';
import i6 from '../../assets/icons/partners/6.svg';
import i7 from '../../assets/icons/partners/7.svg';
import i8 from '../../assets/icons/partners/8.svg';
import i9 from '../../assets/icons/partners/9.svg';
import i10 from '../../assets/icons/partners/10.svg';
import i11 from '../../assets/icons/partners/11.svg';
import i12 from '../../assets/icons/partners/12.svg';
import i13 from '../../assets/icons/partners/13.svg';
import i14 from '../../assets/icons/partners/14.svg';
import i15 from '../../assets/icons/partners/15.svg';
import i16 from '../../assets/icons/partners/16.svg';
import i17 from '../../assets/icons/partners/17.svg';
import i18 from '../../assets/icons/partners/18.svg';
import i19 from '../../assets/icons/partners/19.svg';
import i20 from '../../assets/icons/partners/20.svg';
import i21 from '../../assets/icons/partners/21.svg';
import i22 from '../../assets/icons/partners/22.svg';
import i23 from '../../assets/icons/partners/23.svg';
import i24 from '../../assets/icons/partners/24.svg';
import i25 from '../../assets/icons/partners/25.svg';
import i26 from '../../assets/icons/partners/26.svg';
import i27 from '../../assets/icons/partners/27.svg';
import i28 from '../../assets/icons/partners/28.svg';
import i29 from '../../assets/icons/partners/29.svg';
import i30 from '../../assets/icons/partners/30.svg';
import i31 from '../../assets/icons/partners/31.svg';

const Partners: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 743px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 744px) and (max-width: 1023px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  const partners = [
    {
      id: 1,
      imageUrl: i1,
      link: 'https://example.com',
    },
    {
      id: 2,
      imageUrl: i2,
      link: 'https://example.com',
    },
    {
      id: 3,
      imageUrl: i3,
      link: 'https://example.com',
    },
    {
      id: 4,
      imageUrl: i4,
      link: 'https://example.com',
    },
    {
      id: 5,
      imageUrl: i5,
      link: 'https://example.com',
    },
    {
      id: 6,
      imageUrl: i6,
      link: 'https://example.com',
    },
    {
      id: 7,
      imageUrl: i7,
      link: 'https://example.com',
    },
    {
      id: 8,
      imageUrl: i8,
      link: 'https://example.com',
    },
    {
      id: 9,
      imageUrl: i9,
      link: 'https://example.com',
    },
    {
      id: 10,
      imageUrl: i10,
      link: 'https://example.com',
    },
    {
      id: 11,
      imageUrl: i11,
      link: 'https://example.com',
    },
    {
      id: 12,
      imageUrl: i12,
      link: 'https://example.com',
    },
    {
      id: 13,
      imageUrl: i13,
      link: 'https://example.com',
    },
    {
      id: 14,
      imageUrl: i14,
      link: 'https://example.com',
    },
    {
      id: 15,
      imageUrl: i15,
      link: 'https://example.com',
    },
    {
      id: 16,
      imageUrl: i16,
      link: 'https://example.com',
    },
    {
      id: 17,
      imageUrl: i17,
      link: 'https://example.com',
    },
    {
      id: 18,
      imageUrl: i18,
      link: 'https://example.com',
    },
    {
      id: 19,
      imageUrl: i19,
      link: 'https://example.com',
    },
    {
      id: 20,
      imageUrl: i20,
      link: 'https://example.com',
    },
    {
      id: 21,
      imageUrl: i21,
      link: 'https://example.com',
    },
    {
      id: 22,
      imageUrl: i22,
      link: 'https://example.com',
    },
    {
      id: 23,
      imageUrl: i23,
      link: 'https://example.com',
    },
    {
      id: 24,
      imageUrl: i24,
      link: 'https://example.com',
    },
    {
      id: 25,
      imageUrl: i25,
      link: 'https://example.com',
    },
    {
      id: 26,
      imageUrl: i26,
      link: 'https://example.com',
    },
    {
      id: 27,
      imageUrl: i27,
      link: 'https://example.com',
    },
    {
      id: 28,
      imageUrl: i28,
      link: 'https://example.com',
    },
    {
      id: 29,
      imageUrl: i29,
      link: 'https://example.com',
    },
    {
      id: 30,
      imageUrl: i30,
      link: 'https://example.com',
    },
    {
      id: 31,
      imageUrl: i31,
      link: 'https://example.com',
    },
  ];

  const slidesPerView = isMobile ? 2 : isTablet ? 4 : isDesktop ? 5 : 5;
  const shouldLoop = partners.length > slidesPerView;

  return (
    <div>
      <TitlePartner>Quality Service for Major & Luxury Brands</TitlePartner>
      <SwiperContainer>
        <ShadowLeft />
        <Swiper
          loop={shouldLoop}
          slidesPerView={slidesPerView}
          spaceBetween={20}
          autoplay={{
            delay: 0, // Збільшено затримку для нормальної прокрутки
            disableOnInteraction: false,
            waitForTransition: true, // Додано для плавності
            pauseOnMouseEnter: true, // Додано для зупинки при наведенні
          }}
          speed={4000} // Зменшено швидкість для плавності
          modules={[Autoplay]}
          className="mySwiper"
          style={{ width: '100%' , paddingBottom: '20px' }}
        >
          {partners.map(partner => (
            <SwiperSlide
              key={partner.id}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto',
                paddingTop: 10,
              }}
            >
              {partner.link ? (
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={partner.imageUrl}
                    alt={`Partner ${partner.id}`}
                    loading="lazy"
                  />
                </a>
              ) : (
                <Image
                  src={partner.imageUrl}
                  alt={`Partner ${partner.id}`}
                  loading="lazy"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Другий слайдер - відображається тільки на мобільних */}

        <Swiper
          loop={shouldLoop}
          slidesPerView={slidesPerView}
          spaceBetween={20}
          autoplay={{
            delay: 0, // Збільшено затримку для нормальної прокрутки
            disableOnInteraction: false,
            waitForTransition: true, // Додано для плавності
            pauseOnMouseEnter: true,
            reverseDirection: true, // Додано для реверсування напрямку
          }}
          speed={4000} // Зменшено швидкість для плавності
          modules={[Autoplay]}
          className="mySwiper"
          style={{ width: '100%' }}
        >
          {partners.map(partner => (
            <SwiperSlide
              key={partner.id}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto',
                paddingTop: 10,
              }}
            >
              {partner.link ? (
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={partner.imageUrl}
                    alt={`Partner ${partner.id}`}
                    loading="lazy"
                  />
                </a>
              ) : (
                <Image
                  src={partner.imageUrl}
                  alt={`Partner ${partner.id}`}
                  loading="lazy"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <ShadowRight />
      </SwiperContainer>{' '}
    </div>
  );
};

export default Partners;
