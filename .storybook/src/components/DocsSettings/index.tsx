import React, { useEffect, useRef, useState } from 'react';
import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs';
import { SettingsIcon } from '../../../../src/assets/icons';
import { SettingsOptions } from './SettingsOptions';
import * as S from './styles';

interface SettingsSelectorProps extends DocsContainerProps {}

const SettingsIconSVG: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
    <path d={SettingsIcon.path.join(' ')} fill="#F5F5FB" />
  </svg>
);

export const DocsSettings: React.FC<SettingsSelectorProps> = (props) => {
  const settingsRef = useRef<HTMLDivElement>(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setIsTooltipVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <S.RowWrapper>
        <div ref={settingsRef}>
          <S.IconWrapper onClick={() => setIsTooltipVisible(!isTooltipVisible)}>
            <S.StyledIcon>
              <SettingsIconSVG />
            </S.StyledIcon>
          </S.IconWrapper>

          <S.Tooltip $isVisible={isTooltipVisible}>
            <SettingsOptions />
          </S.Tooltip>
        </div>
      </S.RowWrapper>

      <DocsContainer {...props} />
    </>
  );
};
