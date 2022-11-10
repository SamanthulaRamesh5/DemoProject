import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';

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
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ flex: 1, padding: 24 }}>
      {data.map((item:Content, index) =>{
        return(
          <View style={{ backgroundColor: 'gray', marginVertical: 10, padding: 5, borderRadius: 10 }}>
              <TouchableOpacity onPress={() => {
                navigation.navigate('Details', { data :item });
              }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textTransform: 'capitalize' }}>{item.title}</Text>
              </TouchableOpacity>
            </View>
        )
      })}

    </View>
  );
};
export default DashBoard;