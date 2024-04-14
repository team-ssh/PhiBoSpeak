import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./chooseLanguage.styles";
import Search from "../../common/search/Search";
import { languages } from "../../../data/languages";
import LanguageCard from "../../common/cards/language/LanguageCard";
import { router } from "expo-router";

function ChooseLanguage() {
  return (
    <View>
      <Text style={styles.title}>Choose Language to Study</Text>
      <Search placeholder="Search Language" />
      <View style={styles.languageContainer}>
        {languages?.map((language) => (
          <LanguageCard
            item={language}
            key={language.title}
            onPress={() => router.push(`/select/${language.title}`)}
          />
        ))}
      </View>
    </View>
  );
}

export default ChooseLanguage;
