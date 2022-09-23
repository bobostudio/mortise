import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { NativeButtonProps } from './button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
    type: {
      options: ['primary', 'default', 'danger', 'warnning'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' }
    },
    disabled: {
      options: [true, false],
      control: { type: 'inline-radio' }
    },
    icon: {
      options: ['home', 'settings', 'search', 'loading'],
      control: { type: 'select' }
    },
    children: {
      control: 'text',
    },
    onClick: { action: 'clicked' }
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args: NativeButtonProps) => <Button {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  size: 'md',
  children: 'Primary',
};

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  size: 'md',
  children: 'Default',
};


export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  size: 'md',
  children: 'Danger',
};

export const Warn = Template.bind({});
Warn.args = {
  type: 'warnning',
  size: 'md',
  children: 'Warn',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: 'Large',
};

export const Middle = Template.bind({});
Middle.args = {
  size: 'md',
  children: 'Middle',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  children: 'Small',
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'md',
  children: 'Disabled',
  disabled: true
};

export const IconBtn = Template.bind({});
IconBtn.args = {
  size: 'md',
  children: 'IconBtn',
  icon: 'home'
};
