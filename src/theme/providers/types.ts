import { DefaultTheme } from 'styled-components/dist/types';

export type ThemeVariant = 'light' | 'dark' | 'ocean';

export interface IStyledProvider {
  children: React.ReactNode;
  customTheme?: Partial<DefaultTheme>;
  customFonts?: string;
  themeVariant?: ThemeVariant;
}
