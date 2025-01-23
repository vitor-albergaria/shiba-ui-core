import { IButtonStyles } from './types';
import styled, { css } from 'styled-components';
import { generateHoverScaleEffect } from '../../../utils/styles/effects';
import { getSpacing } from '../../../utils/styles/theme';

export const ButtonWrapper = styled.button<IButtonStyles>`
  ${({
    theme,
    $background,
    $borderColor,
    $borderRadius,
    $borderWidth,
    $boxShadow,
    $width,
    $height,
    $padding,
    $gap,
    $isDisabled,
    $variant,
    $isFullWidth,
  }) => {
    const determineButtonColor = () => {
      if ($background) return theme.color[$background];

      if ($isDisabled)
        return $variant !== 'solid' ? 'transparent' : theme.color.highlight;

      return $variant !== 'solid' ? 'transparent' : theme.color.primary;
    };

    const determineBorderColor = () => {
      if ($borderColor) return theme.color[$borderColor];
      if ($isDisabled) return theme.color.highlight;

      return $variant === 'outlined' ? theme.color.primary : 'transparent';
    };

    const determineBorderWidth = () => {
      if ($borderWidth) return $borderWidth;
      if ($variant === 'outlined') return 'md';
      return 'rm';
    };

    const btnColor = determineButtonColor();
    const btnBorderColor = determineBorderColor();
    const btnBorderWidth = determineBorderWidth();

    return css`
      cursor: ${$isDisabled ? 'not-allowed' : 'pointer'};

      display: flex;
      align-items: center;
      justify-content: center;

      height: ${$height || 40}px;
      width: ${$isFullWidth ? '100%' : $width ? `${$width}px` : 'auto'};

      gap: ${getSpacing(theme, $gap)};
      padding: ${getSpacing(theme, $padding)};

      background: ${btnColor};
      box-shadow: ${theme.color[$boxShadow]};

      border-style: solid;
      border-width: ${theme.borderWidth[btnBorderWidth]};
      border-color: ${btnBorderColor};
      border-radius: ${theme.borderRadius[$borderRadius]};

      ${!$isDisabled && generateHoverScaleEffect()}
    `;
  }}
`;
