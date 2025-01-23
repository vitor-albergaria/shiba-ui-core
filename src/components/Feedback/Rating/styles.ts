import styled, { css } from 'styled-components';
import { IRatingStyles } from './types';

export const RatingContainer = styled.div<IRatingStyles>`
  display: flex;
  align-items: center;
  gap: ${({ theme, $gap }) => theme.spacing[$gap]};
`;

export const StarContainer = styled.div<
  IRatingStyles & { $interactive?: boolean }
>`
  ${({ $size, $interactive }) => css`
    position: relative;
    display: inline-block;

    width: ${$size}px;
    height: ${$size}px;
    cursor: ${$interactive ? 'pointer' : 'default'};

    ${$interactive &&
    css`
      &:hover > div {
        filter: brightness(1.35);
        transition: filter 0.3s ease;
      }
    `}
  `}
`;

export const baseStar = css<IRatingStyles>`
  position: absolute;
  top: 0;
  left: 0;
  line-height: 1;
  font-size: ${({ $size }) => $size}px;
  transition: all 0.2s ease-in-out;
`;

export const StarBase = styled.div<IRatingStyles>`
  ${baseStar}

  color: ${({ theme }) => theme.color.highlight};
`;

export const StarFill = styled.div<IRatingStyles & { $fillPercentage: number }>`
  ${baseStar}

  ${({ theme, $fillPercentage, $background }) => css`
    clip-path: ${`inset(0 ${100 - $fillPercentage}% 0 0)`};
    color: ${theme.color[$background]};
  `}
`;

export const ClickArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;
