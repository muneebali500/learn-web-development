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
import { Context, Provider as AuthProvider } from "./context/AuthContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TrackListFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
}

function App() {
  const { isSignedIn } = useContext(Context);

  return (
    <NavigationContainer>
      {!isSignedIn ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Signin" component={SinginScreen} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={{
            tabBarIconStyle: { display: `none` },
            headerShown: false,
          }}
        >
          <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
          <Tab.Screen name="TrackListFlow" component={TrackListFlow} />
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
