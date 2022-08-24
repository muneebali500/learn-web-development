import { useState } from "react";

/////// custom hooks
import useResults from "../hooks/useResults";

////// UI components from react-native
import { View, Text, Button, ScrollView } from "react-native";

///// custom components
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";

//------------------- Main Component Function ---------------------//
export default function SearchScreen() {
  const [term, setTerm] = useState(``);
  const [searchApi, results, errorMessage] = useResults();

  function filterResultsByPrice(price) {
    return results.filter((result) => result.price === price);
  }

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>there are about {results.length} restaurants</Text>
      <Button onPress={() => searchApi(term)} title="Search Results" />
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice(`$`)}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice(`$$`)} title="Bit Pricer" />
        <ResultsList
          results={filterResultsByPrice(`$$$`)}
          title="Big Spender!"
        />
      </ScrollView>
    </View>
  );
}
