import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCummunityIcon} from '@expo/vector-icons';
import {MainStackNavigator, AboutStackNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();

const tabBarStyle = {
    backgroundColor: '#FF6347',
}

const BottomTabNavigator= () => {
    return (
        <Tab.Navigator 
            screenOptions = {{
                headerShown: false,
                tabBarActiveTintColor: '#fff',
                tabBarInActiveTintColor: 'lightgray',
                tabBarStyle,
                tabBarLableStyle: {
                    fontSize: 12
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component = {MainStackNavigator}
                options={{
                    tabBarLable: "Home",
                    tabBarIcon: ({color}) => (
                        <MaterialCummunityIcon name='home' size={26} color={color}/>
                    ),
                }}
            />
             <Tab.Screen
                name="About"
                component = {AboutStackNavigator}
                options={{
                    tabBarLable: "About",
                    tabBarIcon: ({color}) => (
                        <MaterialCummunityIcon name='video-stabilization' size={26} color={color}/>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
export default BottomTabNavigator;