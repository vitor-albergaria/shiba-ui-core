import styled from 'styled-components';

export const DocSpacingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  column-gap: 8px;
  width: 100%;
  margin-bottom: 20px;

  p {
    width: 50px;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const SpaceIndicator = styled.div<{ $space: string }>`
  width: 100%;
  height: ${({ $space }) => $space};
  background: #121212;
`;
