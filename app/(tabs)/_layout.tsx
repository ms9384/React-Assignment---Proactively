import { Slot, Stack } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

export default function TabsLayout() {
  const [loaded, error] = useFonts({
    "Inter-Black": require('../../assets/fonts/Inter-Black.ttf'),
    "Inter-Bold": require('../../assets/fonts/Inter-Bold.ttf'),
    "Inter-ExtraBold": require('../../assets/fonts/Inter-ExtraBold.ttf'),
    "Inter-ExtraLight": require('../../assets/fonts/Inter-ExtraLight.ttf'),
    "Inter-Medium": require('../../assets/fonts/Inter-Medium.ttf'),
    "Inter-Regular": require('../../assets/fonts/Inter-Regular.ttf'),
    "Inter-SemiBold": require('../../assets/fonts/Inter-SemiBold.ttf'),
    "Inter-Thin": require('../../assets/fonts/Inter-Thin.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync().catch(console.warn);
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
      <Stack>
        <Drawer
        screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#204CBB',
        }}
      >
      <Slot />
      </Drawer>
      <Stack.Screen name="Appointment details" />
        <Stack.Screen 
          name="appointment" 
          options={{
            presentation: 'modal',
          }}
        />

        <Stack.Screen 
          name="Steps entry" 
          options={{
            presentation: 'modal',
          }}
        />

        <Stack.Screen 
          name="BMI entry" 
          options={{
            presentation: 'modal',
          }}
        />

        <Stack.Screen 
          name="Sleep entry" 
          options={{
            presentation: 'modal',
          }}
        />
      </Stack>
  );
}
