import LoginScreen from '@/screens/login/LoginScreen';
import SignUpScreen from '@/screens/signUp/signUp';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* A rota "index" (geralmente a rota inicial "/") usará o LoginScreen */}
        <Stack.Screen
          name="index" // Este é o NOME DA ROTA para navegação (ex: "/")
          component={LoginScreen} // APONTA PARA O SEU COMPONENTE
          options={{ headerShown: false }}
        />

        {/* A rota "signUp" usará o SignUpScreen */}
        <Stack.Screen
          name="signUp" // Este é o NOME DA ROTA para navegação (ex: "/signUp")
          component={SignUpScreen} // APONTA PARA O SEU COMPONENTE
          options={{ headerShown: false }}
        />

        {/* Se você tiver outras rotas ou grupos como (tabs), mantenha-os */}
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
