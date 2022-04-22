import React from "react";
import {StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Pressable, ScrollView, SafeAreaView} from "react-native";
import CalendarStrip from 'react-native-calendar-strip';
import { Fonts, Colors, Sizes } from "../../constants/styles";
import SelectPicker from 'react-native-form-select-picker';
import SelectMultiple from 'react-native-select-multiple'
import Dialog from "react-native-dialog";

const ApptSettings = ({ navigation }) => {

    const timeSlots = ["8:00 A.M.", "8:30 A.M.", "9:00 A.M.", "9:30 A.M.", "10:00 A.M.", "10:30 A.M.", "11:00 A.M.", "11:30 A.M.", "12:00 P.M.", "12:30 P.M.", "1:00 P.M.", "1:30 P.M.", "2:00 P.M.", "2:30 P.M.", "3:00 P.M.", "3:30 P.M.", "4:00 P.M.", "4:30 P.M.", "5:00 P.M.", "5:30 P.M.", "6:00 P.M.", ]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]

    const [selectedDates, onChangeDates] = React.useState([]);
    const [selectedSlot, setSelectedSlot] = React.useState([]);
    const [selectedTimes, onChangeTimes] = React.useState([]);
    const [link, onChangeLink] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [instructions, onChangeInstructions] = React.useState("");
    const [showPicker, onChangePicker] = React.useState(false);
    const [showPickerTimes, onChangePickerTimes] = React.useState(false);

    //need to make it to where the doctor can select a date, then say what times they are unavailable on that date

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <SafeAreaView style={styles.container}>
            
                <Text style={{fontFamily: 'NotoSans_Bold', fontSize: 30.0, color: "black"}}>Appointment Settings</Text>
                <Text style={{fontFamily: 'NotoSans_Regular', color: 'black', fontSize: 16.0, marginTop: 30.0, marginBottom: 20}}>Appointment Availability</Text>
                
                <TouchableOpacity
                    onPress={() => navigation.navigate('GeneralSettings', {
                       //pass in currently saved availability
                    })}
                    style={{ width: '80%',
                    backgroundColor: "#EAEAEA",
                    borderRadius: 25,
                    height: 60,
                    justifyContent: 'center',
                    padding: 20,
                    marginBottom: 20}}
                >
                    <Text style={{color: "#777777", fontWeight: "800",}}>Set General Unavailability</Text>
                </TouchableOpacity>
                

                <TouchableOpacity
                    onPress={() => navigation.navigate('SpecificSettings', {
                       //pass in currently saved availability
                    })}
                    style={{ width: '80%',
                    backgroundColor: "#EAEAEA",
                    borderRadius: 25,
                    height: 60,
                    justifyContent: 'center',
                    padding: 20,}}
                >
                    <Text style={{color: "#777777", fontWeight: "800",}}>Set Specific Unavailability</Text>
                </TouchableOpacity>
                <Text style={{fontFamily: 'NotoSans_Regular', color: 'black', fontSize: 16.0, marginTop: 20.0, marginBottom: 20}}>Appointment Information</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Meeting Link"
                        placeholderTextColor="#AFAFAF"
                        onChangeText={links => onChangeLink(links)}/>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Meeting Password"
                        placeholderTextColor="#AFAFAF"
                        onChangeText={pass => onChangePassword(pass)}/>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Patient Instructions"
                        placeholderTextColor="#AFAFAF"
                        onChangeText={instr => onChangeInstructions(instr)}/>
                </View>
                <Pressable style={styles.confirmBtn} onPress={() => navigation.navigate('DrAppointments')}>
                    <TouchableOpacity>
                        <Text style={styles.confirmText}>Confirm</Text>
                    </TouchableOpacity>
                </Pressable>
               
            </SafeAreaView> 
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
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
        fontWeight: "800",
    },
    selectView: {
        width: "80%",
        backgroundColor: "#EAEAEA",
        borderRadius: 25,
        height: 60,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
    },
    signUp: {
        color: "#755293",
        fontWeight: '500',
    },
    forgot: {
        color: 'black',
        fontWeight: '500',
    },
    confirmBtn: {
        width: '80%',
        backgroundColor: "#755293",
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    confirmText: {
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
export default ApptSettings;
