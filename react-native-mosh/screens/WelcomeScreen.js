import { View, Image, Text, StyleSheet, ImageBackground } from "react-native";
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={5}
      source={require(`../assets/background.jpg`)}
      resizeMode="cover"
      style={styles.imageBg}
    >
      <View style={styles.logoContainer}>
        <Image source={require(`../assets/logo-red.png`)} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => console.log(`tapped`)} />
        <AppButton
          title="SingUp"
          color="secondary"
          onPress={() => console.log(`tapped`)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    justifyContent: `flex-end`,
    alignItems: `center`,
  },
  buttonContainer: {
    padding: 20,
    width: `100%`,
  },
  logoContainer: {
    position: `absolute`,
    top: 70,
    alignItems: `center`,
  },
  logo: {
    height: 100,
    width: 100,
  },
  tagline: {
    fontSize: 25,
    paddingVertical: 20,
    fontWeight: 600,
  },
});
