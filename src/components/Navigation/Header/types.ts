export interface IMenuItem {
  id?: number;
  label: string;
  handleClick: (option: string) => void;
  isInactive?: boolean;
}

export interface IHeader {
  logo?: string;
  menuItems?: IMenuItem[];
  isHidden?: boolean;
}
