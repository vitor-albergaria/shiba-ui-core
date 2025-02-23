import React from 'react';
import * as S from './styles';
import TextDisplay from '../../TextElements/TextDisplay';
import { ITimeline } from './types';
import { withTheme } from 'styled-components';

const Timeline: React.FC<ITimeline> = ({ data = [], isHidden = false }) => {
  if (isHidden) return null;

  return (
    <S.TimelineContainer
      data-testid="timeline"
      role="list"
      aria-label="Timeline"
    >
      {data.map((item) => (
        <S.TimelineItem key={item?.id} role="listitem">
          <S.TimelineMarker aria-hidden="true">
            <S.TimelineCircle />
            <S.TimelineLine />
          </S.TimelineMarker>

          <S.TimelineContent>
            <S.TimelineHeader>
              <TextDisplay text={item?.title} weight="bold" role="heading" />

              <TextDisplay
                text={item?.subtitle}
                size="sm"
                color="accent"
                weight="bold"
              />
            </S.TimelineHeader>

            <S.TimelineDetails role="list" aria-label="Details">
              {item?.details?.map((topic, index) => (
                <S.DetailItem key={index} role="listitem">
                  <TextDisplay text="•" aria-hidden="true" />
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
