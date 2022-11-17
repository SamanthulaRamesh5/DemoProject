import React, { useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';

type Props = {
    body: string,
    title: string;
    id: number;
    userId: number;
}
const DetailesScreen = ({ navigation, route }) => {
    const [data, setData] = useState(route.params.data);
    const logOut= async ()=>{
        console.log("Logout");
        let value = false
        await AsyncStorage.setItem('UserData',JSON.stringify(value))
           AsyncStorage.removeItem("UserData");
            navigation.navigate("Login");
    }
    return (
        <>
            <View style={{ paddingTop: 10, flexDirection: 'row',backgroundColor:'blue' }}>
                <Header name="Details" onPress={logOut}></Header>
                <Text style={{ paddingLeft: 35, paddingTop: 7, fontSize: 20, color: 'black' }}>Details</Text>
            </View>
            <View style={{ backgroundColor: 'blue', margin: 10, padding: 10, borderRadius: 10, opacity: 0.8 }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textTransform: 'capitalize' }}>{data.title}</Text>
                <Text style={{ color: 'white', fontSize: 16 }}>{data.body}</Text>
                <Text></Text>
            </View>
        </>
    );
}
export default DetailesScreen;

