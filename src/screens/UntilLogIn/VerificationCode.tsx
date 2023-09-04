import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import SignInOutHeader from "../../components/SignInOutHeader";
import { colors } from "../../../colors/colors";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { VerificationCodeScreenNavigationProp } from "../../types/types";

const VerificationCode = () => {
  const navigation = useNavigation<VerificationCodeScreenNavigationProp>();

  const register = () => {
    navigation.navigate("Congrat");
  };

  return (
    <View style={styles.container}>
      <View style={styles.verificationHeader}>
        <SignInOutHeader
          title="Verification Email"
          text="Please enter the code we just send to your email address"
        />
        <Text>theRoyalKing@gmail.com</Text>
      </View>
      <View style={styles.inputWrap}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
      </View>
      <Pressable style={styles.infoWrap}>
        <Text style={styles.infoText}>Do you have an account?</Text>
        <Text style={styles.greenText}>Sign up?</Text>
      </Pressable>
      <Button title="Continue" onPress={register} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    padding: 20,
    gap: 80,
    alignItems: "center",
  },
  verificationHeader: {
    alignItems: "center",
  },
  inputWrap: {
    flexDirection: "row",
    gap: 12,
  },
  input: {
    width: 50,
    height: 50,
    padding: 10,
    fontSize: 24,
    backgroundColor: colors.inputColor,
  },
  greenText: {
    fontSize: 14,
    color: colors.background,
    fontWeight: "500",
  },
  infoText: {
    fontSize: 14,
    color: colors.textColor,
  },
  infoWrap: {
    flexDirection: "row",
    gap: 6,
  },
});

export default VerificationCode;
