import React from "react";

// Importing Stack navigation
import { createStackNavigator } from "@react-navigation/stack";

// Importing Screens
import RestaurantsScreen from "../../screens/Restaurant/RestaurantScreen";
import RestaurantDetailScreen from "../../screens/Restaurant/RestaurantDetailScreen";

const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none">
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />

      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
