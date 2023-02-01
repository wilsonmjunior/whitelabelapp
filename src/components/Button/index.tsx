import * as React from 'react'
import { Button as RNPButton } from 'react-native-paper'

import { useAppTheme } from '../../styles/theme';

export const Button = () => {
  const theme = useAppTheme();

  return (
    <RNPButton
      icon="camera"
      mode="contained"
      textColor={theme.colors.shape}
      buttonColor={theme.colors.secondary}
      onPress={() => console.log('Pressed')}
    >
      Press me
    </RNPButton>
  )
}
