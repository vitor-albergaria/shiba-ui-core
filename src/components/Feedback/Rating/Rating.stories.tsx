import { t } from 'i18next';
import Rating from './index';
import { IRating } from './types';
import { Meta, StoryObj } from '@storybook/react';
import { color } from '../../../theme/constants/color';
import {
  formatKeyNamesForSummary,
  getEntryOptionsForSummary,
} from '../../../utils/docs/storybook';
import { spacing } from '../../../theme/constants/spacing';

const meta: Meta<IRating> = {
  title: 'Components/Feedback/Rating',
  component: Rating,
  tags: ['!dev'],
  argTypes: {
    rating: {
      control: 'number',
      description: t('docs_rating'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Component',
      },
    },

    maxStars: {
      control: 'number',
      description: t('docs_maxStars'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
        category: 'Component',
      },
    },

    readonly: {
      control: 'boolean',
      description: t('docs_readonly'),
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Component',
      },
    },

    size: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'auto' },
        category: 'Component',
      },
    },

    background: {
      control: 'select',
      options: getEntryOptionsForSummary(color),
      description: t('docs_predefined'),
      table: {
        type: { summary: formatKeyNamesForSummary(color) },
        defaultValue: { summary: 'primary' },
        category: 'Component',
      },
    },

    gap: {
      control: 'text',
      description: t('docs_predefined'),
      table: {
        type: { summary: formatKeyNamesForSummary(spacing) },
        defaultValue: { summary: 'xs' },
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

    handleChange: {
      description: t('docs_on_change'),
      table: {
        type: { summary: '(rating: number) => void' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },
  },
};

export default meta;

type Story = StoryObj<IRating>;

export const Default: Story = {
  args: {
    rating: 3.5,
  },
};

(Rating as React.FC).displayName = 'Rating';
