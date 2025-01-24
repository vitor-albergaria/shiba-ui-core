import React from 'react';
import * as S from './styles';
import { IBadge } from './types';
import { withTheme } from 'styled-components';
import TextDisplay from '../../TextElements/TextDisplay';
import Icon from '../Icon';
import { IconKeys } from '../Icon/types';
import { noop } from '../../../utils/common/noop';

const Badge: React.FC<IBadge> = ({
  text = 'Shiba UI',
  background = 'section',
  borderRadius = 'xs',
  color = 'content',
  leftIcon = null,
  rightIcon = null,
  isHidden = false,
  onClick = noop,
}) => {
  const renderIcon = (icon: IconKeys) => (
    <Icon icon={icon} background={color} iconSize={16} />
  );

  if (isHidden) return null;

  return (
    <S.BadgeContainer
      data-testid="badge"
      $background={background}
      $borderRadius={borderRadius}
      onClick={onClick}
    >
      {leftIcon && renderIcon(leftIcon)}
      <TextDisplay text={text} color={color} />
      {rightIcon && renderIcon(rightIcon)}
    </S.BadgeContainer>
  );
};

export default withTheme(Badge) as React.FC<IBadge>;
