import React from "react";
import {StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Pressable, ScrollView, SafeAreaView} from "react-native";
import { images } from "../../constants";
import { UserRepository } from "../../API/userRepository";

const MedicalHistoryForm = ({ navigation, route }) => {

    let updates = new UserRepository();

    const [age, onChangeAge] = React.useState('');
    const [weight, onChangeWeight] = React.useState('');
    const [height, onChangeHeight] = React.useState('');
    const [med, onChangeMed] = React.useState('');
    const [allergies, onChangeAllergies] = React.useState('');
   // const {name, id} = route.params;

    function submit() {
        // updates.updateMH(({id: id, age: age, weight: weight, height: height, med: med, allergies: allergies}).value);
        navigation.navigate('DoctorDashboard');
    }

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <Text style={{ fontFamily: 'NotoSans_Bold', fontSize: 30.0, color: "black", marginTop: 30 }}>Extra Information</Text>
                <Text style={{ fontFamily: 'NotoSans_Regular', color: 'black', fontSize: 14.0, marginTop: 20, marginBottom: 40 }}>Please let your patients know more about yourself.</Text>
                <Text style={{ alignSelf: "center", color: "black" }}>Gender</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Gender"
                        placeholderTextColor="#AFAFAF"
                        onChangeText={age => onChangeAge(age)} />
                </View>
                <Text style={{ alignSelf: "center", color: "black" }}>Specialty</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Specialty"
                        placeholderTextColor="#AFAFAF"
                        onChangeText={text => onChangeText(text)} />
                </View>
                <Text style={{ alignSelf: "center", color: "black" }}>Years of Experience</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Years of Experience"
                        placeholderTextColor="#AFAFAF"
                        onChangeText={text => onChangeText(text)} />
                </View>
                <Text style={{ alignSelf: "center", color: "black" }}>About Me</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="About Me"
                        placeholderTextColor="#AFAFAF"
                        onChangeText={text => onChangeText(text)} />
                </View>
                <TouchableOpacity style={styles.createBtn} onPress={() => submit()}>
                    <Text style={styles.createText}>Confirm</Text>
                </TouchableOpacity>
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
    signUp: {
        color: "#755293",
        fontWeight: '500',
    },
    forgot: {
        color: 'black',
        fontWeight: '500',
    },
    createBtn: {
        width: "80%",
        backgroundColor: "#755293",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 30,
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
export default MedicalHistoryForm;
