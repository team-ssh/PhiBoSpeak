import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  imageContainer: {
    height: "65%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: SIZES.xLarge,
    // backgroundImage:
    //   "linear-gradient(to right, #1b3c73, #25467e, #2e5188, #375c93, #40679e)",
    backgroundColor: COLORS.primary,
    borderEndStartRadius: 20,
    borderEndEndRadius: 20,
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
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    color: COLORS.primary,
    marginBottom: SIZES.xLarge,
  },
  image: {
    height: 350,
    width: 350,
    margin: "auto",
  },
});

export default styles;
