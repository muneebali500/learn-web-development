import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetails from "./ResultsDetails";

export default function ResultsList({ title, results }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => <ResultsDetails result={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: `bold`,
    marginLeft: 15,
  },
});
