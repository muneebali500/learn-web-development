import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./Screens/WelcomeScreen";
import ViewImageScreen from "./Screens/ViewImageScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        {/* <Stack.Screen name="ViewImage" component={ViewImageScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
