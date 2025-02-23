import styled, { css } from 'styled-components';
import { ICheckboxStyles } from './types';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export const Label = styled.label`
  cursor: pointer;
  color: ${({ theme }) => theme.color.textDefault};
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export const Box = styled.div<ICheckboxStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
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
      border-radius: ${theme.borderRadius.xs};
      border: 2px solid ${borderColor};

      &:focus {
        outline: none;
      }
    `;
  }}
`;

export const Tick = styled.div<ICheckboxStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
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
