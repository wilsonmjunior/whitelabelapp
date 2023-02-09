import { useTheme } from "react-native-paper";

import { agribankTheme } from './agribank.theme';
import { neomerxTheme } from "./neomerx.theme";

type AppThemeType = typeof neomerxTheme;

const useAppTheme = () => useTheme<AppThemeType>();

export { agribankTheme, neomerxTheme, AppThemeType, useAppTheme };
