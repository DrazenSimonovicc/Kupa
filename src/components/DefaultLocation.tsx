import React from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const DefaultLocation = () => {
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: 340,
    height: 240,
  },
});

export default DefaultLocation;
