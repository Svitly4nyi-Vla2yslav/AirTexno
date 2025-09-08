import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  Wrapper,
  BurgerButton,
  Line,
  MenuOverlay,
  MenuLink,
  MenuItem,
  Divider,
} from './MobileMenu.styled';
import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100vw;
  overflow: auto;
  margin-top: 40px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  width: 166px;
`;

const Item = styled.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25em;
  width: 100%;
`;

// Контейнер для всього футера
const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.875rem; /* 3.5 * 0.25rem */
  width: 92%;
  overflow: auto;
  position: absolute;
  bottom: 2%;

  &::before {
    content: '';
    position: absolute;
    top: 8%;
    left: 0;
    width: 100%;
    border-top: 1px solid rgba(195, 187, 187, 1);
  }
`;

// Верхня напівпрозора смужка
const OverlayBar = styled.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
`;

// Контейнер для тексту
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem; /* 2 * 0.25rem */
  width: 100%;
`;

// Стиль для тексту "Designed by TRBN"
const TextBold = styled.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500;
  line-height: 1.2em;
  width: fit-content;
`;

// Стиль для тексту "Copyright ..."
const TextNormal = styled.p`
  color: #242424;
  font-family: 'Geist', sans-serif;
  font-size: 0.875rem; /* text-sm */
  font-weight: 400;
  line-height: 1.2em;
  width: fit-content;
`;

const topLineVariants = {
  open: { rotate: 45, y: 8 },
  closed: { rotate: 0, y: 0 },
};

const middleLineVariants = {
  open: { opacity: 0 },
  closed: { opacity: 1 },
};

const bottomLineVariants = {
  open: { rotate: -45, y: -8 },
  closed: { rotate: 0, y: 0 },
};

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

type NavLink = {
  to: string;
  label: string;
  active?: boolean;
};

type BurgerMenuProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BurgerMenu = ({ isOpen, setIsOpen }: BurgerMenuProps) => {
  const [, setIsServicesOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  // Визначаємо, чи потрібен темний режим для поточної сторінки
  const isDarkMode = ['/contact', '/service', '/tips', '/pricing', '/fridge'].some(path =>
    location.pathname.startsWith(path)
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  // Функція для визначення активної сторінки
  const isActivePage = (path: string) => {
    const currentPath = location.pathname;

    // Спеціальна логіка для головної сторінки
    if (path === '/home#hero') {
      return currentPath === '/' || currentPath === '/home';
    }

    // Для інших сторінок перевіряємо початок шляху
    return currentPath.startsWith(path.split('#')[0]);
  };

  const navLinks: NavLink[] = [
    { to: '/home#hero', label: 'Home' },
    { to: '/service#all', label: 'Services' },
    { to: '/about#ap', label: 'About Us' },
    { to: '/tips#app', label: 'Tips' },
    { to: '/contact#ap', label: 'Contact' },
  ];

  return (
    <Wrapper>
      <BurgerButton
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <Line
          $isOpen={isOpen}
          $darkMode={isDarkMode}
          animate={isOpen ? 'open' : 'closed'}
          variants={topLineVariants}
        />
        <Line
          $isOpen={isOpen}
          $darkMode={isDarkMode}
          animate={isOpen ? 'open' : 'closed'}
          variants={middleLineVariants}
        />
        <Line
          $isOpen={isOpen}
          $darkMode={isDarkMode}
          animate={isOpen ? 'open' : 'closed'}
          variants={bottomLineVariants}
        />
      </BurgerButton>
      <AnimatePresence>
        {isOpen && (
          <MenuOverlay
            initial='closed'
            animate='open'
            exit='closed'
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => {
              const isActive = isActivePage(link.to);
              return (
                <div key={index}>
                  <MenuLink to={link.to} onClick={closeMenu}>
                    <MenuItem $active={isActive}>{t(link.label)}</MenuItem>
                  </MenuLink>
                  <Divider />
                </div>
              );
            })}
            <Container>
              <Column>
                <Item>Refrigerator Repair</Item>
                <Item>Dryer Repair</Item>
                <Item>Oven Repair</Item>
                <Item>Range & Stove Repair</Item>
              </Column>
              <Column>
                <Item>Washer Repair</Item>
                <Item>Dishwasher Repair</Item>
                <Item>Cooktop Repair</Item>
                <Item>Built-in and High-End Brands Repair</Item>
              </Column>
            </Container>
            <FooterContainer>
              <OverlayBar />
              <TextContainer>
                <TextBold>Designed by TRBN</TextBold>
                <TextNormal>Copyright © 2025 Airtexno - All Rights Reserved.</TextNormal>
              </TextContainer>
            </FooterContainer>
          </MenuOverlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default BurgerMenu;
