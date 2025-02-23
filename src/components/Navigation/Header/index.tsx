import * as S from './styles';
import React, { useState } from 'react';
import Icon from '../../Feedback/Icon';
import TextDisplay from '../../TextElements/TextDisplay';
import { IHeader } from './types';
import { withTheme } from 'styled-components';

const Header: React.FC<IHeader> = ({
  logo = 'Shiba UI',
  menuItems = [],
  isHidden = false,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeOption, setActiveOption] = useState<number>(1);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleOptionClick = (
    id: number,
    label?: string,
    isInactive?: boolean,
    handleClick?: (label: string) => void
  ) => {
    if (!isInactive) setActiveOption(id);
    if (handleClick && label) handleClick(label);
    setIsMenuOpen(false);
  };

  const renderMenuItems = () =>
    menuItems?.map(({ id, label, handleClick, isInactive }) => (
      <S.HeaderOption
        key={id}
        role="menuitem"
        tabIndex={0}
        aria-current={activeOption === id ? 'page' : undefined}
        aria-disabled={isInactive}
        $isActive={activeOption === id}
        onClick={() => handleOptionClick(id, label, isInactive, handleClick)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleOptionClick(id, label, isInactive, handleClick);
          }
        }}
      >
        <TextDisplay text={label} size="lg" weight="strong" />
      </S.HeaderOption>
    ));

  if (isHidden) return null;

  return (
    <S.HeaderContainer data-testid="header" role="menubar">
      <S.LogoWrapper>
        <TextDisplay text={logo} size="3x" weight="bold" />
      </S.LogoWrapper>

      <S.HeaderOptionsWrapper aria-label="Main navigation">
        {renderMenuItems()}
      </S.HeaderOptionsWrapper>

      <S.MenuIconWrapper
        onClick={toggleMenu}
        role="button"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        tabIndex={0}
      >
        <Icon
          icon="MenuIcon"
          background="content"
          iconSize={20}
          aria-hidden="true"
        />
      </S.MenuIconWrapper>

      <S.FullScreenMenu
        $isMenuOpen={isMenuOpen}
        role="menu"
        aria-hidden={!isMenuOpen}
      >
        <S.CloseIcon
          onClick={toggleMenu}
          role="button"
          aria-label="Close menu"
          tabIndex={0}
        >
          <Icon
            icon="ErrorTwoIcon"
            background="content"
            iconSize={16}
            aria-hidden="true"
          />
        </S.CloseIcon>
        {renderMenuItems()}
      </S.FullScreenMenu>
    </S.HeaderContainer>
  );
};

export default withTheme(Header) as React.FC<IHeader>;
