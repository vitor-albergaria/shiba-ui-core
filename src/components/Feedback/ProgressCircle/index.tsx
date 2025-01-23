import React, { useCallback } from 'react';
import * as S from './styles';
import { IProgressCircle } from './types';
import { withTheme } from 'styled-components';
import TextDisplay from '../../TextElements/TextDisplay';

const ProgressCircle: React.FC<IProgressCircle> = ({
  progressValue = 0,
  background = 'primary',
  size = 60,
  isHidden = false,
}) => {
  const clampValue = useCallback(
    (value: number, min: number, max: number) =>
      Math.min(Math.max(value, min), max),
    []
  );

  const circleProgressValue = clampValue(progressValue, 0, 100);
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circleProgressValue / 100) * circumference;

  function getSize() {
    if (size > 100) return 'lg';
    if (size > 80) return 'md';
    if (size > 60) return 'sm';

    return 'xs';
  }

  if (isHidden) return null;
  
  return (
    <S.CircleContainer data-testid="progress-circle" $size={size}>
      <S.SVG viewBox="0 0 80 80" $size={size}>
        <S.CircleSVG
          cx="40"
          cy="40"
          r={radius}
          $background="highlight"
          strokeWidth="8"
          data-testid="progress-circle-base"
        />
        <S.CircleSVG
          cx="40"
          cy="40"
          r={radius}
          $background={background}
          strokeWidth="8"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          data-testid="progress-circle-range"
        />
      </S.SVG>
      <S.ProgressValueText>
        <TextDisplay
          text={`${circleProgressValue}%`}
          weight="strong"
          size={getSize()}
        />
      </S.ProgressValueText>
    </S.CircleContainer>
  );
};

export default withTheme(ProgressCircle) as React.FC<IProgressCircle>;
