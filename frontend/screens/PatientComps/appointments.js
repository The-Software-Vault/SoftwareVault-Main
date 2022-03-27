import React from "react";
import {StyleSheet, View, FlatList, Text, Pressable} from  "react-native";

export default function Appointments( props ) {

    const {route, navigation} = props;

    return (
        <View style={styles.container}>
            <FlatList
                data = {route.params}
                renderItem={({ item }) => (
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Appointments', item)}>
                        <Text>{item.doctor}</Text>
                    </Pressable>
                )}
            />
            <Pressable style={styles.button} onPress={() => navigation.navigate('PatientForm', route.params)}>
                        <Text style = {styles.buttonText}>Schedule Appointment</Text>
                    </Pressable>
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
    }
})