import { noop } from '../../../utils/common/noop';
import * as S from './styles';
import { IRating } from './types';
import React, { useState } from 'react';
import { withTheme } from 'styled-components';

const Rating: React.FC<IRating> = ({
  rating = 0,
  maxStars = 5,
  readonly = false,
  handleChange = noop,
  size = 30,
  gap = 'xs',
  background = 'primary',
  isHidden = false,
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const currentValue = hoverValue ?? selectedValue ?? rating ?? 0;

  const handleStarClick = (position: number) => {
    if (readonly) return;
    setSelectedValue(position);
    handleChange?.(position);
  };

  const handleMouseEnter = (position: number) => {
    if (readonly) return;
    setHoverValue(position);
  };

  const handleMouseLeave = () => {
    if (readonly) return;
    setHoverValue(null);
  };

  const renderStar = (position: number) => {
    const fillPercentage = Math.max(
      0,
      Math.min(
        100,
        currentValue >= position
          ? 100
          : currentValue > position - 1
            ? (currentValue - (position - 1)) * 100
            : 0
      )
    );

    return (
      <S.StarContainer
        key={position}
        $interactive={!readonly}
        onMouseLeave={handleMouseLeave}
        $size={size}
        role="radio"
        aria-checked={currentValue >= position}
        aria-label={`${position} star${position === 1 ? '' : 's'}`}
      >
        {!readonly && (
          <S.ClickArea
            onMouseEnter={() => handleMouseEnter(position)}
            onClick={() => handleStarClick(position)}
          />
        )}

        <S.StarBase aria-hidden="true" $size={size}>
          ★
        </S.StarBase>

        <S.StarFill
          aria-hidden="true"
          $size={size}
          $background={background}
          $fillPercentage={fillPercentage}
        >
          ★
        </S.StarFill>
      </S.StarContainer>
    );
  };

  const stars = Array.from({ length: maxStars }, (_, i) => renderStar(i + 1));

  if (isHidden) return null;

  return (
    <S.RatingContainer 
      $gap={gap} 
      data-testid="rating"
      role="radiogroup"
      aria-label={`Rating: ${currentValue} out of ${maxStars} stars`}
    >
      {stars}
    </S.RatingContainer>
  );
};

export default withTheme(Rating) as React.FC<IRating>;
