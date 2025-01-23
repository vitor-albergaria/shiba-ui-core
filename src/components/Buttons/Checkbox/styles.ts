import styled, { css } from 'styled-components';
import { ICheckboxStyles } from './types';

export const Box = styled.div<ICheckboxStyles>`
  display: flex;
  align-items: center;
  justify-content: center;

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
    `;
  }}
`;

export const Tick = styled.div<ICheckboxStyles>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: ${({ theme, $isChecked, $background, $isDisabled }) => {
    const backgroundColor = $isDisabled
      ? theme.color.highlight
      : theme.color[$background];

    return $isChecked ? backgroundColor : theme.color.textDefault;
  }};
`;
