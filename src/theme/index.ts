import { IBorderRadius, borderRadius } from './constants/borderRadius';
import { IBorderWidth, borderWidth } from './constants/borderWidth';
import { IBoxShadow, boxShadow } from './constants/boxShadow';
import { IColor, color } from './constants/color';
import { fontFamily, IFontFamily } from './constants/fontFamily';
import { IFontSize, fontSize } from './constants/fontSize';
import { IFontWeight, fontWeight } from './constants/fontWeight';
import { ISpacing, spacing } from './constants/spacing';

export interface IThemeProps {
  color: IColor;
  spacing: ISpacing;
  fontSize: IFontSize;
  fontWeight: IFontWeight;
  boxShadow: IBoxShadow;
  borderRadius: IBorderRadius;
  borderWidth: IBorderWidth;
  fontFamily: IFontFamily;
}

const theme: IThemeProps = {
  color: color,
  spacing: spacing,
  fontSize: fontSize,
  fontWeight: fontWeight,
  boxShadow: boxShadow,
  borderRadius: borderRadius,
  borderWidth: borderWidth,
  fontFamily: fontFamily,
};

export default theme;

export type ThemeType = typeof theme;
