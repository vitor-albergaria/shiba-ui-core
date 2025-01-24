import styled from 'styled-components';

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  padding: 0 8px;
`;

export const TimelineItem = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const TimelineMarker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${({ theme }) => theme.spacing.md};
  padding-top: 2px;
  width: 16px;
`;

export const TimelineCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.highlight};
`;

export const TimelineLine = styled.div`
  flex: 1;
  width: 1px;
  background-color: ${({ theme }) => theme.color.highlight};
`;

export const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing.md};
`;

export const TimelineHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.color.accent};
`;

export const TimelineDetails = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing.md};
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
`;
