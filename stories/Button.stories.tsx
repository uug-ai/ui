
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    Button: {
      id: '1',
      title: 'Button',
      state: 'Button_DARK',
    },
  },
};

export const Light = {
  args: {
    Button: {
      ...Default.args.Button,
      state: 'Button_LIGHT',
    },
  },
};

// export const Archived = {
//   args: {
//     Button: {
//       ...Default.args.Button,
//       state: 'Button_ARCHIVED',
//     },
//   },
// };
