import * as S from './styles';
import { ISwitch } from './types';
import { withTheme } from 'styled-components';
import React, { useEffect, useState } from 'react';
import { noop } from '../../../utils/common/noop';

const Switch: React.FC<ISwitch> = ({
  isChecked = false,
  handleChange = noop,
  size = 28,
  background = 'primary',
  isDisabled = false,
  isHidden = false,
}) => {
  const [switchIsChecked, setSwitchIsChecked] = useState(isChecked);

  const onSwitchValueChange = () => {
    if (isDisabled) return;

    const newCheckedState = !switchIsChecked;
    setSwitchIsChecked(newCheckedState);
    handleChange(newCheckedState);
  };

  useEffect(() => setSwitchIsChecked(isChecked), [isChecked]);

  if (isHidden) return null;

  return (
    <S.Container
      as="button"
      type="button"
      role="switch"
      data-testid="switch"
      onClick={onSwitchValueChange}
      aria-checked={switchIsChecked}
      aria-disabled={isDisabled}
      $background={background}
      $size={size}
      $isChecked={switchIsChecked}
      $isDisabled={isDisabled}
    >
      <S.Circle
        $isChecked={switchIsChecked}
        $background={background}
        $isDisabled={isDisabled}
      />
    </S.Container>
  );
};

export default withTheme(Switch) as React.FC<ISwitch>;
