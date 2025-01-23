import { Meta, StoryObj } from '@storybook/react';
import Pagination from './index';
import { IPagination } from './types';
import { t } from 'i18next';

const meta: Meta<IPagination> = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  argTypes: {
    currentPage: {
      control: 'number',
      description: t('docs_value'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },
    itemsPerPage: {
      control: 'number',
      description: t('docs_value'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },
    maxVisiblePages: {
      control: 'number',
      description: t('docs_value'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },
    totalItems: {
      control: 'number',
      description: t('docs_value'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },
    selectPageText: {
      control: 'text',
      description: t('docs_content'),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Page:' },
        category: 'Component',
      },
    },
    onPageChange: {
      description: t('docs_on_change'),
      table: {
        type: { summary: '(page: number) => void' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },
  },
};

export default meta;

type Story = StoryObj<IPagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    itemsPerPage: 6,
    maxVisiblePages: 5,
    totalItems: 40,
    onPageChange: () => {},
  },
};

(Pagination as React.FC).displayName = 'Pagination';
