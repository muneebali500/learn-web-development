import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Context } from "../context/BlogContext";

export default function ShowScreen({ route }) {
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
}
