import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { View } from 'react-native';
import { BottomNavigation, Provider as RNPProvider } from 'react-native-paper';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { APP } from './src/config/app.type';
import { agribankTheme, neomerxTheme } from './src/theme';

import ConfirmOffer from './src/screens/ConfirmOffer';
import { Home } from './src/screens/Home';

import { APP_NAME } from "./config";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', focusedIcon: 'heart', unfocusedIcon: 'heart'},
    { key: 'negotiations', title: 'Negociações', focusedIcon: 'investiment' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    negotiations: ConfirmOffer,
  });

  const theme = useMemo(() => APP_NAME === APP.AGRI_BANK ? agribankTheme : neomerxTheme, []);
  
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

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

  if (!appIsReady) {
    return null;
  }

  return (
    <RNPProvider
      theme={theme}
      settings={{
        icon: (props) => <FontAwesome {...props} />,
      }}
    >
      <View
        style={{ 
          flex: 1,
        }}
        onLayout={onLayoutRootView}
      >
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          activeColor={theme.colors.primary}
        />
      </View>
    </RNPProvider>
  );
}