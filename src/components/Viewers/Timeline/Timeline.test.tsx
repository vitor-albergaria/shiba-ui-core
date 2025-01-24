import Timeline from '.';

import {
  testRenderingOfComponent,
  testComponentVisibility,
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
});
