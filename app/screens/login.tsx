
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";
import { getAllJSDocTags } from "typescript";
type Style = {
  container: ViewStyle;
  inputView: ViewStyle;
  TextInput:TextStyle;
  title: TextStyle;
  text:TextStyle;
  forgot_button:TextStyle;
  loginBtn:TextStyle;
  signUpBtn:TextStyle;

};
 
export default function LoginScreen() {


  const navigation: NavigationProp<any, any>=useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const login=  ()=>{
      if(email && password){
      if(email=='123' && password=='123' ){
        setEmail('');
        setPassword('');
       // setItme(true)
       let value = true
       AsyncStorage.setItem('UserData',JSON.stringify(value))

        navigation.navigate("Dash");
      }else{
        alert("Please enter valid credentials ")
        console.log(email)
      }
    }else{
      alert("Please fill the details ");
    }
  }
  const Registartion=()=>{
    navigation.navigate('SignUp');
  }
 
  return (
    
    <View style={styles.container}>
      <View><Image style={styles.img} source={require('/Users/neosoft/Desktop/New/DemoProject/app/asset/launch_screen.png')} /></View>
        <View>
          <Text style={styles.text}>Login</Text>
        </View>

      <View style={styles.inputView}>
         <TextInput
           style={styles.TextInput}
           placeholder="Email"
           placeholderTextColor="#003f5c"
           keyboardType="email-address"
            value={email}
           onChangeText={(email) => setEmail(email)}
         />
       </View>
       <View style={styles.inputView}>
        <TextInput
           style={styles.TextInput}
           placeholder="Password"
           placeholderTextColor="#003f5c"
           value={password}
           secureTextEntry={true}
           onChangeText={(password) => setPassword(password)}
         />
       </View>
      
       <TouchableOpacity>
         <Text style={{color:"blue",alignContent:"flex-end"}} >Forgot Password?</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.loginBtn} onPress={login}>
         <Text style={{color:'white'}}>LOGIN</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.signUpBtn} onPress={Registartion}>
         <Text style={{color:'white'}}>SignUp</Text>
       </TouchableOpacity>
    </View>
  );
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    // backgroundColor: "#FFC0CB",
    
    borderRadius: 30,
    borderColor:"gray",
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    borderWidth:1,
  },
  text:{
    margin:10,
    padding:25,
    fontSize:20,
    fontWeight:'bold',
    color:'blue',

  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    
  },
  // forgot_button: {
  //   height: 30,
  //   marginBottom: 30,
  // },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#0000FF",
    color:"white",
    
  },
  signUpBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "blue",
    color:"white",
    opacity:0.7
  },
  img:{
    borderRadius:50,
    height:60,
    width:60,
  },


});