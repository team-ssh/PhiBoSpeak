import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./popular.style";
import { COLORS, SIZES } from "../../../constants";
import { useState } from "react";
import { useRouter } from "expo-router";
import { popularLanguages } from "../../../data/languages";
import PopularCard from "../../common/cards/popular/PopularCard";
// import useFetch from "../../../hooks/useFetch";

const PopularLanguages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Languages</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={popularLanguages}
          renderItem={({ item }) => <PopularCard item={item} />}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
      </View>
    </View>
  );
};

export default PopularLanguages;
