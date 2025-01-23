import Icon from '.';
import {
  testRenderingOfComponent,
  testComponentVariant,
  testComponentVisibility,
} from '../../../tests/functions';
import { color } from '../../../theme/constants/color';

describe('UI Component: Icon', () => {
  testRenderingOfComponent({
    testId: 'icon',
    component: Icon,
    componentProperties: {},
  });

  testComponentVariant({
    testId: 'icon',
    component: Icon,
    variant: 'circle',
    expectedResultingStyles: {
      background: color.primary,
      borderRadius: '50%',
    },
  });

  testComponentVariant({
    testId: 'icon',
    component: Icon,
    variant: 'square',
    expectedResultingStyles: {
      background: color.primary,
      borderRadius: '4px',
    },
  });

  testComponentVariant({
    testId: 'icon',
    component: Icon,
    variant: 'circleOutlined',
    expectedResultingStyles: {
      borderRadius: '50%',
      'border-color': color.primary,
    },
  });

  testComponentVariant({
    testId: 'icon',
    component: Icon,
    variant: 'squareOutlined',
    expectedResultingStyles: {
      borderRadius: '4px',
      'border-color': color.primary,
    },
  });

  testComponentVisibility({
    testId: 'icon',
    component: Icon,
    componentProperties: {},
  });
});
