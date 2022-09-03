import React, { useContext, useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

export default function ShowScreen({ route, navigation }) {
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Blogs",
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("EditScreen", { blogPost })}
        >
          <EvilIcons name="pencil" size={30} style={styles.pencilIcon} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text style={styles.title}>{blogPost.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
  pencilIcon: {
    marginRight: 10,
  },
});
