import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { colors } from "../../colors/colors";

const Logo = () => {
  return (
    <View>
      <Image
        source={require("../../assets/bibimbap.png")}
        style={styles.logoIcon}
      />
      <Text style={styles.logoText}>Kupa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoIcon: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 48,
    fontWeight: "900",
    color: colors.lightGray,
  },
});

export default Logo;
