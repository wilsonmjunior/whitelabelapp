import React from 'react'
import { View } from 'react-native'
import { useTheme } from 'react-native-paper'

import { Button } from '../../components/Button'

export function Home() {
  const theme = useTheme();

  return (
    <View 
      style={{ 
        flex: 1, 
        backgroundColor: theme.colors.primary, 
        justifyContent: 'center', 
        alignItems: 'center',
      }}
    >
      <Button />
    </View>
  )
}
