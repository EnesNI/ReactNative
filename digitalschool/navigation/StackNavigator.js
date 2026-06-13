import React from "react";
import {createNativetackNavigator} from "@react-naviagtion/stack";

import About from '/screens/AboutScreen';
import Home from '/screens/HomeScreen';

const Stack = createNativeStackNavigator();


const screenOptionStyle = {
    headerStyle: {
        backgroundColor: '#FF6347',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName= 'Home' screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    );
};

const AboutStackNavigator = () => {
    return (
         <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="About" component={About}/>
         </Stack.Navigator>
    )
};


export {MainStackNavigator, AboutStackNavigator};
export default MainStackNavigator;