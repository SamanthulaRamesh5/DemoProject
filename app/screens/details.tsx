import React, { useState } from "react";
import { View,Text } from "react-native";

type Props={
    body:string,
    title:string;
    id:number;
    userId:number;
}
const DetailesScreen=({ navigation, route })=>{
    const [data,setData]=useState(route.params.data);
    console.log(route.params,"Neosoft")
    return(
        <View style={{ backgroundColor:'gray',margin:10,padding:5,borderRadius:10 }}>
            <Text style={{color:'white',fontSize:20,fontWeight:'bold',textTransform:'capitalize'}}>{data.title}</Text>
            <Text style={{color:'white',fontSize:16}}>{data.body}</Text>
            <Text></Text>
        </View>
    );
}
export default DetailesScreen;

