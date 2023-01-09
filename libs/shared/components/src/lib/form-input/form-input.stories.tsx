import { TextField } from "@mui/material";
import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { useForm } from "react-hook-form";
import { FormInput } from "./form-input";

const Story: ComponentMeta<typeof TextField> = {
  component: FormInput,
  title: "FormInput",
};
export default Story;

const Template: ComponentStory<typeof TextField> = (args) => {
  const { control } = useForm({
    defaultValues: {
      email: "",
    },
  });

  return (
    <FormInput
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      defaultValue={"" as any}
      control={control}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      name={"email" as any}
      onChange={() => {
        console.log("1");
      }}
      {...args}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "outlined",
};
