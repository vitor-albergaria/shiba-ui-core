import React from 'react';
import * as S from './styles';
import TextDisplay from '../../TextElements/TextDisplay';
import { ITimeline } from './types';
import { withTheme } from 'styled-components';

const Timeline: React.FC<ITimeline> = ({ data = [], isHidden = false }) => {
  if (isHidden) return null;

  return (
    <S.TimelineContainer data-testid="timeline">
      {data.map((item) => (
        <S.TimelineItem key={item?.id}>
          <S.TimelineMarker>
            <S.TimelineCircle />
            <S.TimelineLine />
          </S.TimelineMarker>

          <S.TimelineContent>
            <S.TimelineHeader>
              <TextDisplay text={item?.title} weight="bold" />

              <TextDisplay
                text={item?.subtitle}
                size="sm"
                color="accent"
                weight="bold"
              />
            </S.TimelineHeader>

            <S.TimelineDetails>
              {item?.details?.map((topic, index) => (
                <S.DetailItem key={index}>
                  <TextDisplay text="•" />
                  <TextDisplay text={topic} />
                </S.DetailItem>
              ))}
            </S.TimelineDetails>
          </S.TimelineContent>
        </S.TimelineItem>
      ))}
    </S.TimelineContainer>
  );
};

export default withTheme(Timeline) as React.FC<ITimeline>;
