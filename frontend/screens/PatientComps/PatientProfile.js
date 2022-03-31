import React from "react";
//import CalendarStrip from 'react-native-calendar-strip';
import {StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Pressable, ScrollView, SafeAreaView} from "react-native";
//import {Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput, StatusBar, Image, FlatList, StyleSheet, Dimensions } from "react-native";
//import { Fonts, Colors, Sizes } from "../../constants/styles";
//import SelectPicker from 'react-native-form-select-picker';
import { images } from "../../constants";

//const { width } = Dimensions.get('screen');

const PatientProfile = ({ navigation, route}) => {

    const [text, onChangeText] = React.useState("This is a text");
    const [number, onChangeNumber] = React.useState(null);

    //const image = route.params.image;
    const {username} = route.params;
    //const type = route.params.type;

    //const a = route.params.name;//{name} = route.params;
    //const {name} = route.params;

    function patientDashboard() {
        return (
            <Pressable style={styles.profileEditBtn} onPress={() => navigation.navigate('PatientDashboard', {name : username})}>
                <TouchableOpacity>
                    <Text style={styles.profileEditText}>Return to Dashboard</Text>
                </TouchableOpacity>
            </Pressable>
        )
    }

    return (
        <View style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                <View style={{height: "10%"}}></View>
                <Text style={{alignSelf: "center", color: "black"}}>Username</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder={username}
                        placeholderTextColor="#AFAFAF"
                        onChangeText={text => onChangeText(text)}/>
                </View>
                <Text style={{alignSelf: "center", color: "black"}}>First Name</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder=""
                        placeholderTextColor="#AFAFAF"
                        onChangeText={text => onChangeText(text)}/>
                </View>
                <Text style={{alignSelf: "center", color: "black"}}>Last Name</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder=""
                        placeholderTextColor="#AFAFAF"
                        onChangeText={text => onChangeText(text)}/>
                </View>
                <Text style={{alignSelf: "center", color: "black"}}>E-mail Address</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder=""
                        placeholderTextColor="#AFAFAF"
                        onChangeText={text => onChangeText(text)}/>
                </View>
                <Text style={{alignSelf: "center", color: "black"}}>Password</Text>
                <View style={styles.inputView}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.inputText}
                        placeholder=""
                        placeholderTextColor="#AFAFAF"
                        onChangeText={text => onChangeText(text)}/>
                </View>
                <Text style={{alignSelf: "center", color: "black"}}>Confirm Password</Text>
                <View style={styles.inputView}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.inputText}
                        placeholder=""
                        placeholderTextColor="#AFAFAF"
                        onChangeText={text => onChangeText(text)}/>
                </View>
                {patientDashboard()}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 0.8
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 50,
        color: "#755293",
        marginBottom: 40,
    },
    inputView: {
        width: '80%',
        backgroundColor: "#EAEAEA",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: "#777777",
        fontWeight: '800',
    },
    scrollContainer: {
        backgroundColor: 'white',
        flex: 1,
        height: 75.0,
        position: 'absolute', bottom: 15.0, width: '100%',
        alignItems: 'center',
        //paddingHorizontal: Sizes.fixPadding * 2.0,
        justifyContent: 'center',
    },
    signUp: {
        color: "#755293",
        fontWeight: '500',
    },
    forgot: {
        color: 'black',
        fontWeight: '500',
    },
    profileEditBtn: {
        width: "80%",
        backgroundColor: "#755293",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 30,
    },
    profileEditText: {
        color: "#ffffff",
        fontWeight: "800",
    },
    createBtn: {
        width: '80%',
        backgroundColor: "#F3E03F",
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    createText: {
        color: "#ffffff",
        fontWeight: '800',
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    logoView: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 15,
        marginTop: 0,
    },
    logo: {
        marginBottom: 25,
        width: 270,
        height: 170,
    }
})
export default PatientProfile;