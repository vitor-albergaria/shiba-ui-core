import React, { useState } from 'react';
import * as S from './styles';
import { ITooltip } from './types';
import { withTheme } from 'styled-components';
import TextDisplay from '../../TextElements/TextDisplay';

const Tooltip: React.FC<ITooltip> = ({
  children,
  content = '-',
  position = 'top',
  background = 'primary',
  color = 'textDefault',
  isHidden = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const showTooltip = () => {
    if (isHidden) return;
    timeoutId = setTimeout(() => setIsVisible(true), 200);
  };

  const hideTooltip = () => {
    clearTimeout(timeoutId);
    setIsVisible(false);
  };

  return (
    <S.Wrapper
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      role="none"
    >
      <div 
        aria-describedby="tooltip"
        tabIndex={0}
      >
        {children}
      </div>
      <S.TooltipContainer
        id="tooltip"
        data-testid="tooltip"
        $position={position}
        $background={background}
        $isHidden={isVisible}
        role="tooltip"
        aria-hidden={!isVisible}
      >
        <TextDisplay color={color} text={content} />
        <S.Arrow $position={position} $background={background} aria-hidden="true" />
      </S.TooltipContainer>
    </S.Wrapper>
  );
};

export default withTheme(Tooltip) as React.FC<ITooltip>;
