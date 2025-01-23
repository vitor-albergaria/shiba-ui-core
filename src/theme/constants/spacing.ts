export interface ISpacing {
  rm: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2x': string;
  '3x': string;
  '4x': string;
  '5x': string;
  '6x': string;
  '7x': string;
  '8x': string;
}

export const spacing: ISpacing = {
  rm: '0px',
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2x': '24px',
  '3x': '28px',
  '4x': '32px',
  '5x': '36px',
  '6x': '40px',
  '7x': '44px',
  '8x': '48px',
};

export type SpacingType = keyof typeof spacing;
