import Radio from '.';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentVisibility,
  testComponentDisabledBehavior,
} from '../../../tests/functions';
import { color } from '../../../theme/constants/color';

describe('UI Component: Radio', () => {
  testRenderingOfComponent({
    testId: 'radio',
    component: Radio,
    componentProperties: {},
  });

  testComponentStyleByProperties({
    testId: 'radio',
    component: Radio,
    propertiesToTest: { size: 50, background: 'error' },
    expectedResultingStyles: {
      width: '50px',
      height: '50px',
      'border-color': color.error,
    },
  });

  testComponentVisibility({
    testId: 'radio',
    component: Radio,
    componentProperties: {},
  });

  testComponentDisabledBehavior({
    testId: 'radio',
    component: Radio,
    expectedResultingStyles: {
      'border-color': color.highlight,
    },
  });
});
