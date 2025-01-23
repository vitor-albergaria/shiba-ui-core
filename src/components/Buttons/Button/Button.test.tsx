import Button from '.';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentVariant,
  testComponentText,
  testComponentClick,
  testComponentVisibility,
  testComponentLoadingBehavior,
  testComponentIconRendering,
  testComponentDisabledBehavior,
} from '../../../tests/functions';
import { color } from '../../../theme/constants/color';

describe('UI Component: Button', () => {
  testRenderingOfComponent({
    testId: 'button',
    component: Button,
    componentProperties: {},
  });

  testComponentText({
    testId: 'button',
    component: Button,
    componentProperties: { text: 'Click me' },
    expectedText: 'Click me',
  });

  testComponentClick({
    testId: 'button',
    component: Button,
    componentProperties: {},
    handler: () => console.log('clicked'),
  });

  testComponentStyleByProperties({
    testId: 'button',
    component: Button,
    propertiesToTest: {
      width: 200,
      height: 50,
      background: 'success',
      padding: 'xs lg',
      gap: 'sm 2x',
      borderRadius: 'lg',
      borderWidth: 'rm',
      borderColor: 'success',
    },
    expectedResultingStyles: {
      width: '200px',
      height: '50px',
      background: color.success,
      padding: '4px 16px',
      gap: '8px 24px',
      'border-radius': '32px',
      'border-width': '0px',
      'border-color': color.success,
    },
  });

  testComponentVariant({
    testId: 'button',
    component: Button,
    variant: 'solid',
    expectedResultingStyles: {
      background: color.primary,
      'border-width': '0px',
      'border-color': 'transparent',
    },
  });

  testComponentVariant({
    testId: 'button',
    component: Button,
    variant: 'outlined',
    expectedResultingStyles: {
      background: 'transparent',
      'border-width': '1.5px',
      'border-color': color.primary,
    },
  });

  testComponentVariant({
    testId: 'button',
    component: Button,
    variant: 'text',
    expectedResultingStyles: {
      background: 'transparent',
      'border-width': '0px',
    },
  });

  testComponentVisibility({
    testId: 'button',
    component: Button,
    componentProperties: {},
  });

  testComponentDisabledBehavior({
    testId: 'button',
    component: Button,
    expectedResultingStyles: {
      background: color.highlight,
    },
  });

  testComponentLoadingBehavior({
    component: Button,
    componentProperties: {},
  });

  testComponentIconRendering({
    component: Button,
    componentProperties: { leftIcon: 'CardIcon' },
  });

  testComponentIconRendering({
    component: Button,
    componentProperties: { rightIcon: 'BellIcon' },
  });

  testComponentStyleByProperties({
    testId: 'button',
    component: Button,
    propertiesToTest: {
      isFullWidth: true,
    },
    expectedResultingStyles: {
      width: '100%',
    },
  });
});
