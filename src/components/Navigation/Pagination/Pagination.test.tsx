import Pagination from '.';
import { testRenderingOfComponent } from '../../../tests/functions';

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
});
