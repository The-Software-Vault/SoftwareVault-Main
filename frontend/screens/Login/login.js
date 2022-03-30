import React from "react";
// import { bcrypt } from 'bcrypt'
// import  bcrypt from 'bcrypt'
import { UserRepository } from "../../API/userRepository";
//import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity} from "react-native";
import {StyleSheet, View, Image, Text, Pressable, TextInput, TouchableOpacity} from  "react-native";
import { images } from "../../constants/";

const Login = ({ navigation }) => {

    let logins = new UserRepository();

    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [text, onChangeText] = React.useState("This is a text");
    const [number, onChangeNumber] = React.useState(null);

    /*
    1. Declare password variable
        --> const password = password
    2. Check if entered username exists in database
        --> if username in user.username: return true
    3. If match returns true, return hashed password
        --> let hashpass = user.hashpass
    4. Hash the entered password and compare it with hasspass
        --> see bcrypt.compare function below
    5. If they match, login.
    */

    /*

    // Return user id for given username
    async function getUserID(username) {
        return (await logins.userDetailsBody({username}))[0];
    }

    // Return the given user's hashed password
    async function getHashed(userID) {
        console.log(logins.userDetailsParam(1));
        return (await logins.userDetailsParam({userID}))[5];
    }

    async function checkUser(username, password) {
        //... fetch user from a db etc.
        let userID = getUserID(username);
        let hashPass = getHashed(userID);

        console.log("UserID: ", userID);
        console.log("HashPass: ", hashPass);

        const match = await bcrypt.compare(password, hashPass);

        if(match) {
            console.log("Password: ", password)
            console.log("Hashed: ", hashPass)
        }

        console.log("Yo: ", password)

        return true;
    }
    */

    function checkUserType(){
        //const checker = checkUser(username, password);

        // console.log("Hello,", username)
        if(username === "Doctor"){
            return 'DoctorDashboard'
        }
        else {
            return 'PatientDashboard';
        }
    }

/*
    async function onLogin() {
        const bcrypt = require('bcrypt');
        const saltRounds = 10;

        // Hashing a Password - Autogenerate a salt & hash
        bcrypt.hash(password, saltRounds, function(err, hash) {
            // Store hash in your password DB.
            console.log("Password: ", password)
            console.log("Hashed: ", hash)
        });

        // Checking a password
        bcrypt.compare(password, hash, function(err, result) {
            // result == true
            console.log("The supplied hash matches with supplied plain text password!")

            axios.post(`${logins.url}/user/login`, {username: username, password : hash})
                .then(response => {
                    if(response.data === 0) {
                        this.invalidLogin()
                    }
                    else {
                        console.log(response.data)
                        this.validLogin(response.data)
                    }
                })
        });

        axios.post(`${this.login.url}/user/login`, {username: this.state.username, password : })
            .then(response => {
                if(response.data === 0) {
                    this.invalidLogin()
                }
                else {
                    console.log(response.data)
                    this.validLogin(response.data)
                }
            })
    }
 */

    return(
        <View style={styles.container}>
            <View style={styles.logoView}>
                <Image source={images.logo} resizeMode="contain" style={styles.logo}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="username"
                    placeholderTextColor="#AFAFAF"
                    value={username}
                    onChangeText={username => onChangeUsername(username)}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    secureTextEntry={true}
                    style={styles.inputText}
                    placeholder="password"
                    placeholderTextColor="#AFAFAF"
                    onChangeText={password => onChangePassword(password)}/>
            </View>
            <Pressable style={styles.loginBtn} onPress={() => navigation.navigate(checkUserType(), {name: username})}>
                <TouchableOpacity>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </Pressable>

            <View style={styles.actions}>
                <TouchableOpacity style={{marginHorizontal: 15}}>
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
