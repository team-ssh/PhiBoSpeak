import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { icons } from "../../../constants";
import styles from "./search.style";

function Search({ placeholder }: props) {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder={placeholder}
          value=""
          onChange={() => {}}
        />
      </View>

      <TouchableOpacity style={styles.searchBtn}>
        <Image
          source={icons.search}
          style={styles.searchBtnImage}
          resizeMode="contain"
          onProgress={() => {}}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Search;
