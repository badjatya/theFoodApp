import React, { useContext } from "react";
import { StatusBar, SafeAreaView, FlatList, Pressable } from "react-native";

// IMPORTING From paper
import { ActivityIndicator, Colors } from "react-native-paper";

// IMPORTING Styled-components
import styled from "styled-components/native";

// IMPORTING Components
import RestaurantInfoCard from "../../components/Restaurant/RestaurantInfoCard";
import { Search } from "../../components/SearchComponent/searchComponent";

// Importing Context
import { RestaurantsContext } from "../../services/restaurant/restaurant.context";

const RestaurantsScreen = (props) => {
  const { navigation } = props;

  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Search />

      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => navigation.navigate("RestaurantDetail")}>
              <RestaurantInfoCard restaurant={item} />
            </Pressable>
          );
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

export default RestaurantsScreen;
