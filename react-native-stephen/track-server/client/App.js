import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignupScreen from "./screens/SignupScreen";
import SinginScreen from "./screens/SinginScreen";
import TrackCreateScreen from "./screens/TrackCreateScreen";
import AccountScreen from "./screens/AccountScreen";
import TrackListScreen from "./screens/TrackListScreen";
import TrackDetailScreen from "./screens/TrackDetailSCreen";

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

export default function App() {
  const [isSignin, setIsSignin] = useState(false);

  return (
    <NavigationContainer>
      {!isSignin ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Signin" component={SinginScreen} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator screenOptions={{ tabBarLabelPosition: "beside-icon" }}>
          <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
          <Tab.Screen name="TrackListFlow" component={TrackListFlow} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
