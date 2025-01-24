import { BorderRadiusType } from 'src/theme/constants/borderRadius';
import { ColorType } from 'src/theme/constants/color';
import { IconKeys } from '../Icon/types';

export interface IBadge {
  text?: string;
  borderRadius?: BorderRadiusType;
  background?: ColorType;
  color?: ColorType;
  rightIcon?: IconKeys;
  isHidden?: boolean;
  leftIcon?: IconKeys;
  onClick?: () => void;
}

export interface IBadgeStyles {
  $borderRadius?: BorderRadiusType;
  $background?: ColorType;
}
