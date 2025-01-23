import { ISpinnerStyles } from './types';
import styled, { css } from 'styled-components';
import { generateSpinAnimation } from '../../../utils/styles/animations';

export const SpinnerWrapper = styled.div<ISpinnerStyles>`
  ${({ theme, $background, $size }) => css`
    width: ${$size}px;
    height: ${$size}px;
    border-width: ${$size / 5}px;

    border-radius: 50%;
    border-style: solid;
    border-color: transparent;
    border-top-color: ${theme.color[$background]};
    border-right-color: ${theme.color[$background]};

    ${generateSpinAnimation()}
  `}
`;
