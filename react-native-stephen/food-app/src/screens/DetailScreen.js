import { Button } from "react-native";

export default function DetailScreen({ navigation }) {
  return (
    <div>
      <Button
        title="Go to details"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </div>
  );
}
