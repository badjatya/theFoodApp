import React from "react";

// IMPORTING bottom tab
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// IMPORTING Screen
import RestaurantsScreen from "../../screens/Restaurant/RestaurantScreen";
import MapScreen from "../../screens/Map/MapScreen";
import SettingScreen from "../../screens/settings/SettingScreen";

// IMPORTING ICONS
import { Ionicons } from "@expo/vector-icons";

// NOTE BottomTab
const TabNavigator = createBottomTabNavigator();

const TabNavigatorScreen = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Restaurants") {
            iconName = "md-restaurant";
          } else if (route.name === "Settings") {
            iconName = "md-settings";
          } else if (route.name === "Map") {
            iconName = "md-map";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <TabNavigator.Screen name="Restaurants" component={RestaurantsScreen} />
      <TabNavigator.Screen name="Map" component={MapScreen} />
      <TabNavigator.Screen name="Settings" component={SettingScreen} />
    </TabNavigator.Navigator>
  );
};

export default TabNavigatorScreen;
