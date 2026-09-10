import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const PHONE_NUMBER = '+18055002705';
const PHONE_DISPLAY = '(805) 500-2705';

export const StickyMobileBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Support the common document scroll sources used across browsers/layouts.
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const shouldShow = scrollY > 500;

      setIsVisible(shouldShow);
    };

    // Listen in capture phase because some layouts scroll nested containers.
    window.addEventListener('scroll', handleScroll, true);
    document.addEventListener('scroll', handleScroll, true);

    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      document.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'phone_click',
        label: 'mobile_sticky_bar'
      });
    }
  };

  const handleRequestClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'open_lead_form',
        label: 'mobile_sticky_bar'
      });
    }
  };

  return (
    <StickyBar $isVisible={isVisible}>
      <ButtonsContainer>
        {/* Call Button */}
        <CallButton
          href={`tel:${PHONE_NUMBER}`}
          onClick={handlePhoneClick}
        >
          <PhoneIcon>📞</PhoneIcon>
          {PHONE_DISPLAY}
        </CallButton>

        {/* Request Service Button */}
        <RequestButton
          to='/contact'
          onClick={handleRequestClick}
        >
          <CalendarIcon>📅</CalendarIcon>
          Request Service
        </RequestButton>
      </ButtonsContainer>
    </StickyBar>
  );
};

// Styled Components
const StickyBar = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: white;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.15);
  border-top: 2px solid #e5e5e5;
  transform: ${({ $isVisible }) => $isVisible ? 'translateY(0)' : 'translateY(100%)'};
  transition: transform 0.3s ease-in-out;

  /* Hide on desktop/tablet */
  @media screen and (min-width: 768px) {
    display: none !important;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const CallButton = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  background: var(--blue-500);
  color: white;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #79caf5ff;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const RequestButton = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  background: #242424;
  color: white;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #3a3a3a;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const PhoneIcon = styled.span`
  font-size: 18px;
`;

const CalendarIcon = styled.span`
  font-size: 18px;
`;
