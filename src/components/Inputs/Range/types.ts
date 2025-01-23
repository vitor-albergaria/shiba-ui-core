import { ColorType } from '../../../theme/constants/color';

export interface IRange {
  value: number;
  min?: number;
  max?: number;
  handleChange?: (range: number) => void;
  width?: number;
  height?: number;
  isFullWidth?: boolean;
  background?: ColorType;
  isHidden?: boolean;
}

export interface IRangeStyles {
  $width?: number;
  $height?: number;
  $isFullWidth?: boolean;
  $background?: ColorType;
  $percentage: number
}
