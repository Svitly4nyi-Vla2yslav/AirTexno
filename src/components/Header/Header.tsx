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
  LangButtonContainer,
  ArrowDown,
  DropdownItemWithSubmenu,
  DropdownMenu,
  SubDropdownMenu,
  SubDropdownItem,
  ServiceLink,
} from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BurgerMenu from '../MobileMenu/MobileMenu';
import logo from '../../assets/icons/LogoandTextContainer.svg';
import { PrimaryButton } from '../Hero/Hero.styled';
import loc from '../../assets/icons/location.png';
import Down from '../../assets/icons/chevron-down.svg';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Визначаємо, чи потрібен темний режим для поточної сторінки
  useEffect(() => {
    const darkPaths = ['/contact', '/service', '/tips', '/pricing', '/fridge', '/dryer', '/oven-repair', '/thermostat', '/dryer-vent-cleaning', '/smart-doorbell', '/garbage-disposal'];
    setIsDarkMode(darkPaths.some(path => location.pathname.startsWith(path)));
  }, [location.pathname]);

  // об'єднаний тригер оверлею
  const isOverlayOpen = isServicesOpen || isBurgerOpen;

  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (window.location.pathname !== '/home') {
      navigate('/home');
    } else {
      // Чекаємо поки DOM оновиться
      setTimeout(() => {
        const element = document.getElementById('header');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
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
      <HeaderWrapper>
        <Logo
          to='/home'
          onClick={handleLogoClick}
          $overlayOpen={isOverlayOpen}
          $darkMode={isDarkMode}
        >
          <img src={logo} alt='Logo' />
        </Logo>

        {!isMobile && (
          <NavList>
            <NavItem>
              <StyledNavLink to='/home' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode}>
                Home
              </StyledNavLink>
            </NavItem>

            <NavItem
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              onClick={toggleServicesMenu}
            >
              <ServiceLink>
                <StyledNavLink
                  to='/service'
                  $overlayOpen={isOverlayOpen}
                  $darkMode={isDarkMode}
                  style={{ padding: '10px 0px' }}
                >
                  Service
                  <ArrowDown
                    src={Down}
                    alt='⬇️'
                    $overlayOpen={isOverlayOpen}
                    $darkMode={isDarkMode}
                  />
                </StyledNavLink>
                {isServicesOpen && (
                  <DropdownMenu>
                    <DropdownItemWithSubmenu>
                      <StyledNavLink
                        to='/fridge'
                        $overlayOpen={isOverlayOpen}
                        $darkMode={isDarkMode}
                        onClick={() => setIsServicesOpen(false)}
                      >
                      Refrigerator Repair
                      </StyledNavLink>
                      <SubDropdownMenu>
                        <SubDropdownItem>
                          <StyledNavLink to='/fridge/ge-monogram' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode} onClick={() => setIsServicesOpen(false)}>
                          GE Monogram
                          </StyledNavLink>
                        </SubDropdownItem>
                        <SubDropdownItem>
                          <StyledNavLink to='/fridge/kitchenaid' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode} onClick={() => setIsServicesOpen(false)}>
                          KitchenAid
                          </StyledNavLink>
                        </SubDropdownItem>
                        <SubDropdownItem>
                          <StyledNavLink to='/fridge/sub-zero' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode} onClick={() => setIsServicesOpen(false)}>
                          Sub-Zero
                          </StyledNavLink>
                        </SubDropdownItem>
                        <SubDropdownItem>
                          <StyledNavLink to='/fridge/thermador' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode} onClick={() => setIsServicesOpen(false)}>
                          Thermador
                          </StyledNavLink>
                        </SubDropdownItem>
                        <SubDropdownItem>
                          <StyledNavLink to='/fridge/viking' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode} onClick={() => setIsServicesOpen(false)}>
                          Viking
                          </StyledNavLink>
                        </SubDropdownItem>
                      </SubDropdownMenu>
                    </DropdownItemWithSubmenu>
                    <DropdownItemWithSubmenu>
                      <StyledNavLink
                        to='/dryer'
                        $overlayOpen={isOverlayOpen}
                        $darkMode={isDarkMode}
                        onClick={() => setIsServicesOpen(false)}
                      >
                      Dryer  Repair 
                      </StyledNavLink>
                      <SubDropdownMenu>
                        <SubDropdownItem>
                          <StyledNavLink to='/dryer/lg' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode} onClick={() => setIsServicesOpen(false)}>LG</StyledNavLink>
                        </SubDropdownItem>
                        <SubDropdownItem>
                          <StyledNavLink to='/dryer/samsung' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode} onClick={() => setIsServicesOpen(false)}>Samsung</StyledNavLink>
                        </SubDropdownItem>
                        <SubDropdownItem>
                          <StyledNavLink to='/dryer/ge' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode} onClick={() => setIsServicesOpen(false)}>GE</StyledNavLink>
                        </SubDropdownItem>
                        <SubDropdownItem>
                          <StyledNavLink to='/dryer/maytag' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode} onClick={() => setIsServicesOpen(false)}>Maytag</StyledNavLink>
                        </SubDropdownItem>
                        <SubDropdownItem>
                          <StyledNavLink to='/dryer/whirlpool' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode} onClick={() => setIsServicesOpen(false)}>Whirlpool</StyledNavLink>
                        </SubDropdownItem>
                        <SubDropdownItem>
                          <StyledNavLink to='/dryer/kenmore' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode} onClick={() => setIsServicesOpen(false)}>Kenmore</StyledNavLink>
                        </SubDropdownItem>
                        <SubDropdownItem>
                          <StyledNavLink to='/dryer/miele' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode} onClick={() => setIsServicesOpen(false)}>Miele</StyledNavLink>
                        </SubDropdownItem>
                        <SubDropdownItem>
                          <StyledNavLink to='/dryer/bosch' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode} onClick={() => setIsServicesOpen(false)}>Bosch</StyledNavLink>
                        </SubDropdownItem>
                        <SubDropdownItem>
                          <StyledNavLink to='/dryer/speed-queen' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode} onClick={() => setIsServicesOpen(false)}>Speed Queen</StyledNavLink>
                        </SubDropdownItem>
                        <SubDropdownItem>
                          <StyledNavLink to='/dryer/electrolux' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode} onClick={() => setIsServicesOpen(false)}>Electrolux</StyledNavLink>
                        </SubDropdownItem>
                      </SubDropdownMenu>
                    </DropdownItemWithSubmenu>
                    <DropdownItemWithSubmenu>
                      <StyledNavLink
                        to='/oven-repair'
                        $overlayOpen={isOverlayOpen}
                        $darkMode={isDarkMode}
                        onClick={() => setIsServicesOpen(false)}
                      >
                      Oven Repair 
                      </StyledNavLink>
                      <SubDropdownMenu>
                        <SubDropdownItem>
                          <StyledNavLink
                            to='/oven-repair/kitchenaid'
                            $overlayOpen={isOverlayOpen}
                            $darkMode={isDarkMode}
                            onClick={() => setIsServicesOpen(false)}
                          >
                          KitchenAid
                          </StyledNavLink>
                        </SubDropdownItem>
                        <SubDropdownItem>
                          <StyledNavLink
                            to='/oven-repair/thermador'
                            $overlayOpen={isOverlayOpen}
                            $darkMode={isDarkMode}
                            onClick={() => setIsServicesOpen(false)}
                          >
                          Thermador
                          </StyledNavLink>
                        </SubDropdownItem>
                        <SubDropdownItem>
                          <StyledNavLink
                            to='/oven-repair/viking'
                            $overlayOpen={isOverlayOpen}
                            $darkMode={isDarkMode}
                            onClick={() => setIsServicesOpen(false)}
                          >
                          Viking
                          </StyledNavLink>
                        </SubDropdownItem>
                        <SubDropdownItem>
                          <StyledNavLink
                            to='/oven-repair/wolf'
                            $overlayOpen={isOverlayOpen}
                            $darkMode={isDarkMode}
                            onClick={() => setIsServicesOpen(false)}
                          >
                          Wolf
                          </StyledNavLink>
                        </SubDropdownItem>
                      </SubDropdownMenu>
                    </DropdownItemWithSubmenu>
                    <DropdownItemWithSubmenu>
                      <StyledNavLink
                        to='/service'
                        $overlayOpen={isOverlayOpen}
                        $darkMode={isDarkMode}
                        onClick={(e) => { e.preventDefault(); }}
                      >
                      Other Services
                      </StyledNavLink>
                      <SubDropdownMenu>
                        <SubDropdownItem>
                          <StyledNavLink to='/thermostat' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode} onClick={() => setIsServicesOpen(false)}>
                          Thermostat Repair
                          </StyledNavLink>
                        </SubDropdownItem>
                        <SubDropdownItem>
                          <StyledNavLink to='/dryer-vent-cleaning' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode} onClick={() => setIsServicesOpen(false)}>
                          Dryer Vent Cleaning
                          </StyledNavLink>
                        </SubDropdownItem>
                        <SubDropdownItem>
                          <StyledNavLink to='/smart-doorbell' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode} onClick={() => setIsServicesOpen(false)}>
                          Smart Doorbell Installation
                          </StyledNavLink>
                        </SubDropdownItem>
                        <SubDropdownItem>
                          <StyledNavLink to='/garbage-disposal' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode} onClick={() => setIsServicesOpen(false)}>
                          Garbage Disposal
                          </StyledNavLink>
                        </SubDropdownItem>
                      </SubDropdownMenu>
                    </DropdownItemWithSubmenu>
                  </DropdownMenu>
                )}
              </ServiceLink>
            </NavItem>

            <NavItem>
              <StyledNavLink to='/about' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode}>
                About Us
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to='/tips' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode}>
                Tips
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to='/contact' $overlayOpen={isOverlayOpen} $darkMode={isDarkMode}>
                Contact
              </StyledNavLink>
            </NavItem>
          </NavList>
        )}
        {isDeckstop && (
          <TabletContainer>
            <ContainerLink>
              <LinkInfo $overlayOpen={isOverlayOpen} $darkMode={isDarkMode}>
                <a href='tel:+18055002705'>(805) 500-2705</a>
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
            {!isMobile && <PrimaryButton to='/contact'>Request Service</PrimaryButton>}
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
