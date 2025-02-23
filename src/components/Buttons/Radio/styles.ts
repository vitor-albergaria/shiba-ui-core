import styled, { css } from 'styled-components';
import { IRadioStyles } from './types';

export const Box = styled.div<IRadioStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0;
  border: none;
  background: none;

  ${({ theme, $size, $background, $isDisabled }) => {
    const borderColor = $isDisabled
      ? theme.color.highlight
      : theme.color[$background];

    return css`
      cursor: ${$isDisabled ? 'not-allowed' : 'pointer'};
      width: ${$size}px;
      height: ${$size}px;
      padding: ${theme.spacing.xs};
      border: 2px solid ${borderColor};

      &:focus {
        outline: none;
      }
    `;
  }}
`;

export const Tick = styled.div<IRadioStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform-origin: center;
  animation: scaleIn 0.15s ease-in-out;

  @keyframes scaleIn {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  background: ${({ theme, $isChecked, $background, $isDisabled }) => {
    const backgroundColor = $isDisabled
      ? theme.color.highlight
      : theme.color[$background];

    return $isChecked ? backgroundColor : theme.color.textDefault;
  }};
`;
