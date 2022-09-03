import React, { useState, useContext } from "react";

import { StyleSheet } from "react-native";
import BlogForm from "../components/BlogForm";
import { Context } from "../context/BlogContext";

export default function EditScreen({ navigation, route }) {
  const { editBlogPost } = useContext(Context);

  const { id, title, content } = route.params.blogPost;

  return (
    <BlogForm
      blogPost={{ title, content }}
      onSubmit={(newTitle, newContent) =>
        editBlogPost(id, newTitle, newContent, () => {
          navigation.popToTop();
        })
      }
    />
  );
}

const styles = StyleSheet.create({});
