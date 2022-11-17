// In App.js in a new project

import  React,{useEffect}  from 'react';
// import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer} from '@react-navigation/native';
// import AppNavigator from './app/screens/navigation';
import AppNavigator from './src/screens/navigation';
import DashBoard from './src/screens/dashboard';

function App() {
  React.useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
};

export default App;
