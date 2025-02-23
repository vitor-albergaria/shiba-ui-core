import React from 'react';
import * as S from './styles';
import { ISpinner } from './types';
import { withTheme } from 'styled-components';

const Spinner: React.FC<ISpinner> = ({
  size = 20,
  background = 'primary',
  isHidden = false,
}) => {
  if (isHidden) return null;

  return (
    <S.SpinnerWrapper
      role="status"
      aria-label="Loading"
      aria-busy="true"
      data-testid="spinner"
      $background={background}
      $size={size}
    />
  );
};

export default withTheme(Spinner) as React.FC<ISpinner>;
