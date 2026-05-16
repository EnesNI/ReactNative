import React from "react";
import {Text, StyleSheet, View, FlatList, Button} from 'react-native';

const students = [
    {name: 'Germanium', surname: 'Morina', age: 30},
    {name: 'Elvedin', surname: 'Blakqori', age: 18},
    {name: 'Yll', surname: 'Gashi', age: 16},
    {name: 'Enes', surname: 'Mulolli', age: 18},
    {name: 'Drilon', surname: 'Latifi', age: 18},
    {name: 'Yll', surname: 'Berisha', age: 18}
]

const ListScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>List of Students</Text>
            <FlatList
                data={students}
                horizontal={true}
                showsHorizontalScrollIndicat = {false}
                keyExtractor={student => student.name}
                renderItem={({item}) => {
                    return <Text style={styles.studentWrapper}>{item.name} {item.surname} - {item.age}</Text>
                }}
            />
            <Button 
                title="Go Back"
                onPress={() => props.navigation.goBack()}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff"
    },
    textStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    studentWrapper: {
        fontSize: 20,
        marginRight: 20,
        padding: 10,
        backgroundColor: "#f0f0f0",
        borderRadius: 5,
        widht: 300,
    }
});

export default ListScreen;