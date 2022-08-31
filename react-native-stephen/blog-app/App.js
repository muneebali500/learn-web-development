import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "./src/context/BlogContext";

import IndexScreen from "./src/screens/indexScreen";
import ShowScreen from "./src/screens/ShowScreen";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="IndexScreen"
          component={IndexScreen}
          options={{ title: "Blog" }}
        />
        <Stack.Screen name="ShowScreen" component={ShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
