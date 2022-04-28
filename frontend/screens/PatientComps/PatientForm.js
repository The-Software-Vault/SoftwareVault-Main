import React from "react";
import CalendarStrip from 'react-native-calendar-strip';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image, StyleSheet, Dimensions } from "react-native";
import { Fonts, Colors, Sizes } from "../../constants/styles";
import SelectPicker from 'react-native-form-select-picker';
import * as ImagePicker from "react-native-image-picker";

const timeSlots = ["8:00 A.M.", "8:30 A.M.", "9:00 A.M.", "9:30 A.M.", "10:00 A.M.", "10:30 A.M.", "11:00 A.M.", "11:30 A.M.", "12:00 P.M.", "12:30 P.M.", "1:00 P.M.", "1:30 P.M.", "2:00 P.M.", "2:30 P.M.", "3:00 P.M.", "3:30 P.M.", "4:00 P.M.", "4:30 P.M.", "5:00 P.M.", "5:30 P.M.", "6:00 P.M.", ]

//add open dates & times set by doctor on their profile - disable unopen ones

const { width } = Dimensions.get('screen');

const PatientForm = ({ navigation, route }) => {

    const name = route.params.name;
    const type = route.params.type;
    const image = route.params.image;

    const [selectedSlot, setSelectedSlot] = React.useState('');
    const [selectDate, setSelectDate] = React.useState('');
    const [reason, onChangeReason] = React.useState('');
    const [schedule, setSchedule] = React.useState(false);
    const [symptoms, onChangeSymptoms] = React.useState("N/A");
    const [imageLinks, addUploadImage] = React.useState([]);
    const [value, setValue] = React.useState(0);

    function images() {
        const imageList = imageLinks.map((img, index) => 
            <Image
                key={index}
                source={{ uri: img.uri }}
                style={{ width: 200, height: 200, marginTop: 20}}
            />
        )
        return (
            <View>{imageList}</View>
        )
    }

    function uploadImage() {
        const options = {
            noData: true
        };
        ImagePicker.launchImageLibrary(options, response => {
            const newArr = imageLinks;
            newArr.push(response.assets[0]);
            addUploadImage(newArr);
        });
        setValue(1)
        return (
            <View></View>
        )
    }

    function doctorInfo() {

        return (
            <View style={{
                flexDirection: 'row',
                marginHorizontal: Sizes.fixPadding * 1.5,
                
            }}>
                <View style={styles.doctorImageContainer}>
                    <Image
                        source={image}
                        resizeMode="contain"
                        style={{
                            height: 90.0, width: 90.0, borderRadius: 45.0,
                        }}
                    />
                </View>
                <View style={{ justifyContent: 'center', marginTop: Sizes.fixPadding, }}>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        width: width - 140.0,
                    }}>
                        <View style={{ width: width / 3.0, }}>
                            <Text>{name}</Text>
                        </View>
                        <Text>View Profile</Text>
                    </View>
                    <Text>{type}</Text>
                </View>
            </View>
        )
    }
    

    function scheduleInfo() {
        return (
                <View style={styles.scheduleContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('ApptConfirmation', {
                        name, type, selectedSlot, selectDate, reason, symptoms, imageLinks, image
                    })}>
                        <View style={styles.scheduleButton}>
                            <Text style={{ ...Fonts.white20Regular }}>Schedule Appointment</Text>
                        </View>
                    </TouchableOpacity>
                </View>
        )
    }

    //dates that this specific doctor isn't available on
    const datesBlacklistFunc = date => {
        return date.isoWeekday() === 7;
    }

    //have to double tap the date to get it to highlight for some reason - but the date does get selected on a single tap still 
    function calendar() {
        return (
            <View style={{flex: 1}}>
                <View>
                    <CalendarStrip
                        style={{ height: 100, paddingTop: Sizes.fixPadding * 2.0, paddingBottom: Sizes.fixPadding, }}
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
                </View>
            </View>
        );
    }

    return (
        
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
            
            {

                <View style={{ flex: 1 }}>
                    {doctorInfo()}
                    {calendar()}
                    <View style={styles.dividerStyle}>
                     </View>
                   
                    <View style={styles.container}>
                   {/*<Text>Appointment Date: {selectDate}</Text>*/}
                    <Text style={{marginBottom: 2}}>Appointment Time</Text>
                    <SelectPicker style={styles.selectView} onValueChange={(value) => {
                        setSelectedSlot(value);
                    }}
                    placeholder="Select an appointment time"
                    selected = {selectedSlot}
                    ><Text style={styles.inputText}>Select a Time</Text>
                    {Object.values(timeSlots).map((val, index) => (
				<SelectPicker.Item style={styles.inputText} label={val} value={val} key={index} />
			))}
                    </SelectPicker>
                    <View style={styles.dividerStyle}>
                </View>
                        <Text style={{marginBottom: 2}}>Appointment Information</Text>
                        <View style={styles.inputView}>
                    <TextInput
                        maxLength={30}
                        style={styles.inputText}
                        placeholder="Appointment Reason"
                        placeholderTextColor="#AFAFAF"
                        value={reason}
                        onChangeText={reason => onChangeReason(reason)}/>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        maxLength={40}
                        style={styles.inputText}
                        placeholder="Symptoms (optional)"
                        placeholderTextColor="#AFAFAF"
                        onChangeText={symptom => onChangeSymptoms(symptom)}/>
                </View>
                <View>
                {images()}
                </View>
                <TouchableOpacity onPress={uploadImage}>
                    <View style={styles.imgView}>
                        <View>
                            <Text>Upload Image</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                </View>
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
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 0 },
        marginRight: Sizes.fixPadding,
        marginTop: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding + 3.0,
    
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
    imgView: {
        width: "80%",
        backgroundColor: "#EAEAEA",
        borderRadius: 25,
        height: 60,
        marginBottom: 80,
        justifyContent: "center",
        padding: 20,
    },
    inputView2: {
        width: "80%",
        backgroundColor: "#EAEAEA",
        borderRadius: 25,
        height: 60,
        marginBottom: 80,
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

export default PatientForm;