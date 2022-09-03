import React, { useContext, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import { Context } from "../context/BlogContext";

export default function IndexScreen({ navigation }) {
  const { state, deleteBlogPost } = useContext(Context);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Blogs",
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("CreateScreen")}>
          <Feather name="plus" size={30} style={styles.plusIcon} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ShowScreen", { id: item.id })}
          >
            <View style={styles.row}>
              <Text style={styles.title}>
                {item.title} - {item.id}
              </Text>
              <Text>{item.content}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={styles.deleteIcon} name="trash" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: `row`,
    justifyContent: `space-between`,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: `gray`,
  },
  title: {
    fontSize: 18,
  },
  deleteIcon: {
    fontSize: 24,
  },
  plusIcon: {
    marginRight: 10,
  },
});
