import { APP_NAME } from "./config";

const configs = {
  merx: {
    version: "1.0",
    name: "Merx",
    icon: "assets/merx/icon.png",
    splash: {
      image: "assets/merx/icon.png",
    },
    android: {
      versionCode: 1,
      package: "br.com.merx",
    },
    ios: {
      bundleIdentifier: "br.com.merx",
    },
    extra: {
      buildType: "Merx",
      eas: {
        projectId: "de22bcde-bdab-431b-8c95-27dbfe4b2e1d",
      },
    },
  },
  fazendao: {
    version: "1.0",
    name: "Fazendão",
    icon: "assets/fazendao/icon.png",
    splash: {
      image: "assets/fazendao/icon.png",
      resizeMode: "contain",
      backgroundColor: "#cecece",
    },
    android: {
      versionCode: 1,
      package: "br.com.fazendao",
    },
    ios: {
      bundleIdentifier: "br.com.fazendao",
    },
    extra: {
      buildType: "fazendao",
      eas: {
        projectId: "6a9f5129-65d6-44b9-906a-07ca95ace68f",
      },
    },
  },
};

export default ({ config }) => {
  return {
    ...configs[APP_NAME],
  };
};
