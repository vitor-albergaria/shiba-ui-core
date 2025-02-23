import * as S from './styles';
import { IPieChart } from './types';
import React, { useMemo, useState } from 'react';
import { withTheme } from 'styled-components';
import TextDisplay from '../../TextElements/TextDisplay';
import { nanoid } from 'nanoid';
import { ColorType } from '../../../theme/constants/color';

const PieChart: React.FC<IPieChart> = ({
  data = [],
  size = 120,
  isLegendHidden = false,
  isHidden = false,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const calculateCoordinates = (
    percent: number,
    radius: number,
    startAngle: number
  ) => {
    const angle = (percent * 360 * Math.PI) / 18000;
    const x = radius * Math.cos(startAngle + angle);
    const y = radius * Math.sin(startAngle + angle);

    return { x, y };
  };

  const validatedData = useMemo(() => {
    const total = data.reduce((sum, item) => sum + item.percent, 0);

    if (total !== 100) {
      return data.map((item) => ({
        ...item,
        percent: (item.percent / total) * 100,
      }));
    }

    return data;
  }, [data]);

  const radius = size / 2 - 10;
  const centerX = size / 2;
  const centerY = size / 2;

  let startAngle = -Math.PI / 2;

  const paths = validatedData.map((slice, index) => {
    const { percent, color } = slice;
    const largeArcFlag = percent > 50 ? 1 : 0;
    const end = calculateCoordinates(percent, radius, startAngle);

    const pathData = [
      `M ${centerX} ${centerY}`,
      `L ${centerX + radius * Math.cos(startAngle)} ${centerY + radius * Math.sin(startAngle)}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${centerX + end.x} ${centerY + end.y}`,
      'Z',
    ].join(' ');

    startAngle += (percent * 2 * Math.PI) / 100;

    return (
      <S.Slice
        key={index}
        d={pathData}
        $color={color as ColorType}
        $isActive={activeIndex === index}
        onMouseEnter={() => !isLegendHidden && setActiveIndex(index)}
        onMouseLeave={() => !isLegendHidden && setActiveIndex(null)}
      />
    );
  });

  if (isHidden) return null;

  return (
    <S.Container role="figure" aria-label="Pie Chart">
      <S.ChartContainer 
        data-testid="pie-chart" 
        $size={size}
        role="img"
        aria-label={`Chart showing: ${validatedData.map(item => 
          `${item.label} ${item.percent.toFixed(1)}%`
        ).join(', ')}`}
      >
        <S.SVG viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
          {paths}
        </S.SVG>
      </S.ChartContainer>

      {!isLegendHidden && !!size && (
        <S.Legend role="list" aria-label="Chart legend">
          {validatedData.map((item, index) => (
            <S.LegendItem
              key={nanoid()}
              role="listitem"
              $isActive={activeIndex === index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              aria-label={`${item.label}: ${item.percent.toFixed(1)}%`}
            >
              <S.LegendColor
                $color={item?.color as ColorType}
                $isActive={activeIndex === index}
                $size={size}
                aria-hidden="true"
              />
              <TextDisplay
                size="sm"
                text={`${item?.label} - ${item?.percent?.toFixed(1)}%`}
              />
            </S.LegendItem>
          ))}
        </S.Legend>
      )}
    </S.Container>
  );
};

export default withTheme(PieChart) as React.FC<IPieChart>;
