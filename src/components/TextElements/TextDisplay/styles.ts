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

    text-align: ${$textAlign};
    line-height: ${validateUnit($lineHeight)};
    letter-spacing: ${validateUnit($letterSpacing)};
    text-decoration: ${$textDecoration};
    font-family: 'Poppins', sans-serif;

    word-break: break-word;
    overflow-wrap: anywhere;
  `}
`;
