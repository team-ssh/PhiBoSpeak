import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./recentcard.style";

const RecentCard = ({ language, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={language?.logo}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.languageName} numberOfLines={1}>
          {language?.title}
        </Text>

        <Text style={styles.languageType}>{language?.minutes}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecentCard;
