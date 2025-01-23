import '../src/i18n/index';

import type { Preview } from '@storybook/react';
import { i18nDecorator } from '../src/decorators/i18nDecorator';
import { themeDecorator } from '../src/decorators/themeDecorator';
import { DocsSettings } from '../src/components/DocsSettings';

export const decorators = [themeDecorator, i18nDecorator];

const preview: Preview = {
  tags: ['autodocs'],

  parameters: {
    layout: 'fullscreen',
    docs: { container: DocsSettings },
  },
};

export default preview;
