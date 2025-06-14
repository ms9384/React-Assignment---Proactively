// src/screens/sleep.tsx
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colours from '@/utils/colours';
import { scale, verticalScale } from '@/utils/scale';

const zzz = require('../../assets/images/zzz.png');

export default function SleepEntry() {
  const router = useRouter();
  const [hours, setHours] = useState(0);

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem('sleepHours', hours.toString());
    } catch (e) {}
    router.push('/home');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView style={styles.flex}>
        <View style={styles.stepperContainer}>
          <TouchableOpacity
            style={styles.stepperButton}
            onPress={() => setHours(h => Math.max(0, h - 1))}
          >
            <Text style={styles.stepperSign}>–</Text>
          </TouchableOpacity>

          <View style={styles.stepperValue}>
            <Image source={zzz} style={styles.zzz} />
            <Text style={styles.hoursText}>{hours} hours</Text>
          </View>

          <TouchableOpacity
            style={styles.stepperButton}
            onPress={() => setHours(h => Math.min(24, h + 1))}
          >
            <Text style={styles.stepperSign}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colours.white,
  },

  flex: {
    flex: 1,
    padding: scale(20),
    justifyContent: 'center',
  },

  stepperContainer: {
    marginTop: verticalScale(-475),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: scale(10),
    height: verticalScale(81),
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    marginBottom: verticalScale(40),
  },

  stepperButton: {
    width: scale(35),
    height: verticalScale(40),
    borderRadius: scale(30),
    borderWidth: 1,
    borderColor: '#4F65CB',
    backgroundColor: '#E9F0FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  stepperSign: {
    marginTop: verticalScale(8),
    fontSize: scale(24),
    color: '#4F65CB',
    lineHeight: verticalScale(24),
  },

  stepperValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  hoursText: {
    fontSize: scale(18),
    fontFamily: 'Inter-Medium',
    color: colours.black,
    marginLeft: scale(10),
  },

  zzz: {
    height: verticalScale(22),
    width: scale(20),
  },

  submitButton: {
    backgroundColor: '#4384E6',
    borderRadius: scale(8),
    height: verticalScale(54),
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitText: {
    color: colours.white,
    fontSize: scale(16),
    fontFamily: 'Inter-Regular',
  },
});
