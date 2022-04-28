import React from "react";
import {StyleSheet, View, Text, TextInput, TouchableOpacity, Pressable, SafeAreaView} from "react-native";

const Register = ({ navigation }) => {

    const [username, onChangeUsername] = React.useState('');
    const [text, onChangeText] = React.useState("This is a text");

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <SafeAreaView style={styles.container}>
                <Text style={{fontFamily: 'NotoSans_Bold', fontSize: 30.0, color: "black"}}>Register</Text>
                <Text style={{fontFamily: 'NotoSans_Regular', color: 'black', fontSize: 16.0, marginTop: 10.0, marginBottom: 40}}>Create account</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Username"
                        placeholderTextColor="#AFAFAF"
                        onChangeText={username => onChangeUsername(username)}/>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="First Name"
                        placeholderTextColor="#AFAFAF"
                        onChangeText={text => onChangeText(text)}/>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Last Name"
                        placeholderTextColor="#AFAFAF"
                        onChangeText={text => onChangeText(text)}/>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email Address"
                        placeholderTextColor="#AFAFAF"
                        onChangeText={text => onChangeText(text)}/>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.inputText}
                        placeholder="Password"
                        placeholderTextColor="#AFAFAF"
                        onChangeText={text => onChangeText(text)}/>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.inputText}
                        placeholder="Confirm Password"
                        placeholderTextColor="#AFAFAF"
                        onChangeText={text => onChangeText(text)}/>
                </View>
                <Pressable style={styles.createBtn} onPress={() => navigation.navigate('PatientDashboard', {name: username})}>
                    <TouchableOpacity>
                        <Text style={styles.createText}>Create Account</Text>
                    </TouchableOpacity>
                </Pressable>
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
        width: '80%',
        backgroundColor: "#F3E03F",
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
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
export default Register;
