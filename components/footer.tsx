// src/components/footer.tsx
import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import colours from '@/utils/colours';
import { scale, verticalScale } from '@/utils/scale';

const home_icon_g = require('../assets/images/home-icon-grey.png');
const home_icon_v = require('../assets/images/home-icon-violet.png');
const user_g = require('../assets/images/user-grey.png');
const user_v = require('../assets/images/user-violet.png');

export default function FooterNav() {
  const router = useRouter();
  const pathname = usePathname();

  const isHome = pathname === '/home';
  const isAccount = pathname === '/account';

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('/home')} style={styles.tab}>
        <Image
          source={isHome ? home_icon_v : home_icon_g}
          style={styles.home_icon}
        />
        <Text style={[styles.label, isHome && styles.selectedLabel]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/account')} style={styles.tab}>
        <Image
          source={isAccount ? user_v : user_g}
          style={styles.user_icon}
        />
        <Text style={[styles.label, isAccount && styles.selectedLabel]}>Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: scale(-12),
    width: scale(420),
    height: verticalScale(70),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colours.white,
    paddingVertical: verticalScale(10),
    borderTopLeftRadius: scale(16),
    borderTopRightRadius: scale(16),
    elevation: scale(10),
    shadowColor: colours.black,
    shadowOpacity: 0.5,
    shadowRadius: scale(5),
    shadowOffset: { width: scale(0), height: verticalScale(-3) },
  },

  home_icon: {
    width: scale(25),
    height: verticalScale(25),
    marginBottom: verticalScale(4),
  },

  user_icon: {
    width: scale(22),
    height: verticalScale(24),
    marginBottom: verticalScale(4),
  },

  tab: {
    marginTop: verticalScale(-2.5),
    alignItems: 'center',
  },

  label: {
    fontSize: scale(14),
    color: '#707070',
  },

  selectedLabel: {
    color: colours.violet,
    fontWeight: '500',
  },
});
