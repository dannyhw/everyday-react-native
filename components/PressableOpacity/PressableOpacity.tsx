import {
  GestureResponderEvent,
  Platform,
  Pressable as RNPressable,
  Text,
} from "react-native";
import { ButtonProps } from "../button-types";
import Animated, {
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";

const Pressable = Animated.createAnimatedComponent(RNPressable);

export const PressableOpacity = ({
  children,
  onPress,
  style,
  onPressIn,
  onPressOut,
}: ButtonProps) => {
  const opacity = useSharedValue(1);

  const pressIn = (e: GestureResponderEvent) => {
    onPressIn?.(e);

    opacity.value = withSpring(0.7);
  };

  const pressOut = (e: GestureResponderEvent) => {
    onPressOut?.(e);

    if (opacity.value !== 0.7) {
      // for some reason with delay doesn't work on web
      if (Platform.OS === "web") {
        setTimeout(() => {
          opacity.value = withSpring(1);
        }, 300);
      } else {
        opacity.value = withDelay(300, withSpring(1));
      }
    } else {
      opacity.value = withSpring(1);
    }
  };
  return (
    <Pressable
      style={[{ opacity }, style]}
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
    >
      {children}
    </Pressable>
  );
};
