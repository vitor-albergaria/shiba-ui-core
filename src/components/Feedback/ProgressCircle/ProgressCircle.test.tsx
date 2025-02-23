import ProgressCircle from '.';

import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentVisibility,
  testComponentAccessibility,
} from '../../../tests/functions';

describe('UI Component: ProgressCircle', () => {
  testRenderingOfComponent({
    testId: 'progress-circle',
    component: ProgressCircle,
    componentProperties: {},
  });

  testComponentStyleByProperties({
    testId: 'progress-circle',
    component: ProgressCircle,
    propertiesToTest: { size: 50 },
    expectedResultingStyles: {
      width: '50px',
      height: '50px',
    },
  });

  testComponentVisibility({
    testId: 'progress-circle',
    component: ProgressCircle,
    componentProperties: {},
  });

  testComponentAccessibility({
    testId: 'progress-circle',
    component: ProgressCircle,
    componentProperties: { progressValue: 75 },
    expectedAttributes: {
      role: 'progressbar',
      'aria-valuenow': '75',
      'aria-valuemin': '0',
      'aria-valuemax': '100',
      'aria-label': 'Progress: 75%',
    },
  });
});
