import styled from 'styled-components';

export const Label = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const SelectorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
`;

export const OptionsLine = styled.div`
  display: flex;
  column-gap: 8px;
  margin-bottom: 4px;
`;

export const OptionBox = styled.div<{ $isSelected?: boolean }>`
  cursor: pointer;
  padding: 8px;

  font-size: 10px;
  font-weight: 600;
  color: #121212;
  border-radius: 4px;
  border: none;

  color: ${({ $isSelected }) => ($isSelected ? '#F5F5FB' : '#181818')};

  background: ${({ $isSelected }) =>
    $isSelected ? '#181818' : 'rgba(0, 0, 0, 0.05)'};

  &:hover {
    transform: translateY(-1px);
    transition:
      transform 0.15s ease,
      box-shadow 0.15s ease;
  }
`;

export const SettingsButton = styled.button`
  cursor: pointer;

  width: 100%;
  height: 30px;

  border: none;
  border-radius: 4px;
  margin-top: 4px;

  font-size: 10px;
  font-weight: 600;
  color: #f5f5fb;

  background: #121212;

  &:hover {
    transform: translateY(-1px);
    transition:
      transform 0.15s ease,
      box-shadow 0.15s ease;
  }
`;
