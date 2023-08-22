import { Meta } from "@storybook/react";

import { PressableOpacity } from "./PressableOpacity";
import { StoryObj } from "@storybook/react-native";
import { Text, View } from "react-native";

const PressableOpacityMeta: Meta<typeof PressableOpacity> = {
  title: "PressableOpacity",
  component: PressableOpacity,
  argTypes: {
    onPress: { action: "onPress" },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: "flex-start" }}>
        <Story />
      </View>
    ),
  ],
};

export default PressableOpacityMeta;

type PressableOpacity = StoryObj<typeof PressableOpacity>;

export const Basic: PressableOpacity = {
  args: {
    children: <Text style={{ color: "white" }}>Hello world!</Text>,
    style: {
      paddingVertical: 16,
      paddingHorizontal: 32,
      backgroundColor: "#d238a2",
      borderRadius: 8,
    },
  },
};

export const CardExample: PressableOpacity = {
  args: {
    children: <Text>Hello world!</Text>,
    style: {
      backgroundColor: "white",
      padding: 16,
      width: 300,
      height: 300,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      borderRadius: 8,
    },
  },
};

export const LinkExample: PressableOpacity = {
  args: {
    children: (
      <Text style={{ textDecorationLine: "underline" }}>Hello world!</Text>
    ),
    style: {},
  },
};
