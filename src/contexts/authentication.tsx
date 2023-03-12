import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import * as LocalAuthentication from 'expo-local-authentication';
import { Alert } from "react-native";

interface AuthenticationContextData {
  isAuthenticated: boolean;
  verifyAvailableAuthentication: () => void;
  handleAuthentication: () => void;
}

interface AuthenticationProviderProps {
  children: ReactNode;
}

const AuthenticationContext = createContext({} as AuthenticationContextData);

export function AuthenticationProvider({ children }: AuthenticationProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const verifyAvailableAuthentication = useCallback(async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    console.log('compatible => ', compatible);

    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    console.log('types => ', types.map(type => LocalAuthentication.AuthenticationType[type]));
  }, []);

  const handleAuthentication = useCallback(async () => {
    const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isBiometricEnrolled) { 
      return Alert.alert('Login', 'Nenhuma biometria encontrada. Por favor cadastre no dispositivo.');
    }

    const auth = await LocalAuthentication.authenticateAsync({
       promptMessage: 'Login com Biometria',
      fallbackLabel: 'Biometria não reconhecida',
    })

    setIsAuthenticated(auth.success)
  }, []);

  return (
    <AuthenticationContext.Provider value={{ 
      isAuthenticated,
      verifyAvailableAuthentication, 
      handleAuthentication,
     }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}

export const useAuthentication = () => useContext(AuthenticationContext);
