import { Image } from 'expo-image';
import { SplashScreen } from 'expo-router';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import GradientScreen from '../../components/splash-screen';
import { useEffect } from 'react';


export default function HomeScreen() {

  useEffect(() => {
    StatusBar.setBarStyle("dark-content"); // Make status bar text black
    StatusBar.setTranslucent(true); // Remove status bar padding
    StatusBar.setBackgroundColor("transparent"); // Ensure it blends with the background
  }, []);

  return (
    <GradientScreen />
  );
}

const styles = StyleSheet.create({

});
