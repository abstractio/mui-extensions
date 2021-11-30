import { Story, Meta } from '@storybook/react';
import { RichText } from './RichText';
import type { RichTextProps } from './RichText';
export default {
  component: RichText,
  title: 'QuillEditor',
} as Meta;

const Template: Story<RichTextProps> = (args) => <RichText {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
