import React, { FC } from "react";
import { Text, StyleSheet, Pressable } from "react-native";

import { colors } from "../../colors/colors";

interface ButtonOutlinedProps {
  title: string;
  onPress?: () => void;
}

const ButtonOutlined: FC<ButtonOutlinedProps> = ({ onPress, title }) => {
  return (
    <Pressable style={[styles.button, styles.outlined]} onPress={onPress}>
      <Text style={[styles.buttonText, styles.buttonOutlinedText]}>
        {title}
      </Text>
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
  outlined: { backgroundColor: colors.lightGray },
  buttonOutlinedText: {
    color: colors.background,
  },
});
export default ButtonOutlined;
