import { t } from 'i18next';
import Icon from './index';
import { color } from '../../../theme/constants/color';
import * as iconList from '../../../assets/icons';
import { IIcon } from './types';
import { Meta, StoryObj } from '@storybook/react';
import { boxShadow } from '../../../theme/constants/boxShadow';
import {
  formatEntryNamesForSummary,
  formatKeyNamesForSummary,
  getEntryOptionsForSummary,
} from '../../../utils/docs/storybook';

const meta: Meta<IIcon> = {
  title: 'Components/Feedback/Icon',
  component: Icon,
  tags: ['!dev'],
  argTypes: {
    icon: {
      control: 'select',
      options: getEntryOptionsForSummary(iconList),
      description: t('docs_predefined'),
      table: {
        type: { summary: formatEntryNamesForSummary(iconList) },
        defaultValue: { summary: 'ForwardIcon' },
        category: 'Component',
      },
    },

    variant: {
      control: 'select',
      options: ['icon', 'circle', 'square', 'circleOutlined', 'squareOutlined'],
      description: t('docs_predefined'),
      table: {
        type: {
          summary:
            "'icon' | 'circle' | 'square' | 'circleOutlined' | 'squareOutlined'",
        },
        defaultValue: { summary: 'icon' },
        category: 'Component',
      },
    },

    iconSize: {
      control: { type: 'number' },
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '"20"' },
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

    boxSize: {
      control: { type: 'number' },
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'fit-content' },
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

type Story = StoryObj<IIcon>;

export const Default: Story = {
  args: {
    icon: 'ForwardIcon',
  },
};

export const Circle: Story = {
  args: {
    icon: 'BugIcon',
    variant: 'circle',
  },
};

export const Square: Story = {
  args: {
    icon: 'BellIcon',
    variant: 'square',
  },
};

export const CircleOutlined: Story = {
  args: {
    icon: 'CameraIcon',
    variant: 'circleOutlined',
  },
};

export const SquareOutlined: Story = {
  args: {
    icon: 'TrophyIcon',
    variant: 'squareOutlined',
  },
};

(Icon as React.FC).displayName = 'Icon';
