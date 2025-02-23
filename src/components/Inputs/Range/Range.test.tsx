import Range from '.';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentAttributes,
  testComponentVisibility,
  testComponentAccessibility,
} from '../../../tests/functions';

describe('UI Component: Range', () => {
  testRenderingOfComponent({
    testId: 'range',
    component: Range,
    componentProperties: { value: 0 },
  });

  testComponentAttributes({
    testId: 'range',
    component: Range,
    componentProperties: { value: 35, min: 20, max: 80 },
    expectedAttributes: {
      value: 35,
      min: 20,
      max: 80,
    },
  });

  testComponentStyleByProperties({
    testId: 'range',
    component: Range,
    propertiesToTest: {
      value: 0,
      width: 50,
      height: 50,
    },
    expectedResultingStyles: {
      width: '50px',
      height: '50px',
    },
  });

  testComponentStyleByProperties({
    testId: 'range',
    component: Range,
    propertiesToTest: {
      value: 0,
      isFullWidth: true,
    },
    expectedResultingStyles: {
      width: '100%',
    },
  });

  testComponentVisibility({
    testId: 'range',
    component: Range,
    componentProperties: { value: 0 },
  });

  testComponentAccessibility({
    testId: 'range',
    component: Range,
    componentProperties: { value: 50, min: 0, max: 100 },
    expectedAttributes: {
      role: 'slider',
      'aria-valuemin': '0',
      'aria-valuemax': '100',
      'aria-valuenow': '50',
      'aria-valuetext': '50%',
      'aria-orientation': 'horizontal',
    },
  });
});
