import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

import BlogContext from "../context/BlogContext";

export default function IndexScreen() {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>index screen</Text>
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
      <Button onPress={addBlogPost} title="Add Post" />
    </View>
  );
}

const styles = StyleSheet.create({});
