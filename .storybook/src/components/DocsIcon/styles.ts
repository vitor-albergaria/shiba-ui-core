import styled from 'styled-components';

export const DocIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 200px;
  padding: 0 16px;
  margin: 8px;

  border: 2px solid #121212;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    color: #ffffff;
    background: #121212;
    transition: 0.15s ease-out;
  }
`;
