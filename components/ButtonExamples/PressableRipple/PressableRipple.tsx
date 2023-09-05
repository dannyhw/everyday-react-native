import {
  GestureResponderEvent,
  Pressable as RNPressable,
  View,
} from "react-native";
import Animated, {
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ButtonProps } from "../button-types";

const Pressable = Animated.createAnimatedComponent(RNPressable);

export const PressableRipple = ({
  children,
  onPress,
  style,
  onPressIn,
  onPressOut,
}: ButtonProps) => {
  const centerX = useSharedValue(0);
  const centerY = useSharedValue(0);

  const aRef = useAnimatedRef<View>();

  const scale = useSharedValue(0);
  const width = useSharedValue(0);
  const height = useSharedValue(0);

  const rippleOpacity = useSharedValue(1);

  const rStyle = useAnimatedStyle(() => {
    const circleRadius = Math.sqrt(width.value ** 2 + height.value ** 2);

    const translateX = centerX.value - circleRadius;
    const translateY = centerY.value - circleRadius;

    return {
      width: circleRadius * 2,
      height: circleRadius * 2,
      borderRadius: circleRadius,
      opacity: rippleOpacity.value,
      backgroundColor: "rgba(0,0,0,0.1)",
      position: "absolute",
      top: 0,
      left: 0,
      transform: [
        { translateX },
        { translateY },
        {
          scale: scale.value,
        },
      ],
    };
  });

  const pressIn = (e: GestureResponderEvent) => {
    onPressIn?.(e);

    centerX.value = e.nativeEvent.locationX;
    centerY.value = e.nativeEvent.locationY;

    rippleOpacity.value = 1;

    scale.value = 0;
    scale.value = withTiming(1, { duration: 1000 });
  };

  const pressOut = (e: GestureResponderEvent) => {
    onPressOut?.(e);

    rippleOpacity.value = withTiming(0);
  };

  return (
    <Pressable
      ref={aRef}
      style={[{ overflow: "hidden" }, style]}
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
      onLayout={(e) => {
        width.value = e.nativeEvent.layout.width;
        height.value = e.nativeEvent.layout.height;
      }}
    >
      <View pointerEvents="none">{children}</View>

      <Animated.View pointerEvents="none" style={rStyle} />
    </Pressable>
  );
};
