// src/screens/steps.tsx
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

export default function StepsEntry() {
  const router = useRouter();
  const [steps, setSteps] = useState('0');

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem('stepsCount', steps);
    } catch (e) {}
    router.push('/home');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView style={styles.flex}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <Text style={styles.fieldLabel}>Steps count:</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={steps}
              onChangeText={setSteps}
              placeholder="-"
            />
            <Text style={styles.unit}>steps</Text>
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
    paddingTop: verticalScale(24),
  },

  fieldLabel: {
    fontSize: scale(16),
    color: colours.black,
    marginBottom: verticalScale(8),
    fontFamily: 'Inter-Medium',
  },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: scale(8),
    backgroundColor: colours.white,
    height: verticalScale(60),
    paddingHorizontal: scale(16),
    marginBottom: verticalScale(24),
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
    marginRight: scale(170),
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
