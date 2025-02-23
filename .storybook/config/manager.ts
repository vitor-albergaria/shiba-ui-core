import { create } from '@storybook/theming';
import { addons } from '@storybook/manager-api';
import { color } from '../../src/theme/constants/color';

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', '../../src/assets/images/favicon.ico');
document.head.appendChild(link);

addons.setConfig({
  theme: create({
    brandTitle: 'Shiba UI',
    brandImage: require('../../src/assets/images/logo.webp'),
    brandUrl: 'https://github.com/vitor-albergaria/shiba-ui-core',

    base: 'dark',
    appBg: '#121212',
    textColor: color.background,
    appBorderColor: color.highlight,
    appBorderRadius: 4,

    barBg: color.content,
    barTextColor: color.background,
    barSelectedColor: color.background,
    barHoverColor: color.highlight,

    inputBg: color.content,
    inputBorder: color.highlight,
    inputTextColor: color.background,
    inputBorderRadius: 4,
  }),
});
