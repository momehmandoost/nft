import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import Slider from './src/component/Slider';
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Slider />
    </SafeAreaView>
  );
}

const App = () => {
  const [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/Inter.ttf'),
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
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;