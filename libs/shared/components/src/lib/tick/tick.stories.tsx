import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tick } from "./tick";

const Story: ComponentMeta<typeof Tick> = {
  component: Tick,
  title: "Tick",
};
export default Story;

const Template: ComponentStory<typeof Tick> = (args) => <Tick {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
