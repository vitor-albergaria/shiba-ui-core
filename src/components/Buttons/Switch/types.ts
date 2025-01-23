import { ColorType } from '../../../theme/constants/color';

export interface ISwitch {
  isChecked?: boolean;
  handleChange?: (isChecked?: boolean) => void;
  size?: number;
  background?: ColorType;
  isDisabled?: boolean;
  isHidden?: boolean;
}

export interface ISwitchStyles {
  $isChecked?: boolean;
  $size?: number;
  $background?: ColorType;
  $isDisabled?: boolean;
}
