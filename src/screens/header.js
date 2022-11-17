import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,Text,TextStyle,ViewStyle,StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
const Header=({name})=>{
    const navigation=useNavigation();
    const goBack=()=>{
        navigation.goBack();
    }
    return(
    <View style={{flexDirection:"row", padding:10,width:'100%'}}>
      <Icon  name="chevron-left" size={20} onPress={goBack} color="white"/>
      <Text style={styles.text}>{name}</Text>
    </View>
    );
    
}
const styles=StyleSheet.create({
    text:{
        color:'white',
        fontSize:20,
        width:'90%',
        fontWeight:'bold',
        // padding:25,
        paddingLeft:0,
        textAlign:'center',
        
    }
})

export default Header;