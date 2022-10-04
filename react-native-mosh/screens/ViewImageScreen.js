import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>

      <Image
        resizeMode="contain"
        source={require(`../assets/chair.jpg`)}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  closeIcon: {
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
    position: `absolute`,
    top: 40,
    left: 30,
  },
  deleteIcon: {
    height: 50,
    width: 50,
    backgroundColor: colors.secondary,
    position: `absolute`,
    top: 40,
    right: 30,
  },
  image: {
    height: `100%`,
    width: `100%`,
  },
});
