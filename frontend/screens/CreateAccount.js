import React from "react";
import {StyleSheet, View, Image, Text, TextInput, TouchableOpacity} from  "react-native";
import {images} from "../constants/";

const CreateAccount =  ({ navigation }) => {

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


            <TouchableOpacity style={styles.createBtn}>
                <Text style={styles.createText}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
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
  createBtn:{
    width:"80%",
    backgroundColor:"#F3E03F",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10
  },
  createText: {
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
export default CreateAccount;