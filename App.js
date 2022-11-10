// In App.js in a new project

import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
// import AppNavigator from './app/screens/navigation';
import AppNavigator from './app/screens/navigation';
function App() {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
};

export default App;