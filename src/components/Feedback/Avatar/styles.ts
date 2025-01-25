import { IAvatarStyles } from './types';
import styled, { css } from 'styled-components';

export const AvatarContainer = styled.div<IAvatarStyles>`
  ${({ theme, $size, $boxShadow, $background }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    width: ${$size}px;
    height: ${$size}px;
    padding-top: ${theme.spacing.xs};
    background: ${theme.color[$background]};
    box-shadow: ${theme.boxShadow[$boxShadow]};
  `}
`;

export const AvatarImage = styled.img<IAvatarStyles>`
  ${({ theme, $size, $boxShadow }) => css`
    border-radius: 50%;

    width: ${$size}px;
    height: ${$size}px;
    padding-top: ${theme.spacing.xs};
    box-shadow: ${theme.boxShadow[$boxShadow]}};
  `}
`;
