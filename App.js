import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

 
 const App = () => {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
    'Circular-Regular': require('./src/assets/fonts/circular-std-medium-500.ttf'),
    'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  }
  
   return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
   )
 }
 
 export default App;

