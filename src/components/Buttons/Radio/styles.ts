import styled, { css } from 'styled-components';
import { IRadioStyles } from './types';

export const Box = styled.div<IRadioStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

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

  background: ${({ theme, $isChecked, $background, $isDisabled }) => {
    const backgroundColor = $isDisabled
      ? theme.color.highlight
      : theme.color[$background];

    return $isChecked ? backgroundColor : theme.color.textDefault;
  }};
`;
