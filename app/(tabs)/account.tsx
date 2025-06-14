import {SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import colours from '@/utils/colours';
import FooterNav from '@/components/footer';


const ethan_pfp = require("../../assets/images/ethan_pfp.png");
const user_g = require('../../assets/images/user-grey.png')
const red_arrow = require('../../assets/images/right-red-arrow.png')


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Image source={ethan_pfp} style={styles.ethan_pfp} />
        <Text style={styles.nameText}>Ethan Harkinson</Text>  
        <Text style={styles.mail}>ethanharkinson@outlook.com</Text>
        <Image source={user_g} style={styles.user} />
        <Text style={styles.account}>Account</Text>
        <View style={styles.bottomborder}></View>
        <Text style={styles.logout}>Log out</Text>
        <Image source={red_arrow} style={styles.red_arrow} />
        <Text style={styles.version}>Proactively version 0.0.1</Text>
        <View style={styles.footer}>
            <FooterNav/>
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
        marginLeft: 20,
        marginTop: 40,
        height: 60, 
        width: 60, 
        borderRadius: 30, 
    },

    nameText: { 
        marginTop: -60,
        marginLeft: 100,
        color: colours.black, 
        fontSize: 20, 
        fontFamily: 'Inter-Medium' 
    },

    mail: {
        color: '#707070',
        marginLeft: 100,

    },

    user: {
        width: 17,
        height: 17, 
        marginTop: 30,
        marginLeft: 20,        
    },

    account: {
        marginLeft: 45,
        marginTop: -20,
    },

    bottomborder: {
        marginLeft: 20,
        width: 340,
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: '#DCDCE0',
    },

    logout: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: '#FD7468',
        marginLeft: 20,
        marginTop: 20,
    },

    red_arrow: {
        width: 8,
        height: 15,
        marginLeft: 340,
        marginTop: -15,
    },

    version: {
        marginTop: 375,
        textAlign: 'center',
        color: '#707070',
        fontSize: 12,
        fontFamily: 'Inter-Regular',
    },

    footer: {
        marginBottom: 0,
        marginTop: 35,
    },
});
