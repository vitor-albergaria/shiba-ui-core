import { css, keyframes } from 'styled-components';

export const generateBlinkAnimation = () => {
  const blink = keyframes`
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  `;

  return css`
    animation: ${blink} 1.5s infinite ease-in-out;
  `;
};

export const generateSpinAnimation = () => {
  const spin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

  return css`
    animation: ${spin} 1s linear infinite;
  `;
};

export const generateSlideInAnimation = () => {
  const slideIn = keyframes`
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  `;

  return css`
    animation: ${slideIn} 0.3s ease-in-out;
  `;
};

export const generateSlideOutAnimation = () => {
  const slideOut = keyframes`
    from { transform: translateX(0); }
    to { transform: translateX(100%); }
  `;

  return css`
    animation: ${slideOut} 0.3s ease-in-out;
  `;
};
