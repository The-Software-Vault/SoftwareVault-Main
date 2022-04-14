import React from "react";
import {StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Pressable, ScrollView, SafeAreaView} from "react-native";
import { images } from "../../constants";
import { UserRepository } from "../../API/userRepository";
import axios from 'axios'

const EmergencyContactForm = ({ navigation, route }) => {

    let updates = new UserRepository();

    const [ecn, onChangeENC] = React.useState('');
    const [relation, onChangeRelation] = React.useState('');
    const [cell, onChangeCell] = React.useState('');
    const [work, onChangeWork] = React.useState('');
    const {name, id} = route.params;

    function submit() {
        updates.updateEMC(({id: id, ecn: ecn, relation: relation, cell: cell, work: work}).value);
        navigation.navigate('PatientDashboard', {name: name});
    }

    return(
        <View style={{flex: 1}}>
            <ScrollView style={styles.scrollView}>
                <SafeAreaView style={styles.container}>
                    <View style={{height: "10%"}}></View>
                    <Text style={styles.black}>Emergency Contact Name</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Emergency Contact Name"
                            placeholderTextColor="#AFAFAF"
                            onChangeText={ecn => onChangeENC(ecn)}/>
                    </View>
                    <Text style={styles.black}>Relation</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Relation"
                            placeholderTextColor="#AFAFAF"
                            onChangeText={relation => onChangeRelation(relation)}/>
                    </View>
                    <Text style={styles.black}>Phone Number (Cell)</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Phone Number (Cell)"
                            placeholderTextColor="#AFAFAF"
                            onChangeText={cell => onChangeCell(cell)}/>
                    </View>
					<Text style={styles.black}>Phone Number (Work)</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Phone Number (Work)"
                            placeholderTextColor="#AFAFAF"
                            onChangeText={work => onChangeWork(work)}/>
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
export default EmergencyContactForm;
