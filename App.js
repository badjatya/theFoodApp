import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

// IMPORTING ThemeProvider from styledComponents
import { ThemeProvider } from "styled-components";

// IMPORTING Custom Theme
import theme from "./App/Theme/Theme";

// IMPORTING Screens
import RestaurantScreen from "./App/screens/Restaurant/RestaurentScreen";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <RestaurantScreen theme={theme} />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
