import {
  Pressable as RNPressable,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  measure,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ButtonProps } from "../button-types";

const Pressable = Animated.createAnimatedComponent(RNPressable);

export const PressableRippleGesture = ({
  children,
  onPress,
  style,
  containerStyle,
}: ButtonProps & { containerStyle?: StyleProp<ViewStyle> }) => {
  const centerX = useSharedValue(0);
  const centerY = useSharedValue(0);
  const scale = useSharedValue(0);

  const aRef = useAnimatedRef<View>();
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

  const longPress = Gesture.LongPress()
    .minDuration(0)
    .onStart((e) => {
      centerX.value = e.x;
      centerY.value = e.y;
      rippleOpacity.value = 1;
      scale.value = 0;
      scale.value = withTiming(1, { duration: 1000 });
    })
    .onEnd(() => {
      rippleOpacity.value = withTiming(0);
    });

  return (
    <View style={containerStyle}>
      <GestureDetector gesture={longPress}>
        <Pressable
          style={[{ overflow: "hidden" }, style]}
          onPress={onPress}
          onLayout={(e) => {
            width.value = e.nativeEvent.layout.width;
            height.value = e.nativeEvent.layout.height;
          }}
        >
          <View ref={aRef}>{children}</View>
          <Animated.View style={rStyle} />
        </Pressable>
      </GestureDetector>
    </View>
  );
};
