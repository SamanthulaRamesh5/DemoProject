import React, { useState } from 'react';
import {View, Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Header=({name,onPress})=>{
    const[login,setLogin]=useState();
    const navigation=useNavigation();
    const goBack=()=>{
        navigation.goBack();
    }
    const logOut= async ()=>{
        console.log("Logout");
        let value = false
        await AsyncStorage.setItem('UserData',JSON.stringify(value))
           AsyncStorage.removeItem("UserData");
            navigation.navigate("Login");
    }
    return(
        <View style={{flexDirection:'row',padding:10,width:'100%'}}>
            <Icon  name="chevron-left" size={20} onPress={goBack} color="white" style={{marginTop:5,width:'20%'}} />
            <Text style={styles.text}>{name}</Text>
            <MaterialCommunityIcons  name="logout" size={20} onPress={onPress} color="white" style={{marginTop:5,width:'25%'}}/>
            </View>
    )
}
const styles=StyleSheet.create({
    text:{
        color:'white',
        fontSize:20,
        width:'75%',
    }
})

export default Header;