import React from "react";
import {StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Pressable, ScrollView, SafeAreaView} from "react-native";
import { images } from "../../constants";
import { UserRepository } from "../../API/userRepository";
import axios from 'axios'

const MedicalHistoryForm = ({ navigation }) => {

    let updates = new UserRepository();

    const [age, onChangeAge] = React.useState('');
    const [weight, onChangeWeight] = React.useState('');
    const [height, onChangeHeight] = React.useState('');
    const [med, onChangeMed] = React.useState('');
    const [allergies, onChangeAllergies] = React.useState('');
    const {name, id} = route.params;

    function submit() {
        updates.updateMH(({id: id, age: age, weight: weight, height: height, med: med, allergies: allergies}).value);
        navigation.navigate('PatientDashboard', {name: name});
    }

    return(
        <View style={{flex: 1}}>
            <ScrollView style={styles.scrollView}>
                <SafeAreaView style={styles.container}>
                    <View style={{height: "10%"}}></View>
                    <Text style={styles.black}>Age</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Age"
                            placeholderTextColor="#AFAFAF"
                            onChangeText={age => onChangeAge(age)}/>
                    </View>
                    <Text style={styles.black}>Weight (lbs)</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Weight (lbs)"
                            placeholderTextColor="#AFAFAF"
                            onChangeText={weight => onChangeWeight(weight)}/>
                    </View>
                    <Text style={styles.black}>Height (Ft, In)</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Height (Ft, In)"
                            placeholderTextColor="#AFAFAF"
                            onChangeText={height => onChangeHeight(height)}/>
                    </View>
                    <Text style={styles.black}>Current Medication</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Current Medication"
							placeholderTextColor="#AFAFAF"
                            onChangeText={med => onChangeMed(med)}/>
                    </View>
					<Text style={styles.black}>Known Allergies</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Known Allergies"
                            placeholderTextColor="#AFAFAF"
                            onChangeText={allergies => onChangeAllergies(allergies)}/>
                    </View>
                    <Pressable style={styles.createBtn} onPress={() => submit()}>
                        <TouchableOpacity>
                            <Text style={styles.createText}>Update Profile</Text>
                        </TouchableOpacity>
                    </Pressable>
                </SafeAreaView>    
            </ScrollView>
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
export default MedicalHistoryForm;