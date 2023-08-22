import { PressableProps, StyleProp, ViewStyle } from "react-native";

export interface ButtonProps
  extends Omit<PressableProps, "children" | "style"> {
  children?: React.ReactNode | React.ReactNode[];
  style: StyleProp<ViewStyle>;
}
