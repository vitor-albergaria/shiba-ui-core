import { isKeyOf } from '../common/validations';
import { DefaultTheme } from 'styled-components';

export const getSpacing = (theme: DefaultTheme, value?: string): string => {
  const spacingArray = value?.split(' ');
  const isKeyOfSpacing = (value: string) => isKeyOf(value, theme.spacing);

  if (spacingArray?.every(isKeyOfSpacing)) {
    return spacingArray.map((value) => theme.spacing[value])?.join(' ');
  }

  return spacingArray?.join(' ');
};
