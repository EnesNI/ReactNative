import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>This is the Main Screen</Text>
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
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default MainScreen;