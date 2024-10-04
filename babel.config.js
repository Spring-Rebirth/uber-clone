// cSpell:words nativewind
import { plugins } from "./tailwind.config";

export default function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel"],
  };
};
