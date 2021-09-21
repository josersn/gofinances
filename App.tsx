import React from 'react';
import { ThemeProvider } from "styled-components";
import { StatusBar } from 'expo-status-bar';
import AppLoading from "expo-app-loading";

import { NavigationContainer } from '@react-navigation/native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";

import Theme from "./src/global/styles/theme";
import { AppRoutes } from './src/routes/app.routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={Theme}>
      {/* <StatusBar style="light" /> */}
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
