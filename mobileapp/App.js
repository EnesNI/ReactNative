import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ButtonScreen from './screens/buttonscreen';
import MenuScreen from './screens/MenuScreen';
import StudentsScreen from './screens/StudentsScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Menu'
        screenOptions={{
          headerTitle: 'APP',
        }}
      >
        <Stack.Screen name="Button" component={ButtonScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Students" component={StudentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
