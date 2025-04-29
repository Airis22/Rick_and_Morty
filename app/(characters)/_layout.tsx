import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'green', // Color verde para el icono activo
        tabBarInactiveTintColor: 'gray', // Color gris para los iconos inactivos
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          backgroundColor: 'white', // Color negro para la barra de navegación
          borderTopWidth: 0, // Opcional: Elimina la línea superior en Android
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Buttons',
          tabBarIcon: ({ color }) => 
            <IconSymbol size={28} name="house.fill" color={color} />,
          
        }}
      />
      <Tabs.Screen
        name="Scroll"
        options={{
          title: 'Explore',
            tabBarIcon: () => <IconSymbol size={28} name="list.bullet" color="black" />
        }}
      />
    </Tabs>
  );
}
