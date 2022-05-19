import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {
  horizontalScale,
  isSmallDevice,
  scaleFontSize,
  screenWidth,
  verticalScale,
} from '../../../utility/Scale';

const textFieldHeight = isSmallDevice
  ? 44
  : verticalScale(46) > 51
  ? 51
  : verticalScale(46) < 46
  ? 46
  : verticalScale(46);

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: scaleFontSize(30),
    fontFamily: FONT_FAMILY.RobotoLight,
    color: allColors.black,
  },
  mainDescription: {
    fontSize: scaleFontSize(13),
    fontFamily: FONT_FAMILY.RobotoLight,
    color: allColors.DarkSilver,
    marginVertical: verticalScale(10),
    lineHeight: 18
  },
  commonBtn: {
    backgroundColor:allColors.white,
    borderRadius:30,
    height:30,
    width: '49%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: allColors.DarkSilver,
    marginVertical: verticalScale(6),
    justifyContent:'center',
    alignItems:'center',
  },
  commonBtnPressed: {
    backgroundColor:allColors.darkYellow,
    borderRadius:30,
    height:30,
    width: '49%',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal: horizontalScale(20),
    marginVertical: verticalScale(6)
  },
  pickupDropBtn: {
    paddingHorizontal: horizontalScale(40),
    width: '100%'
  },
  pickupTimeBtn: {
    width: undefined,
    paddingHorizontal: horizontalScale(5)
  },
  pickupDateBtn: {
    width: undefined,
    paddingHorizontal: horizontalScale(20),
    marginRight: horizontalScale(15)
  },
  pickupDropBtns: {
    flex: 1/3,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  commonBtnPressedTxt: {
    fontSize: scaleFontSize(13),
    fontFamily: FONT_FAMILY.RobotoMedium,
    color: allColors.white,
  },
  commonBtnTxt: {
    fontSize: scaleFontSize(10),
    fontFamily: FONT_FAMILY.RobotoLight,
    color: allColors.DarkSilver,
  },
  subHeading: {
    fontSize: scaleFontSize(12),
    fontFamily: FONT_FAMILY.RobotoLight,
    color: allColors.black,
  },
  currentLocationTxt: {
    fontSize: scaleFontSize(13),
    fontFamily: FONT_FAMILY.RobotoLight,
    color: allColors.black,
  },
  viewMargin: {
    marginVertical: verticalScale(30)
  },
  pickupTimeSection: {
    justifyContent:'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  checkOutBtn: {
    height: verticalScale(70),
    width: '100%',
    //backgroundColor: allColors.black,
    borderRadius: 35,
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  checkOutBtnTxt: {
    fontSize: scaleFontSize(24),
    fontFamily: FONT_FAMILY.RobotoLight,
    color: allColors.white,
  }
});

export default styles;
