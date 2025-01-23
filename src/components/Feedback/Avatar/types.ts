import { BoxShadowType } from "../../../theme/constants/boxShadow";
import { ColorType } from "../../../theme/constants/color";

export interface IAvatar {
  username?: string;
  image?: string;
  size?: number;
  background?: ColorType;
  boxShadow?: BoxShadowType;
  isHidden?: boolean;
}

export interface IAvatarStyles {
  username?: string;
  image?: string;
  $size?: number;
  $background?: ColorType;
  $boxShadow?: BoxShadowType;
}