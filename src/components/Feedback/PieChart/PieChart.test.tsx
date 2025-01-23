import PieChart from '.';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentVisibility,
} from '../../../tests/functions';

describe('UI Component: PieChart', () => {
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
});
