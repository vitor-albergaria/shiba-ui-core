import { getSpacing } from '../../../utils/styles/theme';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: 1;

  width: 100%;
  height: 80px;

  padding: clamp(24px, 2vw, 32px);
`;

export const LogoWrapper = styled.div`
  flex: 1;
`;

export const HeaderOptionsWrapper = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.spacing['2x']};

  @media (max-width: 767px) {
    display: none;
  }
`;

export const MenuIconWrapper = styled.div`
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HeaderOption = styled.div<{ $isActive?: boolean }>`
  display: inline-block;
  position: relative;
  padding: ${({ theme }) => getSpacing(theme, 'xs rm')};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ $isActive }) => ($isActive ? '100%' : '0')};
    height: 2px;
    background: ${({ theme }) => theme.color.content};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const FullScreenMenu = styled.div<{ $isMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: ${({ theme }) => theme.spacing.sm};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;

  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.background};

  opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? 1 : 0)};

  transform: ${({ $isMenuOpen }) =>
    $isMenuOpen ? 'translateX(0)' : 'translateX(-100%)'};

  transition:
    opacity 0.35s ease-in-out 0.1s,
    transform 0.35s ease-in-out;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  cursor: pointer;
  color: white;
`;
