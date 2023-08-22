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
  decorators: [
    (Story) => {
      return (
        <View
          // since the overlay has overflow hidden we can't apply shadow to it directly
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
            borderRadius: 8,
          }}
        >
          <Story />
        </View>
      );
    },
  ],
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
