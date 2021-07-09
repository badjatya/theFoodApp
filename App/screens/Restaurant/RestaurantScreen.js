import React, { useContext } from "react";
import { StatusBar, SafeAreaView, FlatList } from "react-native";

import { Searchbar } from "react-native-paper";

// IMPORTING Styled-components
import styled from "styled-components/native";

// IMPORTING Components
import RestaurantInfoCard from "../../components/Restaurant/RestaurantInfoCard";

// Importing Context
import { RestaurantsContext } from "../../services/restaurant/restaurant.context";

const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>

      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.toString()}
      />
    </SafeArea>
  );
};

// Styles
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export default RestaurantsScreen;
