import React, { useCallback } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AboutScreen = (navigation) => {
  const navigation = useNavigation();

  const goHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Welcome to About Screen</Text>
      <Button
        title="Go back to Home Screen"
        onPress={goHome}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default AboutScreen;