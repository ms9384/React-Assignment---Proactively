// src/screens/bmi.tsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colours from '@/utils/colours';
import { scale, verticalScale } from '@/utils/scale';

export default function BMIEntryScreen() {
  const router = useRouter();
  const [weight, setWeight] = useState('0');
  const [height, setHeight] = useState('0');

  const handleSubmit = async () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    const bmi = (w / (h * h)).toFixed(2);
    try {
      await AsyncStorage.setItem('bmiValue', bmi);
    } catch (e) {}
    router.push('/home');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <Text style={styles.fieldLabel}>Body weight:</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={weight}
              onChangeText={setWeight}
              placeholder="-"
            />
            <Text style={styles.unit}>kgs</Text>
          </View>

          <Text style={styles.fieldLabel}>Height:</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={height}
              onChangeText={setHeight}
              placeholder="-"
            />
            <Text style={styles.unit}>cms</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
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
  },

  content: {
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(30),
  },

  fieldLabel: {
    fontSize: scale(16),
    color: colours.black,
    marginBottom: verticalScale(8),
  },

  inputBox: {
    width: scale(175),
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: scale(1),
    borderColor: '#E3E3E3',
    borderRadius: scale(10),
    height: verticalScale(75),
    marginBottom: verticalScale(24),
    paddingHorizontal: scale(16),
  },

  input: {
    flex: 1,
    fontSize: scale(24),
    fontFamily: 'Inter-SemiBold',
    color: colours.black,
  },

  unit: {
    fontSize: scale(16),
    color: '#999999',
    marginRight: scale(50),
    marginTop: verticalScale(3),
  },

  button: {
    backgroundColor: '#4384E6',
    borderRadius: scale(8),
    height: verticalScale(54),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(16),
    marginBottom: verticalScale(16),
  },

  buttonText: {
    color: colours.white,
    fontSize: scale(16),
    fontFamily: 'Inter-Regular',
  },
});
