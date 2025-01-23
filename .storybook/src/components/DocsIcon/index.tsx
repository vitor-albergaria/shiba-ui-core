import React from 'react';
import { t } from 'i18next';
import * as S from './styles';
import { IIconList } from '../../../../src/components/Feedback/Icon/types';

interface IDocsIcon {
  name: string;
  icon: IIconList;
}

export const DocsIcon: React.FC<IDocsIcon> = ({ name, icon }) => {
  const handleClick = () => {
    alert(t('docs_copied'));
    navigator.clipboard.writeText(name);
  };

  return (
    <S.DocIconWrapper onClick={handleClick}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d={icon.path.join(' ')} fill="currentColor" />
      </svg>

      <p>{name}</p>
    </S.DocIconWrapper>
  );
};
