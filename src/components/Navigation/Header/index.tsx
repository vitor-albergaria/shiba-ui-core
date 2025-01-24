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
        $isActive={activeOption === id}
        onClick={() => handleOptionClick(id, label, isInactive, handleClick)}
      >
        <TextDisplay text={label} size="md" weight="medium" />
      </S.HeaderOption>
    ));

  if (isHidden) return null;

  return (
    <S.HeaderContainer data-testid="header">
      <S.LogoWrapper>
        <TextDisplay text={logo} size="lg" weight="strong" />
      </S.LogoWrapper>

      <S.HeaderOptionsWrapper>{renderMenuItems()}</S.HeaderOptionsWrapper>

      <S.MenuIconWrapper onClick={toggleMenu}>
        <Icon icon="MenuIcon" background="content" iconSize={20} />
      </S.MenuIconWrapper>

      <S.FullScreenMenu $isMenuOpen={isMenuOpen}>
        <S.CloseIcon onClick={toggleMenu}>
          <Icon icon="ErrorTwoIcon" background="content" iconSize={16} />
        </S.CloseIcon>
        {renderMenuItems()}
      </S.FullScreenMenu>
    </S.HeaderContainer>
  );
};

export default withTheme(Header) as React.FC<IHeader>;
