/**
 * @format
 */

 import 'react-native';
 import React from 'react';
import LoginScreen from '../app/screens/login'; 
 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';
 

 const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});
 
 it('renders correctly', () => {
   renderer.create(<LoginScreen />);
 });
 