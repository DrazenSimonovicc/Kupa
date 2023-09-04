import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../colors/colors";
import Title from "../components/Title";
import { topOfWeek } from "../utilities/mockedData";
import Search from "../components/Search";
import Delivery from "../components/Delivery";

const Home = () => {
  return (
    <View style={styles.container}>
      <Search icon="search" placeholder="Search on Kupo" />
      <Delivery />
      <View style={styles.discountWrap}>
        <View style={styles.discountTextWrap}>
          <Text style={styles.discountTitle}>Chicken Teriyaki</Text>
          <Text style={styles.discountText}>Discount 25%</Text>
          <Pressable style={[styles.button, styles.full]}>
            <Text style={[styles.buttonText, styles.buttonFullText]}>
              Order Now
            </Text>
          </Pressable>
        </View>
        <Image
          source={require("../../assets/teriyaki.jpg")}
          style={styles.img}
        />
      </View>
      <Title title="Top of Week" />
      <FlatList
        horizontal
        data={topOfWeek}
        renderItem={({ item }) => (
          <View style={styles.listWrap}>
            <Image source={item.image} style={styles.listImg} />
            <Text style={styles.listTitle}>{item.name}</Text>
            <Text style={styles.listPrice}>{item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    gap: 30,
  },

  discountWrap: {
    flexDirection: "row",
    backgroundColor: "#e6fcf5",

    justifyContent: "space-between",
    width: 340,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  discountTextWrap: {
    gap: 8,
  },
  discountTitle: {
    color: colors.darkGray,
  },
  discountText: {
    color: colors.darkGray,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  button: {
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonText: { fontSize: 16 },
  full: {
    backgroundColor: colors.background,
  },
  buttonFullText: {
    color: colors.white,
  },
  listImg: {
    width: 110,
    height: 130,
    borderRadius: 20,
  },
  listTitle: {
    fontSize: 12,
  },
  listPrice: {
    fontSize: 12,
    color: colors.background,
    fontWeight: "500",
  },
  listWrap: {
    marginHorizontal: 7,
    gap: 6,
  },
});

export default Home;
