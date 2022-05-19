import {StyleSheet} from 'react-native';
import {allColors} from '../../../assets/styles/mainColors';
import {FONT_FAMILY} from '../../../constants/constants';
import {
  scaleFontSize,
  verticalScale,
} from '../../../utility/Scale';

const styles = StyleSheet.create({
    submitBtn: {
        height: verticalScale(70),
        width: '100%',
        backgroundColor: allColors.black,
        borderRadius: 35,
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
      },
      submitBtnTxt: {
        fontSize: scaleFontSize(24),
        fontFamily: FONT_FAMILY.RobotoLight,
        color: allColors.white,
      }
    

});

export default styles;
