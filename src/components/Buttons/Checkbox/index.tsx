import * as S from './styles';
import { ICheckbox } from './types';
import Icon from '../../Feedback/Icon';
import { withTheme } from 'styled-components';
import React, { useEffect, useState } from 'react';
import { noop } from '../../../utils/common/noop';

const Checkbox: React.FC<ICheckbox> = ({
  isChecked = false,
  handleChange = noop,
  size = 28,
  background = 'primary',
  icon = 'SuccessTwoIcon',
  isDisabled = false,
  isHidden = false,
}) => {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(isChecked);

  const onCheckboxChange = () => {
    if (isDisabled) return;
    const newCheckedState = !checkboxIsChecked;

    setCheckboxIsChecked(newCheckedState);
    handleChange(newCheckedState);
  };

  useEffect(() => setCheckboxIsChecked(isChecked), [isChecked]);

  if (isHidden) return null;

  return (
    <S.Box
      data-testid="checkbox"
      onClick={onCheckboxChange}
      $background={background}
      $isDisabled={isDisabled}
      $size={size}
    >
      {checkboxIsChecked && (
        <S.Tick
          $isChecked={checkboxIsChecked}
          $background={background}
          $isDisabled={isDisabled}
        >
          <Icon
            icon={icon}
            background={isDisabled ? 'accent' : 'textDefault'}
            iconSize={size / 1.75}
          />
        </S.Tick>
      )}
    </S.Box>
  );
};

export default withTheme(Checkbox) as React.FC<ICheckbox>;
