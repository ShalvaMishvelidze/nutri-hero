import "@/app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Bg,
  Btn_Size,
  H,
  M_left,
  M_top,
  P_bottom,
  Radius,
  Text,
  TextColor,
} from "@/components/atoms/btn_field/BtnField.config";

import { BtnField } from "@/components/atoms/btn_field";

const meta = {
  title: "components/atoms/BtnField",
  component: BtnField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    btn_size: {
      control: "select",
      options: Object.keys(Btn_Size),
      defaultValue: "full",
    },
    m_top: {
      control: "select",
      options: Object.keys(M_top),
      defaultValue: "regular",
    },
    bg: {
      control: "select",
      options: Object.keys(Bg),
      defaultValue: "filled",
    },
    m_left: {
      control: "select",
      options: Object.keys(M_left),
      defaultValue: "none",
    },
    p_bottom: {
      control: "select",
      options: Object.keys(P_bottom),
      defaultValue: "none",
    },
    text: {
      control: "select",
      options: Object.keys(Text),
      defaultValue: "normal",
    },
    h: {
      control: "select",
      options: Object.keys(H),
      defaultValue: "regular",
    },
    radius: {
      control: "select",
      options: Object.keys(Radius),
      defaultValue: "regular",
    },
    textColor: {
      control: "select",
      options: Object.keys(TextColor),
      defaultValue: "white",
    },
    styleClassName: {
      control: "text",
      defaultValue: "btn-field",
    },
    children: {
      control: "text",
      defaultValue: "Button Text",
    },
  },
  args: {},
} satisfies Meta<typeof BtnField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button Text",
    h: "regular",
    btn_size: "full",
    m_top: "regular",
    bg: "filled",
    m_left: "none",
    p_bottom: "none",
    text: "normal",
    radius: "regular",
    textColor: "white",
    styleClassName: "btn-field",
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

// export const BtnField: Story = {
//   args: {
//     primary: false,
//   },
// };
