import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

interface StyledProps {
  $isOpen?: boolean;
  $darkMode?: boolean;
}

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
  font-size: 56px;
  font-weight: 400;
  line-height: 0.9em;
  width: 100%;
  transition: color 0.3s ease;

  &:hover,
  &.active {
    color: #3098ee;
  }
`;

export const ServiceLinkMobile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DropdownMenuMobile = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-top: 8px;
  overflow: hidden;
`;

export const DropdownItemMobile = styled.div`
  padding: 10px 0;
`;

export const ArrowDownMobile = styled.img<{ $isOpen: boolean }>`
  margin-left: 8px;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`;

export const ServiceTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  span {
    flex-grow: 1;
  }

  ${ArrowDownMobile} {
    padding: 8px;
    margin-right: -8px;
  }
`;

export const Divider = styled.div<{ $active?: boolean }>`
  background-color: ${({ $active }) => ($active ? '#3098EE' : '#c3c2c2ff')};
  position: absolute;
  width: 90%;
  height: 1px;
  transition: background-color 0.3s ease;

  &:hover,
  &.active {
    background-color: #3098ee;
  }
`;