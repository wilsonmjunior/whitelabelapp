import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { View } from 'react-native';
import { Provider as RNPProvider } from 'react-native-paper';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { Home } from './src/screens/Home';
import { themeFazendao, themeMerx } from './src/styles/theme';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
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
      theme={themeMerx}
    >
      <View
        style={{ 
          flex: 1,
        }}
        onLayout={onLayoutRootView}
      >
        <Home />
      </View>
    </RNPProvider>
  );
}