import React from "react";
import {StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Pressable, ScrollView, SafeAreaView} from "react-native";
import { images } from "../../constants";
import { UserRepository } from "../../API/userRepository";
import axios from 'axios'


const Insurance = ({ navigation }) => {

    let updates = new UserRepository();

    const [healthPlan, onChangeHealthPlan] = React.useState('');
    const [memberID, onChangeMemberID] = React.useState('');
    const [groupID, onChangeGroupID] = React.useState('');
    const [relation, onChangeRelation] = React.useState('');
    const {name, id:id} = route.params;

    function submit() {
        updates.updateInsurance(({id:id, healthPlan: healthPlan, memberID: memberID, groupID: groupID, relation: relation}).value);
        navigation.navigate('PatientDashboard', {name: name});
    }

    return(
        <View style={{flex: 1}}>
            <ScrollView style={styles.scrollView}>
                <SafeAreaView style={styles.container}>
                    <View style={{height: "10%"}}></View>
                    <Text style={styles.black}>Name of Health Plan</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Name of Health Plan"
                            placeholderTextColor="#AFAFAF"
                            onChangeText={healthPlan => onChangeHealthPlan(healthPlan)}/>
                    </View>
                    <Text style={styles.black}>Member ID</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Member ID"
                            placeholderTextColor="#AFAFAF"
                            onChangeText={memberID => onChangeMemberID(memberID)}/>
                    </View>
                    <Text style={styles.black}>Group ID (Optional)</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Group ID (Optional)"
                            placeholderTextColor="#AFAFAF"
                            onChangeText={groupID => onChangeGroupID(groupID)}/>
                    </View>
                    <Text style={styles.black}>Relation to Plan Holder</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Relation to Plan Holder"
							placeholderTextColor="#AFAFAF"
                            onChangeText={relation => onChangeRelation(relation)}/>
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
export default Insurance;