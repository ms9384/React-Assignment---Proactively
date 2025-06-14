import React, { useState } from 'react';
import { Image, SafeAreaView, View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colours from '@/utils/colours';

const zzz = require('../../assets/images/zzz.png')

export default function SleepEntry() {
  const router = useRouter();
  const [hours, setHours] = useState(0);

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem('sleepHours', hours.toString());
    } catch (e) {
    }
    router.push('/home');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.flex}
      >
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
    padding: 20, 
    justifyContent: 'center',
  },

  stepperContainer: {
    marginTop: -450,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 10,
    height: 81,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 32,
  },

  stepperButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4F65CB',
    backgroundColor: '#E9F0FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  stepperSign: { 
    marginTop: 5, 
    fontSize: 24, 
    color: '#4F65CB', 
    lineHeight: 24 
  },

  stepperValue: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },

  hoursText: {
    fontSize: 18,
    fontFamily: 'Inter-Medium',
    color: colours.black,
    marginLeft: 10,
  },

  zzz:{
    height: 20,
    width: 20
  },

  submitButton: {
    backgroundColor: '#4384E6',
    borderRadius: 8,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  submitText: { 
    color: colours.white, 
    fontSize: 16, 
    fontFamily: 'Inter-Regular' 
  },
});
