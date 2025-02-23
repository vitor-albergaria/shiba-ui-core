import React, { Fragment } from 'react';
import * as S from './styles';
import { IButton } from './types';
import Icon from '../../Feedback/Icon';
import Spinner from '../../Feedback/Spinner';
import TextDisplay from '../../TextElements/TextDisplay';
import { withTheme } from 'styled-components';
import { ColorType } from '../../../theme/constants/color';
import { IconKeys } from '../../Feedback/Icon/types';
import { noop } from '../../../utils/common/noop';

const Button: React.FC<IButton> = ({
  text = 'Button',
  onClick = noop,
  leftIcon,
  rightIcon,
  variant = 'solid',
  isHidden = false,
  isLoading = false,
  isDisabled = false,
  iconSize = 16,
  background,
  borderColor,
  borderRadius = 'xs',
  borderWidth,
  boxShadow,
  gap = 'sm',
  padding = 'xs sm',
  height = 40,
  isFullWidth,
  width,
  color,
}) => {
  if (isHidden) return null;

  const getComponentColor = (): ColorType => {
    if (color) return color;
    if (isDisabled) return variant === 'solid' ? 'textDefault' : 'highlight';

    return variant !== 'solid' ? 'primary' : 'textDefault';
  };

  const renderIcon = (icon: IconKeys) => (
    <Icon icon={icon} background={getComponentColor()} iconSize={iconSize} />
  );

  const handleClick = () => {
    if (!isDisabled && onClick) onClick();
  };

  return (
    <S.ButtonWrapper
      role="button"
      type="button"
      aria-disabled={isDisabled}
      aria-busy={isLoading}
      aria-label={text}
      data-testid="button"
      onClick={handleClick}
      $variant={variant}
      $background={background}
      $isDisabled={isDisabled}
      $isFullWidth={isFullWidth}
      $borderColor={borderColor}
      $borderRadius={borderRadius}
      $borderWidth={borderWidth}
      $boxShadow={boxShadow}
      $gap={gap}
      $padding={padding}
      $height={height}
      $width={width}
    >
      {isLoading && (
        <Spinner size={height / 3} background={getComponentColor()} />
      )}

      {!isLoading && (
        <Fragment>
          {leftIcon && renderIcon(leftIcon)}

          <TextDisplay
            text={text}
            color={getComponentColor()}
            weight="bold"
            size="sm"
          />

          {rightIcon && renderIcon(rightIcon)}
        </Fragment>
      )}
    </S.ButtonWrapper>
  );
};

export default withTheme(Button) as React.FC<IButton>;
