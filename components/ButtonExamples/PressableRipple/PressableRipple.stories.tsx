import type { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react-native";
import PressableOpacityStoriesMeta, {
  Basic,
  LinkExample,
} from "../PressableOpacity/PressableOpacity.stories";
import { OverlayCardExample } from "../PressableOverlay/PressableWithOverlay.stories";
import { PressableRipple } from "./PressableRipple";

const meta: Meta<typeof PressableRipple> = {
  title: "Buttons/PressableRipple",
  component: PressableRipple,
  argTypes: PressableOpacityStoriesMeta.argTypes,
  decorators: PressableOpacityStoriesMeta.decorators,
};

export default meta;

type PressableRippleStory = StoryObj<typeof PressableRipple>;

export const Ripple: PressableRippleStory = {
  ...Basic,
};

export const CardRipple: PressableRippleStory = {
  ...OverlayCardExample,
};

export const LinkRipple: PressableRippleStory = {
  ...LinkExample,
};
