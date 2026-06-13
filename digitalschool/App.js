import 'react-native-gesture-handler';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import{SafeAreaProvider} from 'react-native-safe-area-context';
import {NaviagtionContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigation/TabNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';


export default function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <NaviagtionContainer>
         <DrawerNavigator/>
       </NaviagtionContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
   
  
 
  );
} 
