import React, { FC } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { colors } from "../../colors/colors";

interface InputProps {
  text: string;
  placeholder: string;
}

const Input: FC<InputProps> = ({ text, placeholder }) => {
  return (
    <View style={styles.singleInputWrap}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.background}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: colors.background,
    borderBottomWidth: 1,
    color: colors.darkGray,
    padding: 10,
    width: 300,
    backgroundColor: colors.inputColor,
  },
  singleInputWrap: {
    gap: 12,
  },
  text: {
    fontSize: 16,
  },
});

export default Input;
