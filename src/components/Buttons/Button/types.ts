import { BorderRadiusType } from '../../../theme/constants/borderRadius';
import { BorderWidthType } from '../../../theme/constants/borderWidth';
import { BoxShadowType } from '../../../theme/constants/boxShadow';
import { ColorType } from '../../../theme/constants/color';
import { IconKeys, PartialIconProps } from '../../Feedback/Icon/types';
import { ISpinner } from '../../Feedback/Spinner/types';

export interface IButton extends ISpinner, PartialIconProps {
  text?: string;
  onClick?: () => void;
  rightIcon?: IconKeys;
  isLoading?: boolean;
  isHidden?: boolean;
  leftIcon?: IconKeys;

  variant?: 'solid' | 'outlined' | 'text';
  color?: ColorType;
  background?: ColorType;
  borderColor?: ColorType;
  width?: number;
  height?: number;
  borderWidth?: BorderWidthType;
  borderRadius?: BorderRadiusType;
  boxShadow?: BoxShadowType;
  isDisabled?: boolean;
  padding?: string;
  gap?: string;
  isFullWidth?: boolean;
}

export interface IButtonStyles {
  $variant?: 'solid' | 'outlined' | 'text';
  $background?: ColorType;
  $borderColor?: ColorType;
  $width?: number;
  $height?: number;
  $borderWidth?: BorderWidthType;
  $borderRadius?: BorderRadiusType;
  $boxShadow?: BoxShadowType;
  $isDisabled?: boolean;
  $padding?: string;
  $gap?: string;
  $isFullWidth?: boolean;
}
