import { useState } from "react";
import React from "react";
import { View, StyleSheet } from "react-native";
import First from "./First";
import GetStarted from "./GetStarted";
import { useNavigation } from "@react-navigation/native";

const OpeningPage = () => {
  const navigation = useNavigation();

  const handleContinue = () => {
    setShowStartingScreen(false);
  };

  const handleBack = () => {
    setShowStartingScreen(true);
  };
  const [showStartingScreen, setShowStartingScreen] = useState(true);

  return (
    <View style={styles.container}>
      {showStartingScreen ? (
        <First onContinue={handleContinue} />
      ) : (
        <GetStarted onBack={handleBack} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
  },
});
export default OpeningPage;
