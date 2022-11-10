import React, { useState } from "react";
import { Alert, StyleSheet,Text, TextInput,TouchableOpacity,View,TextStyle,ViewStyle} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export const UserRegistration = () => {
  const navigation: NavigationProp<any, any>=useNavigation();

  const [email, setEmail ]= useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [phonenumber,setPhonenumber]=useState("");
  type Style = {
    container: ViewStyle;
    inputView: ViewStyle;
    TextInput:TextStyle;
    title: TextStyle;
    forgot_button:TextStyle;
    loginBtn:TextStyle;
    signUpBtn:TextStyle;
  };
  const doUserRegistration=()=>{

    if(email && password && confirmPassword && phonenumber){
      if(password!=confirmPassword){
        alert("Password and Confirmpassword should be same");
      }else{
      alert('Successfully registerd');
      navigation.navigate('LoginScreen');
      }
    }
    else{
      alert("Please fill the deatils")
    }
  }
  return (
    // <View style={styles.container}>
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
        <View style={styles.inputView}>
      <TextInput
      style={styles.TextInput}
      value={confirmPassword}
        placeholder={"Confirmpassword"}
        secureTextEntry={(true)}
        onChangeText={(text)=>setConfirmPassword(text)}
        />
        </View>
        <View style={styles.inputView}>
      <TextInput
      style={styles.TextInput}
      value={phonenumber}
      placeholder={"Phonenuber"}
      keyboardType={"number-pad"}
      onChangeText={(text)=>setPhonenumber(text)}></TextInput>
      </View>
      <TouchableOpacity style={styles.signUpBtn} onPress={() => doUserRegistration()}>
        <Text style={{color:'white'}}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
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
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  signUpBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});