import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';

// type title = any;
type Content={
  title:string;
  body:string;
  id:number;
  userId:number
}

const DashBoard = () => {
  const navigation: NavigationProp<any, any> = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      console.log("Json", json);
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

  }
  const logOut= async ()=>{
    console.log("Logout");
    let value = false
    await AsyncStorage.setItem('UserData',JSON.stringify(value))
       AsyncStorage.removeItem("UserData");
        navigation.navigate("Login");

}
  useEffect(() => {
    getData();
  }, []);
  return (
    <> 
    <View style={{paddingTop:0,flexDirection:'row',backgroundColor:'blue',opacity:0.8}}>
      <Header name="Dashboard" onPress={logOut} />
    </View>
    <View style={{ flex: 1, padding: 24,backgroundColor:'#fff' }}>
      {data.map((item:Content, index) =>{
        return(
          <View style={{ backgroundColor: 'blue', marginVertical: 10, padding: 10, borderRadius: 10 ,opacity:0.8}}>
              <TouchableOpacity onPress={() => {
                navigation.navigate('Details', { data :item });
              }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textTransform: 'capitalize' }}>{item.title}</Text>
              </TouchableOpacity>
            </View>
            
        )
      })}

    </View>
    </>
  );
};
export default DashBoard;