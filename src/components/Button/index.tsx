import React from 'react';
import { 
  Button as RNPButton, 
  ButtonProps as RNPButtonProps,
} from 'react-native-paper';

import { useAppTheme } from '../../theme';

interface ButtonProps extends RNPButtonProps {
  type: 'primary' | 'secondary' | 'success' | 'danger';
}

export const Button = ({ type, ...restProps }: ButtonProps) => {
  const theme = useAppTheme();

  const toogleTypeColor = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    danger: theme.colors.error,
  }

  return (
    <RNPButton
      mode={restProps.mode ? restProps.mode : 'contained'}
      textColor={theme.colors.shape}
      buttonColor={toogleTypeColor[type]}
      {...restProps}
    />
  )
}
