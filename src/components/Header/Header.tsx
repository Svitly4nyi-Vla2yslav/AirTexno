import React, { useEffect, useState } from 'react';
import {
  HeaderWrapper,
  LangButtonContainer,
  Logo,
  NavbarContainer,
  NavItem,
  NavList,
  StyledNavLink,
  TabletContainer,
  ContainerLink,
  LinkInfo,
  TransparentButton,
} from './Header.styled';
import { useMediaQuery } from 'react-responsive';

import { useNavigate } from 'react-router-dom';
import BurgerMenu from '../MobileMenu/MobileMenu';
import logo from '../../assets/icons/LogoandTextContainer.svg';
import { PrimaryButton } from '../Hero/Hero.styled';
import location from '../../assets/icons/location.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  // об’єднаний тригер оверлею
  const isOverlayOpen = isServicesOpen || isBurgerOpen;

  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    if (window.location.pathname !== '/home') {
      navigate('/home');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px 0px 0px', // Додаємо відступ для більш плавного переходу
      }
    );

    const target = document.createElement('div');
    target.style.position = 'absolute';
    target.style.top = '50px';
    target.style.height = '1px';
    target.style.pointerEvents = 'none'; // Щоб не заважав інтеракції
    document.body.appendChild(target);

    observer.observe(target);

    return () => {
      observer.disconnect();
      if (document.body.contains(target)) {
        document.body.removeChild(target);
      }
    };
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 1439px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1439px)' });
  const isDeckstop = useMediaQuery({ query: '(min-width: 1440px)' });
  return (
    <NavbarContainer $isScrolled={isScrolled}>
      <HeaderWrapper id='header'>
        <Logo
          to='/home#hero'
          onClick={handleLogoClick}
          $overlayOpen={isOverlayOpen} // ← передаємо в styled
        >
          <img src={logo} alt='Logo' />
        </Logo>

        {!isMobile && (
          <NavList>
            <NavItem>
              <StyledNavLink to='/home#hero'>Home</StyledNavLink>
            </NavItem>

            <NavItem>
              <StyledNavLink to='/service#all' style={{ padding: '10px 0px' }}>
                Services
              </StyledNavLink>
            </NavItem>

            <NavItem>
              <StyledNavLink
                // style={{ pointerEvents: 'none', opacity: 0.5 }}
                to='/about#ap'
              >
                About Us
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink
                // style={{ pointerEvents: 'none', opacity: 0.5 }}
                to='/pricing#app'
              >
                Tips
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink
                // style={{ pointerEvents: 'none', opacity: 0.5 }}
                to='/contact#ap'
              >
                Contact
              </StyledNavLink>
            </NavItem>
          </NavList>
        )}
        {isDeckstop && (
          <TabletContainer>
            <ContainerLink>
              <LinkInfo>
                <a href='tel:+18055002705'>+1 (805) 500-2705</a>
              </LinkInfo>
              <LinkInfo>Mon–Sat: 8AM–6PM | Sun: 9AM–4PM</LinkInfo>
            </ContainerLink>
            <ContainerLink>
              <LinkInfo>
                {' '}
                <img src={location} alt='🗺️' />{' '}
                <a
                  href='https://www.google.com/maps/place/%D0%A2%D0%B0%D1%83%D0%B7%D0%B5%D0%BD%D0%B4-%D0%9E%D1%83%D0%BA%D1%81,+%D0%9A%D0%B0%D0%BB%D1%96%D1%84%D0%BE%D1%80%D0%BD%D1%96%D1%8F,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8/@34.1878421,-118.9303503,16784m/data=!3m1!1e3!4m6!3m5!1s0x80e8255670288891:0x8d2e7a0147cc2e26!8m2!3d34.1761133!4d-118.8487793!16zL20vMHI4Yzg?authuser=0&entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Thousand Oaks
                </a>
              </LinkInfo>
              <LinkInfo> & Nearby Cities</LinkInfo>
            </ContainerLink>
          </TabletContainer>
        )}
        <LangButtonContainer>
          <div style={{ display: 'flex' }}>
            <PrimaryButton to='/contact#ap'>Contact Us</PrimaryButton>
            <TransparentButton $overlayOpen={isOverlayOpen}>
              <a href='tel:+18055002705'> Call Us</a>
            </TransparentButton>
            {isMobile && (
              <BurgerMenu
                isOpen={isBurgerOpen}
                setIsOpen={setIsBurgerOpen} // ← керуємо бургером згори
              />
            )}
          </div>
        </LangButtonContainer>
      </HeaderWrapper>
      {isTablet && (
        <TabletContainer>
          <ContainerLink>
            <LinkInfo $overlayOpen={isOverlayOpen}>
              <a href='tel:+18055002705'>+1 (805) 500-2705</a>
            </LinkInfo>
            <LinkInfo $overlayOpen={isOverlayOpen}>Mon–Sat: 8AM–6PM | Sun: 9AM–4PM</LinkInfo>
          </ContainerLink>
          <ContainerLink>
            <LinkInfo $overlayOpen={isOverlayOpen}>
              <img src={location} alt='🗺️' />
              <a
                href='https://www.google.com/maps/place/...'
                target='_blank'
                rel='noopener noreferrer'
              >
                Thousand Oaks
              </a>
            </LinkInfo>
            <LinkInfo $overlayOpen={isOverlayOpen}>& Nearby Cities</LinkInfo>
          </ContainerLink>
        </TabletContainer>
      )}
    </NavbarContainer>
  );
};

export default Header;
