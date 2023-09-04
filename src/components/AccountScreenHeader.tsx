import React, { FC } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../../colors/colors";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface AccountScreenHeaderProps {
  text: string;
}

const AccountScreenHeader: FC<AccountScreenHeaderProps> = ({ text }) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <Pressable onPress={goBack}>
        <Feather name="arrow-left" size={24} color="black" />
      </Pressable>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.lightGray,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 40,
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
  },
});
export default AccountScreenHeader;
