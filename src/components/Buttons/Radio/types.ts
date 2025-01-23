import { ColorType } from '../../../theme/constants/color';

export interface IRadio {
  isChecked?: boolean;
  handleChange?: (isChecked?: boolean) => void;
  size?: number;
  background?: ColorType;
  isDisabled?: boolean;
  isHidden?: boolean;
}

export interface IRadioStyles {
  $isChecked?: boolean;
  $size?: number;
  $background?: ColorType;
  $isDisabled?: boolean;
}
