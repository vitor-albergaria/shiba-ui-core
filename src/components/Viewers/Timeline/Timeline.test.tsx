import Timeline from '.';

import {
  testRenderingOfComponent,
  testComponentVisibility,
  testComponentAccessibility,
} from '../../../tests/functions';

describe('UI Component: Timeline', () => {
  testRenderingOfComponent({
    testId: 'timeline',
    component: Timeline,
    componentProperties: { data: [] },
  });

  testComponentVisibility({
    testId: 'timeline',
    component: Timeline,
    componentProperties: { data: [] },
  });

  testComponentAccessibility({
    testId: 'timeline',
    component: Timeline,
    componentProperties: { data: [] },
    expectedAttributes: {
      role: 'list',
      'aria-label': 'Timeline',
    },
  });
});
