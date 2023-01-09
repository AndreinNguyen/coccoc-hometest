import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Eye } from "./eye";

const Story: ComponentMeta<typeof Eye> = {
  component: Eye,
  title: "Eye",
};
export default Story;

const Template: ComponentStory<typeof Eye> = (args) => <Eye {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
