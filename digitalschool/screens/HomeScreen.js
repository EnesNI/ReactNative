import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = () => {
    return (
        <View>
            <Text>Welcome to home screen</Text>
            <Button
            title="Go to About Screen"
            onPress={()=> NavigationActivation.navigate('About')}
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HomeScreen;