import { APP_NAME } from "./config";

const configs = {
  NEO_MERX: {
    version: "1.0",
    name: "Neo Merx",
    icon: "assets/neomerx/icon.png",
    splash: {
      image: "assets/neomerx/icon.png",
    },
    android: {
      versionCode: 1,
      package: "br.com.neomerx",
    },
    ios: {
      bundleIdentifier: "br.com.neomerx",
    },
    extra: {
      buildType: "neomerx",
      eas: {
        projectId: "de22bcde-bdab-431b-8c95-27dbfe4b2e1d",
      },
    },
  },
  AGRI_BANK: {
    version: "1.0",
    name: "Agri Bank",
    icon: "assets/agribank/icon.png",
    splash: {
      image: "assets/agribank/icon.png",
      resizeMode: "contain",
      backgroundColor: "#cecece",
    },
    android: {
      versionCode: 1,
      package: "br.com.agribank",
    },
    ios: {
      bundleIdentifier: "br.com.agribank",
    },
    extra: {
      buildType: "agribank",
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
