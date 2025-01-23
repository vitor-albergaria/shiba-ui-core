import React from 'react';
import * as S from './styles';

interface IDocsSpacing {
  name: string;
  value: string;
}

export const DocsSpacing: React.FC<IDocsSpacing> = ({ name, value }) => {
  if (name === 'rm') return null;

  return (
    <S.DocSpacingWrapper>
      <p>{name}</p>
      <S.SpaceIndicator $space={value} />
    </S.DocSpacingWrapper>
  );
};
