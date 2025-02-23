import { t } from 'i18next';
import Badge from './index';
import { IBadge } from './types';
import { Meta, StoryObj } from '@storybook/react';
import {
  formatEntryNamesForSummary,
  formatKeyNamesForSummary,
  getEntryOptionsForSummary,
} from '../../../utils/docs/storybook';
import { color } from '../../../theme/constants/color';
import * as iconList from '../../../assets/icons';
import { sizeSummary } from '../../../theme/constants/size';

const meta: Meta<IBadge> = {
  title: 'Components/Feedback/Badge',
  component: Badge,
  tags: ['!dev'],
  argTypes: {
    text: {
      control: 'text',
      description: t('docs_content'),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },

    color: {
      control: 'select',
      options: getEntryOptionsForSummary(color),
      description: t('docs_predefined'),
      table: {
        type: { summary: formatKeyNamesForSummary(color) },
        defaultValue: { summary: 'primary' },
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

    borderRadius: {
      control: 'text',
      description: t('docs_predefined'),
      table: {
        type: { summary: sizeSummary },
        defaultValue: { summary: 'xs' },
        category: 'Component',
      },
    },

    leftIcon: {
      control: 'select',
      options: getEntryOptionsForSummary(iconList),
      description: t('docs_predefined'),
      table: {
        type: { summary: formatEntryNamesForSummary(iconList) },
        defaultValue: { summary: 'undefined' },
        category: 'Icon',
      },
    },

    rightIcon: {
      control: 'select',
      options: getEntryOptionsForSummary(iconList),
      description: t('docs_predefined'),
      table: {
        type: { summary: formatEntryNamesForSummary(iconList) },
        defaultValue: { summary: 'undefined' },
        category: 'Icon',
      },
    },

    onClick: {
      description: t('docs_click'),
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
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

type Story = StoryObj<IBadge>;

export const Default: Story = {
  args: {},
};

(Badge as React.FC).displayName = 'Badge';
