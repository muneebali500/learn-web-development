import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

import { Context } from "../context/BlogContext";

export default function IndexScreen() {
  const { state, addBlogPost } = useContext(Context);

  return (
    <View>
      <Text>index screen</Text>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
      <Button onPress={addBlogPost} title="Add Post" />
    </View>
  );
}

const styles = StyleSheet.create({});
