import React from "react";
import {StyleSheet, View, FlatList, Text, Pressable, TouchableOpacity} from  "react-native";

export default function Messages( props ) {

    const {route, navigation} = props;

    return (
        <View style={styles.container}>
            <FlatList
                data = {route.params}
                renderItem={({ item }) => (
                    <Pressable style={styles.msgBtn} onPress={() => navigation.navigate('messages', item)}>
                        <TouchableOpacity>
                            <Text >{item.content}</Text>
                        </TouchableOpacity>
                    </Pressable>
                )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    msgBtn: {
        width: "80%",
        backgroundColor: "#755293",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 10,
    },
})