import { t } from 'i18next';
import Header from './index';
import { IHeader } from './types';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<IHeader> = {
  title: 'Components/Navigation/Header',
  component: Header,
  tags: ['!dev'],
  argTypes: {
    logo: {
      control: 'text',
      description: t('docs_content'),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },

    menuItems: {
      control: 'object',
      description: t('docs_header'),
      table: {
        type: { summary: 'IHeader[]' },
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

type Story = StoryObj<IHeader>;

export const Default: Story = {
  args: {
    logo: 'Shiba UI',
    menuItems: [
      {
        id: 1,
        label: 'Home',
        handleClick: (label) => console.log(`Clicked ${label}`),
      },
      {
        id: 2,
        label: 'About Me',
        handleClick: (label) => console.log(`Clicked ${label}`),
      },
      {
        id: 3,
        label: 'Components',
        handleClick: (label) => console.log(`Clicked ${label}`),
      },
      {
        id: 4,
        label: 'Games',
        handleClick: (label) => console.log(`Clicked ${label}`),
      },
      {
        id: 5,
        label: 'Settings',
        handleClick: (label) => console.log(`Clicked ${label}`),
        isInactive: true,
      },
    ],
  },
};

(Header as React.FC).displayName = 'Header';
