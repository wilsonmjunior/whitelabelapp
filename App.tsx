import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { View } from 'react-native';
import { Provider as RNPProvider } from 'react-native-paper';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { APP_NAME } from "./config";
import { APP } from './src/config/app.type';
import { AuthenticationProvider } from './src/contexts/authentication';
import { Home } from './src/screens/Home';
import { agribankTheme, neomerxTheme } from './src/theme';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const theme = useMemo(() => APP_NAME === APP.AGRI_BANK ? agribankTheme : neomerxTheme, []);
  
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(FontAwesome.font);
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <RNPProvider
      theme={theme}
      settings={{
        icon: ({ name, ...otherProps }) => <FontAwesome name={name as any} {...otherProps} />
      }}
    >
      <AuthenticationProvider>
        <View
          style={{ 
            flex: 1,
          }}
          onLayout={onLayoutRootView}
        >
          <Home />
        </View>
      </AuthenticationProvider>
    </RNPProvider>
  );
}