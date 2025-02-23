import Checkbox from '.';
import { color } from '../../../theme/constants/color';

import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentVisibility,
  testComponentDisabledBehavior,
  testComponentAccessibility,
} from '../../../tests/functions';

describe('UI Component: Checkbox', () => {
  testRenderingOfComponent({
    testId: 'checkbox',
    component: Checkbox,
    componentProperties: {},
  });

  testComponentStyleByProperties({
    testId: 'checkbox',
    component: Checkbox,
    propertiesToTest: { size: 50, background: 'error' },
    expectedResultingStyles: {
      width: '50px',
      height: '50px',
      'border-color': color.error,
    },
  });

  testComponentVisibility({
    testId: 'checkbox',
    component: Checkbox,
    componentProperties: {},
  });

  testComponentDisabledBehavior({
    testId: 'checkbox',
    component: Checkbox,
    expectedResultingStyles: {
      'border-color': color.highlight,
    },
  });

  testComponentAccessibility({
    testId: 'checkbox',
    component: Checkbox,
    componentProperties: {},
    expectedAttributes: {
      role: 'checkbox',
      'aria-checked': 'false',
      'aria-disabled': 'false',
    },
  });
});
