// src/screens/home.tsx
import React, { useLayoutEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import colours from '@/utils/colours';
import { LinearGradient } from 'expo-linear-gradient';
import HealthOverview from '@/app/(tabs)/health-overview';
import ToDos from '@/components/todo';
import FooterNav from '@/components/footer';
import { scale, verticalScale } from '@/utils/scale';

type RootStackParamList = {
  home: undefined;
  appointment: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

const icon4 = require("../../assets/images/icon-4.png");
const ethan_pfp = require("../../assets/images/ethan_pfp.png");
const bell = require("../../assets/images/bell.png");
const triangle = require("../../assets/images/triangle.png");
const right_arrow = require("../../assets/images/right-arrow.png");
const doc = require("../../assets/images/doc.jpg");

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const navigateToAppointment = () => {
    navigation.navigate('appointment');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <Image source={ethan_pfp} style={styles.ethan_pfp} />
          <Text style={styles.nameText}>Ethan Harkinson</Text>
          <Image source={bell} style={styles.bell} />
        </View>

        <View style={styles.bgIconWrapper}>
          <Image source={icon4} style={styles.bg_icon} />
        </View>

        <Text style={styles.health_1}>Health Score</Text>
        <Text style={styles.score}>2,740</Text>
        <Text style={styles.health_2}>This score is for information purposes only.</Text>

        <Image source={triangle} style={styles.triangle} />

        <LinearGradient
          colors={['#FF8090', '#FFDA68', '#75DE8D']}
          style={styles.gradient_bar}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
        />

        <View style={styles.scaleContainer}>
          {[0, 600, 1200, 1800, 2400, 3000].map((value, i) => (
            <Text key={i} style={styles.scaleText}>{value}</Text>
          ))}
        </View>

        <View style={styles.white_rectangle}>
          <View style={styles.doc_container}>
            <View style={styles.upcoming_button}>
              <View style={styles.top_doc}>
                <Text style={styles.upcoming_text}>UPCOMING</Text>
                <TouchableOpacity onPress={navigateToAppointment}>
                  <Image source={right_arrow} style={styles.right_arrow} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.laurie}>Laurie Simons</Text>
            <Text style={styles.md}>MD, DipABL...</Text>
            <Image source={doc} style={styles.doc_pfp} />
            <Text style={styles.internal_med}>Internal Medicine</Text>
            <Text style={styles.date_time}>Thu, December 21, 2024 | 10:00 AM PST</Text>
          </View>

          <HealthOverview />
          <ToDos />
        </View>
      </ScrollView>
      <FooterNav />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.violet,
    
  },

  scrollContent: {
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(40),
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    marginBottom: verticalScale(30),
  },

  ethan_pfp: {
    height: verticalScale(40),
    width: scale(35),
    borderRadius: scale(50),
  },

  nameText: {
    color: colours.white,
    fontSize: scale(16),
    fontFamily: 'Inter-Regular',
  },

  bell: {
    width: scale(19),
    height: verticalScale(21),
  },

  bgIconWrapper: {
    position: 'absolute',
    alignItems: 'center',
    marginTop: verticalScale(95),
    marginLeft: scale(100),
  },

  bg_icon: {
    width: scale(200),
    height: verticalScale(190),
  },

  health_1: {
    color: '#D5D8FF',
    fontSize: scale(16),
    marginLeft: scale(20),
    fontFamily: 'Inter-Regular',
  },

  score: {
    color: colours.white,
    fontSize: scale(40),
    fontFamily: 'Inter-Bold',
    marginTop: verticalScale(30),
    marginBottom: verticalScale(7),
    marginLeft: scale(20),
  },
  
  health_2: {
    color: '#D5D8FF',
    fontSize: scale(14),
    fontFamily: 'Inter-Regular',
    marginLeft: scale(20),
  },

  triangle: {
    width: scale(24),
    height: verticalScale(14),
    marginTop: verticalScale(30),
    marginLeft: scale(300),
  },

  gradient_bar: {
    height: verticalScale(15),
    width: scale(335),
    marginTop: verticalScale(5),
    marginLeft: scale(20),
    borderRadius: scale(50),
  },

  scaleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(28),
    marginTop: verticalScale(10),
    marginLeft: scale(-5),
    marginRight: scale(-5),
  },

  scaleText: {
    color: '#C2D3FF',
    fontSize: scale(12),
    fontFamily: 'Inter-Medium',
  },

  white_rectangle: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(-40),
    width: scale(385),
    height: verticalScale(1060),
    backgroundColor: colours.white,
    borderTopLeftRadius: scale(16),
    borderTopRightRadius: scale(16),
  },

  doc_container: {
    margin: scale(20),
    width: scale(340),
    height: verticalScale(180),
    borderColor: '#ECECEC',
    borderWidth: 1,
    borderRadius: scale(12),
    justifyContent: 'center',
  },

  upcoming_button: {
    padding: scale(5),
    marginLeft: scale(12),
    width: scale(105),
    height: verticalScale(31),
    backgroundColor: '#3A9B78',
    borderRadius: scale(2),
  },

  top_doc: {
    width: scale(300),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(10),
  },

  upcoming_text: {
    color: colours.white,
    fontSize: scale(14),
    fontFamily: 'Inter-Medium',
    marginLeft: scale(-7),
    marginTop: scale(-2),
  },

  right_arrow: {
    marginTop: verticalScale(3),
    width: scale(10),
    height: verticalScale(18),
  },

  doc_pfp: {
    marginLeft: scale(273),
    marginTop: verticalScale(-30),
    height: verticalScale(48),
    width: scale(42),
    borderRadius: scale(50),
  },

  laurie: {
    marginLeft: scale(12),
    marginTop: verticalScale(20),
    fontSize: scale(18),
    fontFamily: 'Inter-SemiBold',
  },

  md: {
    marginLeft: scale(152),
    marginTop: verticalScale(-25.5),
    fontSize: scale(14),
    fontFamily: 'Inter-Regular',
    color: '#707070',
  },

  internal_med: {
    marginLeft: scale(12),
    marginTop: verticalScale(-15),
    fontSize: scale(14),
    fontFamily: 'Inter-Regular',
    color: '#707070',
  },

  date_time: {
    marginLeft: scale(12),
    marginTop: verticalScale(15),
    fontSize: scale(14),
    fontFamily: 'Inter-Regular',
    color: '#707070',
  },

  footer: {
    marginTop: verticalScale(0),
  },
});
