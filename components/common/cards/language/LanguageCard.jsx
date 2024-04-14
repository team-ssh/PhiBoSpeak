import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./languageCard.style";
import { router } from "expo-router";
// import { checkImageURL } from "../../../../utils";

const LanguageCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`/chat/${item.title}`)}
    >
      <Image
        source={item.logo}
        // source="https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
        resizeMode="contain"
        style={styles.logoImage}
      />
      <Text style={styles.languageName} numberOfLines={1}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default LanguageCard;
