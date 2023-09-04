import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import LogoRow from "../../components/LogoRow";
import { colors } from "../../../colors/colors";
import Button from "../../components/Button";
import ButtonOutlined from "../../components/ButtonOutlined";
import WelcomeImage from "../../components/WelcomeImage";
import pizza from "../../../assets/pizza.jpg";
import Title from "../../components/Title";
import { useNavigation } from "@react-navigation/native";
import { GetStartedScreenNavigationProp } from "../../types/types";
import * as Animatable from "react-native-animatable"; // Import Animatable

const First = ({ onContinue }) => {
  const navigation = useNavigation<GetStartedScreenNavigationProp>();

  const signIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <Animatable.View
      animation="fadeInLeft"
      duration={1000} 
      style={styles.container}
    >
      <LogoRow />
      <View style={styles.imageWrap}>
        <WelcomeImage image={pizza} />
      </View>
      <View style={styles.titleWrap}>
        <Title title="All your" />
        <Title title="favorite food" />
      </View>
      <Text style={styles.text}>
        Order your favorite menu with easy, on-demand delivery
      </Text>
      <View style={styles.siteWrap}>
        <View style={styles.siteButton}></View>
        <Pressable onPress={onContinue}>
          <View style={styles.siteButtonOutlined}></View>
        </Pressable>
      </View>
      <View style={styles.buttonWrap}>
        <Button title="Continue" onPress={onContinue} />
        <ButtonOutlined title="Sign In" onPress={signIn} />
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
  },
  imageWrap: {
    width: 280,
    height: 280,
    borderRadius: 1000,
    backgroundColor: colors.lightGray,
    alignItems: "center",
    justifyContent: "center",
  },
  titleWrap: {
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: colors.textColor,
  },
  buttonWrap: {
    gap: 24,
  },
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
  siteButton: {
    width: 10,
    height: 10,
    borderRadius: 1000,
    backgroundColor: colors.background,
  },
  siteButtonOutlined: {
    width: 10,
    height: 10,
    backgroundColor: colors.lightGray,
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: colors.background,
  },
  siteWrap: {
    gap: 12,
    flexDirection: "row",
  },
});

export default First;
