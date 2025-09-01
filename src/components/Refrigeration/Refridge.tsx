import React from 'react';
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
  // Нові стилі для планшетної версії
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
  RatingIcon, // Додано новий стиль
} from './Refridge.styled';
import fridge from '../../assets/icons/frigde/fridge.png';
import fridge1 from '../../assets/icons/frigde/fridge1.png';
import rating from '../../assets/icons/frigde/rating.svg';
import { useMediaQuery } from 'react-responsive';

export const Fridge: React.FC = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1439px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  if (isDesktop) {
    return (
      <TabletContainer>
        <DeckstopTitleWrapp>
          <Title>
            <span>Refrigeration</span> maintenance <span>and </span> setup services
          </Title>
          <TabletDescription>
            We specialize in expert appliance repairs, bringing your home essentials back to life
            with care and precision — so your family can get back to what matters.
          </TabletDescription>
          <TabletButtonRow>
            <TabletPrimaryButton>
              <TabletButtonTextWhite>Contact Us</TabletButtonTextWhite>
            </TabletPrimaryButton>
            <TabletSecondaryButton>
              <a href='tel:+18055002705'>
                <TabletButtonTextBlack>Call Us</TabletButtonTextBlack>
              </a>
            </TabletSecondaryButton>
          </TabletButtonRow>
          <RatingIcon src={rating} alt='⭐⭐⭐⭐⭐' />
        </DeckstopTitleWrapp>
        <DeckstopImageContainer>
          <TabletContentWrapper>
            <TabletImageRow>
              <MainWrapImage>
                <TabletImage src={fridge} alt='Why Airtexno Image 1' className='main-image' />
                <TextWrapper className='tablet-text-wrapper'>
                  <TextAndIconWrap>
                    <svg
                      width='21'
                      height='20'
                      viewBox='0 0 21 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M5.50033 4.99984L9.25033 8.74984M5.50033 4.99984H3.00033L2.16699 2.49984L3.00033 1.6665L5.50033 2.49984V4.99984ZM16.5495 2.28401L14.3598 4.47369C14.0298 4.80371 13.8648 4.96872 13.803 5.15899C13.7486 5.32636 13.7486 5.50665 13.803 5.67402C13.8648 5.86429 14.0298 6.0293 14.3598 6.35931L14.5575 6.55703C14.8875 6.88704 15.0525 7.05205 15.2428 7.11387C15.4102 7.16825 15.5905 7.16825 15.7578 7.11387C15.9481 7.05205 16.1131 6.88704 16.4431 6.55703L18.4914 4.50877C18.712 5.04557 18.8337 5.6335 18.8337 6.24984C18.8337 8.78114 16.7816 10.8332 14.2503 10.8332C13.9452 10.8332 13.6469 10.8033 13.3585 10.7464C12.9533 10.6666 12.7508 10.6266 12.628 10.6388C12.4974 10.6518 12.4331 10.6714 12.3174 10.7333C12.2086 10.7915 12.0995 10.9007 11.8812 11.119L5.91699 17.0832C5.22664 17.7735 4.10735 17.7735 3.41699 17.0832C2.72664 16.3928 2.72664 15.2735 3.41699 14.5832L9.38118 8.61898C9.59947 8.40069 9.70861 8.29155 9.76684 8.18274C9.82874 8.06707 9.84832 8.00273 9.86132 7.87218C9.87356 7.74938 9.83361 7.54682 9.75371 7.1417C9.69682 6.85322 9.66699 6.55501 9.66699 6.24984C9.66699 3.71853 11.719 1.6665 14.2503 1.6665C15.0882 1.6665 15.8736 1.89136 16.5495 2.28401ZM10.5004 12.4998L15.0837 17.0831C15.774 17.7734 16.8933 17.7734 17.5836 17.0831C18.274 16.3927 18.274 15.2734 17.5836 14.5831L13.8131 10.8126C13.5462 10.7873 13.2859 10.7392 13.0343 10.6701C12.7101 10.5811 12.3544 10.6457 12.1167 10.8835L10.5004 12.4998Z'
                        stroke='#242424'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <p>Free diagnostics on the day of the request</p>
                  </TextAndIconWrap>
                  <TextAndIconWrap>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10.0003 4.99984V9.99984L13.3337 11.6665M18.3337 9.99984C18.3337 14.6022 14.6027 18.3332 10.0003 18.3332C5.39795 18.3332 1.66699 14.6022 1.66699 9.99984C1.66699 5.39746 5.39795 1.6665 10.0003 1.6665C14.6027 1.6665 18.3337 5.39746 18.3337 9.99984Z'
                        stroke='#242424'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <p>The specialist will arrive at your home in 45 minutes</p>
                  </TextAndIconWrap>
                  <TextAndIconWrap>
                    <svg
                      width='18'
                      height='16'
                      viewBox='0 0 18 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M3.16699 8.8335H5.66699M0.666992 5.50016L2.33366 6.3335L3.39253 3.15689C3.61109 2.50121 3.72037 2.17336 3.92307 1.93098C4.10206 1.71694 4.33192 1.55126 4.59158 1.44914C4.88562 1.3335 5.2312 1.3335 5.92235 1.3335H12.0783C12.7695 1.3335 13.115 1.3335 13.4091 1.44914C13.6687 1.55126 13.8986 1.71694 14.0776 1.93098C14.2803 2.17336 14.3896 2.50121 14.6081 3.15689L15.667 6.3335L17.3337 5.50016M12.3337 8.8335H14.8337M4.66699 6.3335H13.3337C14.7338 6.3335 15.4339 6.3335 15.9686 6.60598C16.439 6.84566 16.8215 7.22812 17.0612 7.69852C17.3337 8.23330 17.3337 8.93337 17.3337 10.3335V12.5835C17.3337 12.9707 17.3337 13.1643 17.3016 13.3253C17.1701 13.9865 16.6533 14.5033 15.9921 14.6348C15.8311 14.6668 15.6375 14.6668 15.2503 14.6668H14.8337C13.9132 14.6668 13.167 13.9206 13.167 13.0002C13.167 12.77 12.9804 12.5835 12.7503 12.5835H5.25033C5.02021 12.5835 4.83366 12.77 4.83366 13.0002C4.83366 13.9206 4.08747 14.6668 3.16699 14.6668H2.75033C2.36311 14.6668 2.16951 14.6668 2.00851 14.6348C1.34736 14.5033 0.830528 13.9865 0.699017 13.3253C0.666992 13.1643 0.666992 12.9707 0.666992 12.5835V10.3335C0.666992 8.93337 0.666992 8.2333 0.939476 7.69852C1.17916 7.22812 1.56161 6.84566 2.03202 6.60598C2.5668 6.3335 3.26686 6.3335 4.66699 6.3335Z'
                        stroke='#242424'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <p>Delivery of spare parts from our own warehouse</p>
                  </TextAndIconWrap>
                </TextWrapper>
              </MainWrapImage>

              <TabletImage src={fridge1} alt='Why Airtexno Image 2' className='secondary-image' />
            </TabletImageRow>
          </TabletContentWrapper>
        </DeckstopImageContainer>
      </TabletContainer>
    );
  }

  if (isTablet) {
    return (
      <TabletContainer>
        <Title>
          <span>Refrigeration</span> maintenance <span>and </span> setup services
        </Title>
        <TabletContentWrapper>
          <TabletImageRow>
            <MainWrapImage>
              <TabletImage src={fridge} alt='Why Airtexno Image 1' className='main-image' />
              <TextWrapper className='tablet-text-wrapper'>
                <TextAndIconWrap>
                  <svg
                    width='21'
                    height='20'
                    viewBox='0 0 21 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5.50033 4.99984L9.25033 8.74984M5.50033 4.99984H3.00033L2.16699 2.49984L3.00033 1.6665L5.50033 2.49984V4.99984ZM16.5495 2.28401L14.3598 4.47369C14.0298 4.80371 13.8648 4.96872 13.803 5.15899C13.7486 5.32636 13.7486 5.50665 13.803 5.67402C13.8648 5.86429 14.0298 6.0293 14.3598 6.35931L14.5575 6.55703C14.8875 6.88704 15.0525 7.05205 15.2428 7.11387C15.4102 7.16825 15.5905 7.16825 15.7578 7.11387C15.9481 7.05205 16.1131 6.88704 16.4431 6.55703L18.4914 4.50877C18.712 5.04557 18.8337 5.6335 18.8337 6.24984C18.8337 8.78114 16.7816 10.8332 14.2503 10.8332C13.9452 10.8332 13.6469 10.8033 13.3585 10.7464C12.9533 10.6666 12.7508 10.6266 12.628 10.6388C12.4974 10.6518 12.4331 10.6714 12.3174 10.7333C12.2086 10.7915 12.0995 10.9007 11.8812 11.119L5.91699 17.0832C5.22664 17.7735 4.10735 17.7735 3.41699 17.0832C2.72664 16.3928 2.72664 15.2735 3.41699 14.5832L9.38118 8.61898C9.59947 8.40069 9.70861 8.29155 9.76684 8.18274C9.82874 8.06707 9.84832 8.00273 9.86132 7.87218C9.87356 7.74938 9.83361 7.54682 9.75371 7.1417C9.69682 6.85322 9.66699 6.55501 9.66699 6.24984C9.66699 3.71853 11.719 1.6665 14.2503 1.6665C15.0882 1.6665 15.8736 1.89136 16.5495 2.28401ZM10.5004 12.4998L15.0837 17.0831C15.774 17.7734 16.8933 17.7734 17.5836 17.0831C18.274 16.3927 18.274 15.2734 17.5836 14.5831L13.8131 10.8126C13.5462 10.7873 13.2859 10.7392 13.0343 10.6701C12.7101 10.5811 12.3544 10.6457 12.1167 10.8835L10.5004 12.4998Z'
                      stroke='#242424'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <p>Free diagnostics on the day of the request</p>
                </TextAndIconWrap>
                <TextAndIconWrap>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10.0003 4.99984V9.99984L13.3337 11.6665M18.3337 9.99984C18.3337 14.6022 14.6027 18.3332 10.0003 18.3332C5.39795 18.3332 1.66699 14.6022 1.66699 9.99984C1.66699 5.39746 5.39795 1.6665 10.0003 1.6665C14.6027 1.6665 18.3337 5.39746 18.3337 9.99984Z'
                      stroke='#242424'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <p>The specialist will arrive at your home in 45 minutes</p>
                </TextAndIconWrap>
                <TextAndIconWrap>
                  <svg
                    width='18'
                    height='16'
                    viewBox='0 0 18 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M3.16699 8.8335H5.66699M0.666992 5.50016L2.33366 6.3335L3.39253 3.15689C3.61109 2.50121 3.72037 2.17336 3.92307 1.93098C4.10206 1.71694 4.33192 1.55126 4.59158 1.44914C4.88562 1.3335 5.2312 1.3335 5.92235 1.3335H12.0783C12.7695 1.3335 13.115 1.3335 13.4091 1.44914C13.6687 1.55126 13.8986 1.71694 14.0776 1.93098C14.2803 2.17336 14.3896 2.50121 14.6081 3.15689L15.667 6.3335L17.3337 5.50016M12.3337 8.8335H14.8337M4.66699 6.3335H13.3337C14.7338 6.3335 15.4339 6.3335 15.9686 6.60598C16.439 6.84566 16.8215 7.22812 17.0612 7.69852C17.3337 8.23330 17.3337 8.93337 17.3337 10.3335V12.5835C17.3337 12.9707 17.3337 13.1643 17.3016 13.3253C17.1701 13.9865 16.6533 14.5033 15.9921 14.6348C15.8311 14.6668 15.6375 14.6668 15.2503 14.6668H14.8337C13.9132 14.6668 13.167 13.9206 13.167 13.0002C13.167 12.77 12.9804 12.5835 12.7503 12.5835H5.25033C5.02021 12.5835 4.83366 12.77 4.83366 13.0002C4.83366 13.9206 4.08747 14.6668 3.16699 14.6668H2.75033C2.36311 14.6668 2.16951 14.6668 2.00851 14.6348C1.34736 14.5033 0.830528 13.9865 0.699017 13.3253C0.666992 13.1643 0.666992 12.9707 0.666992 12.5835V10.3335C0.666992 8.93337 0.666992 8.2333 0.939476 7.69852C1.17916 7.22812 1.56161 6.84566 2.03202 6.60598C2.5668 6.3335 3.26686 6.3335 4.66699 6.3335Z'
                      stroke='#242424'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <p>Delivery of spare parts from our own warehouse</p>
                </TextAndIconWrap>
              </TextWrapper>
            </MainWrapImage>

            <TabletImage src={fridge1} alt='Why Airtexno Image 2' className='secondary-image' />
          </TabletImageRow>
          <TabletDescription>
            We specialize in expert appliance repairs, bringing your home essentials back to life
            with care and precision — so your family can get back to what matters.
          </TabletDescription>
          <TabletButtonRow>
            <TabletPrimaryButton>
              <TabletButtonTextWhite>Contact Us</TabletButtonTextWhite>
            </TabletPrimaryButton>
            <TabletSecondaryButton>
              <a href='tel:+18055002705'>
                <TabletButtonTextBlack>Call Us</TabletButtonTextBlack>
              </a>
            </TabletSecondaryButton>
          </TabletButtonRow>
        </TabletContentWrapper>
      </TabletContainer>
    );
  }

  return (
    <Container>
      <Title>
        <span>Refrigeration</span> maintenance <span>and </span> setup services
      </Title>
      <ContentWrapper>
        <ImageContainer>
          <Image src={fridge} alt='Why Airtexno Image 1' />
          <TextWrapper>
            <TextAndIconWrap>
              <svg
                width='21'
                height='20'
                viewBox='0 0 21 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.50033 4.99984L9.25033 8.74984M5.50033 4.99984H3.00033L2.16699 2.49984L3.00033 1.6665L5.50033 2.49984V4.99984ZM16.5495 2.28401L14.3598 4.47369C14.0298 4.80371 13.8648 4.96872 13.803 5.15899C13.7486 5.32636 13.7486 5.50665 13.803 5.67402C13.8648 5.86429 14.0298 6.0293 14.3598 6.35931L14.5575 6.55703C14.8875 6.88704 15.0525 7.05205 15.2428 7.11387C15.4102 7.16825 15.5905 7.16825 15.7578 7.11387C15.9481 7.05205 16.1131 6.88704 16.4431 6.55703L18.4914 4.50877C18.712 5.04557 18.8337 5.6335 18.8337 6.24984C18.8337 8.78114 16.7816 10.8332 14.2503 10.8332C13.9452 10.8332 13.6469 10.8033 13.3585 10.7464C12.9533 10.6666 12.7508 10.6266 12.628 10.6388C12.4974 10.6518 12.4331 10.6714 12.3174 10.7333C12.2086 10.7915 12.0995 10.9007 11.8812 11.119L5.91699 17.0832C5.22664 17.7735 4.10735 17.7735 3.41699 17.0832C2.72664 16.3928 2.72664 15.2735 3.41699 14.5832L9.38118 8.61898C9.59947 8.40069 9.70861 8.29155 9.76684 8.18274C9.82874 8.06707 9.84832 8.00273 9.86132 7.87218C9.87356 7.74938 9.83361 7.54682 9.75371 7.1417C9.69682 6.85322 9.66699 6.55501 9.66699 6.24984C9.66699 3.71853 11.719 1.6665 14.2503 1.6665C15.0882 1.6665 15.8736 1.89136 16.5495 2.28401ZM10.5004 12.4998L15.0837 17.0831C15.774 17.7734 16.8933 17.7734 17.5836 17.0831C18.274 16.3927 18.274 15.2734 17.5836 14.5831L13.8131 10.8126C13.5462 10.7873 13.2859 10.7392 13.0343 10.6701C12.7101 10.5811 12.3544 10.6457 12.1167 10.8835L10.5004 12.4998Z'
                  stroke='#242424'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <p>Free diagnostics on the day of the request</p>
            </TextAndIconWrap>
            <TextAndIconWrap>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.0003 4.99984V9.99984L13.3337 11.6665M18.3337 9.99984C18.3337 14.6022 14.6027 18.3332 10.0003 18.3332C5.39795 18.3332 1.66699 14.6022 1.66699 9.99984C1.66699 5.39746 5.39795 1.6665 10.0003 1.6665C14.6027 1.6665 18.3337 5.39746 18.3337 9.99984Z'
                  stroke='#242424'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <p>The specialist will arrive at your home in 45 minutes</p>
            </TextAndIconWrap>
            <TextAndIconWrap>
              <svg
                width='18'
                height='16'
                viewBox='0 0 18 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.16699 8.8335H5.66699M0.666992 5.50016L2.33366 6.3335L3.39253 3.15689C3.61109 2.50121 3.72037 2.17336 3.92307 1.93098C4.10206 1.71694 4.33192 1.55126 4.59158 1.44914C4.88562 1.3335 5.2312 1.3335 5.92235 1.3335H12.0783C12.7695 1.3335 13.115 1.3335 13.4091 1.44914C13.6687 1.55126 13.8986 1.71694 14.0776 1.93098C14.2803 2.17336 14.3896 2.50121 14.6081 3.15689L15.667 6.3335L17.3337 5.50016M12.3337 8.8335H14.8337M4.66699 6.3335H13.3337C14.7338 6.3335 15.4339 6.3335 15.9686 6.60598C16.439 6.84566 16.8215 7.22812 17.0612 7.69852C17.3337 8.23330 17.3337 8.93337 17.3337 10.3335V12.5835C17.3337 12.9707 17.3337 13.1643 17.3016 13.3253C17.1701 13.9865 16.6533 14.5033 15.9921 14.6348C15.8311 14.6668 15.6375 14.6668 15.2503 14.6668H14.8337C13.9132 14.6668 13.167 13.9206 13.167 13.0002C13.167 12.77 12.9804 12.5835 12.7503 12.5835H5.25033C5.02021 12.5835 4.83366 12.77 4.83366 13.0002C4.83366 13.9206 4.08747 14.6668 3.16699 14.6668H2.75033C2.36311 14.6668 2.16951 14.6668 2.00851 14.6348C1.34736 14.5033 0.830528 13.9865 0.699017 13.3253C0.666992 13.1643 0.666992 12.9707 0.666992 12.5835V10.3335C0.666992 8.93337 0.666992 8.2333 0.939476 7.69852C1.17916 7.22812 1.56161 6.84566 2.03202 6.60598C2.5668 6.3335 3.26686 6.3335 4.66699 6.3335Z'
                  stroke='#242424'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>{' '}
              <p>Delivery of spare parts from our own warehouse</p>
            </TextAndIconWrap>
          </TextWrapper>
        </ImageContainer>
        <Description>
          We specialize in expert appliance repairs, bringing your home essentials back to life with
          care and precision — so your family can get back to what matters.
        </Description>
        <ButtonRow>
          <PrimaryButton to='/contact#ap'>
            <ButtonTextWhite>Contact Us</ButtonTextWhite>
          </PrimaryButton>
          <SecondaryButton>
            <a href='tel:+18055002705'>
              <ButtonTextBlack>Call Us</ButtonTextBlack>
            </a>
          </SecondaryButton>
        </ButtonRow>
      </ContentWrapper>
    </Container>
  );
};
