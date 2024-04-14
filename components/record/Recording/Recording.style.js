import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    padding: 12,
    // height: "100vh",
    // height: "100vh",
    // backgroundColor: "red",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  closeBtnContainer: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: SIZES.medium,
  },
  closeBtn: {
    width: 40,
    height: "100%",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  recordBtnContainer: {
    width: "100%",
    position: "absolute",
    paddingBottom: 60,
    bottom: 0,
    // bottom: -30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  recordBtn: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.primary,
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: SHADOWS.medium,
  },
  titleContainer: {
    width: "100%",
    maxWidth: 500,
    alignItems: "center",
    margin: "auto",
    paddingVertical: SIZES.xxLarge,
  },
  description: {
    // height: "100%",
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    textAlign: "center",
    maxWidth: 500,
    marginBottom: SIZES.xLarge,
  },
  title: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    color: COLORS.primary,
    marginBottom: SIZES.xLarge,
    textAlign: "center",
  },
});

export default styles;
