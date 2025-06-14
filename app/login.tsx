import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import colours from '@/utils/colours';

const icon3 = require('../assets/images/icon-3.png');

export default function LoginScreen() {
  const router = useRouter();
  const [mail, setMail]       = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);

  const validateMail = (m: string) => {
    
    return /^[^\s@]+@[^\s@]+\.com$/i.test(m);
  };

  const validatePassword = (p: string) => {
    
    return /^(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/.test(p);
  };

  const handleLogin = () => {
    if (!validateMail(mail)) {
      Alert.alert('Invalid Email', 'Email must be in the form user@domain.com');
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert(
        'Invalid Password',
        'Password must be ≥6 characters, with at least one number and one special character.'
      );
      return;
    }
    // both valid:
    router.replace('/home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login to</Text>
      <Text style={styles.proactivelyText}>proactively</Text>
      <Image source={icon3} style={styles.icon3_style} />
      <Text style={styles.subheadingText}>
        Login as a patient using your registered email.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email address"
        placeholderTextColor="#7F8A99"
        keyboardType="email-address"
        autoCapitalize="none"
        value={mail}
        onChangeText={setMail}
      />

      <View>
        <TextInput
          secureTextEntry={hidePass}
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#7F8A99"
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          onPress={() => setHidePass(v => !v)}
          style={styles.eyeButton}
        >

        <FontAwesome
            name={hidePass ? 'eye-slash' : 'eye'}
            size={20}
            color="#7F8A99"
        />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: '#FFFFFF',
  },

  loginText: {
    color: '#222222',
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    marginLeft: 20,
  },

  proactivelyText: {
    color: colours.blue,
    fontSize: 33,
    fontFamily: 'Inter-SemiBold',
    marginLeft: 20,
    marginTop: -6,
  },

  icon3_style: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: -30,
    width: 23,
    height: 22,
  },

  subheadingText: {
    color: '#707070',
    marginLeft: 20,
    marginTop: 30,
    fontSize: 13,
    fontFamily: 'Inter-Regular',
  },

  input: {
    height: 51,
    marginHorizontal: 20,
    borderColor: '#E7E7E7',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    marginTop: 20,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: colours.black,
  },

  eyeButton: {
    position: 'absolute',
    right: 30,
    top: 35,
  },

  loginButton: {
    backgroundColor: '#4384E6',
    borderRadius: 10,
    height: 54,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
});
