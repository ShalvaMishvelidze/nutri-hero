import "@/app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import { H, InputSize } from "@/components/atoms/input_field/InputField.config";

import { InputField } from "@/components/atoms/input_field";

const meta = {
  title: "components/atoms/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    h: {
      control: "select",
      options: Object.keys(H),
      defaultValue: "_60",
    },
    input_size: {
      control: "select",
      options: Object.keys(InputSize),
      defaultValue: "full",
    },
  },
  args: {},
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    h: "_60",
    input_size: "full",
  },
};

// export const Secondary: Story = {
//   args: {
//   },
// };

// export const Large: Story = {
//   args: {
//     size: "large",
//   },
// };

// export const Small: Story = {
//   args: {
//     size: "small",
//   },
// };

// export const InputField: Story = {
//   args: {
//     primary: false,
//   },
// };
