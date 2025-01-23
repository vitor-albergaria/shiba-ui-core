import Skeleton from './index';
import { t } from 'i18next';
import { ISkeleton } from './types';
import { Meta, StoryObj } from '@storybook/react';
import { color } from '../../../theme/constants/color';
import {
  formatKeyNamesForSummary,
  getEntryOptionsForSummary,
} from '../../../utils/docs/storybook';
import { sizeSummary } from '../../../theme/constants/size';

const meta: Meta<ISkeleton> = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
  argTypes: {
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

    width: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50px' },
        category: 'Component',
      },
    },

    height: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50px' },
        category: 'Component',
      },
    },

    borderRadius: {
      control: 'text',
      description: t('docs_predefined'),
      table: {
        type: { summary: sizeSummary },
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

    isFullSize: {
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

type Story = StoryObj<ISkeleton>;

export const Default: Story = {};

(Skeleton as React.FC).displayName = 'Skeleton';
