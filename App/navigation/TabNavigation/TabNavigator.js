import React from "react";

// IMPORTING bottom tab
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// IMPORTING Screen
import RestaurantsNavigator from "../RestaurantNavigator/restaurantNavigator";
import MapScreen from "../../screens/Map/MapScreen";
import SettingScreen from "../../screens/settings/SettingScreen";

// IMPORTING ICONS
import { Ionicons } from "@expo/vector-icons";

// Icons
const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

// Screen Options
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

// NOTE BottomTab
const TabNavigator = createBottomTabNavigator();

const TabNavigatorScreen = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <TabNavigator.Screen
        name="Restaurants"
        component={RestaurantsNavigator}
      />
      <TabNavigator.Screen name="Map" component={MapScreen} />
      <TabNavigator.Screen name="Settings" component={SettingScreen} />
    </TabNavigator.Navigator>
  );
};

export default TabNavigatorScreen;
