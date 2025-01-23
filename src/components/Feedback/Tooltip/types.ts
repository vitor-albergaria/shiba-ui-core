import { ColorType } from '../../../theme/constants/color';

export interface ITooltip {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';

  background?: ColorType;
  color?: ColorType;
  isHidden?: boolean;
}

export interface ITooltipContainer {
  $position: ITooltip['position'];
  $background?: ColorType;
  $isHidden: boolean;
}
