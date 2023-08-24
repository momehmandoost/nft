import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import Slider from './src/component/Slider';
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/Login.jsx';
import { COLORS } from './constants/theme';
import Home from './src/pages/Home';
import Details from './src/pages/Details';

const Stack = createNativeStackNavigator();

function Landing({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Slider navigation={navigation} />
    </SafeAreaView>
  );
}

const App = () => {
  const [fontsLoaded] = useFonts({
    'InterBold': require('./assets/fonts/Inter-Bold.ttf'),
    'InterSemiBold': require('./assets/fonts/Inter-Bold.ttf'),
    'InterMedium': require('./assets/fonts/Inter-Bold.ttf'),
    'InterRegular': require('./assets/fonts/Inter-Bold.ttf'),
    'InterLight': require('./assets/fonts/Inter-Bold.ttf'),
    'MuseoModerno': require('./assets/fonts/MuseoModerno-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="purple" barStyle="light-content" />
      <Stack.Navigator>




        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{
            headerShown: false,
          }}
        />


        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="Details" component={Details} options={{
          headerShown: false,
        }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});

export default App;