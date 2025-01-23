export interface IFontFamily {
  default: string;
}

export const fontFamily: IFontFamily = {
  default: 'poppins',
};

export type FontFamilyType = keyof typeof fontFamily;
