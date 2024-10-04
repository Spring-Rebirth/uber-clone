import { TextProps, ViewProps, ImageProps } from "react-native";

declare module "react-native" {
  interface TextProps {
    className?: string;
  }

  interface ViewProps {
    className?: string;
  }

  interface ImageProps {
    className?: string;
  }
}
