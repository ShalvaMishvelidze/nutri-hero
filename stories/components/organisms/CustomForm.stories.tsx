import { CustomForm } from "@/components/organisms/custom_form";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CustomForm> = {
  title: "Components/organisms/CustomForm",
  component: CustomForm,
  argTypes: {
    fields: {
      control: "multi-select",
    },
    generalInputFieldProps: {
      control: "object",
    },
    buttons: {
      control: "object",
    },
  },
};
export default meta;

type Story = StoryObj<typeof CustomForm>;

export const Default: Story = {
  tags: ["autodocs"],
  args: {
    fields: [
      [
        {
          name: "firstName",
          label: "First Name",
          type: "text",
          rules: [{ required: true, message: "Required" }],
        },
        {
          name: "lastName",
          label: "Last Name",
          type: "text",
        },
      ],
      [
        {
          name: "email",
          label: "Email",
          type: "email",
          rules: [{ required: true, message: "Required" }],
        },
      ],
      [
        {
          name: "password",
          label: "Password",
          type: "password",
        },
        {
          name: "age",
          label: "Age",
          inputProps: {
            input_size: "_35",
          },
          inputWidth: "min",
        },
      ],
    ],
    buttons: [
      {
        children: "Submit",
        onClick: () => {
          console.log("Submit clicked");
        },
      },
      {
        children: "Cancel",
        onClick: () => {
          console.log("Cancel clicked");
        },
      },
    ],
  },
};
