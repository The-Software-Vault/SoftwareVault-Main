import React, { useState } from "react";
import { Text, View, useWindowDimensions, FlatList, Dimensions, Image, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import { Fonts, Colors, Sizes } from "../../constants/styles";
import Dialog from "react-native-dialog";

//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//const Tab = createBottomTabNavigator();

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const { width } = Dimensions.get('screen');

export default function Appointments (props) {

    const {route, navigation} = props;

    const scheduleButton = () => {
        return (
        <View style = {{marginBottom: 4}}>
            
            <Pressable style={styles.scheduleButton} onPress={() => navigation.navigate('DoctorList', route.params)}>
                        <Text style={{ ...Fonts.white20Regular }}>Schedule Appointment</Text>
                    </Pressable>
        </View>
        )
    }
    const pastDataList = [
        {
            id: '1',
            date: '31 March 2022',
            time: '10:30 AM',
            doctor: 'Dr.Beatriz Watson',
            type: 'Dentist'
        },
        {
            id: '2',
            date: '1 April 2022',
            time: '5:30 PM',
            doctor: 'Dr.Beatriz Watson',
            type: 'Dentist'
        },
        {
            id: '3',
            date: '4 April 2022',
            time: '10:00 AM',
            doctor: 'Dr.Diego Williams',
            type: 'General Physician'
        },
        {
            id: '4',
            date: '10 April 2022',
            time: '11:00 AM',
            doctor: 'Dr.Shira Gates',
            type: 'Nutritian'
        },
    ];
    
    const canceledDataList = [
        //will need to store canceled appointments
        {
            id: '1',
            date: '8 April 2022',
            time: '5:00 PM',
            doctor: 'Dr.Shira Gates',
            type: 'Nutritian'
        },
        {
            id: '2',
            date: '31 March 2022',
            time: '1:30 PM',
            doctor: 'Dr.Linnea Bezos',
            type: 'Cough & Fever'
        },
    ];
    
    //add option to view details/doctor notes from previous appointment?
    //also should be able to choose to message the doctor or view their profile
    const PastScreen = () => {
        const renderItem = ({ item }) => (
            <View style={{ marginHorizontal: 20.0 }}>
                <View style={{ flexDirection: 'row', marginVertical: 20.0 }}>
                    <View style={styles.pasetCircleStyle}>
                        <Text style={{ textAlign: 'center', color: Colors.primary, fontSize: 18, }}>{item.date}</Text>
                    </View>
                    <View style={{ marginLeft: 10.0 }}>
                        <Text style={{ ...Fonts.black18Bold }}>{item.time}</Text>
                        <Text style={{ marginVertical: 8.0, ...Fonts.black16Regular }}>{item.doctor}</Text>
                        <Text style={{ ...Fonts.primaryColorRegular }}>{item.type}</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: Colors.lightGray, height: 0.50, }}>
                </View>
            </View>
        )
    
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <FlatList
                    data={pastDataList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                />
                {scheduleButton()}
            </View>
        )
    
    }
    
    //should be able to view the doctors profile
    //provide reason for cancellation perhaps?
    const CanceledScreen = () => {
        const renderItem = ({ item }) => (
            <View style={{ marginHorizontal: 20.0 }}>
                <View style={{ flexDirection: 'row', marginVertical: 20.0 }}>
                    <View style={styles.cancellCircleStyle}>
                        <Text style={{ textAlign: 'center', color: '#F88C85', fontSize: 18, }}>{item.date}</Text>
                    </View>
                    <View style={{ marginLeft: Sizes.fixPadding }}>
                        <Text style={{ ...Fonts.black18Bold }}>{item.time}</Text>
                        <Text style={{ marginVertical: Sizes.fixPadding - 2.0, ...Fonts.black16Regular }}>{item.doctor}</Text>
                        <Text style={{ ...Fonts.primaryColorRegular }}>{item.type}</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: Colors.lightGray, height: 0.50, }}>
                </View>
            </View>
        )
    
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <FlatList
                    data={canceledDataList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                />
                {scheduleButton()}
            </View>
        )
    }

    const [activeDataList, setActiveDataList] = React.useState([
        {
            id: '1',
            date: '4 April 2022',
            time: '10:00 AM',
            doctor: 'Dr.Ronan Peiterson',
            type: 'General Physician'
        },
        {
            id: '2',
            date: '18 April 2022',
            time: '12:30 PM',
            doctor: 'Dr.Brayden Thread',
            type: 'Cardiologist'
        },
        {
            id: '3',
            date: '25 April 2022',
            time: '2:30 PM',
            doctor: 'Dr.Brayden Thread',
            type: 'Cardiologist'
        },
    ]);

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'first', title: 'Upcoming', },
        { key: 'second', title: 'Past' },
        { key: 'third', title: 'Canceled', },
    ]);

    const [showModal, setShowModal] = React.useState(false);

    const [id, setId] = useState('');

    const renderScene = ({ route, jumpTo }) => {
        switch (route.key) {
            case 'first':
                return <UpcomingScreen jumpTo={jumpTo} />;
            case 'second':
                return <PastScreen jumpTo={jumpTo} />;
            case 'third':
                return <CanceledScreen jumpTo={jumpTo} />;
        }
    };

    const removeActive = (id) => {
        let filterArray = activeDataList.filter((val, i) => {
            if (val.id !== id) {
                return val;
            }
        })
        setActiveDataList(filterArray);
    }

    const showDialog = () => {
        return (
            <Dialog.Container visible={showModal} contentStyle={styles.dialogContainerStyle}>
                <View style={styles.dialogStyle}>
                    <Text style={{ textAlign: 'center', ...Fonts.black16Regular }}>Are you sure you want to cancel this appointment?</Text>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: Sizes.fixPadding * 2.0, }}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                setShowModal(false);
                            }}
                            style={styles.dialogNoButtonStyle}>
                            <Text style={{ ...Fonts.primaryColor17Bold }}>No</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                setShowModal(false);
                                removeActive(id);
                            }}
                            style={styles.dialogYesButtonStyle}>
                            <Text style={{ ...Fonts.white17Bold }}>Yes</Text>
                        </TouchableOpacity>
                    </View>
                </ View>
            </Dialog.Container>
        )
    }

    const UpcomingScreen = () => {
        const renderItem = ({ item }) => (
            <View style = {{marginHorizontal: 20}}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginVertical: Sizes.fixPadding * 2.0 }}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={styles.activeCircleStyle}>
                            <Text style={{ textAlign: 'center', color: '#8ECC90', fontSize: 18, }}>{item.date}</Text>
                        </View>
                        <View style={{ marginLeft: Sizes.fixPadding }}>
                            <Text style={{ ...Fonts.black18Bold }}>{item.time}</Text>
                            <Text style={{ marginVertical: 8.0, ...Fonts.black16Regular }}>{item.doctor}</Text>
                            <Text style={{ ...Fonts.primaryColorRegular }}>{item.type}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style = {styles.button} onPress={() => { setShowModal(true); setId(item.id); }}>
                        <Text style = {styles.buttonTxt}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: Colors.lightGray, height: 0.50, }}>
                </View>
                {showDialog()}
            </View>
        )

        return (
            activeDataList.length === 0 ?
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.noActiveDataContainerStyle}>
                    <Text style={{ ...Fonts.gray17Regular, marginTop: Sizes.fixPadding * 2.0 }}>No Upcoming Appointments</Text>
                </View>  
                {scheduleButton()}
                </View>
                :
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <FlatList
                        data={activeDataList} //change to grab the appointments made by this user
                        keyExtractor={(item) => `${item.id}`}
                        renderItem={renderItem}
                    />
                    {scheduleButton()}
                </View>
        )
    }

    return (
        <Tab.Navigator>
      <Tab.Screen name="Upcoming" component={UpcomingScreen} />
      <Tab.Screen name="Past" component={PastScreen} />
      <Tab.Screen name="Canceled" component={CanceledScreen} />
     </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
    },
    pasetCircleStyle: {
        height: 90.0,
        width: 90.0,
        borderRadius: 45.0,
        backgroundColor: '#E9EBFE',
        borderColor: Colors.primary,
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10.0,
    },
    scheduleButton: {
        width: '100%',
        backgroundColor: "#755293",
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 3,
    },
    scheduleButtonTxt: {
        color: "#ffffff",
        fontWeight: "700",
        fontSize: 18
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
    },
    button: {
        width: 15,
        height: 20,
    },
    buttonTxt: {
        color: "red"
    },
    activeCircleStyle: {
        height: 90.0,
        width: 90.0,
        borderRadius: 45.0,
        backgroundColor: '#E8F5E9',
        borderColor: '#8ECC90',
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10.0,
    },
    cancellCircleStyle: {
        height: 90.0,
        width: 90.0,
        borderRadius: 45.0,
        backgroundColor: '#FFEBEE',
        borderColor: '#F88C85',
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10.0,
    },
    noActiveDataContainerStyle: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: Sizes.fixPadding * 2.0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dialogStyle: {
        height: 110.0,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },
    dialogNoButtonStyle: {
        flex: 0.50,
        backgroundColor: '#E0E0E0',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50.0,
        borderRadius: 8.0,
        marginRight: 15.0,
    },
    dialogYesButtonStyle: {
        flex: 0.50,
        backgroundColor: "#755293",
        alignItems: 'center',
        justifyContent: 'center',
        height: 50.0,
        borderRadius: 8.0,
        marginLeft: 15.0,
    },
    dialogContainerStyle: {
        borderRadius: Sizes.fixPadding,
        width: width - 90,
        paddingHorizontal: Sizes.fixPadding * 3.0,
        paddingTop: -Sizes.fixPadding,
        paddingBottom: Sizes.fixPadding * 2.0
    }
})