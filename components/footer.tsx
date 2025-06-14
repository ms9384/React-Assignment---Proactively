import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import colours from '@/utils/colours';

const home_icon_g = require('../assets/images/home-icon-grey.png')
const home_icon_v = require('../assets/images/home-icon-violet.png')
const user_g = require('../assets/images/user-grey.png')
const user_v = require('../assets/images/user-violet.png')


export default function FooterNav() {
  const router = useRouter();
  const pathname = usePathname();

  const isHome = pathname === '/home';
  const isAccount = pathname === '/account';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push('/home')}
        style={styles.tab}
      >
         <Image
          source={isHome ? home_icon_v : home_icon_g}
          style={styles.home_icon}
        />
        <Text style={[styles.label, isHome && styles.selectedLabel]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/account')}
        style={styles.tab}
      >
        <Image
          source={isAccount ? user_v : user_g}
          style={styles.user_icon}
        />
        <Text style={[styles.label, isAccount && styles.selectedLabel]}>
          Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: -12,
    width: 420,
    height: 67,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: -3 },
  },

  home_icon: {
    width: 25,
    height: 25,
    marginBottom: 4,
  },

  user_icon: {
    width: 22,
    height: 22,
    marginBottom: 4,
  },

  tab: {
    marginTop: -2.5,
    alignItems: 'center',
  },

  label: {
    fontSize: 14,
    color: '#707070',
  },

  selectedLabel: {
    color: colours.violet,
    fontWeight: '500',
  },
});
