import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  title: {
    fontFamily: FONTS.RubikMedium,
    fontSize: SIZES.large,
    textAlign: "center",
    color: COLORS.lightDark,
  },
  subtitle: {
    fontFamily: FONTS.RubikRegular,
    color: '#8391A1',
    fontSize: 15,
    textAlign: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  categoriesContainer: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  emojiAndTextContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: SIZES.large,
    justifyContent: "flex-start",
    flex: 1,
  },
  checkbox: {},
  saveBtn: {
    backgroundColor: "#735AFB",
    alignSelf: "center",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
  },
  saveBtnText: {
    color: COLORS.white,
    fontFamily: FONTS.RubikSemiBold,
    fontSize: SIZES.medium,
  },
});

export default styles;
