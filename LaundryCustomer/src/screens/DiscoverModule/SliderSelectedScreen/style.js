import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
  isSmallDevice,
} from '../../../utility/Scale';
const buttonHeight = isSmallDevice
  ? 52
  : verticalScale(57) > 56
    ? 63
    : verticalScale(57) < 50
      ? 57
      : verticalScale(57);
const styles = StyleSheet.create({
  horizontalStyle: {
    marginLeft: horizontalScale(1),
    alignSelf: 'center',
  },
  titleText: {
    color: allColors.black,
    fontFamily: FONT_FAMILY.RobotoCondensedLight,
    fontSize: scaleFontSize(14),
    fontWeight: '300',
    marginRight: horizontalScale(5),
  },
  verticalStyle: {
    marginTop: verticalScale(5),
    marginLeft: horizontalScale(5),
    alignSelf: 'center',
  },
  buttonStyles: {
    borderRadius: buttonHeight / 10,
    height: buttonHeight,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginHorizontal: 20,
    bottom: 10,
    right: 0,
    position: 'absolute',

  },
  optionContainerCommonStyle : {
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(14),
    marginBottom: verticalScale(0),
    marginTop: verticalScale(0),
    marginLeft: horizontalScale(0),
    marginRight: horizontalScale(0),
    backgroundColor: allColors.darkYellow ,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 40,
    borderWidth:0.5,
  },
  container: {
    height: 55,
    borderWidth: 0.3,
    width: '100%',
    borderColor: allColors.borderBlack,
    borderRadius: 10,
    justifyContent: 'center',
  },
  deliveryFee: {
    fontFamily: FONT_FAMILY.RobotoCondensedBold,
    fontWeight: 'bold',
    fontSize: scaleFontSize(16),
    color: allColors.ruby,
    marginVertical : verticalScale(10)
  },
  subContainer: {
    marginLeft: horizontalScale(16),
    marginRight: horizontalScale(21),
  },
  title: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: 'normal',
    fontSize: scaleFontSize(15),
    color: allColors.black,
  },
  spaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  containerCommonStyle : {
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(14),
    marginVertical:verticalScale(10),
    backgroundColor: allColors.darkYellow ,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 40,
    borderWidth:  0,
  },

  activeTitleStyle : {
    fontFamily:  FONT_FAMILY.RobotoCondensedRegular,
    fontSize: scaleFontSize(15),
    fontWeight: 'normal',
    color: allColors.white ,
    marginRight:  0,
  },
  checkboxContainer: {
    flexDirection: "row",
  justifyContent:'center',
  alignItems:'center'
  },
  checkbox: {

    alignSelf: "center",
  },
});

export default styles;
