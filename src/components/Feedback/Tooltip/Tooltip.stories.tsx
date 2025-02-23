import { t } from 'i18next';
import React from 'react';
import Tooltip from './index';
import { ITooltip } from './types';
import { Meta, StoryObj } from '@storybook/react';
import { color } from '../../../theme/constants/color';
import {
  formatKeyNamesForSummary,
  getEntryOptionsForSummary,
} from '../../../utils/docs/storybook';

const meta: Meta<ITooltip> = {
  title: 'Components/Feedback/Tooltip',
  component: Tooltip,
  tags: ['!dev'],
  argTypes: {
    children: {
      description: t('docs_children'),
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },

    content: {
      control: 'text',
      description: t('docs_content'),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },

    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: t('docs_predefined'),
      table: {
        type: { summary: 'top | right | bottom | left' },
        defaultValue: { summary: 'center' },
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

    color: {
      control: 'select',
      options: getEntryOptionsForSummary(color),
      description: t('docs_predefined'),
      table: {
        type: { summary: formatKeyNamesForSummary(color) },
        defaultValue: { summary: 'textDefault' },
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

type Story = StoryObj<ITooltip>;

export const Default: Story = {
  args: {
    content: 'Tooltip...',
    children: <h2 style={{ color: '#7F2BFF' }}>Hover</h2>,
    position: 'bottom',
  },
};

(Tooltip as React.FC).displayName = 'Tooltip';
