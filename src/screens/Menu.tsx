import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import Search from "../components/Search";
import { colors } from "../../colors/colors";
import { filterSearch, japaneseFoodData } from "../utilities/mockedData"; // Import data

const Menu = () => {
  const [selectedFood, setSelectedFood] = useState("All");
  const [searchInput, setSearchInput] = useState("");

  const selectFoodGenre = (genre) => {
    setSelectedFood(genre);
  };
  const handleSearch = (text) => {
    setSearchInput(text);
  };

  const filteredFoodData =
    selectedFood === "All"
      ? japaneseFoodData.filter((item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      : japaneseFoodData.filter(
          (item) =>
            item.categories.includes(selectedFood) &&
            item.name.toLowerCase().includes(searchInput.toLowerCase())
        );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleWrap}>
        <Text style={styles.titleSmall}>Our Food</Text>
        <Text style={styles.titleBig}>Special For You</Text>
      </View>

      <Search
        icon="search"
        placeholder="Search Your Menus"
        onSearch={handleSearch}
      />
      <FlatList
        horizontal
        data={filterSearch}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.filterItemWrap,
              selectedFood === item.name && styles.selectedFilterItem,
            ]}
            onPress={() => selectFoodGenre(item.name)}
          >
            <Text
              style={[
                styles.filterText,
                selectedFood === item.name && styles.selectedFilterText,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <FlatList
        data={filteredFoodData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: colors.white,
  },
  titleWrap: {
    gap: 12,
    marginBottom: 32,
  },
  titleSmall: {
    fontSize: 14,
    color: colors.textColor,
  },
  titleBig: {
    fontSize: 18,
    color: colors.background,
    fontWeight: "700",
  },
  filterText: {
    fontSize: 16,
  },
  filterItemWrap: {
    marginVertical: 24,
    marginHorizontal: 6,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 120,
  },
  selectedFilterItem: {
    borderBottomColor: colors.background,
    borderBottomWidth: 4,
  },
  selectedFilterText: {
    color: colors.black,
    fontWeight: "900",
  },
  listContainer: {
    justifyContent: "space-between",
    marginTop: 18,
  },
  itemContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 16,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  itemName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  itemPrice: {
    marginTop: 4,
    fontSize: 14,
    color: "#888",
    textAlign: "center",
  },
});

export default Menu;
