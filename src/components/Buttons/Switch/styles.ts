import styled, { css } from 'styled-components';
import { ISwitchStyles } from './types';

export const Container = styled.div<ISwitchStyles>`
  position: relative;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  border: none;

  ${({ theme, $size, $background, $isChecked, $isDisabled }) => {
    const determineSwitchColor = () => {
      if ($isDisabled) return theme.color.highlight;

      return $isChecked ? theme.color[$background] : theme.color.highlight;
    };

    return css`
      cursor: ${$isDisabled ? 'not-allowed' : 'pointer'};

      height: ${$size}px;
      width: ${$size * 2}px;
      border-radius: ${$size / 2}px;
      background: ${determineSwitchColor()};
    `;
  }}
`;

export const Circle = styled.div<ISwitchStyles>`
  position: absolute;
  transition: all 0.3s ease-in-out;

  ${({ $isChecked, $isDisabled }) => css`
    aspect-ratio: 1;
    border-radius: 50%;
    width: calc(50% - 6px);
    background: ${$isDisabled ? '#D5D5D5' : '#F5F5FB'};
    left: ${$isChecked ? 'calc(100% - calc(50% - 4px))' : '4px'};
  `}
`;
