import PieChart from '.';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentVisibility,
  testComponentAccessibility,
} from '../../../tests/functions';

describe('UI Component: PieChart', () => {
  const mockData = [
    { color: 'error', label: 'Jest Test', percent: 100 }
  ];

  testRenderingOfComponent({
    testId: 'pie-chart',
    component: PieChart,
    componentProperties: {
      data: [{ color: 'error', label: 'Jest Test', percent: 100 }],
    },
  });

  testComponentStyleByProperties({
    testId: 'pie-chart',
    component: PieChart,
    propertiesToTest: {
      data: [{ color: 'error', label: 'Jest Test', percent: 100 }],
      size: 200,
    },
    expectedResultingStyles: {
      width: '200px',
      height: '200px',
    },
  });

  testComponentVisibility({
    testId: 'pie-chart',
    component: PieChart,
    componentProperties: {
      data: [{ color: 'error', label: 'Jest Test', percent: 100 }],
      size: 200,
    },
  });

  testComponentAccessibility({
    testId: 'pie-chart',
    component: PieChart,
    componentProperties: { data: mockData },
    expectedAttributes: {
      role: 'img',
      'aria-label': 'Chart showing: Jest Test 100.0%',
    },
  });
});
