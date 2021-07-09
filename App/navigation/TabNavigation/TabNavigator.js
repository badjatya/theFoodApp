import React from "react";

// IMPORTING bottom tab
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// IMPORTING Screen
import RestaurantsScreen from "../../screens/Restaurant/RestaurantScreen";

// NOTE BottomTab
const TabNavigator = createBottomTabNavigator();

const TabNavigatorScreen = () => {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen name="Home" component={RestaurantsScreen} />
    </TabNavigator.Navigator>
  );
};

export default TabNavigatorScreen;
