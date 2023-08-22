import React from "react";
import { ComponentMeta, StoryObj } from "@storybook/react-native";
import { PressableWithOverlay } from "./PressableWithOverlay";
import PressableOpacityStoriesMeta, {
  Basic,
  CardExample,
  LinkExample,
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

export const OverlayBasic: PressableWithOverlayStory = {
  ...Basic,
};

export const OverlayCardExample: PressableWithOverlayStory = {
  ...CardExample,
};

// not so great here
export const OverlayLinkExample: PressableWithOverlayStory = {
  ...LinkExample,
  args: {
    ...LinkExample.args,
    style: {
      padding: 2,
      borderRadius: 4,
    },
  },
};
