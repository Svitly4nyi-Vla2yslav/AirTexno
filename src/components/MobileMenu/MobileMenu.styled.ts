import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export interface StyledProps {
  $isOpen?: boolean;
  $darkMode?: boolean;
  $isScrolled?: boolean;
  $overlayOpen?: boolean;
}
export const ServiceContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
`;

// Додати ці стилі до існуючого файлу

export const ServiceLinkMobile = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
`;

export const ServiceTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ArrowDownMobile = styled.img<{
  $overlayOpen?: boolean;
  $darkMode?: boolean;
  $isOpen: boolean;
}>`
  width: 44px;
  height: 44px;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  cursor: pointer;
  flex-shrink: 0;
  object-fit: contain;
  background-color: #5099d08e;
  border-radius: 50%;

  /* Збільшуємо область кліку для тачскрінів */
  padding: 12px;
  margin: -12px;

  /* Стилі для темного/світлого режиму */
  filter: ${({ $overlayOpen, $darkMode }) =>
    $overlayOpen
      ? 'brightness(1) saturate(100%)'
      : $darkMode
      ? 'brightness(1) saturate(100%)'
      : 'brightness(1) invert(1)'};

  /* Покращення для тачскрінів */
  @media (max-width: 768px) {
    width: 44px;
  height: 44px;
    padding: 16px;
    margin: -16px;

    /* Забезпечуємо достатній розмір для торкання */
    min-width: 44px;
    min-height: 44px;
  }

  /* Для iOS та Android оптимізація */
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  &:active {
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg) scale(0.95)' : 'rotate(0deg) scale(0.95)')};
  }
`;


export const DropdownMenuMobile = styled(motion.div)`
  padding-left: 20px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  margin: 8px 0;
`;

export const DropdownItemMobile = styled.div`
  padding: 12px 0;
`;

export const StyledNavLinkDrop = styled(NavLink)`
  color: #666;
  text-decoration: none;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 400;
  display: block;
  padding: 8px 0;
  transition: color 0.3s ease;

  &:hover {
    color: var(--purple-400);
  }

  &.active {
    color: var(--purple-400);
    font-weight: 500;
  }
`;

// Додати ці стилі до існуючого файлу
export const ServiceMenuItem = styled.div`
  position: relative;
`;

export const ServiceMenuLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 0;
  color: #242424;
  text-decoration: none;
  font-family: 'Geist', sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

export const DropdownArrow = styled.img<{ $isOpen: boolean }>`
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const ServiceDropdownMenu = styled.div`
  padding-left: 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;

  &.open {
    max-height: 200px;
  }
`;

export const ServiceDropdownItem = styled.div`
  padding: 12px 0;
`;

export const ServiceSubLink = styled(NavLink)`
  color: #666;
  text-decoration: none;
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 400;
  display: block;

  &:hover {
    color: var(--purple-400);
  }

  &.active {
    color: var(--purple-400);
    font-weight: 500;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const BurgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 8px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  z-index: 1001;

  background: transparent;
  border: none;
`;

export const Line = styled(motion.div)<StyledProps>`
  width: 20px;
  height: 2px;
  background: ${({ $isOpen, $darkMode }) => {
    if ($isOpen) return 'black'; // Чорний колір при відкритому меню
    return $darkMode ? 'black' : 'white'; // Чорний на темних сторінках, білий на світлих
  }};
  border-radius: 2px;
  transition: background 0.3s ease;
`;

export const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(254, 254, 254, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  padding: 20px;
  z-index: 1000;
  overflow-y: auto;

  &::before {
    content: '';
    position: absolute;
    top: 8%;
    left: 0;
    width: 100%;
    border-top: 1px solid rgba(195, 187, 187, 1);
  }
  @media screen and (min-width: 768px) {
    &::before {
      content: '';
      position: absolute;
      top: 13%;
      left: 0;
      width: 100%;
    }
  }
`;

export const MenuLink = styled(NavLink)`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 56px;
  line-height: 120%;
  color: var(--white-50);
  margin: 12px 0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--purple-400);
  }
`;

export const MenuItem = styled.p<{ $active?: boolean }>`
  color: ${({ $active }) => ($active ? '#3098EE' : '#242424')};
  font-family: 'Bebas Neue', sans-serif;
  font-size: 46px;
  font-weight: 400;
  line-height: 0.9em;
  display: flex;
  width: 100%;
  transition: color 0.3s ease;
  flex-direction: row-reverse;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  transition: color 0.3s ease;

  &:hover,
  &.active {
    color: #3098ee;
  }
`;

// export const ServiceLinkMobile = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// `;

// export const DropdownMenuMobile = styled(motion.div)`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   padding-left: 20px;
//   margin-top: 8px;
//   overflow: hidden;
// `;

// export const DropdownItemMobile = styled.div`
//   padding: 10px 0;
// `;

// export const ArrowDownMobile = styled.img<{ $isOpen: boolean }>`
//   margin-left: 8px;
//   transition: transform 0.3s ease;
//   transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
// `;

// export const ServiceTitleWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   cursor: pointer;

//   span {
//     flex-grow: 1;
//   }

//   ${ArrowDownMobile} {
//     padding: 8px;
//     margin-right: -8px;
//   }
// `;

export const Divider = styled.div<{ $active?: boolean }>`
  background-color: ${({ $active }) => ($active ? '#3098EE' : '#c3c2c2ff')};
  position: absolute;
  width: 90vh;
  height: 1px;
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: #3098ee;
  }
`;
