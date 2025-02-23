import React from 'react';
import * as S from './styles';
import { useTheme } from 'styled-components';
import * as iconList from '../../../assets/icons/index';
import { DefaultIconValues, IIcon } from './types';
import { withTheme } from 'styled-components';
import { noop } from '../../../utils/common/noop';

const Icon: React.FC<IIcon> = ({
  icon = DefaultIconValues.Icon,
  iconSize = DefaultIconValues.Size,
  variant = 'icon',
  onClick = noop,
  background = 'primary',
  boxShadow = 'rm',
  boxSize = 40,
  isHidden = false,
}) => {
  const theme = useTheme();
  const { path = [], view = DefaultIconValues.ViewBox } = iconList[icon] || {};

  const handleClick = () => {
    if (onClick) onClick();
  };

  if (isHidden) return null;

  return (
    <S.IconWrapper
      as={onClick !== noop ? 'button' : 'div'}
      type={onClick !== noop ? 'button' : undefined}
      role="img"
      aria-label={icon.replace('Icon', '')}
      data-testid="icon"
      onClick={handleClick}
      $variant={variant}
      $background={background}
      $boxShadow={boxShadow}
      $boxSize={boxSize}
    >
      <svg width={iconSize} height={iconSize} viewBox={view} aria-hidden="true">
        {path.map((data: string, index: number) => (
          <path
            key={index}
            d={data}
            fill={
              variant === 'circle' || variant === 'square'
                ? theme.color.background
                : theme.color[background]
            }
          />
        ))}
      </svg>
    </S.IconWrapper>
  );
};

export default withTheme(Icon) as React.FC<IIcon>;
