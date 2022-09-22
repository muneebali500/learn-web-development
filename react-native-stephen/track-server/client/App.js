import { useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignupScreen from "./screens/SignupScreen";
import SinginScreen from "./screens/SinginScreen";
import TrackCreateScreen from "./screens/TrackCreateScreen";
import AccountScreen from "./screens/AccountScreen";
import TrackListScreen from "./screens/TrackListScreen";
import TrackDetailScreen from "./screens/TrackDetailSCreen";
import {
  Context as AuthContext,
  Provider as AuthProvider,
} from "./context/AuthContext";
// import { navigationRef } from "./navigationRef";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TrackListFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TrackListScreen" component={TrackListScreen} />
      <Stack.Screen name="TrackDetailScreen" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
}

function App() {
  const { state } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {state.token === null ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="SigninScreen" component={SinginScreen} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={{
            tabBarIconStyle: { display: `none` },
            headerShown: false,
          }}
        >
          <Tab.Screen name="TrackListFlow" component={TrackListFlow} />
          <Tab.Screen name="TrackCreateScreen" component={TrackCreateScreen} />
          <Tab.Screen name="AccountScreen" component={AccountScreen} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
