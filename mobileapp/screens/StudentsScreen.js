import React from "react";
import {Text, View, StyleSheet} from 'react-native';

const StudentScreen = () => {
    return (
        <View>
            <Text>Students Screen</Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    }
});

export default StudentScreen;