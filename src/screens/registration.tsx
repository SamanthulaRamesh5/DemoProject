import React, { useState } from "react";
import { Alert, StyleSheet, Text,Image, TextInput, TouchableOpacity, View, TextStyle, ViewStyle } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Header from "./header";
export const UserRegistration = () => {
  const navigation: NavigationProp<any, any> = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  type Style = {
    container: ViewStyle;
    inputView: ViewStyle;
    TextInput: TextStyle;
    title: TextStyle;
    forgot_button: TextStyle;
    loginBtn: TextStyle;
    signUpBtn: TextStyle;
  };
  const doUserRegistration = () => {
    
    if (email && password && confirmPassword && phonenumber) {
      if (password != confirmPassword) {
        alert("Password and Confirmpassword should be same");
      } else {
        alert('Successfully registerd');
        setEmail('');
        setPassword('');
        setPassword('');
        setConfirmPassword('');
        navigation.navigate('Login');
      }
    }
    else {
      alert("Please fill the deatils")
    }
  }
  return (
    <>
      <View style={{backgroundColor:"blue",opacity:0.8}}><Header name="SignUp"/></View>
    <View style={styles.container}>
\      <View style={{ paddingTop: 20,paddingLeft:20, marginTop: 10 }}>
      </View>
      <View style={{ padding: 10, margin: 15 }}>
        <Image style={{width:170,height:60}} source={require('/Users/neosoft/Desktop/New/DemoProject/app/asset/image.png')}></Image>
      </View>
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
          // style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          // style={styles.TextInput}
          value={confirmPassword}
          placeholder={"Confirmpassword"}
          placeholderTextColor="#003f5c"
          secureTextEntry={(true)}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={phonenumber}
          placeholder={"Phonenuber"}
          placeholderTextColor="#003f5c"
          keyboardType={"number-pad"}
          onChangeText={(text) => setPhonenumber(text)}></TextInput>
      </View>
      <TouchableOpacity style={styles.signUpBtn} onPress={() => doUserRegistration()}>
        <Text style={{ color: 'white' }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    borderRadius: 30,
    borderColor: "gray",
    borderWidth: 1,
    // backgroundColor: "#FFC0CB",
    // borderRadius: 30,
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
    backgroundColor: "blue",
  },
});