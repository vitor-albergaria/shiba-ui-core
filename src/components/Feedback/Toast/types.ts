import { BorderRadiusType } from '../../../theme/constants/borderRadius';
import { ColorType } from '../../../theme/constants/color';

export type ToastType = 'success' | 'error' | 'warning';

export interface IToast {
  id?: string;
  message?: string;
  timeout?: number;

  variant?: ToastType;
  background?: ColorType;
  color?: ColorType;
  borderColor?: ColorType;
  width?: number;
  height?: number;
  borderRadius?: BorderRadiusType;
}

export interface IToastStyles {
  $variant?: ToastType;
  $background?: ColorType;
  $color?: ColorType;
  $borderColor?: ColorType;
  $width?: number;
  $height?: number;
  $borderRadius?: BorderRadiusType;
  $isExiting: boolean
}
