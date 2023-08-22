import {Meta} from '@storybook/react';

import {PressableOpacity} from './PressableOpacity';
import { StoryObj } from '@storybook/react-native';
import { Text, View } from 'react-native';

export default {
  title: 'PressableOpacity',
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
} satisfies Meta<typeof PressableOpacity>;



type PressableOpacity = StoryObj<typeof PressableOpacity>;

export const Basic: PressableOpacity= {
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
