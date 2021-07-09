import React, { useContext } from "react";
import { StatusBar, SafeAreaView, FlatList } from "react-native";

// IMPORTING From paper
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";

// IMPORTING Styled-components
import styled from "styled-components/native";

// IMPORTING Components
import RestaurantInfoCard from "../../components/Restaurant/RestaurantInfoCard";

// Importing Context
import { RestaurantsContext } from "../../services/restaurant/restaurant.context";

const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>

      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeArea>
  );
};

// Styles
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
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
