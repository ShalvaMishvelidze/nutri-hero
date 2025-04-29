import "@/app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Case,
  Color,
  Mb,
  Title_size,
  Weight,
} from "@/components/atoms/registration_field/TitleField.config";

import { TitleField } from "@/components/atoms/registration_field";

const meta = {
  title: "components/atoms/TitleField",
  component: TitleField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title_size: {
      control: "select",
      options: Object.keys(Title_size),
      defaultValue: "big",
    },
    textCase: {
      control: "select",
      options: Object.keys(Case),
      defaultValue: "normal",
    },
    mb: {
      control: "select",
      options: Object.keys(Mb),
      defaultValue: "big",
    },
    color: {
      control: "select",
      options: Object.keys(Color),
      defaultValue: "black",
    },
    weight: {
      control: "select",
      options: Object.keys(Weight),
      defaultValue: "extra",
    },
  },
  args: {},
} satisfies Meta<typeof TitleField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Heading",
    title_size: "big",
    color: "black",
    weight: "extra",
    mb: "none",
    textCase: "normal",
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

// export const TitleField: Story = {
//   args: {
//     primary: false,
//   },
// };
