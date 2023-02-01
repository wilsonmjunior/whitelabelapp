import { DefaultTheme, useTheme } from "react-native-paper"
 
export const themeFazendao = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00A651',
    secondary: '#A2DBC7',
    shape: '#FFFFFF',
    text: '#2E2E2E',
  }
}

export const themeMerx = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#05183a',
    secondary: '#3C3C6F',
    shape: '#FFFFFF',
    text: '#2E2E2E',
  }
}

export type AppTheme = typeof themeMerx;

export const useAppTheme = () => useTheme<AppTheme>();
