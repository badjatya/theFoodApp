import React from "react";
import { StyleSheet, Text, View } from "react-native";

// IMPORTING react-native-paper
import { Card, Title } from "react-native-paper";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <View>
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          style={styles.cover}
          key={name}
          source={{ uri: photos[0] }}
        />
        <Text style={styles.title}>{name}</Text>
      </Card>
    </View>
  );
};

export default RestaurantInfoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
  },
  cover: {
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
