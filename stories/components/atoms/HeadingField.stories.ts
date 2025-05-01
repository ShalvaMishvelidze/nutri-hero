import "@/app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import {
  Color,
  HeadingSize,
  MB,
  MT,
  TextAlign,
  TextTransform,
  TextWrap,
  Weight,
} from "@/components/atoms/heading_field/HeadingField.config";

import { HeadingField } from "@/components/atoms/heading_field";

const meta = {
  title: "components/atoms/HeadingField",
  component: HeadingField,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    heading_size: {
      control: "select",
      options: Object.keys(HeadingSize),
      defaultValue: "normal",
    },
    mt: {
      control: "select",
      options: Object.keys(MT),
      defaultValue: "regular",
    },
    mb: {
      control: "select",
      options: Object.keys(MB),
      defaultValue: "regular",
    },
    color: {
      control: "select",
      options: Object.keys(Color),
      defaultValue: "black",
    },
    textAlign: {
      control: "select",
      options: Object.keys(TextAlign),
      defaultValue: "left",
    },
    textTransform: {
      control: "select",
      options: Object.keys(TextTransform),
      defaultValue: "normal",
    },
    textWrap: {
      control: "select",
      options: Object.keys(TextWrap),
      defaultValue: "none",
    },
    weight: {
      control: "select",
      options: Object.keys(Weight),
      defaultValue: "normal",
    },
  },
  args: {},
} satisfies Meta<typeof HeadingField>;

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
    textAlign: "left",
    textWrap: "none",
    mb: "none",
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

// export const HeadingField: Story = {
//   args: {
//     primary: false,
//   },
// };
