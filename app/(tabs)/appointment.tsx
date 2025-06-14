// src/screens/appointment.tsx
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import colours from '@/utils/colours';
import { scale, verticalScale } from '@/utils/scale';

const doc = require('../../assets/images/doc.jpg');
const side_arrow = require('../../assets/images/side-arrow.png');
const MEETING_URL = 'www.meet.google.com/abc-defa-dwa';

export default function AppointmentScreen() {
  return (
    <SafeAreaView style={styles.app_container}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.upcoming}>
          <Text style={styles.upcomingText}>UPCOMING</Text>
        </View>

        <Image source={doc} style={styles.doc_pfp} />

        <Text style={styles.title}>Your upcoming appointment with</Text>
        <Text style={styles.subtitle}>Laurie Simons, MD, DipABLM</Text>

        <View style={styles.appLabel}>
          <Text style={styles.appLabelText}>Appointment</Text>
        </View>

        <Text style={styles.date_time}>
          Thu, December 21, 2024 | 10:00 AM PST
        </Text>

        <View style={styles.line} />

        <View style={styles.linkSection}>
          <Text style={styles.linkText}>Meeting link:</Text>
          <Text
            style={styles.linkUrl}
            onPress={() => Linking.openURL(MEETING_URL)}
          >
            {MEETING_URL}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL(MEETING_URL)}
        >
          <Text style={styles.buttonText}>Join meeting</Text>
          <Image source={side_arrow} style={styles.side_arrow} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app_container: {
    flex: 1,
    backgroundColor: colours.white,
  },

  container: {
    padding: scale(20),
    alignItems: 'center',
  },

  upcoming: {
    backgroundColor: '#3A9B78',
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(2),
    borderRadius: scale(4),
    alignSelf: 'flex-start',
  },

  upcomingText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-Regular',
    fontSize: scale(14),
  },

  doc_pfp: {
    width: scale(95),
    height: verticalScale(105),
    borderRadius: scale(55),
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
  },

  title: {
    fontSize: scale(18),
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Inter-Medium',
  },
  
  subtitle: {
    fontSize: scale(16),
    color: '#707070',
    marginTop: verticalScale(4),
    marginBottom: verticalScale(20),
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
  },

  appLabel: {
    backgroundColor: '#7A3DB61A',
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(6),
    borderRadius: scale(2),
    marginTop: verticalScale(12),
    marginBottom: verticalScale(5),
  },

  appLabelText: {
    color: '#7A3DB6',
    fontSize: scale(14),
    fontFamily: 'Inter-Medium',
  },

  date_time: {
    fontSize: scale(14),
    color: '#707070',
    fontFamily: 'Inter-Regular',
    marginTop: verticalScale(12),
    textAlign: 'center',
    marginBottom: verticalScale(30),
  },

  line: {
    height: 1,
    backgroundColor: '#ECECEC',
    alignSelf: 'stretch',
    marginBottom: verticalScale(20),
  },

  linkSection: {
    alignSelf: 'stretch',
  },
  
  linkText: {
    fontSize: scale(14),
    color: colours.black,
    fontFamily: 'Inter-Medium',
    marginBottom: verticalScale(4),
  },

  linkUrl: {
    fontSize: scale(14),
    color: '#707070',
    fontFamily: 'Inter-Regular',
    textDecorationLine: 'underline',
  },

  button: {
    flexDirection: 'row',
    backgroundColor: '#4384E6',
    paddingVertical: verticalScale(14),
    paddingHorizontal: scale(40),
    borderRadius: scale(8),
    marginTop: verticalScale(180),
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: scale(16),
    fontFamily: 'Inter-Medium',
    marginRight: scale(10),
  },
  side_arrow: {
    height: verticalScale(23),
    width: scale(23),
  },
});
