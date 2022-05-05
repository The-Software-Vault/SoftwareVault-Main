import React from "react";
import CalendarStrip from 'react-native-calendar-strip';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput, StatusBar, Image, FlatList, StyleSheet, Dimensions } from "react-native";
import { Fonts, Colors, Sizes } from "../../constants/styles";
import SelectPicker from 'react-native-form-select-picker';
import SelectMultiple from 'react-native-select-multiple'

//const { width } = Dimensions.get('screen');

const timeSlots = ["Completely unavailable", "8:00 A.M.", "8:30 A.M.", "9:00 A.M.", "9:30 A.M.", "10:00 A.M.", "10:30 A.M.", "11:00 A.M.", "11:30 A.M.", "12:00 P.M.", "12:30 P.M.", "1:00 P.M.", "1:30 P.M.", "2:00 P.M.", "2:30 P.M.", "3:00 P.M.", "3:30 P.M.", "4:00 P.M.", "4:30 P.M.", "5:00 P.M.", "5:30 P.M.", "6:00 P.M.", "placeholder" ]

const SpecificSettings = ({ navigation, route }) => {

    const name = route.params.name;
    const type = route.params.type;
    const image = route.params.image;

    const [selectedSlot, setSelectedSlot] = React.useState([]);
    const [selectDate, setSelectDate] = React.useState(new Date());
    const [reason, onChangeReason] = React.useState('');
    const [schedule, setSchedule] = React.useState(false);
    const [symptoms, onChangeSymptoms] = React.useState("N/A");
    const [imageLink, onChangeImage] = React.useState("");
    const [showPicker, onChangePicker] = React.useState(false);

    function scheduleInfo() {
        return (
            <View style={styles.scheduleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('ApptSettings', {
                    //pass in selected data
                    //save data for this particular date to the DB
                })}>
                    <View style={styles.scheduleButton}>
                        <Text style={{ ...Fonts.white20Regular }}>Save</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ApptSettings', {
                    //cancel selected data for this date
                })}>
                    <View style={styles.scheduleButton}>
                        <Text style={{ ...Fonts.white20Regular }}>Back</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    //dates that this specific doctor isn't available on
    const datesBlacklistFunc = date => {
        return date.isoWeekday() === 7;
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontFamily: 'NotoSans_Regular', color: 'black', fontSize: 16.0, marginTop: 20.0 }}>Date Availability</Text>
            </View>
            <CalendarStrip
                style={{ height: 100, paddingTop: Sizes.fixPadding, paddingBottom: Sizes.fixPadding, }}
                highlightDateContainerStyle={{
                    backgroundColor: "#755293",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                dateNumberStyle={{ color: 'black', fontSize: 17.0 }}
                dateNameStyle={{ color: 'black', fontSize: 15.0 }}
                highlightDateNameStyle={{ color: 'white', fontSize: 15.0 }}
                highlightDateNumberStyle={{ color: 'white', fontSize: 17.0 }}
                //datesBlacklist={datesBlacklistFunc} 
                disabledDateOpacity={0.6}
                scrollable={true}
                upperCaseDays={false}
                styleWeekend={true}
                disabledDateNameStyle={{ color: 'gray', fontSize: 15.0 }}
                disabledDateNumberStyle={{ color: 'gray', fontSize: 17.0, }}
                useIsoWeekday={false}
                onDateSelected={(date) =>
                    setSelectDate(date.format('MM-DD-YYYY'))
                }
            // selectedDate={selectDate} 
            />
            <View style={styles.dividerStyle}>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontFamily: 'NotoSans_Regular', color: 'black', fontSize: 16.0, marginTop: 10.0 }}>Time Availability</Text>
            </View>
            <Text style={{ fontFamily: 'NotoSans_Regular', color: 'black', fontSize: 14.0, marginTop: 20.0, marginBottom: 5, marginStart: 5, marginEnd: 5 }}>Select the times you are unavailable for on your selected day:</Text>

            <SelectMultiple
                contentContainerStyle={styles.selectView}
                items={timeSlots}
                selectedItems={selectedSlot}
                onSelectionsChange={time => setSelectedSlot(time)} />
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
        marginBottom: 10,
    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "800",
    },
    scheduleButton: {
        backgroundColor: "#755293",
        marginRight: 5,
        paddingVertical: Sizes.fixPadding + 3.0,
        width: 190,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding + 5.0,
    },
    scheduleContainer: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: "row",
        height: 50.0,
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

export default SpecificSettings;