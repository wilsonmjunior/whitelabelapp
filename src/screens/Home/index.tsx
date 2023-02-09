import React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { Header } from '../../components/Header';

export function Home() {
  return (
    <View 
      style={{ 
        flex: 1,
        paddingHorizontal: 24,
      }}
    > 
      <Header title="Home" />

      <Searchbar 
        value=''
        style={{
          borderRadius: 20,
          height: 35,
          borderWidth: 1,
        }}
        inputStyle={{
          fontSize: 12,
        }}
        elevation={0}
      />
    </View>
  )
}
