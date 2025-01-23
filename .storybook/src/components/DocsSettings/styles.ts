import styled from 'styled-components';

export const RowWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 16px 20px -40px 0px;
  column-gap: 8px;
`;

export const IconWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledIcon = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #181818;
  border-radius: 4px;
  padding: 8px 8px 8px 9px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-1px);
    transition:
      transform 0.15s ease,
      box-shadow 0.15s ease;
  }
`;

export const Tooltip = styled.div<{ $isVisible?: boolean }>`
  display: ${(props) => (props.$isVisible ? 'BLOCK' : 'none')};

  position: absolute;
  right: 60px;
  top: 16px;
  z-index: 99;

  padding: 10px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  background: #fbfbfb;
`;
