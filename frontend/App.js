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

import { Login } from "./screens";

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
            <View style ={{flex: 1}}>
                <Login />
            </View>
        </NavigationContainer>
    );
};

export default () => {
    return <App />;
};
