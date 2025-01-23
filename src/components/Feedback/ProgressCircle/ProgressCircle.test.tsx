import ProgressCircle from '.';

import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentVisibility,
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
});
