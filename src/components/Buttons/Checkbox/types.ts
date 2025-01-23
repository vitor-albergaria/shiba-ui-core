import { ColorType } from '../../../theme/constants/color';
import { PartialIconProps } from '../../Feedback/Icon/types';

export interface ICheckbox extends PartialIconProps {
  isChecked?: boolean;
  handleChange?: (isChecked?: boolean) => void;
  size?: number;
  background?: ColorType;
  isDisabled?: boolean;
  isHidden?: boolean;
}

export interface ICheckboxStyles {
  $isChecked?: boolean;
  $size?: number;
  $background?: ColorType;
  $isDisabled?: boolean;
}
