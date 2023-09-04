import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

interface TitleProps {
  title: string;
}
const Title: FC<TitleProps> = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});
export default Title;
