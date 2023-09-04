import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../colors/colors";

interface SignInOutHeaderProps {
  title: string;
  text: string;
}

const SignInOutHeader: FC<SignInOutHeaderProps> = ({ title, text }) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleBack}>
        <Feather name="arrow-left" size={32} color="black" />
      </Pressable>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    gap: 32,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
    color: colors.darkGray,
    fontWeight: "700",
  },
  text: { fontSize: 18, color: colors.textColor },
});

export default SignInOutHeader;
