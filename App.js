import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainNav } from './src/Components/MainNav';
import {NavigationContainer} from '@react-navigation/native';
import { NativeBaseProvider, Box } from 'native-base';
import { Provider } from "react-redux"
import store from "./src/Store/store"
import {LogBox} from 'react-native';


export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
    <NavigationContainer>
    <NativeBaseProvider>  
   <StatusBar barStyle={'dark-content'} />
  <MainNav />
   </NativeBaseProvider>
</NavigationContainer>
</Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
