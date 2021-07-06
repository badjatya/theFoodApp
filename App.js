import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

// IMPORTING Screens
import RestaurantScreen from "./App/screens/Restaurant/RestaurentScreen";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
