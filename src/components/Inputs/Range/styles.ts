import styled, { css } from 'styled-components';
import { IRangeStyles } from './types';

export const InputRange = styled.input<IRangeStyles>`
  -webkit-appearance: none;
  appearance: none;

  ${({ theme, $width, $isFullWidth, $background, $percentage, $height }) => {
    const background = theme.color.highlight;
    const trackColor = theme.color[$background];

    const getThumbStyle = () => css`
      cursor: pointer;
      border-radius: 50%;
      width: ${$height + 8}px;
      height: ${$height + 8}px;
      background: ${theme.color[$background]};
    `;

    return css`
      height: ${$height}px;
      width: ${$isFullWidth ? '100%' : `${$width}px`};
      border-radius: ${theme.borderRadius.md};

      background: linear-gradient(
        90deg,
        ${trackColor} ${$percentage}%,
        ${background} ${$percentage}%
      );

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        ${getThumbStyle()}
      }

      &::-moz-range-thumb {
        ${getThumbStyle()}
      }

      &::-ms-thumb {
        ${getThumbStyle()}
      }
    `;
  }}
`;
