import { BorderRadiusType } from '../../../theme/constants/borderRadius';
import { ColorType } from '../../../theme/constants/color';

export interface ISkeleton {
  width?: number;
  height?: number;
  background?: ColorType;
  borderRadius?: BorderRadiusType;
  isFullSize?: boolean;
  isHidden?: boolean;
}

export interface ISkeletonStyles {
  $width?: number;
  $height?: number;
  $background?: ColorType;
  $borderRadius?: BorderRadiusType;
  $isFullSize?: boolean;
}
