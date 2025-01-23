import React from 'react';
import * as S from './styles';
import { withTheme } from 'styled-components';
import { ISkeleton } from './types';

const Skeleton: React.FC<ISkeleton> = ({
  height = 50,
  width = 50,
  borderRadius = 'xs',
  background = 'highlight',
  isFullSize = false,
  isHidden = false,
}) => {
  if (isHidden) return null;

  return (
    <S.SkeletonWrapper
      data-testid="skeleton"
      $height={height}
      $width={width}
      $background={background}
      $borderRadius={borderRadius}
      $isFullSize={isFullSize}
    />
  );
};

export default withTheme(Skeleton) as React.FC<ISkeleton>;
