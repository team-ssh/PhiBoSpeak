import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedLang, item) => ({
    width: 230,
    padding: SIZES.xLarge,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedLang, item) => ({
    width: 50,
    height: 50,
    backgroundColor: "#eeeeee",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  }),
  logoImage: {
    width: "70%",
    height: "100%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.medium,
  },
  languageName: (selectedLang, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedLang === item.name ? COLORS.primary : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedLang) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedLang === item.name ? COLORS.white : COLORS.primary,
  }),
  users: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
