import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { COLORS, FONTS } from "../../constants/theme.js"

const { width, height } = Dimensions.get('screen');

const SlideItem = ({ item, navigation }) => {
  const translateYImage = new Animated.Value(40);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.container}>
      <Animated.Image
        source={item.img}
        resizeMode="contain"
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}><Text style={styles.bottontext}>Explore NFTs</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {

    width,
    height,
    alignItems: 'center',
  },
  image: {
    marginTop: 50,
    flex: 0.5,
    width: 250,
    height: 250
  },
  content: {
    marginTop: 20,
    flex: 0.3,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 18,
    marginVertical: 12,
    color: COLORS.secondary,
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 30,
    width: 280,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",

    justifyContent: "center",
    alignItems: "center"
  },
  bottontext: {
    fontSize: 20,
    color: COLORS.primary,
    fontFamily: FONTS.bold
  }
});
