import { Meta, StoryObj } from '@storybook/react';
import PieChart from './index';
import { IPieChart } from './types';
import { t } from 'i18next';

const meta: Meta<IPieChart> = {
  title: 'Components/Feedback/PieChart',
  component: PieChart,
  tags: ['!dev'],
  argTypes: {
    data: {
      control: { type: 'object' },
      description: t('docs_data'),
      table: {
        type: { summary: 'IPieData[]' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },

    size: {
      control: { type: 'number' },
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '120px' },
        category: 'Component',
      },
    },

    isLegendHidden: {
      control: 'boolean',
      description: t('docs_hide'),
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Component',
      },
    },

    isHidden: {
      control: 'boolean',
      description: t('docs_hide'),
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Component',
      },
    },
  },
};

export default meta;

type Story = StoryObj<IPieChart>;

export const Default: Story = {
  args: {
    data: [
      {
        percent: 45,
        color: 'secondary',
        label: 'React',
      },
      {
        percent: 20,
        color: 'primary',
        label: 'Typescript',
      },
      {
        percent: 15,
        color: 'error',
        label: 'Storybook',
      },
      {
        percent: 20,
        color: 'alternative',
        label: 'CSS-in-JS',
      },
    ],
  },
};

(PieChart as React.FC).displayName = 'PieChart';
