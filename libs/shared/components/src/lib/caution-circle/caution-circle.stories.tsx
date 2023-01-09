import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { CautionCircle } from "./caution-circle";

const Story: ComponentMeta<typeof CautionCircle> = {
  component: CautionCircle,
  title: "CautionCircle",
};
export default Story;

const Template: ComponentStory<typeof CautionCircle> = (args) => (
  <CautionCircle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
