import type { Meta, StoryObj } from "@storybook/react";
import { PressableRippleGesture } from "./PressableRippleGesture";
import PressableOpacityStoriesMeta, {
  Basic,
  LinkExample,
} from "../PressableOpacity/PressableOpacity.stories";
import { OverlayCardExample } from "../PressableOverlay/PressableWithOverlay.stories";

const meta: Meta<typeof PressableRippleGesture> = {
  title: "Buttons/PressableRippleGesture",
  component: PressableRippleGesture,
  argTypes: PressableOpacityStoriesMeta.argTypes,
  decorators: PressableOpacityStoriesMeta.decorators,
};

export default meta;

type PressableRippleStory = StoryObj<typeof PressableRippleGesture>;

export const Ripple: PressableRippleStory = {
  ...Basic,
};

export const CardRipple: PressableRippleStory = {
  ...OverlayCardExample,
};

export const LinkRipple: PressableRippleStory = {
  ...LinkExample,
};
