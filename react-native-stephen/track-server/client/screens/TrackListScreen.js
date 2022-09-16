import React from "react";

import { View, Text, Button } from "react-native";

export default function TrackListScreen({ navigation }) {
  return (
    <View>
      <Text>Track list screen</Text>
      <Button
        title="go to track detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </View>
  );
}
