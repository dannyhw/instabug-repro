import { ExpoConfig, ConfigContext } from "expo/config";

module.exports = (_context: ConfigContext): ExpoConfig => ({
  name: "instabug-repro",
  slug: "instabug-repro",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.danny.instabugrepro",
  },
  android: {
    package: "com.danny.instabugrepro",
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  plugins: ["@logrocket/react-native"],
});
