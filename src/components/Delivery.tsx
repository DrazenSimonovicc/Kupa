import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../colors/colors";

const Delivery = () => {
  return (
    <View style={styles.deliveryWrap}>
      <View style={styles.deliveryHeader}>
        <Text style={styles.deliveryHeaderText}>Delivery to Home</Text>
        <Feather name="chevron-right" size={24} color={colors.white} />
      </View>
      <Text style={styles.deliveryAddress}>Utama Street no.14, Rumbai.</Text>
      <View style={styles.deliveryKm}>
        <Text style={styles.deliveryKmText}>2.4 km</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  deliveryWrap: {
    backgroundColor: colors.background,
    alignItems: "flex-start",
    width: 340,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    gap: 8,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  deliveryHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 320,
  },
  deliveryHeaderText: {
    color: colors.white,
    fontSize: 16,
  },
  deliveryAddress: {
    color: colors.white,
    fontSize: 14,
  },
  deliveryKm: {
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  deliveryKmText: {
    color: colors.background,
    fontSize: 12,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
});

export default Delivery;
