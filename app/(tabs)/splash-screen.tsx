import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import colours from '@/utils/colours';

const icon2 = require("../../assets/images/icon-2.png")

export default function GradientScreen() {
  return (
    <LinearGradient
      colors={[colours.green, colours.darkBlue]}
      style={styles.container}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <SafeAreaView style={styles.inner}>
        <Image source = {icon2} style={styles.icon2_style}/>
        <Text style={styles.text}>Powered by Proactively</Text>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    marginTop: 675,
    color: colours.white,
    fontSize: 16,
    fontFamily: "Inter-Medium",
  },

  icon2_style: {
    position:"absolute",
    width: 94,
    height: 90,
  },
});
