import React from "react";
import {StyleSheet, View, ScrollView, SafeAreaView, Image, Text, Pressable, TouchableOpacity} from  "react-native";
import { UserRepository } from "../API/userRepository"
import { images } from "../constants";
import { Fonts, Colors, Sizes } from "../constants/styles";

const PatientDashboard = ({ navigation, route }) => {

    let userInfo = new UserRepository();

    const a = route.params.name;
    const id = route.params.id;
    const [appointments, newAppointment] = React.useState([]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 3 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('PatientProfile', { username: a })}>
                        <Image source={images.setting} resizeMode="contain" style={styles.topBar} />
                    </TouchableOpacity>
                    <View style={{ alignItems: "flex-end", justifyContent: "flex-end" }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Image source={images.logout} resizeMode="contain" style={styles.topBar} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.profileSection}>
                        <TouchableOpacity onPress={() => navigation.navigate('PatientProfile', { username: a })}>
                        </TouchableOpacity>
                        <View style={styles.profileImgContainer}>
                            <Image style={styles.profileImg} source={images.stock} />
                        </View>
                        <Text style={{ alignSelf: "center", color: "black" }}>Welcome, {a} {route.params.id}</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('MedicalHistoryForm', { username: a, id: id })}>
                            <Image source={images.medical} resizeMode="contain" style={styles.logo} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Insurance', { username: a, id: id })}>
                            <Image source={images.insurance} resizeMode="contain" style={styles.shield} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('EmergencyContactForm', { username: a, id: id })}>
                            <Image source={images.contact} resizeMode="contain" style={styles.logo} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card_template}>
                        <TouchableOpacity style={styles.card_image}>
                            <Image style={styles.card_image} source={require('../assets/backgrounds/notifications_background.png')} />
                            <Text style={styles.text_container}>Notifications</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card_template}>
                        <TouchableOpacity style={styles.card_image} onPress={() => navigation.navigate('DoctorList')}>
                            <Image style={styles.card_image} source={{ uri: 'https://media.istockphoto.com/vectors/close-up-doctor-banner-background-vector-id1216564093?k=20&m=1216564093&s=170667a&w=0&h=06xcTlcPmQrOw_NUYMpNda5GuL3_1L5k8_-8qs64XHE=' }} />
                            <Text style={styles.text_container}>Doctors</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card_template}>
                        <TouchableOpacity style={styles.card_image} onPress={() => navigation.navigate('Appointments', appointments)}>
                            <Image style={styles.card_image} source={{ uri: 'https://wraltechwire.com/wp-content/uploads/2021/01/Triangle-Headliners-banner.png' }} />
                            <Text style={styles.text_container}>Appointments</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card_template}>
                        <TouchableOpacity style={styles.card_image} onPress={() => navigation.navigate('Chat')}>
                            <Image style={styles.card_image} source={require('../assets/backgrounds/messages_background.png')} />
                            <Text style={styles.text_container}>Messages</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        color: "F3E03F",
        alignItems: 'center',
        justifyContent: 'center',
    },
    safe: {
        flex: 1,
        color: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    topBar: {
        height: 35, 
        width: 35,    
    },
    logo: {
        height: 60, 
        width: 60,  
        borderColor: "blue"
    },
    shield: {
        height: 60, 
        width: 60,  
        marginEnd: 8
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor:"F3E03F", 
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    profileEditBtn1: {
        backgroundColor: 'green',
        width: '15%',
        height: '15%'
    },
    medHistoryBtn: {
        backgroundColor: 'red',
        width: '15%',
        height: '15%'
    },
    insurnaceBtn: {
        backgroundColor: 'yellow',
        width: '15%',
        height: '15%'
    },
    emcBtn: {
        backgroundColor: 'blue',
        width: '15%',
        height: '15%'
    },
    profileImgContainer: {
        height: 100,
        width: 100,
        borderRadius: 60,
        borderColor:"#755293",
        borderWidth: 1.0,
        shadowOpacity: 0.5,
        shadowRadius: Sizes.fixPadding,
        elevation: 20.0,
        overflow: 'hidden',
        backgroundColor: 'white',
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 0 },
    },
    profileImg: {
        height: 100,
        width: 100,
        borderRadius: 20,
        marginBottom: 10,
    },
    profileEditBtn: {
        width: "80%",
        backgroundColor: "#755293",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 20,
    },
    profileEditText: {
        color: "#ffffff",
        fontWeight: "800",
    },
    profileSection: {
        width: '100%',
        height: 125,
        marginBottom: 20,
        marginTop: 10,
        boxShadow: "10x 10px 17px -12px rgba(0,0,0,0.75)",
        alignItems: 'center',
    },
    card_template: {
        width: '100%',
        height: 250,
        marginBottom: 5,
        marginTop: 10,
        boxShadow: "10x 10px 17px -12px rgba(0,0,0,0.75)",
    },
    card_template2: {
        width: '50%',
        height: 250,
        marginBottom: 5,
        marginTop: 10,
        boxShadow: "10x 10px 17px -12px rgba(0,0,0,0.75)",
    },
    card_image: {
        width: 400,
        height: 250,
        borderRadius: 10,
    },
    text_container: {
        position: 'absolute',
        width: 400,
        height: 30,
        bottom: 0,
        padding: 5,
        backgroundColor: "#755293",
        borderBottomLeftRadius : 10,
        borderBottomRightRadius: 10,
        color: 'white',
        fontWeight: '800',
    },
    card_title: {
        color: 'white',
    }
})
export default PatientDashboard;
