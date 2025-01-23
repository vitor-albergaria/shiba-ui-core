import styled, { css } from 'styled-components';
import { ITooltip, ITooltipContainer } from './types';
import { ColorType } from '../../../theme/constants/color';

export const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  width: fit-content;
`;

export const Arrow = styled.div<{
  $position: ITooltip['position'];
  $background: ColorType;
}>`
  position: absolute;
  width: 8px;
  height: 8px;
  transform: rotate(45deg);

  background: ${({ theme, $background }) => theme.color[$background]};

  ${({ $position }) => {
    switch ($position) {
      case 'top':
        return css`
          bottom: -4px;
          left: 50%;
          margin-left: -4px;
        `;

      case 'bottom':
        return css`
          top: -4px;
          left: 50%;
          margin-left: -4px;
        `;

      case 'left':
        return css`
          right: -4px;
          top: 50%;
          margin-top: -4px;
        `;

      case 'right':
        return css`
          left: -4px;
          top: 50%;
          margin-top: -4px;
        `;

      default:
        return css`
          bottom: -4px;
          left: 50%;
          margin-left: -4px;
        `;
    }
  }}
`;

export const TooltipContainer = styled.div<ITooltipContainer>`
  position: absolute;
  z-index: 1000;
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;

  padding: 8px 12px;
  white-space: nowrap;

  background: ${({ theme, $background }) => theme.color[$background]};

  transition:
    opacity 0.2s,
    visibility 0.2s;

  ${({ $isHidden }) =>
    $isHidden &&
    css`
      opacity: 1;
      visibility: visible;
    `}

  ${({ $position }) => {
    switch ($position) {
      case 'top':
        return css`
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(-8px);
        `;

      case 'bottom':
        return css`
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(8px);
        `;

      case 'left':
        return css`
          right: 100%;
          top: 50%;
          transform: translateY(-50%) translateX(-8px);
        `;

      case 'right':
        return css`
          left: 100%;
          top: 50%;
          transform: translateY(-50%) translateX(8px);
        `;

      default:
        return css`
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(-8px);
        `;
    }
  }}
`;
