module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      process.env.STORYBOOK_ENABLED
        ? ["babel-plugin-react-docgen-typescript", { exclude: "node_modules" }]
        : null,
      "react-native-reanimated/plugin",
    ].filter(Boolean),
  };
};
