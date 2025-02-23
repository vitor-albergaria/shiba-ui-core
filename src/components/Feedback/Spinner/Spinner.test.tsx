import Spinner from '.';

import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentVisibility,
  testComponentAccessibility,
} from '../../../tests/functions';
import { color } from '../../../theme/constants/color';

describe('UI Component: Spinner', () => {
  testRenderingOfComponent({
    testId: 'spinner',
    component: Spinner,
    componentProperties: {},
  });

  testComponentStyleByProperties({
    testId: 'spinner',
    component: Spinner,
    propertiesToTest: { size: 50, background: 'error' },
    expectedResultingStyles: {
      width: '50px',
      height: '50px',
      'border-top-color': color.error,
      'border-right-color': color.error,
    },
  });

  testComponentVisibility({
    testId: 'spinner',
    component: Spinner,
    componentProperties: {},
  });

  testComponentAccessibility({
    testId: 'spinner',
    component: Spinner,
    componentProperties: {},
    expectedAttributes: {
      role: 'status',
      'aria-label': 'Loading',
      'aria-busy': 'true',
    },
  });
});
