import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./popularcard.style";
// import { checkImageURL } from "../../../../utils";

const PopularCard = ({ item, selectedLang }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedLang, item)}
      // onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedLang, item)}>
        <Image
          source={item.logo}
          // source="https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      {/* <Text style={styles.companyName} numberOfLines={1}>
        {item.users}
      </Text> */}
      <View style={styles.infoContainer}>
        <Text style={styles.languageName(selectedLang, item)} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.users}>{item.users}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularCard;
