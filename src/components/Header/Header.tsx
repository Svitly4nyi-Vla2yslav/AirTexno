import React, { useEffect, useState } from 'react';
import {
  HeaderWrapper,
  LangButtonContainer,
  Logo,
  NavbarContainer,
  NavItem,
  NavList,
  StyledNavLink,
  DropdownMenu,
  DropdownItem,
  ServiceLink,
} from './Header.styled';
import { useMediaQuery } from 'react-responsive';

import { useNavigate } from 'react-router-dom';
import BurgerMenu from '../MobileMenu/MobileMenu';
import logo from "../../assets/icons/LogoandTextContainer.svg"
import { PrimaryButton } from '../Hero/Hero.styled';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  useEffect(() => {
 
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 1439px)' });

  return (
    <NavbarContainer $isScrolled={isScrolled}>
      <HeaderWrapper id="header">
        <Logo to="/home#hero" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" />
        </Logo>

        {!isMobile && (
          <NavList>
            <NavItem>
              <StyledNavLink to="/home#hero"></StyledNavLink>
            </NavItem>

            <NavItem
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              onClick={toggleServicesMenu}
            >
              <ServiceLink>
                <StyledNavLink to="/service#all" style={{padding: "10px 0px"}}>
                </StyledNavLink>
                {isServicesOpen && (
                  <DropdownMenu>
                    <DropdownItem>
                      <StyledNavLink to="/service/customer-experience#ap">
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to="/service/pos-staff-operations#ap">
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to="/service/kitchen-fulfillment#ap">
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to="/service/inventory-warehousing#ap">
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to="/service/analytics-management#ap">
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to="/service/marketing-customization#ap">
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to="/service/integration-scaling#ap">
                      </StyledNavLink>
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </ServiceLink>
            </NavItem>

            <NavItem>
              <StyledNavLink
                // style={{ pointerEvents: 'none', opacity: 0.5 }}
                to="/about#ap"
              >
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink
                // style={{ pointerEvents: 'none', opacity: 0.5 }}
                to="/pricing#app"
              >
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink
                // style={{ pointerEvents: 'none', opacity: 0.5 }}
                to="/contact#ap"
              >
              </StyledNavLink>
            </NavItem>
          </NavList>
        )}

        <LangButtonContainer>
          <div style={{ display: 'flex' }}>
               <PrimaryButton>Contact Us</PrimaryButton>
          {isMobile && (<BurgerMenu/>)}  
          </div>
        </LangButtonContainer>
      </HeaderWrapper>
    </NavbarContainer>
  );
};

export default Header;