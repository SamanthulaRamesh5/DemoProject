import React,{useEffect} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from "./login";
import { UserRegistration } from "./registration";
import DashBoard from "./dashboard";
import DetailesScreen from "./details";
import { useState } from 'react';
import { validateLocaleAndSetLanguage } from "typescript";
const AppNavigator = () => {
    const Stack = createNativeStackNavigator();
    const [userdata,setUserdata]=useState({} || null);
     useEffect(()=>{
        getUser();
     },[]);

     const getUser=async()=>{
        const data= await  AsyncStorage.getItem("UserData");
        setUserdata(data)
     }

    return (
        <Stack.Navigator initialRouteName='LoginScreen'>
         { userdata ? ( <Stack.Screen name="DashBoard" component={DashBoard} options={{headerShown:false}}/>
):(  <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />)
}
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={UserRegistration} options={{headerShown:false}} />
            <Stack.Screen name="Dash" component={DashBoard} options={{headerShown:false}}/>
            <Stack.Screen name="Details" component={DetailesScreen} options={{headerShown:false}} />
        </Stack.Navigator>
    );
};
export default AppNavigator;