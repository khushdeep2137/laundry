/* eslint-disable */
import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, Image, TouchableOpacity, Text } from 'react-native';

//Components
import ArrowRightLongIcon from '../../../components/icons/ArrowRightLongIcon/ArrowRightLongIcon';
import Header from '../../../components/Header/Header';
import RadioButton from '../../../components/RadioButton/RadioButton';
import SquareListIcon from '../../../components/SquareListIcon/SquareListIcon';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';

//Publicly Available Icons that Can be Used for Commercial Purposes
import Apple from '../../../assets/images/appleSVG.svg';
import CreditCard from '../../../assets/images/mastercardSVG.svg';
import PayPal from '../../../assets/images/paypalSVG.svg';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import Routes from '../../../navigation/Routes';
import { horizontalScale, verticalScale } from '../../../utility/Scale';
import { navigate } from '../../../utility/NavigationService';
import styles from './style';
import { allColors } from '../../../assets/styles/mainColors';

/*-------------------- Payment Method Options Displayed Data Start --------------------*/
const paymentOptionsDisplayedArr = [
    {
        id: 0,
        isActive: false,
        leftIconComponent: < CreditCard />,
        title: 'Credit Card',
        rightIconComponent: < ArrowRightLongIcon />
    },
    {
        id: 1,
        isActive: false,
        leftIconComponent: <PayPal />,
        title: 'PayPal',
        rightIconComponent: <ArrowRightLongIcon />

    },
    {
        id: 2,
        isActive: false,
        leftIconComponent: <Apple />,
        title: 'COD',
        rightIconComponent: <ArrowRightLongIcon />
    },
];
/*-------------------- Payment Method Options Displayed Data End --------------------*/

const PaymentMethodSelectScreen = ({ navigation }) => {
    const [optionArray, setOptionArray] = useState(paymentOptionsDisplayedArr);
    const [isSubmitDisable, setIsSubmitDisable] = useState(true);
    /* ------ which option is selected from the payment method options that are displayed initially start ------- */
    const selectOption = (item) => {
        setOptionArray(
            optionArray.map(object => {
                if (object.id === item.id) {
                    return { ...object, isActive: true };
                } else {
                    return { ...object, isActive: false };
                }
            }),
        );
        setIsSubmitDisable(false)
    };
    /* ------ which option is selected from the payment method options that are displayed initially end ------- */

    return (
        <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
            {/*------- Header Start -----*/}
            <Header
                title={'Payment Method'}
                onLeftIconPress={() => navigation.goBack()}
                onRightIconPress={() => navigation.toggleDrawer()}
            />
            {/*------- Header End -----*/}

            {/*------- Vertical Scroll View Start -----*/}
            <ScrollView
                style={[globalStyles.flex]}
                contentContainerStyle={globalStyles.commonScrollViewPadding}
                showsVerticalScrollIndicator={false}>
                <View style={globalStyles.horizontalGeneralPadding}>
                    {/*---- Page Title and Picture Container Start ------*/}
                    <View>
                        <TitlePicture
                            componentTopPadding={5}
                            //   imageComponent={
                            //     <Image
                            //         source={require('../../../assets/placeholders/105x100.png')}
                            //       style={{height: horizontalScale(100), width: verticalScale(105), borderRadius: 3}}
                            //     />
                            //   }
                            titleTopPadding={16}
                            title={'Payment Methods'}
                            description={
                                'Enter your new password and then click on the "Save" button below'
                            }
                            descriptionTopPadding={7}
                            componentBottomPadding={25}
                        />
                    </View>
                    {/*---- Page Title and Picture Container End ------*/}

                    {/*---- Page Title and Picture Container End ------*/}
                    <View style={[globalStyles.commonScrollViewPadding]}>
                        {optionArray.map((radioItem, index) => {


                            return (
                                <TouchableOpacity
                                    onPress={() =>
                                        console.log("selection")
                                    }
                                    key={'radio_button_ ' + index}
                                    style={[
                                        styles.containerStyle,
                                        {
                                            marginBottom:
                                                index === optionArray.length - 1
                                                    ? 0
                                                    : verticalScale(23),
                                        },
                                    ]}>
                                    <View style={globalStyles.flex}>
                                        <SquareListIcon
                                            onPress={() =>selectOption(radioItem)}
                                            showBorder={false}
                                            leftIconRightPadding={20}
                                            leftIconLeftPadding={20}
                                            leftIconComponent={radioItem.leftIconComponent}
                                            title={radioItem.title}
                                            rightIconComponent={radioItem.rightIconComponent}
                                            containerActive = {radioItem.isActive}
                                        />
                                    </View>

                                </TouchableOpacity>
                            );


                        })}
                    </View>


                    <TouchableOpacity disabled={isSubmitDisable}
                        style={[styles.submitBtn, , { backgroundColor: isSubmitDisable ? allColors.lightBlack : allColors.black }]}
                        onPress={() => navigate(Routes.DeliveryProcessScreen)}>
                        <Text style={styles.submitBtnTxt}>Submit</Text>
                    </TouchableOpacity>
                </View>
                {/*---- Page Title and Picture Container End ------*/}
            </ScrollView>
            {/*------- Vertical Scroll View End -----*/}
        </SafeAreaView>
    );
};

export default PaymentMethodSelectScreen;
