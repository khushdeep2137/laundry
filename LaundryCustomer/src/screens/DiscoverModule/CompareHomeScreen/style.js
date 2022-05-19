import { StyleSheet } from 'react-native';
import { allColors } from '../../../assets/styles/mainColors';
import { FONT_FAMILY } from '../../../constants/constants';
import {
  horizontalScale,
  isSmallDevice,
  scaleFontSize,
  screenWidth,
  verticalScale,
} from '../../../utility/Scale';

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: scaleFontSize(30),
    fontFamily: FONT_FAMILY.RobotoRegular,
    color: allColors.black,
  },
  mainDescription: {
    fontSize: scaleFontSize(13),
    fontFamily: FONT_FAMILY.RobotoLight,
    color: allColors.DarkSilver,
    marginVertical: verticalScale(10),
    lineHeight: 18
  },
  title: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: 'bold',
    fontSize: scaleFontSize(15),
    color: allColors.black,
  },
  comparisonItems: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(8),
    borderRadius: 15,
    backgroundColor: allColors.yellow,
    marginRight: horizontalScale(10)
  },
  headerContainer: {
    height: 55,
    width: '80%',
    justifyContent: 'center',
    alignContent: 'flex-start',
    marginVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(10)
  },
  container: {
    height: 75,
    borderWidth: 0.3,
    width: '100%',
    borderColor: allColors.borderBlack,
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: verticalScale(5),
    backgroundColor: allColors.lightWhiteBg
  },
  deliveryFee: {
    fontFamily: FONT_FAMILY.RobotoCondensedBold,
    fontWeight: 'bold',
    fontSize: scaleFontSize(16),
    color: allColors.lightBlack,
  },
  subContainer: {
    marginLeft: horizontalScale(16),
    marginRight: horizontalScale(21),
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkbox: {

    alignSelf: "center",
  },
  imageContainer: {
    height: 55,
    width: 55,
    marginRight: horizontalScale(16),
  },
  imageIcon: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
  },

});

export default styles;
