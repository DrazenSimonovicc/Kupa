import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Input from "../../components/Input";
import ProfileImage from "../../components/ProfileImage";
import { colors } from "../../../colors/colors";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import AccountScreenHeader from "../../components/AccountScreenHeader";

const MyAccount = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <AccountScreenHeader text="My Account" />
      <View style={styles.imageWrap}>
        <ProfileImage />
      </View>
      <View style={styles.info}>
        <Input text="Name" placeholder="Louisana" />
        <Input text="Email" placeholder="louisana@email.com" />
        <Input text="Phone Number" placeholder="+ 15165125487" />
        <Input text="Password" placeholder="******" />
        <Button title="Save changes" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.lightGray,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 40,
  },
  imageWrap: {
    marginTop: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    flex: 5,
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyAccount;
