import React from "react";
import axios from 'axios'
import { images } from "../../constants/";
import { UserRepository } from "../../API/userRepository";
import { StyleSheet, View, Image, Text, Pressable, TextInput, TouchableOpacity } from  "react-native";

const Login = ({ navigation }) => {

    let logins = new UserRepository();

    let [id, setId] = React.useState('')
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    function checkUserType() {
        console.log("Login/Verify: ", logins.verifyUser({ username: username, hashpass: password }).value)

        axios.post(`${logins.url}/user/login`, { username: username, hashpass: password })
            .then(response => {
                console.log("response: ", response.data)
                if (response.data === 0) {
                    invalidLogin()
                }
                else {
                    console.log("Username:", username, "  Password:", password)
                    console.log("UserID:", response.data)
                    id = response.data
                    { id => setId(id) }
                    // validLogin(response.data)
                }
            })

        if (username === "Doctor") {
            return 'DoctorDashboard'
        }
        else {
            return 'PatientDashboard';
        }
    }

    function invalidLogin() {
        alert("Wrong Username/Password");
        username.length = 0;
        password.length = 0;
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoView}>
                <Image source={images.logo} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="username"
                    placeholderTextColor="#AFAFAF"
                    value={username}
                    onChangeText={username => onChangeUsername(username)} />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    secureTextEntry={true}
                    style={styles.inputText}
                    placeholder="password"
                    placeholderTextColor="#AFAFAF"
                    value={password}
                    onChangeText={password => onChangePassword(password)} />
            </View>
            <Pressable style={styles.loginBtn} onPress={() => navigation.navigate(checkUserType(), { name: username })}>
                <TouchableOpacity>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </Pressable>

            <View style={styles.actions}>
                <TouchableOpacity style={{ marginHorizontal: 15 }}>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Pressable onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.signUp}>Register</Text>
                    </Pressable>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#755293",
        marginBottom: 40,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#EAEAEA",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
    },
    inputText: {
        height: 50,
        color: "#777777",
        fontWeight: "800",
    },
    signUp: {
        color: "#755293",
        fontWeight: "500",
    },
    forgot: {
        color: "black",
        fontWeight: "500",
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#755293",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 10,
    },
    loginText: {
        color: "#ffffff",
        fontWeight: "800",
    },
    createText: {
        color: "#ffffff",
        fontWeight: "800",
    },
    actions: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    logoView: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 15,
        marginTop: 0,
    },
    logo: {
        marginBottom: 25,
        width: 270,
        height: 170,
    }
})
export default Login;
