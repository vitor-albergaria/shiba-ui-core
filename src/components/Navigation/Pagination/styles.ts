import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin: 8px 0;
`;

export const ControlWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const ButtonControl = styled.div<{
  $isSelected?: boolean;
  $disabled?: boolean;
}>`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 25px;
  border-radius: 4px;
  padding: 8px;

  border: 1.5px solid
    ${({ $isSelected, theme }) =>
      theme.color[!$isSelected ? 'accent' : 'primary']};
  background: ${({ theme, $isSelected }) => $isSelected && theme.color.primary};

  &:hover {
    transform: translateY(-1.5px);
    animation: transform 1.5s ease-out;
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

export const PageInput = styled.input`
  width: 50px;
  height: 25px;

  background: ${({ theme }) => theme.color.background};
  border: 1.5px solid ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.content};
  border-radius: 4px;
  padding: 0 0 2px 8px;
`;
