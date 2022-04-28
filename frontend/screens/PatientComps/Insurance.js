import React from "react";
import {StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Pressable, ScrollView, SafeAreaView} from "react-native";
import { UserRepository } from "../../API/userRepository";

const Insurance = ({ navigation, route }) => {

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
            <SafeAreaView style={styles.container}>

            <Text style={{fontFamily: 'NotoSans_Bold', fontSize: 30.0, color: "black"}}>Insurance Information</Text>
            <Text style={{fontFamily: 'NotoSans_Regular', color: 'black', fontSize: 14.0, marginTop: 20, marginBottom: 40}}>Please fill out this form if you have health insurance.</Text>
                
                
                <Text style={{alignSelf: "center", color: "black"}}>Health Plan</Text>
                <View style={styles.inputView}>
                <TextInput
                            style={styles.inputText}
                            placeholder="Name of Health Plan"
                            placeholderTextColor="#AFAFAF"
                            onChangeText={healthPlan => onChangeHealthPlan(healthPlan)}/>
                </View>
                <Text style={{alignSelf: "center", color: "black"}}>Member ID</Text>
                <View style={styles.inputView}>
                <TextInput
                            style={styles.inputText}
                            placeholder="Member ID"
                            placeholderTextColor="#AFAFAF"
                            onChangeText={memID => onChangeMemberID(memID)}/>
                </View>
                <Text style={{alignSelf: "center", color: "black"}}>Group ID (Optional)</Text>
                <View style={styles.inputView}>
                <TextInput
                            style={styles.inputText}
                            placeholder="Group ID (Optional)"
                            placeholderTextColor="#AFAFAF"
                            onChangeText={groupID => onChangeGroupID(groupID)}/>
                </View>
                <Text style={{alignSelf: "center", color: "black"}}>Relation to Plan Holder</Text>
                <View style={styles.inputView}>
                <TextInput
                            style={styles.inputText}
                            placeholder="Relation to Plan Holder"
							placeholderTextColor="#AFAFAF"
                            onChangeText={planHolder => onChangeRelation(planHolder)}/>
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
export default Insurance;
