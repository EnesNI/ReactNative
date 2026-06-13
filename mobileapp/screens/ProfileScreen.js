import React from 'react';
import {FlatList, StyleSheet} from 'react-native';


const ProfileScreen = ({navigation}) => {
    const sections = [
        {id: 'prfile'},
        {id: 'projects'},
    ];
    return (
        <FlatList
            style={styles.container}
            contentContainerStyle={styles.content}
            data={sections}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                if (item.id === 'profile') {
                    return (
                        <ProfileInfo
                        name="John Doe"
                        position="UI/UX Designer"
                        description= "We're passionte about creating beauful desgins for startups & leading brands"
                        profileImage = {require("../assets/avatar1.png")}/>
                    )
                }
                return (
                    <Projects onViewAll={()=> navigation.navigate('Projects')} />
                );
            }}
            />
    );
};

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F5F5F5',
        },
        content: {
            paddingBottom: 24,
        }
});
export default ProfileScreen;