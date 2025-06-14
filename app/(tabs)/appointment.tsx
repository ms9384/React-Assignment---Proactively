import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import colours from '@/utils/colours';

const doc = require('../../assets/images/doc.jpg'); 
const side_arrow = require('../../assets/images/side-arrow.png')
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
        <Text style={styles.subtitle}>
          Laurie Simons, MD, DipABLM
        </Text>

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
        flex: 1, backgroundColor: '#FFFFFF',
    },

    container: {
        padding: 20,
        alignItems: 'center',
    },

    upcoming: {
        backgroundColor: '#3A9B78',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
        alignSelf: 'flex-start',
    },

    upcomingText: {
        color: '#FFFFFF',
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        fontWeight: '600',
    },

    doc_pfp: {
        width: 105,
        height: 105,
        borderRadius: 55,
        marginTop: 20,
        marginBottom: 20,
    },

    title: {
        fontSize: 18,
        color: '#000000',
        textAlign: 'center',
        fontFamily: 'Inter-Medium',
    },

    subtitle: {
        fontSize: 16,
        color: '#707070',
        marginTop: 4,
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'Inter-Regular',
    },

    appLabel: {
        backgroundColor: '#7A3DB61A',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 2,
        marginTop: 12,
        marginBottom: 5,
    },

    appLabelText: {
        color: '#7A3DB6',
        fontSize: 14,
        fontFamily: 'Inter-Medium',
    },

    date_time: {
        fontSize: 14,
        color: '#707070',
        fontFamily: 'Inter-Regular',
        marginTop: 12,
        textAlign: 'center',
        marginBottom: 30,
    },

    line: {
        height: 1,
        backgroundColor: '#ECECEC',
        alignSelf: 'stretch',
        marginBottom: 20,
    },

    linkSection: {
        alignSelf: 'stretch',
    },

    linkText: {
        fontSize: 16,
        color: colours.black,
        fontFamily: 'Inter-Medium',
        marginBottom: 4,
    },

    linkUrl: {
        fontSize: 16,
        color: '#707070',
        fontFamily: 'Inter-Regular',
        textDecorationLine: 'underline',
    },

    button: {
        backgroundColor: '#4384E6',
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 8,
        marginTop: 150,
        alignSelf: 'stretch',
        alignItems: 'center',
    },

    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Inter-Medium',
        marginLeft: -20,
    },

    side_arrow: {
        height: 23,
        width: 23,
        marginTop: -23,
        marginLeft: 120
    },
});
