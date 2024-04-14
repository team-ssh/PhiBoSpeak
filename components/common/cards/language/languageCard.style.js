import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "fit-content",
    padding: SIZES.small,
    backgroundColor: "#DDDDDD",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  //   logoContainer: (selectedLang, item) => ({
  //     width: 50,
  //     height: 50,
  //     backgroundColor: "#eeeeee",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     borderRadius: 10,
  //   }),
  logoImage: {
    width: 30,
    height: 25,
  },

  languageName: {
    fontSize: SIZES.middle,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  //
});

export default styles;
