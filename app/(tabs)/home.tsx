import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colours from '@/utils/colours';
import { LinearGradient } from 'expo-linear-gradient';
import HealthOverview from '@/app/(tabs)/health-overview';
import ToDos from '@/components/todo';
import FooterNav from '@/components/footer';

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
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);

    const navigateToAppointment = () => {
        navigation.navigate('appointment');
      };

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}  
        >
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
                    <Text style={styles.date_time}>Thu, December 21, 2024 | 10:00 AM PST  </Text>            
                </View>

                <HealthOverview />  

                <ToDos />      
            </View>
        </ScrollView>
        <FooterNav/>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colours.violet,
    },

    scrollContent: {
        paddingTop: 20,
        paddingBottom: 40, 
    },

    bgIconWrapper: {
        position: 'absolute',
        alignItems: 'center',
        marginTop: 95,
        marginLeft: 100,
    },

    bg_icon: {
        width: 200,
        height: 190,
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 30,
    },

    ethan_pfp: { 
        height: 40, 
        width: 40, 
        borderRadius: 20 
    },

    nameText: { 
        color: colours.white, 
        fontSize: 16, 
        fontFamily: 'Inter-Regular' 
    },

    bell: { 
        width: 19, 
        height: 20 
    },

    health_1: {
        color: '#D5D8FF',
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        marginLeft: 20,
    },

    health_2: {
        color: '#D5D8FF',
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        marginLeft: 20,
    },
    
    score: {
        color: colours.white,
        fontSize: 40,
        fontFamily: 'Inter-Bold',
        marginTop: 30,
        marginBottom: 7,
        marginLeft: 20,
    },

    triangle: {
        width: 24,
        height: 14,
        marginTop: 30,
        marginLeft: 300,
    },

    gradient_bar: {
        height: 15,
        width: 335,
        marginTop: 5,
        marginLeft: 20,
        borderRadius: 50,
    },

    scaleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginTop: 10,
        marginLeft: -10,
    },

    scaleText: {
        color: '#C2D3FF',
        fontSize: 12,
        fontFamily: 'Inter-Medium',
    },

    white_rectangle: {
        marginTop: 20,
        marginBottom: -40,
        width: 385,
        height: 1040,
        backgroundColor: colours.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },

    doc_container: {
        margin: 21,
        width: 340,
        height: 180,
        borderColor: '#ECECEC',
        borderWidth: 1,
        borderRadius: 12,
        justifyContent: 'center',
        alignContent: 'center',
    },

    upcoming_button: {
        padding: 5,
        marginLeft: 12,
        width: 105,
        height: 31,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 15,
        paddingRight: 6,
        backgroundColor: '#3A9B78',
        borderRadius: 2,
    },

    upcoming_text: {
        color: colours.white,
        fontSize: 14,
        fontFamily: 'Inter-Medium',
        marginLeft: -18,
    },

    top_doc: {
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },

    right_arrow: {
        marginTop: 3,
        width: 10,
        height: 16,
    },

    doc_pfp: {
        marginLeft: 273,
        marginTop: -30,
        height: 48, 
        width: 48, 
        borderRadius: 25,
        justifyContent: 'center',
        alignContent: 'center',
    },

    laurie: {
        marginLeft: 12,
        marginTop: 20,
        fontSize: 18,
        fontFamily: 'Inter-SemiBold',
    },

    md: {
        marginLeft: 152,
        marginTop: -25.5,
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        color:'#707070',
    },

    internal_med: {
        marginLeft: 12,
        marginTop: -15,
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        color:'#707070',
    },

    date_time: {
        marginLeft: 12,
        marginTop: 15,
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        color:'#707070',
    }, 
});
