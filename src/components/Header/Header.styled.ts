import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const ServiceLink = styled.div`
  position: relative;
  cursor: pointer;
  color: #808080;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  display: flex;
  transition: all 0.3s ease;
  
  &:hover,
  &.active {
    color: var(--purple-400);
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: 2px solid var(--purple-400);
    outline-offset: 2px;
    border-radius: 4px;
  }
  
  &:active {
    transform: translateY(0);
    transition: all 0.1s ease;
  }
`;

export const ArrowDown = styled.img`
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(2px);
    filter: brightness(1.2);
  }
  
  &:focus {
    outline: 2px solid var(--purple-400);
    outline-offset: 2px;
    border-radius: 4px;
  }
`;



export const DropdownItem = styled.div`
  padding: 8px 20px;
  transition: all 0.3s ease;

  &:hover {
    color: var(--purple-400);
    background-color: rgba(255, 255, 255, 0.05);
    transform: translateX(4px);
  }
  
  &:focus {
    outline: 2px solid var(--purple-400);
    outline-offset: -2px;
  }
  
  &:active {
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.1s ease;
  }

  a {
    color: #333;
    text-decoration: none;
    font-size: 14px;
    display: block;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--purple-400);
    }
  }
`;

export const NavbarContainer = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: all 180ms ease;
  will-change: transform;

  ${({ $isScrolled }) =>
    $isScrolled &&
    css`
      background: rgba(0, 0, 0, 0.39);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
    `}
  @media screen and (min-width: 768px) {
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
  padding: 1rem;

  z-index: 1199;

  @media (max-width: 768px) {
    padding: 1rem;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const LangButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
    width: auto;

    div {
      display: flex;
    }
  }
`;

export const NavList = styled.ul`
  display: none;

  @media screen and (min-width: 1440px) {
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
    border-radius: 24px;
    padding: 12px 20px;
    width: auto;
    height: 42px;

    display: flex;
    align-items: center;
    margin-left: 30px;
    transition: all 0.3s ease;
    
    &:hover {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const Logo = styled(NavLink)<{ $overlayOpen?: boolean }>`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:focus {
    outline: 2px solid var(--purple-400);
    outline-offset: 4px;
    border-radius: 8px;
  }
  
  &:active {
    transform: scale(0.98);
  }

  img {
    width: 177px;
    height: auto;
    overflow: hidden;
    transition: all 0.3s ease;
    filter: ${({ $overlayOpen }) => ($overlayOpen ? 'brightness(0) saturate(100%)' : 'none')};
    
    &:hover {
      filter: brightness(1.1) ${({ $overlayOpen }) => ($overlayOpen ? 'brightness(0) saturate(100%)' : 'none')};
    }
  }
`;

export const NavItem = styled.li`
  color: rgb(49, 46, 46);
  transition: all 0.3s ease;

  a {
    text-decoration: none;
    color: #ffffffff;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    transition: all 0.3s ease;
    padding: 8px 12px;
    border-radius: 6px;

    &:hover,
    &.active {
      color: #6d87efff;
      background-color: rgba(109, 135, 239, 0.1);
      transform: translateY(-1px);
    }
    
    &:focus {
      outline: 2px solid var(--purple-400);
      outline-offset: 2px;
    }
    
    &:active {
      transform: translateY(0);
      background-color: rgba(109, 135, 239, 0.2);
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  color: var(--white);
  transition: all 0.3s ease;
  position: relative;
  width: max-content;
  padding: 8px 12px;
  border-radius: 6px;

  color: #808080;
  cursor: pointer;

  &:hover {
    color: var(--purple-400);
    background-color: rgba(109, 135, 239, 0.1);
    transform: translateY(-1px);
  }

  &:focus {
    outline: 2px solid var(--purple-400);
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
    background-color: rgba(109, 135, 239, 0.2);
    transition: all 0.1s ease;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background-color: #808080;
    transition: width 0.3s ease-in-out;
  }

  &.active {
    color: rgb(255, 255, 255);
    background-color: rgba(109, 135, 239, 0.15);
    
    &::after {
      width: 100%;
    }
  }

  &:hover::after {
    width: 100%;
    color: var(--purple-400);
  }
`;

export const StyledNavLinkDrop = styled(NavLink)`
  display: flex;
  text-decoration: none;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: var(--white-50);
  transition: all 0.3s ease;
  position: relative;
  padding: 12px 16px;
  border-radius: 8px;

  color: #808080;
  cursor: pointer;

  &:hover {
    color: var(--purple-400);
    background-color: rgba(109, 135, 239, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: 2px solid var(--purple-400);
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    background-color: rgba(109, 135, 239, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background-color: #808080;
    transition: width 0.3s ease-in-out;
  }

  &.active {
    color: rgb(255, 255, 255);
    background-color: rgba(109, 135, 239, 0.15);
    
    &::after {
      width: 100%;
    }
  }

  &:hover::after {
    width: 100%;
    color: var(--purple-400);
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

export const LinkInfo = styled.p<{ $overlayOpen?: boolean }>`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 13px;
    line-height: 125%;
    color: ${({ $overlayOpen }) => ($overlayOpen ? 'black' : 'white')};
    width: max-content;
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--purple-400);
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
      color: ${({ $overlayOpen }) => ($overlayOpen ? 'black' : 'white')};
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
      filter: ${({ $overlayOpen }) => ($overlayOpen ? 'brightness(0) saturate(100%)' : 'none')};
      
      &:hover {
        transform: scale(1.1);
        filter: ${({ $overlayOpen }) => 
          $overlayOpen ? 'brightness(0) saturate(100%)' : 'brightness(1.2)'};
      }
    }
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const TransparentButton = styled.button<{ $overlayOpen?: boolean }>`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    z-index: 1100;
    padding: 12px 24px;
    border: 1px solid ${({ $overlayOpen }) => ($overlayOpen ? 'black' : 'white')};
    border-radius: 8px;
    cursor: pointer;
    white-space: nowrap;
    width: auto;
    min-width: 119px;
    background: transparent;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 15px;
    color: ${({ $overlayOpen }) => ($overlayOpen ? 'black' : 'white')};
    margin-left: 8px;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: ${({ $overlayOpen }) => 
        $overlayOpen ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
      border-color: var(--purple-400);
      color: var(--purple-400);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(109, 135, 239, 0.2);
    }
    
    &:focus {
      outline: 2px solid var(--purple-400);
      outline-offset: 2px;
      background-color: ${({ $overlayOpen }) => 
        $overlayOpen ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.15)'};
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 6px rgba(109, 135, 239, 0.1);
      background-color: ${({ $overlayOpen }) => 
        $overlayOpen ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'};
    }

    a {
      color: ${({ $overlayOpen }) => ($overlayOpen ? 'black' : 'white')};
      transition: color 0.3s ease;
      
      &:hover {
        color: var(--purple-400);
      }
    }
  }
  @media screen and (min-width: 1440px) {
  }
`;