import React, { useEffect, useState } from 'react';
import {
  HeaderWrapper,
  Logo,
  NavbarContainer,
  NavItem,
  NavList,
  StyledNavLink,
  TabletContainer,
  ContainerLink,
  LinkInfo,
  TransparentButton,
  LangButtonContainer,
} from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BurgerMenu from '../MobileMenu/MobileMenu';
import logo from '../../assets/icons/LogoandTextContainer.svg';
import { PrimaryButton } from '../Hero/Hero.styled';
import loc from '../../assets/icons/location.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const location = useLocation();

  // Визначаємо, чи потрібен темний режим для поточної сторінки
  const isDarkMode = ['/contact', '/service', '/tips', '/pricing', "/fridge"].some(path =>
    location.pathname.startsWith(path)
  );

  // об'єднаний тригер оверлею
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
        rootMargin: '50px 0px 0px 0px',
      }
    );

    const target = document.createElement('div');
    target.style.position = 'absolute';
    target.style.top = '50px';
    target.style.height = '1px';
    target.style.pointerEvents = 'none';
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
    <NavbarContainer $isScrolled={isScrolled} $darkMode={isDarkMode}>
      <HeaderWrapper id='header'>
        <Logo
          to='/home#hero'
          onClick={handleLogoClick}
          $overlayOpen={isOverlayOpen}
          $darkMode={isDarkMode}
        >
          <img src={logo} alt='Logo' />
        </Logo>

        {!isMobile && (
          <NavList>
            <NavItem>
              <StyledNavLink to='/home#hero' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode}>
                Home
              </StyledNavLink>
            </NavItem>

            <NavItem>
              <StyledNavLink to='/service#all' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode}>
                Services
              </StyledNavLink>
            </NavItem>

            <NavItem>
              <StyledNavLink to='/about#ap' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode}>
                About Us
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to='/tips#app' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode}>
                Tips
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to='/contact#ap' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode}>
                Contact
              </StyledNavLink>
            </NavItem>
          </NavList>
        )}
        {isDeckstop && (
          <TabletContainer>
            <ContainerLink>
              <LinkInfo $overlayOpen={isOverlayOpen} $darkMode={isDarkMode}>
                <a href='tel:+18055002705'>+1 (805) 500-2705</a>
              </LinkInfo>
              <LinkInfo $overlayOpen={isOverlayOpen} $darkMode={isDarkMode}>
                Mon–Sat: 8AM–6PM | Sun: 9AM–4PM
              </LinkInfo>
            </ContainerLink>
            <ContainerLink>
              <LinkInfo $overlayOpen={isOverlayOpen} $darkMode={isDarkMode}>
                <img src={loc} alt='🗺️' />
                <a
                  href='https://maps.app.goo.gl/cJF4BwHPJFbYsQAMA'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Thousand Oaks
                </a>
              </LinkInfo>
              <LinkInfo $overlayOpen={isOverlayOpen} $darkMode={isDarkMode}>
                & Nearby Cities
              </LinkInfo>
            </ContainerLink>
          </TabletContainer>
        )}
        <LangButtonContainer>
          <div style={{ display: 'flex', gap: 16 }}>
            <PrimaryButton to='/contact#ap'>Contact Us</PrimaryButton>
            <TransparentButton $overlayOpen={isOverlayOpen} $darkMode={isDarkMode}>
              <a href='tel:+18055002705'>Call Us</a>
            </TransparentButton>
            {isMobile && <BurgerMenu isOpen={isBurgerOpen} setIsOpen={setIsBurgerOpen} />}
          </div>
        </LangButtonContainer>
      </HeaderWrapper>
      {isTablet && (
        <TabletContainer>
          <ContainerLink>
            <LinkInfo $overlayOpen={isOverlayOpen} $darkMode={isDarkMode}>
              <a href='tel:+18055002705'>+1 (805) 500-2705</a>
            </LinkInfo>
            <LinkInfo $overlayOpen={isOverlayOpen} $darkMode={isDarkMode}>
              Mon–Sat: 8AM–6PM | Sun: 9AM–4PM
            </LinkInfo>
          </ContainerLink>
          <ContainerLink>
            <LinkInfo $overlayOpen={isOverlayOpen} $darkMode={isDarkMode}>
              <img src={loc} alt='🗺️' />
              <a
                href='https://www.google.com/maps/place/Thousand+Oaks'
                target='_blank'
                rel='noopener noreferrer'
              >
                Thousand Oaks
              </a>
            </LinkInfo>
            <LinkInfo $overlayOpen={isOverlayOpen} $darkMode={isDarkMode}>
              & Nearby Cities
            </LinkInfo>
          </ContainerLink>
        </TabletContainer>
      )}
    </NavbarContainer>
  );
};

export default Header;
