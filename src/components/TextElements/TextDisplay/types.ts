import { ColorType } from '../../../theme/constants/color';
import { FontSizeType } from '../../../theme/constants/fontSize';
import { FontWeightType } from '../../../theme/constants/fontWeight';

export type TextAlignmentType = 'left' | 'center' | 'right' | 'justify';
export type TextDecorationType = 'none' | 'underline' | 'line-through' | 'overline';

export interface ITextDisplay {
  text?: string;
  isHidden?: boolean;
  color?: ColorType;
  decoration?: TextDecorationType;
  align?: TextAlignmentType;
  size?: FontSizeType;
  weight?: FontWeightType;
  lineHeight?: number;
  letterSpacing?: number;
  role?: 'text' | 'heading' | 'alert' | 'status';
  'aria-label'?: string;
}

export interface ITextDisplayStyles {
  $textColor?: ColorType;
  $textDecoration?: TextDecorationType;
  $textAlign?: TextAlignmentType;
  $fontSize?: FontSizeType;
  $fontWeight?: FontWeightType;
  $lineHeight?: number;
  $letterSpacing?: number;
}