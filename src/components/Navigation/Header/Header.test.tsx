import Header from '.';

import {
  testRenderingOfComponent,
  testComponentVisibility,
  testComponentText,
} from '../../../tests/functions';

describe('UI Component: Header', () => {
  testRenderingOfComponent({
    testId: 'text-display',
    component: Header,
    componentProperties: { logo: 'Test Text', menuItems: [] },
  });

  testComponentText({
    testId: 'text-display',
    component: Header,
    componentProperties: { logo: 'Helloooooo!' },
    expectedText: 'Helloooooo!',
  });

  testComponentVisibility({
    testId: 'text-display',
    component: Header,
    componentProperties: {},
  });
});
