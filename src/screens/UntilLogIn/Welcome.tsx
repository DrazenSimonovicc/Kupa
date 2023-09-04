import React from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { colors } from "../../../colors/colors";
import { useNavigation } from "@react-navigation/native";
import { WelcomeScreenNavigationProp } from "../../types/types";
import Logo from "../../components/Logo";

const Welcome = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const goToStart = () => {
    navigation.navigate("OpeningPage");
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={goToStart}>
        <Logo />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    backgroundColor: colors.background,
  },
});

export default Welcome;
