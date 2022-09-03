import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

export default function BlogForm({ onSubmit, blogPost }) {
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={(title) => setTitle(title)}
        style={styles.input}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        value={content}
        onChangeText={(content) => setContent(content)}
        style={styles.input}
      />
      <Button title="Save Blog" onPress={() => onSubmit(title, content)} />
    </View>
  );
}

BlogForm.defaultProps = {
  blogPost: {
    title: ``,
    content: ``,
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: `black`,
    marginBottom: 15,
    margin: 5,
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});
