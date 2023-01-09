import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "./theme";

const Story: ComponentMeta<typeof Theme> = {
  component: Theme,
  title: "Theme",
};
export default Story;

const Template: ComponentStory<typeof Theme> = (args) => <Theme {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
