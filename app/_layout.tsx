/* import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
/*     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider> */
/*     <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Personjes',
            title: 'Personajes',
          }}
        />
        <Drawer.Screen
          name="user/[id]" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'User',
            title: 'overview',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
  
}
  */

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        
        <Drawer.Screen
          name="index" 
          options={{
            drawerLabel: 'Inicio',
            title: 'Inicio',
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons size={28} name="home" color={color} />
            ),
          }}
        />


        <Drawer.Screen
          name="(characters)" 
          options={{
            drawerLabel: 'Personajes',
            title: 'Personajes',
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons size={28} name="account-group" color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="(episodes)" 
          options={{
            drawerLabel: 'Episodios',
            title: 'Episodios',
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons size={28} name="filmstrip" color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="(locations)" 
          options={{
            drawerLabel: 'Ubicaciones',
            title: 'Ubicaciones',
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons size={28} name="map-marker" color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="info" 
          options={{
            drawerLabel: 'Acerda De',
            title: 'Acerda De',
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons size={28} name="information-outline" color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="+not-found" 
          options={{
            drawerItemStyle: { display: 'none' },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
