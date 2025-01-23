import styled from 'styled-components';
import { IProgressCircleStyles } from './types';

export const CircleContainer = styled.div<IProgressCircleStyles>`
  display: grid;
  place-items: center;
  position: relative;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
`;

export const SVG = styled.svg<IProgressCircleStyles>`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`;

export const CircleSVG = styled.circle<IProgressCircleStyles>`
  fill: none;
  stroke: ${({ theme, $background }) => theme.color[$background]};
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s ease-in-out;
`;

export const ProgressValueText = styled.div`
  position: absolute;
`;
