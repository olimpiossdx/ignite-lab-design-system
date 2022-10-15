import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Signin } from './Signin';

export default {
  title: 'Pages/SignIn',
  component: Signin,
  args: {},
  argTypes: {}
} as Meta<any>;

export const Default: StoryObj<any> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'jose@email.com');
    userEvent.type(canvas.getByPlaceholderText('*******'), '1234567');

    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      return expect(canvas.getByText('Login realizado!')).toBeInTheDocument();
    })
  }
};