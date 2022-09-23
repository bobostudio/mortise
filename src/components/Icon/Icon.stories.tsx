import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '../index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Icon',
    component: Icon,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        icon: {
            options: ['home', 'settings', 'search', 'loading'],
            control: { type: 'inline-radio' }
        },
        size: {
            control: { type: 'number' }
        },
        color: { control: 'color' }
    },
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Home = Template.bind({});
Home.args = {
    icon: 'home'
};

export const Settings = Template.bind({});
Settings.args = {
    icon: 'settings'
};


export const Search = Template.bind({});
Search.args = {
    icon: 'search'
};

export const Loading = Template.bind({});
Loading.args = {
    icon: 'loading',
};