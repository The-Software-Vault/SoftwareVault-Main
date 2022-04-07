import React from "react";
import {StyleSheet, View, ScrollView, SafeAreaView, Image, Text, Pressable, TouchableOpacity} from  "react-native";
//import { Fonts, Colors, Sizes } from "../constants/styles";

const PatientDashboard =  ({ navigation, route}) => {

    let userInfo = new UserRepository();

    const a = route.params.name;//{name} = route.params;
    const {name} = route.params;
    const {id} = userInfo.userDetailsBody(name).id;

    const [user, newUser] = React.useState([
        {name: 'Kyle Booth', username: 'kyleb', appointments: ['Friday 2pm, Saturday 1pm'], messages: ['Hello!', 'The images are great!'], messageSender: ['Dr. Bob Smith, Dr. Alice Smith']},
    ]);

    const [appointments, newAppointment] = React.useState([
        {date: '2/22/2022', time: '5:00 p.m.', doctor: 'Dr. Bob Smith', duration: '30 minutes'},
        {date: '3/2/2022', time: '3:00 p.m.', doctor: 'Dr. Alice Smith', duration: '45 minutes'},
    ]);

    const [messages, newMessage] = React.useState([
        {received: '2/2/2022', time: '5:11 p.m.', sender: 'Dr. Bob Smith', content: 'Everything looks good!'},
        {received: '2/2/2022', time: '6:40 p.m.', sender: 'Dr. Alice Smith', content: 'Images are great!'},
    ]);

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>

                    <View style={styles.profileSection}>
                        <Pressable style={styles.profileImg}>
                            <Image style={styles.profileImg} source={{uri: 'https://via.placeholder.com/150'}}/>
                            {/*<Text style={{alignSelf: "center"}}>John Doe</Text>*/}
                            <Text style={{alignSelf: "center", color: "black"}}>Welcome, {route.params?.name}</Text>
                        </Pressable>

                        <View style={styles.rowContainer}>
                            <Pressable style={styles.profileEditBtn1} onPress={() => navigation.navigate('PatientProfile', {username: name})}></Pressable>
                            <Pressable style={styles.medHistoryBtn} onPress={() => navigation.navigate('MedicalHistoryForm', {username: name, id: id})}></Pressable>
                            <Pressable style={styles.insurnaceBtn} onPress={() => navigation.navigate('Insurance', {username: name, id: id})}></Pressable>
                            <Pressable style={styles.emcBtn} onPress={() => navigation.navigate('EmergencyContactForm', {username: name, id: id})}></Pressable>
                        </View>
                    </View>

                    <View style={styles.card_template}>
                        <Pressable style={styles.card_image} onPress={() => navigation.navigate('DoctorList')}>
                            <Image style={styles.card_image} source={{uri: 'https://via.placeholder.com/150'}}/>
                            <Text style={styles.text_container}>Doctors</Text>
                        </Pressable>
                    </View>

                    <View style={styles.card_template}>
                        <Pressable style={styles.card_image}>
                            <Image style={styles.card_image} source={{uri: 'https://via.placeholder.com/150'}}/>
                            <Text style={styles.text_container}>Calendar</Text>
                        </Pressable>
                    </View>

                    <View style={styles.card_template}>
                        <Pressable style={styles.card_image} onPress={() => navigation.navigate('Appointments', appointments)}>
                            <Image style={styles.card_image} source={{uri: 'https://via.placeholder.com/150'}}/>
                            <Text style={styles.text_container}>Appointments</Text>
                        </Pressable>
                    </View>

                    <View style={styles.card_template}>
                        <Pressable style={styles.card_image} onPress={() => navigation.navigate('messages', messages)}>
                            <Image style={styles.card_image} source={{uri: 'https://via.placeholder.com/150'}}/>
                            <Text style={styles.text_container}>Messages</Text>
                        </Pressable>
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
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        marginLeft: 8,
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
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
        height: 250,
        marginBottom: 5,
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