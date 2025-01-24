import styled from 'styled-components';
import { IBadgeStyles } from './types';
import { getSpacing } from '../../../utils/styles/theme';

export const BadgeContainer = styled.div<IBadgeStyles>`
  cursor: default;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  column-gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => getSpacing(theme, 'sm lg')};
  background: ${({ theme, $background }) => theme.color[$background]};
  border-radius: ${({ theme, $borderRadius }) =>
    theme.borderRadius[$borderRadius]};
`;
