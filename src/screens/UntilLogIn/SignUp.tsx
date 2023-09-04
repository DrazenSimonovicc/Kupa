import React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import SignInOutHeader from "../../components/SignInOutHeader";
import { colors } from "../../../colors/colors";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { SignUpScreenNavigationProp } from "../../types/types";
import Input from "../../components/Input";

const SignUp = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const goToSignIn = () => {
    navigation.navigate("SignIn");
  };
  const gotoVerCode = () => {
    navigation.navigate("VerificationCode");
  };
  return (
    <View style={styles.container}>
      <SignInOutHeader
        text="Create account and chose favorite menu"
        title="Create account"
      />
      <View style={styles.bodyWrap}>
        <View style={styles.inputWrap}>
          <Input text="Name" placeholder="Your name" />
          <Input text="Email" placeholder="Your email" />
          <Input text="Password" placeholder="Your password" />
        </View>
        <Button title="Register" onPress={gotoVerCode} />
        <Pressable style={styles.infoWrap} onPress={goToSignIn}>
          <Text style={styles.infoText}>Have an account?</Text>
          <Text style={styles.greenText}>Sign in?</Text>
        </Pressable>
      </View>
      <View style={styles.footerWrap}>
        <Text>By clicking Register, you agree to our</Text>
        <Text style={styles.greenText}>Terms and Data Policy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bodyWrap: {
    alignItems: "center",
    gap: 32,
  },
  inputWrap: {
    gap: 24,
  },
  singleInputWrap: { gap: 12 },
  textInput: {
    borderBottomColor: colors.background,
    borderBottomWidth: 1,
    color: colors.darkGray,
    padding: 10,
    width: 300,
    backgroundColor: colors.inputColor,
  },
  infoWrap: {
    flexDirection: "row",
    gap: 6,
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

  footerWrap: {
    alignItems: "center",
  },
});

export default SignUp;
