import Rating from '.';

import {
  testComponentVisibility,
  testRenderingOfComponent,
} from '../../../tests/functions';

describe('UI Component: Rating', () => {
  testRenderingOfComponent({
    testId: 'rating',
    component: Rating,
    componentProperties: {},
  });

  testComponentVisibility({
    testId: 'rating',
    component: Rating,
    componentProperties: {},
  });
});
