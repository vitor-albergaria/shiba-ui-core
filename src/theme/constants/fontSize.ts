export interface IFontSize {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2x': number;
  '3x': number;
  '4x': number;
  '5x': number;
  '6x': number;
}

export const fontSize: IFontSize = {
  xs: 1.0,
  sm: 1.2,
  md: 1.4,
  lg: 1.6,
  xl: 1.8,
  '2x': 2.0,
  '3x': 2.4,
  '4x': 2.8,
  '5x': 3.2,
  '6x': 3.6,
};

export type FontSizeType = keyof typeof fontSize;
