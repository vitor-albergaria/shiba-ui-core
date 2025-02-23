import Skeleton from '.';

import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentVisibility,
  testComponentAccessibility,
} from '../../../tests/functions';
import { color } from '../../../theme/constants/color';

describe('UI Component: Skeleton', () => {
  testRenderingOfComponent({
    testId: 'skeleton',
    component: Skeleton,
    componentProperties: {},
  });

  testComponentStyleByProperties({
    testId: 'skeleton',
    component: Skeleton,
    propertiesToTest: {
      height: 25,
      width: 45,
      borderRadius: 'md',
      background: 'error',
    },
    expectedResultingStyles: {
      height: '25px',
      width: '45px',
      background: color.error,
      'border-radius': '16px',
    },
  });

  testComponentStyleByProperties({
    testId: 'skeleton',
    component: Skeleton,
    propertiesToTest: {
      isFullSize: true,
    },
    expectedResultingStyles: {
      width: '100%',
      height: '100%',
    },
  });

  testComponentVisibility({
    testId: 'skeleton',
    component: Skeleton,
    componentProperties: {},
  });

  testComponentAccessibility({
    testId: 'skeleton',
    component: Skeleton,
    componentProperties: {},
    expectedAttributes: {
      role: 'progressbar',
      'aria-label': 'Loading content',
      'aria-busy': 'true',
      'aria-valuemin': '0',
      'aria-valuemax': '100',
      'aria-valuenow': '0',
    },
  });
});
