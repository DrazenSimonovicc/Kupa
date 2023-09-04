import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import ProfileAccountSettings from "../components/ProfileAccountSettings";
import { useNavigation } from "@react-navigation/native";
import { MyAccountScreenNavigationProp } from "../types/types";
import ProfileImage from "../components/ProfileImage";

const Profile = () => {
  const navigation = useNavigation<MyAccountScreenNavigationProp>();

  const goToMyAccount = () => {
    navigation.navigate("MyAccount");
  };
  const logOut = () => {
    navigation.navigate("OpeningPage");
  };
  const goToAddress = () => {
    navigation.navigate("Address");
  };

  const goToSettings = () => {
    navigation.navigate("Settings");
  };
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.profileInitial}>
          <ProfileImage />
          <View style={styles.profileInfo}>
            <Text>Louisana</Text>
            <Text>15168188</Text>
          </View>
        </View>
        <Pressable style={styles.logoutButton} onPress={logOut}>
          <Text>Logout</Text>
        </Pressable>
      </View>
      <View style={styles.accountSettings}>
        <ProfileAccountSettings
          icon="user"
          text="My account"
          onPress={goToMyAccount}
        />
        <ProfileAccountSettings
          icon="location-pin"
          text="Address"
          onPress={goToAddress}
        />
        <ProfileAccountSettings icon="heart" text="Your favorites" />
        <ProfileAccountSettings icon="text-document" text="Order History" />
        <ProfileAccountSettings
          icon="cog"
          text="Settings"
          onPress={goToSettings}
        />
        <ProfileAccountSettings icon="chat" text="Help centre" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  profileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 340,
    padding: 10,
    marginBottom: 24,
  },
  profileInitial: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },

  profileInfo: {},
  logoutButton: {},
  accountSettings: {
    gap: 16,
  },
});

export default Profile;
