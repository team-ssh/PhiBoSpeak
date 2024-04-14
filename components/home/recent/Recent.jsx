import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./recent.style";
import { COLORS, SIZES } from "../../../constants";
import { useRouter } from "expo-router";
import { recentLanguages } from "../../../data/languages";
import RecentCard from "../../common/cards/recent/RecentCard";
//
const RecentLanguages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recent Activities</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {recentLanguages?.map((lang) => (
          <RecentCard language={lang} key={`recent-${lang?.title}`} />
        ))}
      </View>
    </View>
  );
};

export default RecentLanguages;
