import Badge from '.';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentText,
  testComponentClick,
  testComponentVisibility,
  testComponentIconRendering,
  testComponentAccessibility,
} from '../../../tests/functions';
import { color } from '../../../theme/constants/color';

describe('UI Component: Badge', () => {
  testRenderingOfComponent({
    testId: 'badge',
    component: Badge,
    componentProperties: {},
  });

  testComponentText({
    testId: 'badge',
    component: Badge,
    componentProperties: { text: 'Click me' },
    expectedText: 'Click me',
  });

  testComponentClick({
    testId: 'badge',
    component: Badge,
    componentProperties: {},
    handler: () => console.log('clicked'),
  });

  testComponentStyleByProperties({
    testId: 'badge',
    component: Badge,
    propertiesToTest: {
      background: 'success',
      borderRadius: 'lg',
    },
    expectedResultingStyles: {
      background: color.success,
      'border-radius': '32px',
    },
  });

  testComponentVisibility({
    testId: 'badge',
    component: Badge,
    componentProperties: {},
  });

  testComponentIconRendering({
    component: Badge,
    componentProperties: { leftIcon: 'CardIcon' },
  });

  testComponentIconRendering({
    component: Badge,
    componentProperties: { rightIcon: 'BellIcon' },
  });

  testComponentAccessibility({
    testId: 'badge',
    component: Badge,
    componentProperties: { text: 'Test Badge' },
    expectedAttributes: {
      role: 'status',
      'aria-label': 'Test Badge',
    },
  });

  testComponentAccessibility({
    testId: 'badge',
    component: Badge,
    componentProperties: { 
      text: 'Clickable Badge',
      onClick: () => {} 
    },
    expectedAttributes: {
      role: 'status',
      'aria-label': 'Clickable Badge',
      type: 'button',
    },
  });
});
