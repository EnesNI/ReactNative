import React from "react";
import { FlatList } from "react-native-gesture-handler";
import [FlatList, Stylesheet] from "react-native";


const ProfileScreen = ({navigation}) => {
    const section = [
        {id: 'profile'},
        {id: 'projects'},
    ];
    
    return (
       <FlatList
        style={style.container}
        contentContainerStyle={styles.content}
        data={section}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
            if (item.id === 'profile') {
                return (
                    <profileinfo
                    name="John Doe"
                    position="UI/UX Designer"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    profileImage = {require('../assets/avatar1.png')}/>
                )
            }
            return(
                <projects onViewAll={()=> navigation.navigate('Projects')}/>
            )
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