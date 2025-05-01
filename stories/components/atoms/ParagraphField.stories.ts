import "@/app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import {
  Color,
  Leading,
  MT,
  ParagraphSize,
  TextTransform,
  Weight,
} from "@/components/atoms/paragraph_field/ParagraphField.config";

import { ParagraphField } from "@/components/atoms/paragraph_field";

const meta = {
  title: "components/atoms/ParagraphField",
  component: ParagraphField,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    heading_size: {
      control: "select",
      options: Object.keys(ParagraphSize),
      defaultValue: "normal",
    },
    mt: {
      control: "select",
      options: Object.keys(MT),
      defaultValue: "regular",
    },
    leading: {
      control: "select",
      options: Object.keys(Leading),
      defaultValue: "none",
    },
    color: {
      control: "select",
      options: Object.keys(Color),
      defaultValue: "black",
    },
    textTransform: {
      control: "select",
      options: Object.keys(TextTransform),
      defaultValue: "normal",
    },
    weight: {
      control: "select",
      options: Object.keys(Weight),
      defaultValue: "normal",
    },
  },
  args: {},
} satisfies Meta<typeof ParagraphField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Heading",
    heading_size: "normal",
    color: "black",
    mt: "normal",
    weight: "medium",
    textTransform: "normal",
    leading: "none",
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

// export const ParagraphField: Story = {
//   args: {
//     primary: false,
//   },
// };
