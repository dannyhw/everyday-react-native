import {
  GestureResponderEvent,
  Platform,
  Pressable as RNPressable,
  StyleSheet,
} from "react-native";
import Animated, {
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { ButtonProps } from "../button-types";

const Pressable = Animated.createAnimatedComponent(RNPressable);

export const PressableWithOverlay = ({
  children,
  onPress,
  onPressIn,
  onPressOut,
  style,
  ...props
}: ButtonProps) => {
  const opacity = useSharedValue(0);

  const pressIn = (e: GestureResponderEvent) => {
    onPressIn?.(e);

    opacity.value = withSpring(0.25);
  };

  const pressOut = (e: GestureResponderEvent) => {
    onPressOut?.(e);

    if (opacity.value !== 0.25) {
      // for some reason with delay doesn't work on web
      if (Platform.OS === "web") {
        setTimeout(() => {
          opacity.value = withSpring(0);
        }, 250);
      } else {
        opacity.value = withDelay(250, withSpring(0));
      }
    } else {
      opacity.value = withSpring(0);
    }
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
      style={[{ overflow: "hidden" }, style]}
      {...props}
    >
      {children}

      <Animated.View
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.50)",
          ...StyleSheet.absoluteFillObject,
          opacity: opacity,
        }}
        pointerEvents={"none"}
      />
    </Pressable>
  );
};
