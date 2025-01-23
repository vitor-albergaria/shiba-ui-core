export interface IBoxShadow {
  rm: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

export const boxShadow: IBoxShadow = {
  rm: 'none',
  xs: '0px 2px 8px rgba(0, 0, 0, 0.5)',
  sm: '0px 4px 8px rgba(0, 0, 0, 0.5)',
  md: '0px 6px 8px rgba(0, 0, 0, 0.5)',
  lg: '0px 8px 16px rgba(0, 0, 0, 0.5)',
};

export type BoxShadowType = keyof typeof boxShadow;
