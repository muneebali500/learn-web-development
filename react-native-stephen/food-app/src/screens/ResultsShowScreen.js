import { useState, useEffect } from "react";
import { Text, View, FlatList, Image, StyleSheet } from "react-native";
import yelp from "../api/yelp";

export default function ResultsShowScreen({ route }) {
  const [result, setResult] = useState({});
  const id = route.params.id;

  async function getResult(id) {
    const response = await yelp.get(`/${id}`);

    setResult(response.data);
  }

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  console.log(result.photos);

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});
