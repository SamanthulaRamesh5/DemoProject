import 'react-native';
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./login";
import { UserRegistration } from "./registration";
import DashBoard from "./dashboard";
import DetailesScreen from "./details";
const AppNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='LoginScreen'>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={UserRegistration} />
            <Stack.Screen name="DashBoard" component={DashBoard} />
            <Stack.Screen name="Details" component={DetailesScreen} />
        </Stack.Navigator>
    );
};
export default AppNavigator;