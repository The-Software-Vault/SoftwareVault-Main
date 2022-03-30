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
PatientForm, ApptConfirmation, PatientProfile, DoctorList, Appointments} from "./screens";

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
                <Stack.Screen name="DoctorDashboard" component={DoctorDashboard} options={{
                    title: "Doctor Dashboard",
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
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }} />
                <Stack.Screen name="PatientProfile" component={PatientProfile} options={{
                    title:"Patient Profile",
                    headerStyle: {
                        backgroundColor: "#755293",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                }} />
                <Stack.Screen name="DoctorList" component={DoctorList} options={{
                    headerTitle: "DoctorList",
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
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default () => {
    return <App />;
};
