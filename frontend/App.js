/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
//Import react-native-splash-screen.
import SplashScreen from  'react-native-splash-screen';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Login, Register, DoctorDashboard, PatientDashboard, Messages,
PatientForm, ApptConfirmation, PatientProfile, DoctorList, Appointments, Chat,
DrAppointments, ApptSettings, SpecificSettings, GeneralSettings, MedicalHistoryForm,
Insurance, EmergencyContactForm, Notifications, DoctorProfile, DoctorInfo} from "./screens";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const theme = {
    ...DefaultTheme,
    colors:{
    ...DefaultTheme.colors,
    border: "transparent",
    }
}

const App  = () => {

    //Hide Splash screen on app load.
    React.useEffect(() => {
        SplashScreen.hide();
    });

    return (
        <NavigationContainer theme={theme}>
            {/*<View style={{flex: 1}}> <Login /> </View>*/}
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{
                    title: "Login",
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }} />
                <Stack.Screen name="Register" component={Register} options={{
                    title: "Register",
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }} />
                <Stack.Screen name="PatientForm" component={PatientForm} options={{
                    title: "Appointment Form",
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }} />
                <Stack.Screen name="Chat" component={Chat} options={{
                    title: "Messages",
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }} />
                <Stack.Screen name="DoctorDashboard" component={DoctorDashboard} options={{
                    title: "Doctor Dashboard",
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }} />
                <Stack.Screen name="PatientDashboard" component={PatientDashboard} options={{
                    title:"Patient Dashboard",
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }} />
                <Stack.Screen name="PatientProfile" component={PatientProfile} options={{
                    title:"Settings",
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }} />
                <Stack.Screen name="DoctorProfile" component={DoctorProfile} options={{
                    title:"Settings",
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }} />
                <Stack.Screen name="DoctorList" component={DoctorList} options={{
                    headerTitle: "Find a Doctor",
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
                <Stack.Screen name="Appointments" component={Appointments} options={{
                    title: "Appointments",
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }} />
                <Stack.Screen name="DrAppointments" component={DrAppointments} options={{
                    title: "Appointments",
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }} />
                <Stack.Screen name="ApptConfirmation" component={ApptConfirmation} options={{
                    title: "ApptConfirmation",
                    headerShown: false,
                }} />
                <Stack.Screen name="messages" component={Messages} options={{
                    title: "Messages",
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }} />
                <Stack.Screen name="ApptSettings" component={ApptSettings} options={{
                    title: "Appointment Settings",
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }} />
                <Stack.Screen name="SpecificSettings" component={SpecificSettings} options={{
                    title: "Specific Availability Settings",
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }} />
                <Stack.Screen name="GeneralSettings" component={GeneralSettings} options={{
                    title: "General Availability Settings",
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }} />
                <Stack.Screen name="MedicalHistoryForm" component={MedicalHistoryForm} options={{
                    title: "Medical History Form",
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }} />
                <Stack.Screen name="DoctorInfo" component={DoctorInfo} options={{
                    title: "Extra Information",
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }} />
                <Stack.Screen name="Insurance" component={Insurance} options={{
                    title: "Insurance",
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }} />
                <Stack.Screen name="EmergencyContactForm" component={EmergencyContactForm} options={{
                    title: "Emergency Contact Form",
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default () => {
    return <App />;
};
