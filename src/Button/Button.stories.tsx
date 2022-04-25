import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";
import { Alert } from "react-native";

export default {
  title: "Example/Hero",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const WithButton = Template.bind({});

WithButton.storyName = "With button";
WithButton.args = {
  title: "Welcome to my App",
  buttonText: "Sign in",
  onButtonPress: () => Alert.alert("Signed in"),
};

export const WithoutButton = Template.bind({});

WithoutButton.storyName = "Without button";
WithoutButton.args = {
  title: "Welcome to my App",
  buttonText: "Sign in",
  onButtonPress: () => Alert.alert("Signed in"),
};
