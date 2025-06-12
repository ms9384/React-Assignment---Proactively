// app/tabs/_layout.tsx
import { Slot } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

export default function TabsLayout() {
  // load your fonts (optional here—could also live in app/_layout.tsx)
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

  // don’t render until fonts are ready
  if (!loaded && !error) return null;

  // <-- This return was missing! Now we render our drawer navigator
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#204CBB',
      }}
    >
      {/* Slot is where the child routes (e.g. tabs/index.tsx, tabs/profile.tsx) will go */}
      <Slot />
    </Drawer>
  );
}
