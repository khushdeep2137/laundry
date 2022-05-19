import {StyleSheet} from 'react-native';
import {allColors} from '../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../constants/constants';
import {horizontalScale} from '../../utility/Scale';

const style = StyleSheet.create({
  commonButtonView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    borderWidth: 1,
    borderColor: allColors.borderBlack,
    borderRadius: 5,
   
  },
  number: {
    fontFamily: FONT_FAMILY.RobotoCondensedRegular,
    fontWeight: '400',
    color: allColors.black,
    marginHorizontal: horizontalScale(7),
  },
});
export default style;
