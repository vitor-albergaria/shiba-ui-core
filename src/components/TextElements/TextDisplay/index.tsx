import React from 'react';
import * as S from './styles';
import { ITextDisplay } from './types';
import { withTheme } from 'styled-components';

const TextDisplay: React.FC<ITextDisplay> = ({
  text = '-',
  size = 'md',
  weight = 'regular',
  color = 'content',
  align = 'left',
  decoration = 'none',
  lineHeight = undefined,
  letterSpacing = undefined,
  isHidden = false,
}) => {
  if (isHidden) return null;

  return (
    <S.TextWrapper
      data-testid="text-display"
      $textColor={color}
      $fontSize={size}
      $fontWeight={weight}
      $textAlign={align}
      $letterSpacing={letterSpacing}
      $lineHeight={lineHeight}
      $textDecoration={decoration}
    >
      {text}
    </S.TextWrapper>
  );
};

export default withTheme(TextDisplay) as React.FC<ITextDisplay>;
