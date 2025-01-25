import React from 'react';
import theme from '../../theme';
import { IStyledProvider } from './types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../theme/config/globalStyles';
import { color, darkThemeColors, oceanThemeColors } from '../constants/color';

const getThemeColors = (themeVariant: string) => {
  if (themeVariant == 'light') return { ...color };
  if (themeVariant === 'dark') return { ...color, ...darkThemeColors };
  if (themeVariant === 'ocean') return { ...color, ...oceanThemeColors };
};

export const StyledThemeProvider: React.FC<IStyledProvider> = ({
  children,
  customTheme = {},
  themeVariant,
}) => {
  const finalThemeVariant = themeVariant || 'light';
  const baseColors = getThemeColors(finalThemeVariant);
  const mergedTheme = { ...theme, color: baseColors, ...customTheme };

  return (
    <ThemeProvider theme={mergedTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
