import React, { FC } from "react";
import { View, Image, StyleSheet } from "react-native";

interface WelcomeImageProps {
  image: any;
}

const WelcomeImage: FC<WelcomeImageProps> = ({ image }) => {
  return (
    <View>
      <Image source={image} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 180,
    height: 180,
    objectFit: "contain",
  },
});

export default WelcomeImage;
