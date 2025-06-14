import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colours from '@/utils/colours';

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
    } catch (e) {
    }
    router.push('/home');
  };

  return (
  <SafeAreaView style={styles.safe}>
    <KeyboardAvoidingView
      style={styles.flex}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
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
    backgroundColor: colours.white 
  },

  flex: { 
    flex: 1 
  },

  content: { 
    paddingHorizontal: 20, 
    paddingTop: 30 
  },

  fieldLabel: { 
    fontSize: 16, 
    color: colours.black, 
    marginBottom: 8 
  },

  inputBox: {
    width: 175,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 10,
    height: 75,
    marginBottom: 24,
    paddingHorizontal: 16,
  },

  input: { 
    flex: 1, 
    fontSize: 24, 
    fontFamily: 'Inter-SemiBold', 
    color: colours.black 
  },

  unit: { 
    fontSize: 16, 
    color: '#999999',
    marginRight: 60,
    marginTop: 3,
  },

  button: {
    backgroundColor: '#4384E6',
    borderRadius: 8,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },

  buttonText: { 
    color: colours.white, 
    fontSize: 16, 
    fontFamily: 'Inter-Regular' 
  },
});
