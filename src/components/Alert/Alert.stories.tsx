import { ComponentStory, ComponentMeta } from '@storybook/react';
import Alert from './index';
import '../../index.css';

export default {
    title: 'Components/Alert',
    component: Alert,
    argTypes: {
        type: {
            options: ['primary', 'default', 'danger', 'warnning'],
            control: { type: 'inline-radio' },
        },
    }
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const Primary = Template.bind({});
Primary.args = {
    content: 'Data uploaded to the server. Fire on!',
    type: 'primary',
    closed: true,
    icon: 'home',
    title: 'Thanks for submitting your application.'
};

export const Danger = Template.bind({});
Danger.args = {
    content: 'There was an error processing your request!',
    type: 'danger',
    icon: 'settings',
    closed: true,
};

export const Warn = Template.bind({});
Warn.args = {
    content: 'Seems your account is about expire, upgrade now!',
    type: 'warnning'
};