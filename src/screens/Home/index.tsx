import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Button } from '../../components/Button';

import { Header } from '../../components/Header';
import { useAuthentication } from '../../contexts/authentication';

export function Home() {
  const { verifyAvailableAuthentication, handleAuthentication } = useAuthentication();

  useEffect(() => {
    verifyAvailableAuthentication()
  }, [])

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

      <View 
        style={{ 
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View 
          style={{
            width: '100%',
          }}
        >
          <Button type="primary" onPress={handleAuthentication}>Entrar</Button>
        </View>
      </View>
    </View>
  )
}
