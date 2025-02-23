import { Meta, StoryObj } from '@storybook/react';
import ProgressCircle from './index';

import { IProgressCircle } from './types';
import { t } from 'i18next';
import {
  formatKeyNamesForSummary,
  getEntryOptionsForSummary,
} from '../../../utils/docs/storybook';
import { color } from '../../../theme/constants/color';

const meta: Meta<IProgressCircle> = {
  title: 'Components/Feedback/ProgressCircle',
  component: ProgressCircle,
  tags: ['!dev'],
  argTypes: {
    progressValue: {
      control: 'number',
      description: t('docs_value'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Component',
      },
    },

    size: {
      control: { type: 'number' },
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '60' },
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

type Story = StoryObj<IProgressCircle>;

export const Default: Story = {
  args: { progressValue: 30 },
};

(ProgressCircle as React.FC).displayName = 'ProgressCircle';
