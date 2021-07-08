import React from "react";
import { StatusBar, SafeAreaView, FlatList } from "react-native";

import { Searchbar } from "react-native-paper";

// IMPORTING Styled-components
import styled from "styled-components/native";

// IMPORTING Components
import RestaurantInfoCard from "../../components/Restaurant/RestaurantInfoCard";

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
`;

const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>

    <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
        { name: 14 },
      ]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name.toString()}
    />
  </SafeArea>
);

export default RestaurantsScreen;
