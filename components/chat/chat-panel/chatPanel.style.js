import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    // height: "100vh",
    // height: "100vh",
    // backgroundColor: "red",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  messageContainer: {
    padding: 12,
    height: "800px",
  },
  message: {
    // backgroundColor: "white",
    backgroundColor: COLORS.primary,

    padding: SIZES.medium,
    borderRadius: SIZES.medium,
    width: "fit-content",
  },
  responseContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  response: {
    backgroundColor: COLORS.primary,
    color: "white",
    padding: SIZES.small,
    borderRadius: SIZES.medium,
    width: "fit-content",
  },
  responseText: {
    color: "white",
    fontFamily: FONT.regular,
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
    position: "absolute",
    paddingBottom: 30,
    // top: 0,
    bottom: -30,
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    borderRadius: SIZES.small,
  },

  input: {
    fontFamily: FONT.regular,
    width: "100%",
    height: 48,
    paddingHorizontal: SIZES.medium,
  },
  inputBtn: {
    width: 40,
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
