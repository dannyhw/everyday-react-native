import React from "react";
import { ComponentMeta, StoryObj } from "@storybook/react-native";
import { PressableWithOverlay } from "./PressableWithOverlay";
import PressableOpacityStoriesMeta, {
  Basic,
} from "../PressableOpacity/PressableOpacity.stories";
import { Text, View } from "react-native";

const PressableWithOverlayMeta: ComponentMeta<typeof PressableWithOverlay> = {
  title: "PressableWithOverlay",
  component: PressableWithOverlay,
  argTypes: PressableOpacityStoriesMeta.argTypes,
  decorators: PressableOpacityStoriesMeta.decorators,
};

export default PressableWithOverlayMeta;

type PressableWithOverlayStory = StoryObj<typeof PressableWithOverlay>;

export const BasicOverlay: PressableWithOverlayStory = {
  ...Basic,
};
