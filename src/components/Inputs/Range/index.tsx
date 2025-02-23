import { noop } from '../../../utils/common/noop';
import * as S from './styles';
import { IRange } from './types';
import React, { useState, ChangeEvent } from 'react';
import { withTheme } from 'styled-components';

const Range: React.FC<IRange> = ({
  value = 0,
  min = 0,
  max = 100,
  handleChange = noop,
  background = 'primary',
  height = 8,
  width = 200,
  isFullWidth = false,
  isHidden = false,
}) => {
  const [rangeValue, setRangeValue] = useState<number>(value);
  const percentage = ((rangeValue - min) / (max - min)) * 100;

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const parsedValue = Number(e.target.value);
    setRangeValue(parsedValue);
    handleChange(parsedValue);
  };

  if (isHidden) return null;

  return (
    <S.InputRange
      data-testid="range"
      type="range"
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={rangeValue}
      aria-valuetext={`${rangeValue}%`}
      aria-orientation="horizontal"
      min={min}
      max={max}
      value={rangeValue}
      onChange={handleRangeChange}
      $percentage={percentage}
      $width={width}
      $height={height}
      $background={background}
      $isFullWidth={isFullWidth}
    />
  );
};

export default withTheme(Range) as React.FC<IRange>;
