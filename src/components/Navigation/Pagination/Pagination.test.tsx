import Pagination from '.';
import { 
  testRenderingOfComponent,
  testComponentAccessibility 
} from '../../../tests/functions';

describe('UI Component: Pagination', () => {
  testRenderingOfComponent({
    testId: 'pagination-control',
    component: Pagination,
    componentProperties: {
      currentPage: 1,
      itemsPerPage: 6,
      maxVisiblePages: 5,
      totalItems: 40,
      onPageChange: () => {},
    },
  });

  testComponentAccessibility({
    testId: 'pagination-control',
    component: Pagination,
    componentProperties: {
      currentPage: 1,
      itemsPerPage: 6,
      maxVisiblePages: 5,
      totalItems: 40,
      onPageChange: () => {},
    },
    expectedAttributes: {
      role: 'navigation',
      'aria-label': 'Pagination',
    },
  });
});
