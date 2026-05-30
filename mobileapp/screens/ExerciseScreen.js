import React from "react";
import {Text, StyleSheet, View} from 'react-native';

const ExerciseScreen = () => {
    let message = 'Hi There';
    message = "Hi there from digital school"
    return(
        <View style={styles.container}>
            <Text>{message}</Text>
        </View>

        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ExerciseScreen;