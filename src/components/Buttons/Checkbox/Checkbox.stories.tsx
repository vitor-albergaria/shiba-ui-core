import { t } from 'i18next';
import Checkbox from './index';
import { ICheckbox } from './types';
import * as iconList from '../../../assets/icons';
import { Meta, StoryObj } from '@storybook/react';
import { color } from '../../../theme/constants/color';
import {
  formatEntryNamesForSummary,
  formatKeyNamesForSummary,
  getEntryOptionsForSummary,
} from '../../../utils/docs/storybook';

const meta: Meta<ICheckbox> = {
  title: 'Components/Buttons/Checkbox',
  component: Checkbox,
  tags: ['!dev'],
  argTypes: {
    isChecked: {
      control: 'boolean',
      description: t('docs_value').replace('number', 'boolean'),
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Component',
      },
    },

    handleChange: {
      description: t('docs_on_change'),
      table: {
        type: { summary: '(isChecked?: boolean) => void' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },

    size: {
      control: { type: 'number' },
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '28' },
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

    isDisabled: {
      control: 'boolean',
      description: t('docs_disabled'),
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

    icon: {
      control: 'select',
      options: getEntryOptionsForSummary(iconList),
      description: t('docs_predefined'),
      table: {
        type: { summary: formatEntryNamesForSummary(iconList) },
        defaultValue: { summary: 'undefined' },
        category: 'Icon',
      },
    },
  },
};

export default meta;

type Story = StoryObj<ICheckbox>;

export const Default: Story = {};

export const Disabled: Story = { args: { isDisabled: true, isChecked: true } };

(Checkbox as React.FC).displayName = 'Checkbox';
