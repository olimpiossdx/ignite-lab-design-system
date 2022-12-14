import { Meta, StoryObj } from '@storybook/react';
import { TextInput, ITextInputInputProps } from './TextInput';
import { Envelope } from 'phosphor-react';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input
        placeholder='Type your e-mail address'
      />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<ITextInputInputProps>;

export const Default: StoryObj<ITextInputInputProps> = {};

export const WithoutIcon: StoryObj<ITextInputInputProps> = {
  args: {
    children: <TextInput.Input placeholder='Type your e-mail address' />
  }
};