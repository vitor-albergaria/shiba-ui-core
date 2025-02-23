import React from 'react';
import * as S from './styles';
import { IAvatar } from './types';
import TextDisplay from '../../TextElements/TextDisplay';
import { withTheme } from 'styled-components';
import { getNameInitials } from '../../../utils/common/strings';

const Avatar: React.FC<IAvatar> = ({
  username,
  image,
  size = 50,
  boxShadow = 'rm',
  background = 'primary',
  isHidden,
}) => {
  const formattedUserName = getNameInitials(username);

  function getSize() {
    if (size >= 100) return '4x';
    if (size > 80) return '2x';
    if (size > 60) return 'lg';
    if (size > 40) return 'md';

    return 'sm';
  }

  if (isHidden) return null;

  if (!image) {
    return (
      <S.AvatarContainer
        role="img"
        aria-label={username || 'User avatar'}
        data-testid="avatar-text"
        $size={size}
        $background={background}
        $boxShadow={boxShadow}
      >
        <TextDisplay
          text={formattedUserName}
          color="textDefault"
          size={getSize()}
          weight="strong"
        />
      </S.AvatarContainer>
    );
  }

  return (
    <S.AvatarImage
      role="img"
      data-testid="avatar-image"
      src={image}
      alt={username || 'User avatar'}
      $size={size}
      $background={background}
      $boxShadow={boxShadow}
    />
  );
};

export default withTheme(Avatar) as React.FC<IAvatar>;
