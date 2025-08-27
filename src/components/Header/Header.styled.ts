import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

interface StyledProps {
  $isScrolled?: boolean;
  $overlayOpen?: boolean;
  $darkMode?: boolean;
}

export const NavbarContainer = styled.nav<StyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: all 180ms ease;
  will-change: transform;
  padding: 10px;
  ${({ $isScrolled }) =>
    $isScrolled &&
    css`
      background: rgba(0, 0, 0, 0.39);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
    `}
  @media screen and (min-width: 768px) {
    padding: 10px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 32px;
  }

  @media (min-width: 1440px) {
    padding: 0 40px;
  }
`;

export const Logo = styled(NavLink)<StyledProps>`
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 1001;

  img {
    height: 32px;
    width: auto;
    filter: ${({ $overlayOpen, $darkMode }) =>
      $overlayOpen
        ? 'brightness(0)' // Чорний колір при оверлеї
        : $darkMode
        ? 'brightness(0)'
        : 'brightness(0) invert(1)'}; // Білий колір на світлому фоні
    transition: filter 0.3s ease-in-out;

    @media (min-width: 768px) {
      height: 40px;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 1440px) {
    gap: 40px;
  }
`;

export const NavItem = styled.li`
  position: relative;
`;

export const StyledNavLink = styled(NavLink)<StyledProps>`
  color: ${({ $overlayOpen, $darkMode }) =>
    $overlayOpen
      ? '#000000' // Чорний колір при оверлеї
      : $darkMode
      ? '#000000'
      : '#FFFFFF'}; // Білий колір на світлому фоні
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  transition: color 0.3s ease-in-out;
  position: relative;

  &:hover {
    color: ${({ $overlayOpen, $darkMode }) =>
      $overlayOpen
        ? '#555555' // Темно-сірий при оверлеї
        : $darkMode
        ? '#555555'
        : '#CCCCCC'}; // Світло-сірий на світлому фоні
  }

  &.active {
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({ $overlayOpen, $darkMode }) =>
        $overlayOpen
          ? '#000000' // Чорний колір при оверлеї
          : $darkMode
          ? '#000000'
          : '#FFFFFF'}; // Білий колір на світлому фоні
    }
  }
`;

export const TabletContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    flex-wrap: wrap;
    padding: 8px 16px 0px 16px;
  }
  @media screen and (min-width: 1440px) {
    justify-content: end;
    gap: 20px;
    width: auto;
  }
`;

export const ContainerLink = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const LinkInfo = styled.span<StyledProps>`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 13px;
    line-height: 125%;
    color: ${({ $overlayOpen, $darkMode }) =>
      $overlayOpen
        ? '#000000' // Чорний колір при оверлеї
        : $darkMode
        ? '#000000'
        : '#FFFFFF'}; // Білий колір на світлому фоні
    width: max-content;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ $overlayOpen, $darkMode }) =>
        $overlayOpen
          ? '#555555' // Темно-сірий при оверлеї
          : $darkMode
          ? '#555555'
          : '#CCCCCC'}; // Світло-сірий на світлому фоні
      transform: translateX(2px);
    }

    &:focus {
      outline: 2px solid var(--purple-400);
      outline-offset: 2px;
      border-radius: 4px;
    }

    a {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 13px;
      line-height: 125%;
      color: ${({ $overlayOpen, $darkMode }) =>
        $overlayOpen
          ? '#000000' // Чорний колір при оверлеї
          : $darkMode
          ? '#000000'
          : '#FFFFFF'}; // Білий колір на світлому фоні
      transition: color 0.3s ease;

      &:hover {
        color: var(--purple-400);
      }

      &:focus {
        outline: 2px solid var(--purple-400);
        outline-offset: 2px;
        border-radius: 4px;
      }
    }

    img {
      margin-right: 5px;
      transition: all 0.3s ease;
      filter: ${({ $overlayOpen }) =>
        $overlayOpen
          ? 'brightness(0) saturate(100%)' // Чорний колір при оверлеї
          : 'none'};

      &:hover {
        transform: scale(1.1);
        filter: ${({ $overlayOpen }) =>
          $overlayOpen
            ? 'brightness(0) saturate(100%)' // Чорний колір при оверлеї
            : 'brightness(1.2)'};
      }
    }
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const LangButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const TransparentButton = styled.button<StyledProps>`
display: none;
 @media screen and (min-width: 768px) {


  background: transparent;
  border: 1px solid
    ${({ $overlayOpen, $darkMode }) =>
      $overlayOpen
        ? '#000000' // Чорний колір при оверлеї
        : $darkMode
        ? '#000000'
        : '#FFFFFF'}; // Білий колір на світлому фоні
  color: ${({ $overlayOpen, $darkMode }) =>
    $overlayOpen
      ? '#000000' // Чорний колір при оверлеї
      : $darkMode
      ? '#000000'
      : '#FFFFFF'}; // Білий колір на світлому фоні
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  &:hover {
    background: ${({ $overlayOpen, $darkMode }) =>
      $overlayOpen
        ? '#000000' // Чорний колір при оверлеї
        : $darkMode
        ? '#000000'
        : '#FFFFFF'}; // Білий колір на світлому фоні
    color: ${({ $overlayOpen, $darkMode }) =>
      $overlayOpen
        ? '#FFFFFF' // Білий колір при оверлеї
        : $darkMode
        ? '#FFFFFF'
        : '#000000'}; // Чорний колір на світлому фоні
  }

  a {
    color: inherit;
    text-decoration: none;
  }
   }
`;
