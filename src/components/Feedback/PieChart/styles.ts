import styled, { css } from 'styled-components';
import { generateHoverBrightnessEffect } from '../../../utils/styles/effects';
import { IPieChartStyles } from './types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const ChartContainer = styled.div<IPieChartStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
`;

export const SVG = styled.svg`
  width: 100%;
  height: 100%;
`;

export const Slice = styled.path<IPieChartStyles>`
  stroke-width: 2px;
  stroke: ${({ theme }) => theme.color.background};
  fill: ${({ theme, $color }) => theme.color[$color]};
  transition: all 0.2s ease;

  ${({ $isActive }) =>
    $isActive &&
    css`
      cursor: pointer;

      transform: scale(1.05);
      transform-origin: center;
      filter: brightness(1.1);

      ${generateHoverBrightnessEffect()}
    `}
`;

export const Legend = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const LegendItem = styled.div<IPieChartStyles>`
  cursor: pointer;

  display: flex;
  align-items: center;
  column-gap: ${({ theme }) => theme.spacing.md};

  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.xs};

  ${({ $isActive }) =>
    $isActive &&
    css`
      background: ${({ theme }) => theme.color.accent};
    `}

  transition: all 0.2s ease;
`;

export const LegendColor = styled.div<IPieChartStyles>`
  width: ${({ $size }) => $size / 12}px;
  height: ${({ $size }) => $size / 12}px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme, $color }) => theme.color[$color]};
  transition: all 0.2s ease;
`;
