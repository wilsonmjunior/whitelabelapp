import React from 'react';
import { View } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper'

import { Button } from '../../components/Button';
import { useAppTheme } from '../../theme';

export default function ConfirmOffer() {
  const theme = useAppTheme();

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: theme.colors.background,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-evenly',
          marginBottom: getBottomSpace(),
        }}
      >
        <Button
          type="primary"
          onPress={() => console.log('Pressed')}
          style={{ width: 200 }}
          >
          Aceitar
        </Button>
        <Button
          mode="outlined"
          type="danger"
          onPress={() => console.log('Pressed')}
        >
          Cancelar
        </Button>
      </View>
    </View>
  )
}