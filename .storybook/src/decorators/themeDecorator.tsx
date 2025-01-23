import React from 'react';
import styled from 'styled-components';
import { Decorator } from '@storybook/react';
import { StyledThemeProvider } from '../../../src/theme/providers/index';
import { ThemeVariant } from '../../../src/theme/providers/types';

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  width: 100%;
  height: 500px;

  background: ${({ theme }) => theme.color.background};
`;

export const themeDecorator: Decorator = (Story) => {
  const selectedTheme = localStorage.getItem('theme') || 'light';

  return (
    <StyledThemeProvider themeVariant={selectedTheme as ThemeVariant}>
      <CenterContainer>
        <Story />
      </CenterContainer>
    </StyledThemeProvider>
  );
};
