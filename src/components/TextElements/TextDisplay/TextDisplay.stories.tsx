import { t } from 'i18next';
import TextDisplay from '.';
import { ITextDisplay } from './types';
import { Meta, StoryObj } from '@storybook/react';
import { color } from '../../../theme/constants/color';
import { fontSize } from '../../../theme/constants/fontSize';
import { fontWeight } from '../../../theme/constants/fontWeight';
import { formatKeyNamesForSummary } from '../../../utils/docs/storybook';
import { getEntryOptionsForSummary } from '../../../utils/docs/storybook';

const meta: Meta<ITextDisplay> = {
  title: 'Components/TextElements/TextDisplay',
  component: TextDisplay,
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
        defaultValue: { summary: 'content' },
        category: 'Component',
      },
    },

    size: {
      control: 'select',
      options: getEntryOptionsForSummary(fontSize),
      description: t('docs_predefined'),
      table: {
        type: { summary: formatKeyNamesForSummary(fontSize) },
        defaultValue: { summary: 'md' },
        category: 'Component',
      },
    },

    weight: {
      control: 'select',
      options: getEntryOptionsForSummary(fontWeight),
      description: t('docs_predefined'),
      table: {
        type: { summary: formatKeyNamesForSummary(fontWeight) },
        defaultValue: { summary: 'normal' },
        category: 'Component',
      },
    },

    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: t('docs_predefined'),
      table: {
        type: { summary: 'left | center | right | justify' },
        defaultValue: { summary: 'left' },
        category: 'Component',
      },
    },

    decoration: {
      control: 'select',
      options: ['none', 'underline', 'line-through', 'overline'],
      description: t('docs_predefined'),
      table: {
        type: { summary: 'none | underline | line-through | overline' },
        defaultValue: { summary: 'none' },
        category: 'Component',
      },
    },

    lineHeight: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Component',
      },
    },

    letterSpacing: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'normal' },
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

type Story = StoryObj<ITextDisplay>;

export const Default: Story = {
  args: {
    text: t('docs_sample_text'),
  },
};

(TextDisplay as React.FC).displayName = 'TextDisplay';
