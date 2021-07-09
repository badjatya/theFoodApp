import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

// IMPORTING ThemeProvider from styledComponents
import { ThemeProvider } from "styled-components";

// IMPORTING Custom Theme
import { theme } from "./App/Theme/Theme";

// IMPORTING Navigation
import Navigation from "./App/navigation/Navigation";

// IMPORTING Restaurant Context
import { RestaurantsContextProvider } from "./App/services/restaurant/restaurant.context";

// IMPORTING Google Fonts
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <Navigation />
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
