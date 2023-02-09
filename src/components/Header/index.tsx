import React from 'react'
import { View } from 'react-native'
import { IconButton, Text } from 'react-native-paper'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { useAppTheme } from '../../theme'

interface Props {
  title: string;
}

export function Header({ title }: Props) {
  const theme = useAppTheme();

  return (
    <View 
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight(),
      }}
    >
      <Text variant='headlineMedium'>{title}</Text>
      <View 
        style={{
          flexDirection: 'row',
        }}
      >
        <IconButton 
          icon="user"
          iconColor={theme.colors.primary}
          onPress={() => console.warn('user')}
        />
        <IconButton 
          icon="bell"
          iconColor={theme.colors.primary}
          onPress={() => console.warn('bell')}
        />
      </View>
    </View>
  )
}
