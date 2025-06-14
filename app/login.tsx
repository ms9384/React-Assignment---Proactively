// src/screens/login.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import colours from '@/utils/colours';
import { scale, verticalScale } from '@/utils/scale';

const icon3 = require('../assets/images/icon-3.png');

export default function LoginScreen() {
  const router = useRouter();
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);

  const validateMail = (m: string) =>
    /^[^\s@]+@[^\s@]+\.com$/i.test(m);

  const validatePassword = (p: string) =>
    /^(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/.test(p);

  const handleLogin = () => {
    if (!validateMail(mail)) {
      Alert.alert(
        'Invalid Email',
        'Email must be in the form user@domain.com'
      );
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert(
        'Invalid Password',
        'Password must be ≥6 characters, with at least one number and one special character.'
      );
      return;
    }
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
            size={scale(20)}
            color="#7F8A99"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: verticalScale(32),
    backgroundColor: colours.white,
  },

  loginText: {
    color: '#222222',
    fontSize: scale(20),
    fontFamily: 'Inter-SemiBold',
    marginLeft: scale(20),
  },

  proactivelyText: {
    color: colours.blue,
    fontSize: scale(33),
    fontFamily: 'Inter-SemiBold',
    marginLeft: scale(20),
    marginTop: verticalScale(-6),
  },

  icon3_style: {
    alignSelf: 'flex-end',
    marginRight: scale(153),
    marginTop: verticalScale(-35),
    width: scale(23),
    height: verticalScale(22),
  },

  subheadingText: {
    color: '#707070',
    marginLeft: scale(20),
    marginTop: verticalScale(30),
    fontSize: scale(13),
    fontFamily: 'Inter-Regular',
  },

  input: {
    height: verticalScale(51),
    marginHorizontal: scale(20),
    borderColor: '#E7E7E7',
    borderWidth: 1,
    borderRadius: scale(5),
    paddingLeft: scale(15),
    marginTop: verticalScale(20),
    fontFamily: 'Inter-Regular',
    fontSize: scale(16),
    color: colours.black,
  },

  eyeButton: {
    position: 'absolute',
    right: scale(30),
    top: verticalScale(35),
  },

  loginButton: {
    backgroundColor: '#4384E6',
    borderRadius: scale(10),
    height: verticalScale(54),
    marginHorizontal: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(40),
  },

  loginButtonText: {
    color: colours.white,
    fontSize: scale(16),
    fontFamily: 'Inter-Regular',
  },
});
