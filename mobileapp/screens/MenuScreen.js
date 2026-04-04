import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const MenuScreen = (props) => {
    console.log(props);
    return (
        <View>
            <Text style={styles.text}>Welcome To Menu Screen</Text>
            <Button 
            title="Go to Button Screen"
            onPress={()=> props.navigation.navigate('Button')}
            />
            <TouchableOpacity 
            style = {styles.btn}
            onPress={() => props.navigation.navigate('Students')}>
                <text style={styles.btnText}>Go to students Screen</text>
            </TouchableOpacity>
           
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    },
    btn: {
        backgroundColor: '#3346eb',
        marginVertical: 10,
        paddingVertical: 7
    },
    btnText: {
        color: 'White',
        fontSize: 15,
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});

export default MenuScreen;