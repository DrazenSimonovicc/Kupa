import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Delivery from "../components/Delivery";
import { colors } from "../../colors/colors";

const Cart = () => {
  return (
    <View style={styles.container}>
      <Delivery />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 30,
    backgroundColor: colors.white,
  },
});

export default Cart;
