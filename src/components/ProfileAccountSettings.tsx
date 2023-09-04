import React, { FC } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../colors/colors";

interface ProfileAccountSettingsProps {
  icon: string;
  text: string;
  onPress?: () => void;
}

const ProfileAccountSettings: FC<ProfileAccountSettingsProps> = ({
  icon,
  text,
  onPress,
}) => {
  return (
    <View>
      <Pressable style={styles.container} onPress={onPress}>
        <View style={styles.infoWrap}>
          <View style={styles.icon}>
            <Entypo name={icon} size={24} color={colors.background} />
          </View>
          <Text>{text}</Text>
        </View>
        <Entypo name="chevron-right" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 330,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.inputColor,
  },
});

export default ProfileAccountSettings;
