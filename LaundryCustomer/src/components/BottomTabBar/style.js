import { StyleSheet } from 'react-native';
import { allColors } from '../../assets/styles/mainColors';
import { FONT_FAMILY } from '../../constants/constants';
import { horizontalScale, scaleFontSize, verticalScale } from '../../utility/Scale';

const styles = StyleSheet.create({
  borderView: {
    borderTopLeftRadius: 76 / 2,
    borderTopRightRadius: 76 / 2,
    borderWidth: 0.3,
    borderColor: allColors.borderBlack,
    width: '100%',
    height: 76,
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(10),
  },
  focusedItemText: {
    fontFamily: FONT_FAMILY.RobotoRegular,
    fontWeight: 'normal',
    fontSize: scaleFontSize(10),
    textDecorationLine: 'underline',
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  itemText: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
    fontSize: scaleFontSize(10),
    paddingBottom: 2,
  },
  mainView: {
    backgroundColor: allColors.white,
  },
  unFocusedItemText: {
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
    fontSize: scaleFontSize(10),
    textDecorationLine: 'none',
  },
  badge:{
    position: 'absolute',
    left: horizontalScale(16),
    bottom: verticalScale(22),
    backgroundColor: allColors.darkYellow,
    borderRadius: 9,
    width: horizontalScale(15),
    height: verticalScale(15),
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeText:{
    color: allColors.white,
    fontFamily: FONT_FAMILY.RobotoLight,
    fontWeight: '300',
    fontSize: scaleFontSize(10),
  }
});
export default styles;
