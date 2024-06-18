import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const HomeScreen = () => {
  const route = useRoute();
  const name = route.params || {} ;
  return (
    <View>
        <Text>{name}</Text>
    </View>
  )
}

export default HomeScreen;


