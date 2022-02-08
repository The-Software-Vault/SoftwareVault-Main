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

import { Landing } from "./screens";
import { Login } from "./screens";
import { LoginDoctor } from "./screens";
import { CreateAccount } from "./screens";
import { PatientDashboard } from "./screens";
import { Appointments } from "./screens";
import { Messages} from "./screens";

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
        <NavigationContainer theme={theme} initialRouteName="Landing">
        <Stack.Navigator>
        <Stack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false }}
        />
        <Stack.Screen
         name="Login"
        component={Login}
        options={{title: "Patient Login" }}
        />
        <Stack.Screen
         name="LoginDoctor"
        component={LoginDoctor}
        options={{title: "Doctor Login" }}
        />
        <Stack.Screen
         name="CreateAccount"
        component={CreateAccount}
        options={{title: "Create an Account" }}
        />
        <Stack.Screen
         name="PatientDashboard"
        component={PatientDashboard}
        options={{title: "Your Dashboard" }}
        />
         <Stack.Screen
         name="Appointments"
        component={Appointments}
        options={{title: "Appointments" }}
        />
         <Stack.Screen
         name="Messages"
        component={Messages}
        options={{title: "Messages" }}
        />
        </Stack.Navigator>
        </NavigationContainer>
    );
};

export default () => {
    return <App />;
};
