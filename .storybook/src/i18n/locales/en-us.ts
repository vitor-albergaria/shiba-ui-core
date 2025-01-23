export const en = {
  translation: {
    colors_title: 'Colors',
    colors_description:
      'This section presents the color palette used in the design system. Each color is defined by its hex code and is used to ensure a consistent and cohesive visual identity across the application.',

    icons_title: 'Icons',
    icons_description:
      'This section showcases the icons available in the design system. Icons are a crucial part of the UI, providing visual cues that enhance the user experience. Each icon is represented by an SVG path.',

    typography_title: 'Typography',
    typography_description:
      'In this documentation, font sizes are displayed in pixels for reference, but the actual values used are in `rem`.',
    typography_sample:
      'The Shiba Inu is a Spitz-type breed with a curled tail.',

    font_sizes_title: 'Font Sizes',
    font_sizes_description:
      "Font sizes are defined using the `rem` unit, where the base size is 1rem = 10px (based on a root font size of 62.5% of the browser's default size). This approach simplifies scaling and ensures consistency across the design.",

    font_family_title: 'Font Family',
    font_family_description:
      'The design system includes two font families: the default for primary text and an alternative for additional styles, ensuring a versatile typographic experience.',

    font_weight_title: 'Font Weight',
    font_weight_description:
      'Font weights are categorized to provide a range of typographic emphasis and hierarchy.',

    docs_icon_selection: 'Accepts predefined icon names for selection.',
    docs_color: 'Accepts predefined theme colors or CSS color values.',

    docs_predefined: 'Accepts only fixed values, as listed below:',
    docs_type_number: 'Accepts a `number` to specify the style.',

    docs_content: 'Accepts a `string` to set the text content.',
    docs_font_family:
      'Accepts predefined or custom font families to set the text.',
    docs_values_predefined:
      'Accepts predefined values or values in `string` format.',
    docs_text_decoration:
      'Accepts `string` values to define the text decoration.',
    docs_number: 'Accepts values in `number` format.',
    docs_font_weight:
      'Accepts predefined options or `string` values to define the font weight.',
    docs_text_align:
      'Accepts predefined options or `string` values to align the text.',
    docs_letter_spacing:
      'Accepts a `number` to set the letter spacing of the text.',
    docs_hide: 'Accepts a `boolean` to hide the component.',
    docs_line_height: 'Accepts a `number` to set the line height.',
    docs_sample_text: 'Sample Text',
    docs_click: 'Accepts a function to be called on component click.',
    docs_loading: 'Accepts a `boolean` to set the component to loading.',
    docs_disabled: 'Accepts a `boolean` to set the component to disabled.',
    docs_variant: 'Accepts predefined options to set the variant.',
    docs_shadow: 'Accepts predefined options to set the box shadow.',
    docs_full_width:
      'Accepts a `boolean` to determine if the component should occupy the full available space.',
    docs_copied: 'Copied!',
    docs_toast: `

The \`ToastContainer\` component is used to display toast notifications in your application. 

## Configuration

Add the \`ToastContainer\` to your component:

\`\`\`jsx
import React from 'react';
import ToastContainer, { toast } from 'shiba-ui';

function App() {
  return (
    <div>
      {/* Other components */}
      <ToastContainer />
    </div>
  );
}
  
export default App;
\`\`\`

## Usage

Use the toast functions to display messages:

\`\`\`jsx
import { toast } from 'shiba-ui';

const toastSuccess = toast.success('Example message');
const toastError = toast.error('Example message');
const toastNeutral = toast.neutral('Example message');
const toastWarning = toast.warning('Example message');
\`\`\`

## Accepted Properties (\`IToast\`)

The properties that can be passed to the toast functions are:
  
- **message**:  Message to be displayed.
- **timeout**: Display time of the toast (in milliseconds).
- **background**: Background color of the toast.
- **messageColor**: Message color of the toast.
- **borderColor**: border color of the toast.
- **width:**: Width of the toast.
- **height**: Height of the toast.
- **borderRadius**: Border radius of the toast.

\`\`\`jsx
const customToast = toast.success('Mensagem de exemplo', {
  timeout: 5000,
  background: 'charcoal',
  messageColor: 'secondary',
  borderColor: 'secondary',
  borderRadius: 'sm',
  height: 50,
  width: 500,
})
\`\`\`
`,
    docs_on_change:
      'Accepts a function to be called when the component is changed.',
    docs_value: 'Accepts a `number` to set the value.',
    spacing_title: 'Spacing',
    spacing_description:
      'This section presents the spacings available in the design system. Spacings play a crucial role in the layout, ensuring consistent alignment and a clear visual hierarchy between elements.',
    settings_language: 'Language',
    settings_confirm: 'Confirm',
    settings_theme: 'Theme',
    docs_image:
      'Accepts a `string` to set the image source, which can be either a URL or a relative path to a local image.',
    docs_rating:
      'Accepts a `number` to represent the current rating value, typically between 0 and `maxStars`.',
    docs_maxStars:
      'Accepts a `number` to set the maximum number of stars displayed for the rating.',
    docs_readonly:
      'Accepts a `boolean` to specify if the rating is read-only, preventing user interaction.',
    docs_children:
      'Accepts a `ReactNode` to define the children elements to be rendered.',
    docs_position:
      "Accepts a string to specify the position: 'top', 'bottom', 'left', or 'right'.",
    docs_data:
      "Accepts an array of objects, each containing 'percent', 'color', and 'label' to define pie chart segments.",
  },
};
