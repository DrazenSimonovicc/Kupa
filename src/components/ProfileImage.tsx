import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../colors/colors";

const ProfileImage = () => {
  return (
    <View style={styles.profilePhoto}>
      <Text style={styles.l}>L</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  profilePhoto: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "900",
  },
  l: {
    fontSize: 20,
    color: colors.white,
  },
});
export default ProfileImage;
