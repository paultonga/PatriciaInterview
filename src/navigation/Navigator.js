import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { store } from "../redux/store";
import AuthScreen from "../screens/AuthScreen";
import DashboardScreen from "../screens/DashboardScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { navigationRef } from "./NavigationService";

const state = store.getState();
const { token } = state.app;

const Stack = createStackNavigator();

function LoggedIn() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function Navigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ headerShown: false }}
          />
       
          <Stack.Screen
            name="DashboardScreen"
            component={LoggedIn}
            options={{ headerShown: false }}
          />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
