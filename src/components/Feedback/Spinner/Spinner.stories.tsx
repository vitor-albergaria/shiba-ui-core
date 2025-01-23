import { t } from 'i18next';
import Spinner from './index';
import { ISpinner } from './types';
import { Meta, StoryObj } from '@storybook/react';
import { color } from '../../../theme/constants/color';
import {
  formatKeyNamesForSummary,
  getEntryOptionsForSummary,
} from '../../../utils/docs/storybook';

const meta: Meta<ISpinner> = {
  title: 'Components/Feedback/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '20' },
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

type Story = StoryObj<ISpinner>;

export const Default: Story = {};

(Spinner as React.FC).displayName = 'Spinner';
