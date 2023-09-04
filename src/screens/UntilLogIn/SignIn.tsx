import React from "react";
import { View, StyleSheet, TextInput, Text, Pressable } from "react-native";
import SignInOutHeader from "../../components/SignInOutHeader";
import Button from "../../components/Button";
import { colors } from "../../../colors/colors";
import ButtonEmpty from "../../components/ButtonEmpty";
import { useNavigation } from "@react-navigation/native";
import { SignInScreenNavigationProp } from "../../types/types";
import Input from "../../components/Input";

const SignIn = () => {
  const navigation = useNavigation<SignInScreenNavigationProp>();

  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };
  const goToHome = () => {
    navigation.navigate("Tabs");
  };
  return (
    <View style={styles.container}>
      <SignInOutHeader text="Sign in to your account!" title="Welcome back" />
      <View style={styles.bodyWrap}>
        <View style={styles.inputWrap}>
          <Input text="Email" placeholder="Your email" />
          <Input text="Password" placeholder="Your password" />
          <Text style={styles.greenText}>Forgotten password?</Text>
        </View>
        <Button title="Login" onPress={goToHome} />
        <Pressable style={styles.infoWrap} onPress={goToSignUp}>
          <Text style={styles.infoText}>Do you have an account?</Text>
          <Text style={styles.greenText}>Sign up?</Text>
        </Pressable>
        <View style={styles.buttonWrap}>
          <ButtonEmpty title="Sign in with Google" icon="google" />
          <ButtonEmpty title="Sign in with Apple" icon="apple1" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    padding: 20,
  },
  bodyWrap: {
    alignItems: "center",
    gap: 32,
  },
  textInput: {
    borderBottomColor: colors.background,
    borderBottomWidth: 1,
    color: colors.darkGray,
    padding: 10,
    width: 300,
    backgroundColor: colors.inputColor,
  },
  inputWrap: {
    gap: 24,
  },
  singleInputWrap: {
    gap: 12,
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
  buttonWrap: {
    gap: 12,
  },
});

export default SignIn;
