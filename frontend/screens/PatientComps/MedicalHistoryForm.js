import React from "react";
import {StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView} from "react-native";
import { UserRepository } from "../../API/userRepository";

const MedicalHistoryForm = ({ navigation, route }) => {

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
            <SafeAreaView style={styles.container}>

            <Text style={{fontFamily: 'NotoSans_Bold', fontSize: 30.0, color: "black", marginTop: 30}}>Medical Information</Text>
            <Text style={{fontFamily: 'NotoSans_Regular', color: 'black', fontSize: 14.0, marginTop: 20, marginBottom: 40}}>Please fill out this form to share with your doctor.</Text>
                
                
                <Text style={{alignSelf: "center", color: "black"}}>Age</Text>
                <View style={styles.inputView}>
                <TextInput
                            style={styles.inputText}
                            placeholder="Age"
                            placeholderTextColor="#AFAFAF"
                            onChangeText={age => onChangeAge(age)}/>
                </View>
                <Text style={{alignSelf: "center", color: "black"}}>Weight (lbs)</Text>
                <View style={styles.inputView}>
                <TextInput
                            style={styles.inputText}
                            placeholder="Weight (lbs)"
                            placeholderTextColor="#AFAFAF"
                            onChangeText={weight => onChangeWeight(weight)}/>
                </View>
                <Text style={{alignSelf: "center", color: "black"}}>Height (Ft, In)</Text>
                <View style={styles.inputView}>
                <TextInput
                            style={styles.inputText}
                            placeholder="Height (Ft, In)"
                            placeholderTextColor="#AFAFAF"
                            onChangeText={height => onChangeHeight(height)}/>
                </View>
                <Text style={{alignSelf: "center", color: "black"}}>Current Medication</Text>
                <View style={styles.inputView}>
                <TextInput
                            style={styles.inputText}
                            placeholder="Current Medication"
							placeholderTextColor="#AFAFAF"
                            onChangeText={med => onChangeMed(med)}/>
                </View>
                <Text style={{alignSelf: "center", color: "black"}}>Known Allergies</Text>
                <View style={styles.inputView}>
                <TextInput
                            style={styles.inputText}
                            placeholder="Known Allergies"
                            placeholderTextColor="#AFAFAF"
                            onChangeText={allergies => onChangeAllergies(allergies)}/>
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
