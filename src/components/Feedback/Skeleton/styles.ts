import { ISkeletonStyles } from './types';
import styled, { css } from 'styled-components';
import { generateBlinkAnimation } from '../../../utils/styles/animations';

export const SkeletonWrapper = styled.div<ISkeletonStyles>`
  ${({
    theme,
    $background,
    $borderRadius,
    $height,
    $width,
    $isFullSize,
  }) => css`
    width: ${$isFullSize ? '100%' : `${$width}px`};
    height: ${$isFullSize ? '100%' : `${$height}px`};

    background: ${theme.color[$background]};
    border-radius: ${theme.borderRadius[$borderRadius]};

    ${generateBlinkAnimation()};
  `}
`;
