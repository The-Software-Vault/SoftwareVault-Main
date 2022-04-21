import React, {useState, useEffect} from "react";
import { Fonts, Colors, Sizes } from "../../constants/styles"
import {StyleSheet, View, FlatList, Text, TextInput, Pressable, TouchableOpacity} from  "react-native";
import { MessageRepository } from "../../API/messageRepository";




export default function Messages( props ) {
    

    const {route, navigation} = props;
    const [messagesList, setMessagesList] = useState([]);

    useEffect(() => { 
        
        msgs.getChatHistory({userId: 1, doctorId: 4}).then(res => {
            console.log("Messages + Details: ", res)
            setMessagesList(res);
        })

    }, []);

    function messages() {
        const renderItem = ({ item }) => {
            return (
                <View style={{
                    alignItems: item.isSender == true ? 'flex-end' : 'flex-start',
                    marginHorizontal: Sizes.fixPadding,
                    marginVertical: Sizes.fixPadding - 5.0,
                }}>
                    <View style={{
                        ...styles.messageContainerStyle,
                        backgroundColor: item.isSender == true ? '#755293' : '#E0E0E0',
                        borderBottomLeftRadius: item.isSender == true ? Sizes.fixPadding - 5.0 : 0.0,
                        borderBottomRightRadius: item.isSender == true ? 0.0 : Sizes.fixPadding - 5.0,
                    }}>
                        <Text style={item.isSender == true ? { ...Fonts.white16Regular } : { ...Fonts.black16Regular }}>{item.message}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {item.isSender == true ?
                            item.isSeen == true ?
                            /*
                                <Ionicons name="checkmark-done-sharp" size={18} color='#2497F3' style={{ marginTop: Sizes.fixPadding }} />
                                :
                                <Ionicons name="checkmark-sharp" size={18} color='#2497F3' style={{ marginTop: Sizes.fixPadding }} />
                            */
                                <TouchableOpacity size={18} color='#2497F3' style={{ marginTop: Sizes.fixPadding }} />
                                :
                                <TouchableOpacity size={18} color='#2497F3' style={{ marginTop: Sizes.fixPadding }} />
                            : null
                        }
                        <Text style={{ ...Fonts.gray14Regular, marginLeft: Sizes.fixPadding - 3.0, marginTop: Sizes.fixPadding }}>{item.time}</Text>
                    </View>
                </View>
            )
        }

        return (
            <FlatList
                data={messagesList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        )
    }

    function addMessage({ message }) {
        const oldMessages = messagesList;
        let date = Date();
        let hour = (new Date(date)).getHours();
        let minute = (new Date(date)).getMinutes();
        let AmPm = hour >= 12 ? 'PM' : 'AM';
        let finalhour = hour >= 12 ? (hour - 12) : hour;

        const newMessage = {
            //id: messagesList.length + 1,
            message: message,
            time: `${finalhour}:${minute} ${AmPm}`,
            isSender: true,
            isSeen: false,
        }

        oldMessages.push(newMessage);
        setMessagesList(oldMessages);
    }

    function typeMessage() {

        const [message, setMessage] = useState('');

        return (
            <View style={styles.bottomContainerStyle}>
                <View style={styles.textFieldContainerStyle}>
                    <TextInput
                        value={message}
                        onChangeText={setMessage}
                        placeholder='Type a Message'
                        style={{ ...Fonts.white16Regular }}
                        placeholderTextColor='white'
                    />
                </View>
                <View style={styles.sendButtonStyle}>
                    <Pressable style={styles.msgBtn} onPress={() => {
                        if (message != '') {
                            addMessage({ message: message })
                            setMessage('');
                        }
                    }}/>
                </View>
            </View>
        )
    }
    return <View style={{ flex: 1, backgroundColor: 'white' }}>
            {messages()}
            {typeMessage()}
        </View>
        /*
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
        */
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
    headerContainerStyle: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 55.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: 0.90,
    },
    messageContainerStyle: {
        borderTopRightRadius: Sizes.fixPadding - 5.0,
        borderTopLeftRadius: Sizes.fixPadding - 5.0,
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainerStyle: {
        flexDirection: 'row',
        marginBottom: Sizes.fixPadding,
        alignItems: 'center',
        marginHorizontal: Sizes.fixPadding,
    },
    textFieldContainerStyle: {
        backgroundColor: "#755293",
        borderRadius: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding + 3.0,
        flex: 1,
        paddingLeft: Sizes.fixPadding,
    },
    sendButtonStyle: {
        height: 50.0,
        width: 50.0,
        borderRadius: 25.0,
        backgroundColor: '#E0E0E0',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: Sizes.fixPadding,
    }
})
