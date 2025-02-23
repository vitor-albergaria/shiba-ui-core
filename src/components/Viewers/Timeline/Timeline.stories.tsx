import { t } from 'i18next';
import Timeline from './index';
import { ITimeline } from './types';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<ITimeline> = {
  title: 'Components/Viewers/Timeline',
  component: Timeline,
  tags: ['!dev'],
  argTypes: {
    data: {
      control: 'object',
      description: t('docs_timeline'),
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

type Story = StoryObj<ITimeline>;

export const Default: Story = {
  args: {
    data: [
      {
        id: 1,
        title: 'Front-End Developer',
        subtitle: 'Mid-Level Developer at ABC Corp - 2 years',
        details: [
          'Developed and maintained user interfaces using React, Redux, and JavaScript.',
          'Collaborated with back-end developers to integrate APIs for dynamic web applications.',
          'Worked closely with UX/UI teams to implement responsive design patterns for mobile and desktop views.',
        ],
      },
      {
        id: 2,
        title: 'Front-End Developer',
        subtitle: 'Junior Developer at XYZ Ltd - 2 years',
        details: [
          'Contributed to the development of the company’s web application with HTML, CSS, and JavaScript.',
          'Optimized web page performance by minimizing load times and enhancing responsiveness.',
          'Assisted in the migration of legacy web pages to modern frameworks like React.',
        ],
      },
    ],
  },
};

(Timeline as React.FC).displayName = 'Timeline';
