import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, TextInput, Image, FlatList, StatusBar, TouchableOpacity, SafeAreaView, Dimensions } from "react-native";
import { Fonts, Colors, Sizes } from "../../constants/styles";

const { width } = Dimensions.get('screen');

export default function DoctorList(props) {
    const { route, navigation } = props;
    const type = "Prenatal"

    const doctorsList = [
        { id: '1', name: 'Dr.Ronan Peiterson', yearsOfExperience: 8, rating: 4.9, reviews: 135, image: require('../../assets/doctors/doctor-1.png') },
        { id: '2', name: 'Dr.Brayden Thread', yearsOfExperience: 10, rating: 4.7, reviews: 235, image: require('../../assets/doctors/doctor-2.png') },
        { id: '3', name: 'Dr.Appollonia Ellison', yearsOfExperience: 7, rating: 4.8, reviews: 70, image: require('../../assets/doctors/doctor-3.png') },
        { id: '4', name: 'Dr.Beatriz Watson', yearsOfExperience: 5, rating: 5.0, reviews: 50, image: require('../../assets/doctors/doctor-4.png') },
        { id: '5', name: 'Dr.Diego Williams', yearsOfExperience: 15, rating: 4.9, reviews: 512, image: require('../../assets/doctors/doctor-5.png') },
        { id: '6', name: 'Dr.Shira Gates', yearsOfExperience: 4, rating: 4.4, reviews: 15, image: require('../../assets/doctors/doctor-6.png') },
        { id: '7', name: 'Dr.Antonia Warner', yearsOfExperience: 7, rating: 4.6, reviews: 99, image: require('../../assets/doctors/doctor-7.png') },
        { id: '8', name: 'Dr.Linnea Bezos', yearsOfExperience: 2, rating: 4.5, reviews: 9, image: require('../../assets/doctors/doctor-8.png') },
    ];

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(doctorsList);
    }, []);

    const filterSearch = (search) => {
        if (search) {
            const data = doctorsList.filter(
                function (item) {
                    const itemData = item.name ? item.name.toUpperCase()
                        : ''.toUpperCase();
                    const searchData = search.toUpperCase();
                    return itemData.indexOf(searchData) > -1;
                });
            setFilteredData(data);
            setSearch(search);
        }
        else {
            setFilteredData(doctorsList);
            setSearch(search);
        }
    }

    function searchDr() {
        return (
            <View style={styles.headerSearchStyle}>
                <View style={{ flex: 1 }}>
                    <TextInput
                        placeholder={`Search Doctors`}
                        style={{ ...Fonts.gray17Regular, marginLeft: Sizes.fixPadding, }}
                        onChangeText={searchDoc => filterSearch(searchDoc)}
                        value={search}
                    />
                </View>
            </View>
        )
    }

    function doctors() {
        const renderItem = ({ item }) => {
            return (
                <View style={{ justifyContent: 'center', marginTop: 15.0, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.doctorImageContainerStyle}>
                            <Image
                                source={item.image}
                                resizeMode="contain"
                                style={{
                                    height: 109.0, width: 109.0, borderRadius: 75.0,
                                    overflow: 'hidden',
                                }}
                            />
                        </View>

                        <View>
                            <Text style={{ ...Fonts.black16Bold }}>{item.name}</Text>
                            <Text style={{ ...Fonts.gray17Regular, marginTop: Sizes.fixPadding - 7.0 }}>{type}</Text>
                            <Text style={{ ...Fonts.primaryColor16Regular, marginTop: Sizes.fixPadding - 7.0 }}>
                                {item.yearsOfExperience} Years Experience
                            </Text>
                        </View>
                    </View>

                    <View style={styles.bookContainerStyle}>
                        <TouchableOpacity onPress={() => navigation.navigate('messages', {
                            image: item.image,
                            name: item.name,
                            type: type,
                            experience: item.yearsOfExperience,
                            rating: item.rating,
                        })}>
                            <View style={styles.messageButtonStyle}>
                                <Text style={{ ...Fonts.primaryColorBold }}>View Profile</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('PatientForm', {
                            image: item.image,
                            name: item.name,
                            type: type,
                            // experience: item.yearsOfExperience,
                            // rating: item.rating,
                        })}>
                            <View style={styles.bookAppointmentButtonStyle}>
                                <Text style={{ color: "white" }}>Book Appointment</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.dividerStyle}>
                    </View>
                </View>
            )
        }

        return (
            <FlatList
                data={filteredData}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0 }}
            />
        )
    }

    return <SafeAreaView style={{ flex: 1, }} backgroundColor="rgba(0,0,0,0)">
        <StatusBar backgroundColor={Colors.primary} />
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            {searchDr()}
            {doctors()}
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    headerSearchStyle: {
        flexDirection: 'row',
        backgroundColor: "white",
        borderRadius: Sizes.fixPadding,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        alignItems: 'center',
        paddingVertical: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginTop: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding,
    },
    headerContainerStyle: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 40.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding,
        alignItems: 'center'
    },
    doctorImageContainerStyle: {
        height: 110.0,
        width: 110.0,
        borderRadius: 75.0,
        backgroundColor: 'white',
        borderColor: '#B3BCFC',
        borderWidth: 1.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginTop: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding + 3.0,
        shadowColor: Colors.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: Sizes.fixPadding,
        elevation: 20.0,
        overflow: 'hidden',
    },
    bookContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Sizes.fixPadding * 2.0,
    },
    messageButtonStyle: {
        width: width / 2 - 30,
        borderColor: Colors.primary,
        borderWidth: 1.0,
        backgroundColor: '#E3E6FE',
        borderRadius: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
    },
    bookAppointmentButtonStyle: {
        width: width / 2 - 30,
        borderColor: "black",
        borderWidth: 1.0,
        backgroundColor: '#755293',
        borderRadius: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
    },
    dividerStyle: {
        backgroundColor: Colors.lightGray,
        height: 0.80,
        marginTop: Sizes.fixPadding * 2.0,
        marginHorizontal: Sizes.fixPadding * 2.0
    }
})
