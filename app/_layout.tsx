// app/_layout.tsx
import { Slot, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import GradientScreen from './(tabs)/splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Inter-Black": require('../assets/fonts/Inter-Black.ttf'),
    "Inter-Bold": require('../assets/fonts/Inter-Bold.ttf'),
    "Inter-ExtraBold": require('../assets/fonts/Inter-ExtraBold.ttf'),
    "Inter-ExtraLight": require('../assets/fonts/Inter-ExtraLight.ttf'),
    "Inter-Medium": require('../assets/fonts/Inter-Medium.ttf'),
    "Inter-Regular": require('../assets/fonts/Inter-Regular.ttf'),
    "Inter-SemiBold": require('../assets/fonts/Inter-SemiBold.ttf'),
    "Inter-Thin": require('../assets/fonts/Inter-Thin.ttf'),
  });
  const [ready, setReady] = useState(false);
  const [showApp, setShowApp]    = useState(false);


  useEffect(() => {
    if (loaded) {
      // 1) Hide native splash
      SplashScreen.hideAsync().then(() => {
        // 2) Show your React splash for a moment
        setTimeout(() => setShowApp(true), 500);
      });
    }
  }, [loaded]);
  
  if (!showApp) return <GradientScreen />;

  return(
    <Slot />
  ) 
}
