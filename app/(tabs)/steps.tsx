import React, { useState } from 'react';
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colours from '@/utils/colours';

export default function StepsEntry() {
  const router = useRouter();
  const [steps, setSteps] = useState('0');

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem('stepsCount', steps);
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
        backgroundColor: colours.white 
    },
    
    flex: { 
        flex: 1 
    },

    content: {
        paddingHorizontal: 20,
        paddingTop: 24,
    },

    fieldLabel: {
        fontSize: 16,
        color: colours.black,
        marginBottom: 8,
        fontFamily: 'Inter-Medium',
    },

    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 8,
        backgroundColor: colours.white,
        height: 60,
        paddingHorizontal: 16,
        marginBottom: 24,
    },

    input: {
        flex: 1,
        fontSize: 24,
        fontFamily: 'Inter-SemiBold',
        color: colours.black,
    },

    unit: {
        fontSize: 16,
        color: '#999999',
        marginRight: 180,
    },

    button: {
        backgroundColor: colours.blue,
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
        fontFamily: 'Inter-Medium',   
    },
});
