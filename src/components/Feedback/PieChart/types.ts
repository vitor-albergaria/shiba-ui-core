import { ColorType } from "../../../theme/constants/color";

export interface IPieData {
  percent: number;
  color: string;
  label: string;
}

export interface IPieChart {
  data: IPieData[];
  size?: number;
  isLegendHidden?: boolean;
  isHidden?: boolean;
}

export interface IPieChartStyles {
  $color?: ColorType;
  $size?: number
  $isActive?: boolean;
}
