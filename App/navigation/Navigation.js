import React from "react";

// IMPORTING Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// IMPORTING Navigation
import TabNavigatorScreen from "./TabNavigation/TabNavigator";

// NOTE NavigationContainer
const Navigation = () => {
  return (
    <NavigationContainer>
      <TabNavigatorScreen />
    </NavigationContainer>
  );
};

export default Navigation;
