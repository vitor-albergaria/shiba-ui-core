export interface IBorderRadius {
  rm: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

export const borderRadius: IBorderRadius = {
  rm: '0px',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '32px',
};

export type BorderRadiusType = keyof typeof borderRadius;
