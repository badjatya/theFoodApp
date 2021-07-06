import React from "react";

// IMPORTING Styled-components
import styled from "styled-components/native";

// IMPORTING react-native-paper
import { Card } from "react-native-paper";

// Styles
const RestaurantCard = styled(Card)`
  background-color: #fff;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: #fff;
  padding: 16px;
`;

const Title = styled.Text`
  padding: 0 16px 16px 16px;
`;

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
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
