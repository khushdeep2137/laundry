import { StyleSheet } from 'react-native';
import { allColors } from '../../../assets/styles/mainColors';
import { FONT_FAMILY } from '../../../constants/constants';
import {
    horizontalScale,
    scaleFontSize,
    verticalScale,
} from '../../../utility/Scale';

const styles = StyleSheet.create({
    mainHeading: {
        fontSize: scaleFontSize(30),
        fontFamily: FONT_FAMILY.RobotoLight,
        color: allColors.black,
        paddingVertical: verticalScale(20)
    },
    subHeading: {
        fontSize: scaleFontSize(12),
        fontFamily: FONT_FAMILY.RobotoSemiBold,
        color: allColors.black,
        paddingVertical: verticalScale(10)
    },
    textInputStyle: {
        height: verticalScale(72),
        width: '100%',
        borderRadius: 36,
        fontSize: scaleFontSize(18),
        flex: 1,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: allColors.lightGreyText,
        paddingHorizontal: horizontalScale(25),
    },
    checkOutBtn: {
        height: verticalScale(70),
        width: '100%',
        //backgroundColor: allColors.black,
        borderRadius: 35,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkOutBtnTxt: {
        fontSize: scaleFontSize(24),
        fontFamily: FONT_FAMILY.RobotoLight,
        color: allColors.white,
    },
    locationEntry: {
        marginVertical: verticalScale(25)
    }
});

export default styles;
