export interface IColor {
  background: string;
  section: string;
  highlight: string;
  accent: string;
  content: string;
  primary: string;
  secondary: string;
  alternative: string;
  success: string;
  warning: string;
  error: string;
  textDefault: string;
}

export const color: IColor = {
  background: '#F5F5FB',
  section: '#FBFBFB',
  highlight: '#B5B5B5',
  accent: '#5C5C5C',
  content: '#151515',
  primary: '#7F2BFF',
  secondary: '#486DF7',
  alternative: '#ED4968',
  success: '#0EB75A',
  warning: '#E0B02C',
  error: '#C33336',
  textDefault: '#FFFFFF',
};

export const darkThemeColors: Partial<IColor> = {
  background: '#121212',
  section: '#181818',
  highlight: '#505050',
  accent: '#808080',
  content: '#FFFFFF',
};

export const oceanThemeColors: Partial<IColor> = {
  background: '#151B30',
  section: '#2F3652',
  highlight: '#4C4C4C',
  accent: '#A5A5A5',
  content: '#F7F7F7',
};

export type ColorType = keyof typeof color;
