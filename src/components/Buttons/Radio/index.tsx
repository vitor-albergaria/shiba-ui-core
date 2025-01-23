import * as S from './styles';
import { IRadio } from './types';
import { withTheme } from 'styled-components';
import React, { useEffect, useState } from 'react';
import { noop } from '../../../utils/common/noop';

const Radio: React.FC<IRadio> = ({
  size = 28,
  isChecked = false,
  handleChange = noop,
  background = 'primary',
  isDisabled = false,
  isHidden = false,
}) => {
  const [radioIsChecked, setRadioIsChecked] = useState(isChecked);

  const onRadioValueChange = () => {
    if (isDisabled) return;

    const newCheckedState = !radioIsChecked;

    setRadioIsChecked(newCheckedState);
    handleChange(newCheckedState);
  };

  useEffect(() => setRadioIsChecked(isChecked), [isChecked]);

  if (isHidden) return null;

  return (
    <S.Box
      data-testid="radio"
      onClick={onRadioValueChange}
      $background={background}
      $size={size}
      $isDisabled={isDisabled}
    >
      {radioIsChecked && (
        <S.Tick
          $isChecked={radioIsChecked}
          $background={background}
          $isDisabled={isDisabled}
        />
      )}
    </S.Box>
  );
};

export default withTheme(Radio) as React.FC<IRadio>;
