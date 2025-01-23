import { ColorType } from '../../../theme/constants/color';

export interface IProgressCircle {
  progressValue?: number;
  size?: number;
  background?: ColorType;
  isHidden?: boolean;
}

export interface IProgressCircleStyles {
  $size?: number;
  $background?: ColorType;
}