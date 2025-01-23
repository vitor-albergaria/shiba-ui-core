import Tooltip from '.';
import React from 'react';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
} from '../../../tests/functions';
import { color } from '../../../theme/constants/color';

describe('UI Component: Tooltip', () => {
  testRenderingOfComponent({
    testId: 'tooltip',
    component: Tooltip,
    componentProperties: { children: <p>Hello</p>, content: 'Test Tooltip' },
  });

  testComponentStyleByProperties({
    testId: 'tooltip',
    component: Tooltip,
    propertiesToTest: {
      children: <p>Hello</p>,
      content: 'Test Tooltip',
      background: 'warning',
    },
    expectedResultingStyles: {
      background: color.warning,
    },
  });
});
