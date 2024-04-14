import { Image, Text, View } from "react-native";
import { router } from "expo-router";
import styles from "./gettingStarted.style";
import Button from "../common/button/Button";

function GettingStarted() {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/login.gif")}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Your Journey to Language Mastery Starts Here!
        </Text>
        <Text style={styles.description}>
          Empower Your Voice, Embrace Every Language: Learn, Connect, Flourish!
        </Text>
        <Button title="Get Started" onPress={() => router.push("/home")} />
      </View>
    </View>
  );
}

export default GettingStarted;
