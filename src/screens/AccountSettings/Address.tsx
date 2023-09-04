import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import DefaultLocation from "../../components/DefaultLocation";
import AccountScreenHeader from "../../components/AccountScreenHeader";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../../colors/colors";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AddressScreenNavigationProp } from "../../types/types";

const Address = () => {
  const navigation = useNavigation<AddressScreenNavigationProp>();

  const confirmChanges = () => {
    navigation.navigate("Tabs");
  };
  return (
    <View style={styles.container}>
      <AccountScreenHeader text="Location" />
      <View style={styles.map}>
        <DefaultLocation />
      </View>
      <View style={styles.address}>
        <View style={styles.addressHeader}>
          <Text style={styles.textHeader}>Detiled Address</Text>
          <Entypo name="location" size={24} color={colors.background} />
        </View>
        <View style={styles.addressInfo}>
          <View style={styles.iconWrap}>
            <Entypo name="location-pin" size={24} color={colors.background} />
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.textInfo}>Utama Street No.20</Text>
            <Text style={styles.textInfo}>Dumbo, San Francisco</Text>
            <Text style={styles.textInfo}>10001, United States of America</Text>
            <Pressable style={styles.changeBtnWrap}>
              <Text style={styles.change}>Change</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.buttonWrap}>
          <Button title="Confirmation" onPress={confirmChanges} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    alignItems: "center",
    marginVertical: 36,
  },
  address: {
    flex: 4,
    padding: 40,
  },
  addressHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addressInfo: {
    marginVertical: 30,
    gap: 30,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  iconWrap: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.inputColor,
    alignItems: "center",
    justifyContent: "center",
  },
  textWrap: {
    gap: 12,
  },
  textHeader: {
    fontSize: 16,
    fontWeight: "500",
  },
  textInfo: {
    fontSize: 14,
  },
  buttonWrap: {
    marginTop: 48,
    alignItems: "center",
  },
  changeBtnWrap: {
    backgroundColor: colors.inputColor,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    borderRadius: 10,
  },
  change: {
    color: colors.background,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Address;
