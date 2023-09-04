import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { colors } from "../../colors/colors";

const LogoRow = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/bibimbap.png")}
        style={styles.logoIcon}
      />
      <Text style={styles.logoText}>Kupa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  logoIcon: {
    width: 20,
    height: 20,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.black,
  },
});

export default LogoRow;
