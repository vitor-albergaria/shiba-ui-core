import Avatar from '.';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentAccessibility,
} from '../../../tests/functions';
import { color } from '../../../theme/constants/color';

describe('UI Component: Avatar', () => {
  testRenderingOfComponent({
    testId: 'avatar-image',
    component: Avatar,
    componentProperties: { image: 'https://encurtador.com.br/Kw9pE' },
  });

  testRenderingOfComponent({
    testId: 'avatar-text',
    component: Avatar,
    componentProperties: { username: 'Habibi Cat' },
  });

  testComponentStyleByProperties({
    testId: 'avatar-text',
    component: Avatar,
    propertiesToTest: {
      username: 'Habibi Cat',
      size: 100,
      background: 'accent',
      boxShadow: 'rm',
    },
    expectedResultingStyles: {
      width: '100px',
      height: '100px',
      background: color.accent,
      'box-shadow': 'none',
    },
  });

  testComponentAccessibility({
    testId: 'avatar-text',
    component: Avatar,
    componentProperties: { username: 'Test User' },
    expectedAttributes: {
      role: 'img',
      'aria-label': 'Test User',
    },
  });

  testComponentAccessibility({
    testId: 'avatar-image',
    component: Avatar,
    componentProperties: { 
      image: 'https://encurtador.com.br/Kw9pE',
      username: 'Test User'
    },
    expectedAttributes: {
      role: 'img',
      alt: 'Test User',
    },
  });
});
