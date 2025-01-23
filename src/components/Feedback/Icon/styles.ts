import { IIconStyles } from './types';
import styled, { css } from 'styled-components';

export const IconWrapper = styled.div<IIconStyles>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, $variant, $background, $boxSize, $boxShadow }) => {
    const size = $boxSize ? `${$boxSize}px` : 'fit-content';
    const padding = $variant === 'icon' ? 0 : '10px';
    const background = theme.color[$background];

    const variants = {
      circle: css`
        background: ${background};
        border-radius: 50%;
      `,
      circleOutlined: css`
        background: 'transparent';
        border-radius: 50%;
        border: 2px solid ${background};
      `,
      square: css`
        background: ${background};
        border-radius: 4px;
      `,
      squareOutlined: css`
        background: 'transparent';
        border-radius: 4px;
        border: 2px solid ${background};
      `,
    };

    return css`
      width: ${size};
      height: ${size};
      padding: ${padding};
      box-shadow: ${theme.boxShadow[$boxShadow]};
      ${variants[$variant]};
    `;
  }}
`;
