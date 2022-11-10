
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
type Style = {
  container: ViewStyle;
  inputView: ViewStyle;
  TextInput:TextStyle;
  title: TextStyle;
  forgot_button:TextStyle;
  loginBtn:TextStyle;
  signUpBtn:TextStyle;

};
 
export default function LoginScreen() {


  const navigation: NavigationProp<any, any>=useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login=()=>{
    if(email && password){
      if(email=='ramesh@neosoftmail.com' && password=='ramesh123' ){
        setEmail('');
        setPassword('');
        navigation.navigate("DashBoard");
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
      <View style={styles.inputView}>
         <TextInput
           style={styles.TextInput}
           placeholder="Email"
           placeholderTextColor="#003f5c"
           onChangeText={(email) => setEmail(email)}
         />
       </View>
       <View style={styles.inputView}>
        <TextInput
           style={styles.TextInput}
           placeholder="Password"
           placeholderTextColor="#003f5c"
           secureTextEntry={true}
           onChangeText={(password) => setPassword(password)}
         />
       </View>
       <TouchableOpacity >
         <Text >Forgot Password?</Text>
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
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
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
    backgroundColor: "#FF1493",
    color:"white"
  },
  signUpBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
    color:"white"
  },


});