import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import BlogForm from "../components/BlogForm";
import { Context } from "../context/BlogContext";

export default function CreateScreen({ navigation }) {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogForm
      onSubmit={(title, content) =>
        addBlogPost(title, content, () => {
          navigation.popToTop();
        })
      }
    />
  );
}

const styles = StyleSheet.create({});
