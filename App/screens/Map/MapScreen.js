import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Importing Maps
import MapView from "react-native-maps";

const MapScreen = () => {
  return (
    <View>
      <MapView style={styles.map} />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
});
