import React from "react";
import CalendarStrip from 'react-native-calendar-strip';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput, StatusBar, Image, FlatList, StyleSheet, Dimensions } from "react-native";
import { Fonts, Colors, Sizes } from "../../constants/styles";
import SelectPicker from 'react-native-form-select-picker';

const { width } = Dimensions.get('screen');

const ApptConfirmation = ({ navigation, route }) => {

    //const image = route.params.image;
    const name = route.params.name;
    const type = route.params.type;
    const time = route.params.selectedSlot;
    const reason = route.params.reason;
    const symptoms = route.params.text;
    const date = route.params.selectDate;

    function doctorInfo() {

        return (
            <View style={{
                flexDirection: 'row',
                marginHorizontal: Sizes.fixPadding * 1.5,
                
            }}>
                <View style={{ justifyContent: 'center', marginTop: Sizes.fixPadding, }}>
                <Text style={{ ...Fonts.black18Bold, marginTop: Sizes.fixPadding }}>Appointment Confirmed!</Text>
                <Text style={{ ...Fonts.black18Bold, marginTop: Sizes.fixPadding, marginBottom: 5 }}>Appointment Details:</Text>
                       
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        width: width - 140.0,
                    }}>
                       
                       <Text style={{ ...Fonts.black16Bold, }}>{name}Dr. Bob Smith</Text>
                            <Text style={{ ...Fonts.primaryColor13Bold }}>View Profile</Text>
                    </View>
                    
                    <Text style={{ ...Fonts.gray17Regular, marginTop: Sizes.fixPadding - 7.0 }}>Specialty: {type}Radiologist</Text>
                    <Text style={{ ...Fonts.gray17Regular, marginTop: Sizes.fixPadding - 7.0 }}>Date: {date}3/11</Text>
                    <Text style={{ ...Fonts.gray17Regular, marginTop: Sizes.fixPadding - 7.0 }}>Time: {time}</Text>
                    <Text style={{ ...Fonts.gray17Regular, marginTop: Sizes.fixPadding - 7.0 }}>Reason: {reason}</Text>
                    <Text style={{ ...Fonts.gray17Regular, marginTop: Sizes.fixPadding - 7.0 }}>Symptoms: {symptoms}</Text>
                </View>
            </View>
        )
    }

    function scheduleInfo() {
        return (
                <View style={styles.scheduleContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('PatientDashboard', {
                    })}>
                        <View style={styles.scheduleButton}>
                            <Text style={{ ...Fonts.white20Regular }}>Return to your dashboard</Text>
                        </View>
                    </TouchableOpacity>
                </View>
        )
    }

    return (
        
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
            
            {

                <View style={{ flex: 1 }}>
                    {doctorInfo()}
                </View>
            }
        </ScrollView>
        </SafeAreaView>
        {scheduleInfo()}
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
    doctorImageContainer: {
        height: 90.0,
        width: 90.0,
        borderRadius: 45.0,
        shadowOpacity: 0.5,
        shadowRadius: Sizes.fixPadding,
        elevation: 20.0,
        overflow: 'hidden',
        backgroundColor: 'white',
        borderColor: "#755293",
        borderWidth: 1.0,
        marginRight: Sizes.fixPadding,
        marginTop: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding + 3.0,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 0 },
    },
    inputView: {
        width: "80%",
        backgroundColor: "#EAEAEA",
        borderRadius: 25,
        height: 60,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
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
    inputText: {
        height: 50,
        color: "#777777",
        fontWeight: "800",
    },
    slotContainerStyle: {
        alignItems: 'center',
        borderRadius: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding * 2.0,
        justifyContent: 'center',
        borderWidth: 1.0,
        marginRight: Sizes.fixPadding * 2.0,
        height: 45.0,
        width: 100.0,
    },
    button: {
        width: '80%',
        backgroundColor: "#755293",
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "800",
    },
    scheduleButton: {
        backgroundColor: "#755293",
        paddingVertical: Sizes.fixPadding + 3.0,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding + 5.0,
    },
    scheduleContainer: {
        backgroundColor: 'white',
        flex: 1,
        height: 75.0,
        position: 'absolute', bottom: 0.0, width: '100%',
        paddingHorizontal: Sizes.fixPadding * 2.0,
        justifyContent: 'center',
    },
    dividerStyle: {
        backgroundColor: Colors.lightGray,
        height: 0.90,
        width: '100%',
        marginBottom: Sizes.fixPadding
    }
})

export default ApptConfirmation;