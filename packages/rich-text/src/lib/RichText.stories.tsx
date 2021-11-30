import { Story, Meta } from '@storybook/react';
import { QuillEditor } from './RichText';

export default {
  component: QuillEditor,
  title: 'QuillEditor',
} as Meta;

const Template: Story = (args) => <QuillEditor {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
