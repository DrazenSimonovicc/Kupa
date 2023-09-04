import React, { FC } from "react";
import { Text, StyleSheet, Pressable } from "react-native";

import { colors } from "../../colors/colors";

interface ButtonProps {
  title: string;
  onPress?: () => void;
}

const Button: FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <Pressable style={[styles.button, styles.full]} onPress={onPress}>
      <Text style={[styles.buttonText, styles.buttonFullText]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 280,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonText: { fontSize: 16 },
  full: { backgroundColor: colors.background },
  buttonFullText: {
    color: colors.white,
  },
});

export default Button;
