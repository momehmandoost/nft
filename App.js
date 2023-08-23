import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import Slider from './src/component/Slider';
import { useFonts } from "expo-font";

const App = () => {
  const [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/Inter.ttf'),
    'MuseoModerno': require('./assets/fonts/MuseoModerno-Bold.ttf'),


  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView>
      <Slider />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});