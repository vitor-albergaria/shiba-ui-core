import Button from '.';
import { t } from 'i18next';
import { IButton } from './types';
import { Meta, StoryObj } from '@storybook/react';
import { color } from '../../../theme/constants/color';
import { sizeSummary } from '../../../theme/constants/size';
import {
  formatEntryNamesForSummary,
  formatKeyNamesForSummary,
  getEntryOptionsForSummary,
} from '../../../utils/docs/storybook';
import * as iconList from '../../../assets/icons';
import { spacing } from '../../../theme/constants/spacing';
import { boxShadow } from '../../../theme/constants/boxShadow';

const meta: Meta<IButton> = {
  title: 'Components/Buttons/Button',
  component: Button,
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

    onClick: {
      description: t('docs_click'),
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },

    variant: {
      control: 'select',
      options: ['solid', 'outlined', 'text'],
      description: t('docs_predefined'),
      table: {
        type: { summary: "'solid' | 'outlined' | 'text'" },
        defaultValue: { summary: 'solid' },
        category: 'Component',
      },
    },

    isLoading: {
      control: 'boolean',
      description: t('docs_loading'),
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

    isDisabled: {
      control: 'boolean',
      description: t('docs_disabled'),
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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

    width: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'auto' },
        category: 'Component',
      },
    },

    height: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '40px' },
        category: 'Component',
      },
    },

    padding: {
      control: 'text',
      description: t('docs_predefined'),
      table: {
        type: { summary: formatKeyNamesForSummary(spacing) },
        defaultValue: { summary: 'xs sm' },
        category: 'Component',
      },
    },

    gap: {
      control: 'text',
      description: t('docs_predefined'),
      table: {
        type: { summary: formatKeyNamesForSummary(spacing) },
        defaultValue: { summary: 'sm' },
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

    borderColor: {
      control: 'select',
      options: getEntryOptionsForSummary(color),
      description: t('docs_predefined'),
      table: {
        type: { summary: formatKeyNamesForSummary(color) },
        defaultValue: { summary: 'primary' },
        category: 'Component',
      },
    },

    borderWidth: {
      control: 'text',
      description: t('docs_predefined'),
      table: {
        type: { summary: sizeSummary },
        defaultValue: { summary: 'rm' },
        category: 'Component',
      },
    },

    boxShadow: {
      control: 'select',
      options: getEntryOptionsForSummary(boxShadow),
      description: t('docs_predefined'),
      table: {
        type: { summary: formatKeyNamesForSummary(boxShadow) },
        defaultValue: { summary: 'rm' },
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
  },
};

export default meta;

type Story = StoryObj<IButton>;

export const Default: Story = {
  args: {
    text: t('docs_sample_text'),
    onClick: () => alert('Clicked!'),
    width: 200,
  },
};

export const Outlined: Story = {
  args: {
    text: 'Sample text',
    variant: 'outlined',
    width: 200,
    onClick: () => alert('Clicked!'),
  },
};

export const Text: Story = {
  args: {
    text: 'Sample text',
    variant: 'text',
    width: 200,
    onClick: () => alert('Clicked!'),
  },
};

export const Disabled: Story = {
  args: {
    text: 'Sample text',
    isDisabled: true,
    width: 200,
    onClick: () => alert('Clicked!'),
  },
};

export const Loading: Story = {
  args: {
    text: 'Sample text',
    isLoading: true,
    width: 200,
    onClick: () => alert('Clicked!'),
  },
};

(Button as React.FC).displayName = 'Button';
