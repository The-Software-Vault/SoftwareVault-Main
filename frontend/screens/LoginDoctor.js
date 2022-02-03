import React from "react";
import {StyleSheet, View, Image, Text, TextInput, Pressable, TouchableOpacity} from  "react-native";
import {images} from "../constants/";

const LoginDoctor =  ({navigation}) => {

    const [text, onChangeText] = React.useState("This is a text");
    const [number, onChangeNumber] = React.useState(null);

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
                    onChangeText={text => onChangeText(text)}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="password"
                    placeholderTextColor="#AFAFAF"
                    onChangeText={text => onChangeText(text)}/>
            </View>


            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.actions}>
                <TouchableOpacity style={{marginHorizontal: 15}}>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <Pressable 
                onPress={() => navigation.navigate('CreateAccount')}>
              <Text style={styles.singUp}>Sign Up</Text>
              </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center"
  },

  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#755293",
    marginBottom:40
  },

  inputView:{
    width:"80%",
    backgroundColor:"#EAEAEA",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"#777777",
    fontWeight: "800",
  },
  singUp:{
    color: "#755293",
    fontWeight: "500",
  },
  forgot:{
    color: "black",
    fontWeight: "500",
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#755293",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10
  },
  loginText: {
    color: "#ffffff",
    fontWeight: "800",
  },
  actions:{
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  logoView:{
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
    marginTop: 0,
  },
  logo:{
    marginBottom: 25,
    width: 270,
    height: 170,
  }
})
export default LoginDoctor;