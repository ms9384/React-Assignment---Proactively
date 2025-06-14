// src/screens/account.tsx
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colours from '@/utils/colours';
import FooterNav from '@/components/footer';
import { scale, verticalScale } from '@/utils/scale';
import { router } from 'expo-router';

const ethan_pfp = require('../../assets/images/ethan_pfp.png');
const user_g = require('../../assets/images/user-grey.png');
const red_arrow = require('../../assets/images/right-red-arrow.png');

export default function AccountScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Image source={ethan_pfp} style={styles.ethan_pfp} />
        <Text style={styles.nameText}>Ethan Harkinson</Text>
        <Text style={styles.mail}>ethanharkinson@outlook.com</Text>
        <Image source={user_g} style={styles.user} />
        <Text style={styles.account}>Account</Text>
        <View style={styles.bottomborder} />
        <Text style={styles.logout}>Log out</Text>
        <TouchableOpacity onPress={() => router.push('/login')}>
            <Image source={red_arrow} style={styles.red_arrow} />
        </TouchableOpacity>
        <Text style={styles.version}>Proactively version 0.0.1</Text>
        <View style={styles.footer}>
            <FooterNav />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white,
  },

  ethan_pfp: {
    marginLeft: scale(20),
    marginTop: verticalScale(40),
    height: verticalScale(60),
    width: scale(55),
    borderRadius: scale(30),
  },

  nameText: {
    marginTop: verticalScale(-60),
    marginLeft: scale(100),
    color: colours.black,
    fontSize: scale(20),
    fontFamily: 'Inter-Medium',
  },

  mail: {
    color: '#707070',
    marginLeft: scale(100),
    fontFamily: 'Inter-Regular',
  },

  user: {
    width: scale(17.5),
    height: verticalScale(19),
    marginTop: verticalScale(30),
    marginLeft: scale(20),
  },

  account: {
    marginLeft: scale(45),
    marginTop: verticalScale(-21),
  },

  bottomborder: {
    marginLeft: scale(20),
    width: scale(335),
    marginTop: verticalScale(10),
    borderBottomWidth: 1,
    borderColor: '#DCDCE0',
  },

  logout: {
    fontSize: scale(16),
    fontFamily: 'Inter-Regular',
    color: '#FD7468',
    marginLeft: scale(20),
    marginTop: verticalScale(20),
  },

  red_arrow: {
    width: scale(8),
    height: verticalScale(17),
    marginLeft: scale(340),
    marginTop: verticalScale(-20),
  },

  version: {
    marginTop: verticalScale(410),
    marginBottom: verticalScale(-15),
    textAlign: 'center',
    color: '#707070',
    fontSize: scale(12),
    fontFamily: 'Inter-Regular',
  },

  footer: {
    marginBottom: verticalScale(0),
    marginTop: verticalScale(50),
  },
});
