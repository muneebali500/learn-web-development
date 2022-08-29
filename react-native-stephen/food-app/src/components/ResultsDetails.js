import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

export default function ResultsDetails({ result }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginBottom: 10,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginVertical: 5,
  },
  name: {
    fontWeight: `bold`,
  },
});
