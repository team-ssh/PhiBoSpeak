import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import styles from "./welcome.style";
import { useRouter } from "expo-router";
import { icons, SIZES } from "../../../constants";
import Search from "../../common/search/Search";

const Welcome = ({ name }: props) => {
  const router = useRouter();
  const [activeLangType, setActiveLangType] = useState("");

  const languages = ["English", "Thai", "Burmese", "German"];
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello {name}</Text>
        <Text style={styles.welcomeMessage}>Learn, Connect, Flourish!</Text>
      </View>
      <Search placeholder="Search for a language" />

      <View style={styles.tabsContainer}>
        <FlatList
          data={languages}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeLangType, item)}
              onPress={() => {
                setActiveLangType(item);
                // router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeLangType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
