import styled, { css } from 'styled-components';
import { ITextDisplayStyles } from './types';
import { validateUnit } from '../../../utils/common/validations';

export const TextWrapper = styled.p<ITextDisplayStyles>`
  ${({
    theme,
    $textColor,
    $fontSize,
    $fontWeight,
    $textAlign,
    $textDecoration,
    $lineHeight,
    $letterSpacing,
  }) => css`
    color: ${theme.color[$textColor]};
    font-size: ${theme.fontSize[$fontSize]}rem;
    font-weight: ${theme.fontWeight[$fontWeight]};
    font-family: ${theme.fontFamily.default || 'Times New Roman'};

    text-align: ${$textAlign};
    line-height: ${validateUnit($lineHeight)};
    letter-spacing: ${validateUnit($letterSpacing)};
    text-decoration: ${$textDecoration};

    word-break: break-word;
    overflow-wrap: anywhere;
  `}
`;
