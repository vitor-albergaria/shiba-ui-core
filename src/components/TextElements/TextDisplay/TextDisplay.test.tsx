import TextDisplay from '.';

import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentVisibility,
  testComponentText,
  testComponentAccessibility,
} from '../../../tests/functions';
import { color } from '../../../theme/constants/color';

describe('UI Component: TextDisplay', () => {
  testRenderingOfComponent({
    testId: 'text-display',
    component: TextDisplay,
    componentProperties: { text: 'Test Text' },
  });

  testComponentText({
    testId: 'text-display',
    component: TextDisplay,
    componentProperties: { text: 'Helloooooo!' },
    expectedText: 'Helloooooo!',
  });

  testComponentStyleByProperties({
    testId: 'text-display',
    component: TextDisplay,
    propertiesToTest: {
      text: 'Test Text',
      color: 'alternative',
      size: '5x',
      weight: 'heavy',
      align: 'right',
      lineHeight: 10,
      letterSpacing: 1,
      decoration: 'underline',
    },
    expectedResultingStyles: {
      color: color.alternative,
      'font-size': '3.2rem',
      'font-weight': '800',
      'text-align': 'right',
      'line-height': '10px',
      'letter-spacing': '1px',
      textDecoration: 'underline',
    },
  });

  testComponentVisibility({
    testId: 'text-display',
    component: TextDisplay,
    componentProperties: {},
  });

  testComponentAccessibility({
    testId: 'text-display',
    component: TextDisplay,
    componentProperties: { text: 'Test Text' },
    expectedAttributes: {
      role: 'text',
    },
  });
});
