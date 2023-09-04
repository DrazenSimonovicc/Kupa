import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { colors } from "../../../colors/colors";
import { useNavigation } from "@react-navigation/native";
import { CongratScreenNavigationProp } from "../../types/types";

const Congrat = () => {
  const navigation = useNavigation<CongratScreenNavigationProp>();

  const goToHome = () => {
    navigation.navigate("Tabs");
  };
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.textWrap}>
        <Text style={styles.title}>Congratulation!</Text>
        <Text style={styles.text}>
          your account is complete, please enjoy the best menu from us.
        </Text>
      </View>
      <Button title="Get Started" onPress={goToHome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  textWrap: {
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
  },
  text: {
    fontSize: 14,
    color: colors.textColor,
    textAlign: "center",
  },
});

export default Congrat;
