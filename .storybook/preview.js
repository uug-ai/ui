/** @type { import('@storybook/react').Preview } */
import '../styles/tailwind.css'

const preview = {
  parameters: {
     layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
