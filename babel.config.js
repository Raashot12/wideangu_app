module.exports = function ( api ) {
  api.cache( true );
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel", "@babel/plugin-proposal-export-namespace-from", 'react-native-reanimated/plugin', ["module-resolver", {
      "root": ["./app"],
      "alias": {
        "@components": "./src/components",
        "@config": "./app/config",
        "@helpers": "./app/helpers",
        "@navigators": "./app/navigators",
        "@reducers": "./app/reducers",
        "@screens": "./app/screens",
      }
    }]],
  };
};
