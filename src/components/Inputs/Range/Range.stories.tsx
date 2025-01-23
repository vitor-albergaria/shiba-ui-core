import { Meta, StoryObj } from '@storybook/react';
import Range from './index';
import { IRange } from './types';
import { t } from 'i18next';
import {
  formatKeyNamesForSummary,
  getEntryOptionsForSummary,
} from '../../../utils/docs/storybook';
import { color } from '../../../theme/constants/color';

const meta: Meta<IRange> = {
  title: 'Components/Inputs/Range',
  component: Range,
  argTypes: {
    value: {
      control: 'number',
      description: t('docs_value'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Component',
      },
    },

    min: {
      control: 'number',
      description: t('docs_value'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Component',
      },
    },

    max: {
      control: 'number',
      description: t('docs_value'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
        category: 'Component',
      },
    },

    handleChange: {
      description: t('docs_on_change'),
      table: {
        type: { summary: '(range: number) => void' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },

    width: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '200px' },
        category: 'Component',
      },
    },

    height: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '8px' },
        category: 'Component',
      },
    },

    background: {
      control: 'select',
      options: getEntryOptionsForSummary(color),
      description: t('docs_predefined'),
      table: {
        type: { summary: formatKeyNamesForSummary(color) },
        defaultValue: { summary: 'highlight' },
        category: 'Component',
      },
    },

    isFullWidth: {
      control: 'boolean',
      description: t('docs_full_width'),
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Component',
      },
    },
  },
};

export default meta;

type Story = StoryObj<IRange>;

export const Default: Story = {
  args: {
    value: 0,
  },
};

(Range as React.FC).displayName = 'Range';
