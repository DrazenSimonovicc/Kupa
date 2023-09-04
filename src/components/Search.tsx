import React, { FC } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../colors/colors";

interface SearchProps {
  icon: string;
  placeholder: string;
  onSearch: (text: string) => void;
}

const Search: FC<SearchProps> = ({ icon, placeholder, onSearch }) => {
  return (
    <View style={styles.searchSection}>
      <Feather style={styles.searchIcon} name={icon} size={20} color="#000" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    width: 340,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    padding: 10,
    backgroundColor: colors.inputColor,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: colors.darkGray,
    backgroundColor: colors.inputColor,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default Search;
