import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./Recording.style";
import { COLORS } from "../../../constants";
import { router } from "expo-router";

function Recording() {
  return (
    <View style={styles.container}>
      <View style={styles.closeBtnContainer}>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => router.push("/chat/Japanese")}
        >
          <AntDesign name="close" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>What do you want to study today?</Text>
      </View>
      <View style={styles.recordBtnContainer}>
        <TouchableOpacity style={styles.recordBtn}>
          <AntDesign name="pause" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Recording;
