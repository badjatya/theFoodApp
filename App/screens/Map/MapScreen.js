import React from "react";
import { StyleSheet, View } from "react-native";

// Importing Maps
import MapView from "react-native-maps";

// Importing Components
import MapSearch from "../../components/MapSearch/MapSearch";

const MapScreen = () => {
  return (
    <View>
      <MapSearch />
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
