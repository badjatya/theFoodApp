import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

// Importing Components
import RestaurantInfoCard from "../../components/Restaurant/RestaurantInfoCard";

const RestaurantDetailScreen = (props) => {
  const { route } = props;
  const { restaurant } = route;
  return (
    <SafeAreaView>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeAreaView>
  );
};

export default RestaurantDetailScreen;

const styles = StyleSheet.create({});
