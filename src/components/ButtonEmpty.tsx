import React, { FC } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { colors } from "../../colors/colors";

interface ButtonEmptyProps {
  title: string;
  icon: string;
  onPress?: () => void;
}

const ButtonEmpty: FC<ButtonEmptyProps> = ({ onPress, title, icon }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <AntDesign name={icon} size={24} color="black" />
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 280,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  buttonText: { fontSize: 16 },
});
export default ButtonEmpty;
