import { ColorType } from '../../../theme/constants/color';

export interface ISpinner {
  size?: number;
  background?: ColorType;
  isHidden?: boolean;
}

export interface ISpinnerStyles {
  $size?: number;
  $background?: ColorType;
}
