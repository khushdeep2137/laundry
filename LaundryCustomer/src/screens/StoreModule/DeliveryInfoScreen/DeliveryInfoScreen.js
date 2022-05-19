import React, { useState, useEffect, useCallback } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    SafeAreaView,
    Platform,
    TextInput,
    Image,
    Pressable,
} from 'react-native';

//Components
import Header from '../../../components/Header/Header';
//Components
import TabMenuItem from '../../../components/TabMenuItem/TabMenuItem';
import TabMenuList from '../../../components/TabMenuList/TabMenuList';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import { navigate } from '../../../utility/NavigationService';
import Routes from '../../../navigation/Routes';


//Third Party
import { useDispatch, useSelector } from 'react-redux';

//Svg
import LocationPen from '../../../assets/icons/generalIcons/location_pen.svg';
import DropoffInactive from '../../../assets/icons/generalIcons/dropoff_inactive.svg';
import PickupActive from '../../../assets/icons/generalIcons/dropoff_active.svg';
import DropoffActive from '../../../assets/icons/generalIcons/pickup_active.svg';
import PickupInactive from '../../../assets/icons/generalIcons/pickup_inactive.svg';


//Dummy Data
import SubItemsDummy from '../../../DummyData/SubItemsDummyData';
import { horizontalScale, screenHeight, screenWidth, verticalScale } from '../../../utility/Scale';
import { allColors } from '../../../assets/styles/mainColors';
import AddressSettingDummyData from '../../../DummyData/AddressSettingDummyData.json';

const TimeSlot =
    [{ id: 1, title: "10:00 AM To 11:00 AM", isActive: false, isDisable: false },
    { id: 2, title: "11:00 AM To 12:00 AM", isActive: false, isDisable: false },
    { id: 3, title: "12:00 PM To 01:00 PM", isActive: false, isDisable: false },
    { id: 4, title: "01:00 AM To 02:00 PM", isActive: false, isDisable: false },
    { id: 5, title: "02:00 AM To 03:00 PM", isActive: false, isDisable: false },
    { id: 6, title: "03:00 AM To 04:00 PM", isActive: false, isDisable: false },
    { id: 7, title: "04:00 AM To 05:00 PM", isActive: false, isDisable: false },
    { id: 8, title: "05:00 AM To 06:00 PM", isActive: false, isDisable: false }];

const DateOptions =
    [{ id: 1, title: "Today", isActive: false, isDisable: false },
    { id: 2, title: "Tomorrow", isActive: false, isDisable: false },
    { id: 3, title: " Day After Tomorrow", isActive: false, isDisable: false }];

const DeliveryPickupOption =
    [{ id: 1, title: "Pick Up", isActive: true, isDisable: false, activeIconComponent: <PickupActive />, inActiveIconComponent: <PickupInactive /> },
    { id: 2, title: "Drop Off", isActive: false, isDisable: false, activeIconComponent: <DropoffActive />, inActiveIconComponent: <DropoffInactive /> }]



const DeliveryInfoScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const [isCheckoutDisable, setIsCheckoutDisable] = useState(true);
    const [isPickup, setIsPickup] = useState(true);
    const deliveryDetails = useSelector(state => state.deliveryAddressData, [])
    //set the data from dummy data for tab menu
    const storeDeliveryOptionsTabMenuData = useCallback(
        () => dispatch(Action.storeDeliveryOptionsTabMenuItems(DeliveryPickupOption)),
        [dispatch],
    );
    const storeDeliveryDateTabMenuData = useCallback(
        () => dispatch(Action.storeDeliveryDateTabMenuItems(JSON.parse(JSON.stringify(DateOptions)))),
        [dispatch],
    );
    const storeDeliveryTimeTabMenuData = useCallback(
        () => dispatch(Action.storeDeliveryTimeTabMenuItems(JSON.parse(JSON.stringify(TimeSlot)))),
        [dispatch],
    );
    const storePickupDateTabMenuData = useCallback(
        () => dispatch(Action.storePickupDateTabMenuItems(JSON.parse(JSON.stringify(DateOptions)))),
        [dispatch],
    );
    const storePickupTimeTabMenuData = useCallback(
        () => dispatch(Action.storePickupTimeTabMenuItems(JSON.parse(JSON.stringify(TimeSlot)))),
        [dispatch],
    );
    const storeUserAddressData = useCallback(
        () => dispatch(Action.storeUserAddress(AddressSettingDummyData.data)),
        [dispatch],
    );
    const deliveryOptionsTabMenuList = useSelector(state => state.DeliveryOptionsTabMenuList, []);
    const deliveryDateTabMenuList = useSelector(state => state.DeliveryDateTabMenuList, []);
    const deliveryTimeTabMenuList = useSelector(state => state.DeliveryTimeTabMenuList, []);
    const pickupDateTabMenuList = useSelector(state => state.PickupDateTabMenuList, []);
    const pickupTimeTabMenuList = useSelector(state => state.PickupTimeTabMenuList, []);
    debugger
    const userAddress = useSelector(state => state.userAddressList.filter(x => x.isActive), []);
    // const [pickupLocation , setPickupLocation] = useState('');
    // const [dropoffLocation , setDropoffLocation] = useState('')

    useEffect(() => {
        debugger
        if (userAddress.length > 0 &&  deliveryDetails.pickupInformation == undefined) {
            deliveryDetails.pickupInformation ={
                address : userAddress[0].address
            }
        }
        if (userAddress.length > 0 &&  deliveryDetails.deliveryInformation == undefined) {
            deliveryDetails.deliveryInformation ={
                address : userAddress[0].address
            }
        }
       // dispatch(Action.storeDeliveryAddressData(deliveryDetails));
    }, [userAddress])

    useEffect(() => {
        storeDeliveryOptionsTabMenuData();
        storeDeliveryDateTabMenuData();
        storeDeliveryTimeTabMenuData();
        storePickupDateTabMenuData();
        storePickupTimeTabMenuData();
        storeUserAddressData();
    }, []);

    const updateCheckoutStatus = () => {
        if (deliveryDateTabMenuList.find(x => x.isActive) && deliveryTimeTabMenuList.find(x => x.isActive) && pickupDateTabMenuList.find(x => x.isActive) && pickupTimeTabMenuList.find(x => x.isActive)) {
            setIsCheckoutDisable(false);
        }

    }

    const onChangeDeliveryTab = (item) => {
        deliveryOptionsTabMenuList.forEach(option => {
            if (option.id == item.id) {
                option.isActive = true;
            }
            else {
                option.isActive = false;
            }
        })
        setIsPickup(deliveryOptionsTabMenuList[0].isActive)
        dispatch(Action.storeDeliveryOptionsTabMenuItems(deliveryOptionsTabMenuList))
    }
    const onChangeDeliveryDateTab = (item) => {
        deliveryDateTabMenuList.forEach(option => {
            if (option.id == item.id) {
                option.isActive = true;
            }
            else {
                option.isActive = false;
            }
        });

        dispatch(Action.storeDeliveryDateTabMenuItems(deliveryDateTabMenuList))
        updateCheckoutStatus();
    }
    const onChangeDeliveryTimeTab = (item) => {
        deliveryTimeTabMenuList.forEach(option => {
            if (option.id == item.id) {
                option.isActive = true;
            }
            else {
                option.isActive = false;
            }
        })

        dispatch(Action.storeDeliveryTimeTabMenuItems(deliveryTimeTabMenuList));
        updateCheckoutStatus();
    }

    const onChangePickupDateTab = (item) => {
        pickupDateTabMenuList.forEach(option => {
            if (option.id == item.id) {
                option.isActive = true;
            }
            else {
                option.isActive = false;
            }
        })
        deliveryDateTabMenuList.forEach(option => {
            if (option.id < item.id) {
                option.isDisable = true;
                option.isActive = false;
            }
            else {
                option.isDisable = false;
            }
        })
        dispatch(Action.storeDeliveryDateTabMenuItems(deliveryDateTabMenuList));
        dispatch(Action.storePickupDateTabMenuItems(pickupDateTabMenuList));
        updateCheckoutStatus();
    }
    const onChangePickupTimeTab = (item) => {
        pickupTimeTabMenuList.forEach(option => {
            if (option.id == item.id) {
                option.isActive = true;
            }
            else {
                option.isActive = false;
            }
        })
        // deliveryTimeTabMenuList.forEach(option=>{
        //     if(option.id < item.id){
        //         option.isDisable = true;
        //         option.isActive = false;
        //     }
        //     else{
        //         option.isDisable = false;
        //     }
        // });
        // dispatch(Action.storeDeliveryTimeTabMenuItems(deliveryTimeTabMenuList));
        dispatch(Action.storePickupTimeTabMenuItems(pickupTimeTabMenuList));
        updateCheckoutStatus();
    }
    //Single Tab Menu Item which gets information from tabMenuList
    const renderDeliveryTabMenuRows = ({ item }) => {
        return (
            <TabMenuItem

                key={'delivery_tab_' + item.id}
                itemData={item}
                onPress={itemData => onChangeDeliveryTab(itemData)}
                title={item.title}
                isActive={item.isActive}
                componentMarginRight={horizontalScale(15)}
                iconComponent={item.iconPath}
                componentMarginTop={verticalScale(10)}
                componentDisable={item.isDisable}
                frontIconComponent={item.id == 1 ? <PickupInactive /> : <DropoffInactive />}
            />
        );
    };
    const renderDeliveryDateTabMenuRows = ({ item }) => {
        return (
            <TabMenuItem

                key={'delivery_date_tab_' + item.id}
                itemData={item}
                onPress={itemData => onChangeDeliveryDateTab(itemData)}
                title={item.title}
                isActive={item.isActive}
                componentMarginRight={horizontalScale(15)}
                iconComponent={item.iconPath}
                componentDisable={item.isDisable}
                componentMarginTop={verticalScale(10)}
                componentMarginBottom={verticalScale(15)}
                componentWidth={screenWidth * 0.30}
            />
        );
    };

    const renderDeliveryTimeTabMenuRows = ({ item }) => {
        return (
            <TabMenuItem
                key={'delivery_time_tab_' + item.id}
                itemData={item}
                onPress={itemData => onChangeDeliveryTimeTab(itemData)}
                title={item.title}
                isActive={item.isActive}
                componentMarginRight={horizontalScale(15)}
                iconComponent={item.iconPath}
                //   componentPaddingHorizontal={horizontalScale(10)}
                componentMarginTop={verticalScale(10)}
                componentDisable={item.isDisable}
            />
        );
    };

    const renderPickupDateTabMenuRows = ({ item }) => {
        return (
            <TabMenuItem

                key={'pickup_date_tab_' + item.id}
                itemData={item}
                onPress={itemData => onChangePickupDateTab(itemData)}
                title={item.title}
                isActive={item.isActive}
                componentMarginRight={horizontalScale(15)}
                iconComponent={item.iconPath}
                componentDisable={item.isDisable}
                componentMarginTop={verticalScale(10)}
                componentMarginBottom={verticalScale(15)}
                componentWidth={screenWidth * 0.30}
            />
        );
    };

    const renderPickupTimeTabMenuRows = ({ item }) => {
        return (
            <TabMenuItem
                key={'pickup_time_tab_' + item.id}
                itemData={item}
                onPress={itemData => onChangePickupTimeTab(itemData)}
                title={item.title}
                isActive={item.isActive}
                componentMarginRight={horizontalScale(15)}
                iconComponent={item.iconPath}
                //   componentPaddingHorizontal={horizontalScale(10)}
                componentMarginTop={verticalScale(10)}
                componentDisable={item.isDisable}
            />
        );
    };
    return (
        <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
            {/*------- Header Start -----*/}
            <Header onLeftIconPress={() => navigation.goBack()} onRightIconPress={() => navigation.toggleDrawer()} />
            {/*------- Header End -----*/}
            <ScrollView style={globalStyles.flex} showsVerticalScrollIndicator={false} contentContainerStyle={globalStyles.commonScrollViewPadding}>
                <View style={[globalStyles.horizontalGeneralPadding, globalStyles.flex]}>
                    <Text style={styles.mainHeading}>Choose Pick &#38; Drop Location</Text>
                    <Text style={styles.mainDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>


                    {/* <TabMenuList
                        informationArray={deliveryTabMenuList}
                        customSlideComponent={renderDeliveryTabMenuRows}
                        contentContainerStyle={{}}
                    /> */}
                    <FlatList
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        data={deliveryOptionsTabMenuList}
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderDeliveryTabMenuRows}
                    />


                    {isPickup &&
                        <View>
                            <View style={styles.viewMargin}>
                                <Text style={styles.subHeading}>Pick Up From:</Text>
                                <TouchableOpacity onPress={() => navigate(Routes.LocationInfoScreen, { forPickup: true, forDropOff: false })} >
                                    <Text style={styles.currentLocationTxt}>{ deliveryDetails.pickupInformation!=undefined ? deliveryDetails.pickupInformation.address : '-'} <LocationPen /> </Text>
                                </TouchableOpacity>

                            </View>
                            <View>
                                <Text style={styles.subHeading}>Select Pick Up Date</Text>
                                <FlatList horizontal showsHorizontalScrollIndicator={false}
                                    //  style={{ marginBottom: 20 }}
                                    data={pickupDateTabMenuList}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={renderPickupDateTabMenuRows}
                                />
                            </View>
                            <View style={styles.viewMargin}>
                                <Text style={styles.subHeading}>Select Pick Up Time</Text>
                                <FlatList columnWrapperStyle={{ justifyContent: 'space-between' }} style={{ marginBottom: 20 }}
                                    data={pickupTimeTabMenuList}
                                    numColumns={2}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={renderPickupTimeTabMenuRows}
                                />
                            </View>
                        </View>}

                    {!isPickup &&
                        <View>
                            <View style={styles.viewMargin}>
                                <Text style={styles.subHeading}>Drop Off at:</Text>
                                <TouchableOpacity onPress={() => navigate(Routes.LocationInfoScreen, { forPickup: false, forDropOff: true })} >
                                    <Text style={styles.currentLocationTxt}>{deliveryDetails.deliveryInformation !=undefined ? deliveryDetails.deliveryInformation.address :'-'} <LocationPen /></Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={styles.subHeading}>Select Drop Off Date</Text>

                                <FlatList horizontal showsHorizontalScrollIndicator={false}
                                    //style={{ marginBottom: 20 }}
                                    data={deliveryDateTabMenuList}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={renderDeliveryDateTabMenuRows}
                                />
                            </View>
                            <View style={styles.viewMargin}>
                                <Text style={styles.subHeading}>Select Drop Off Time</Text>
                                <FlatList columnWrapperStyle={{ justifyContent: 'space-between' }} style={{ marginBottom: 20 }}
                                    data={deliveryTimeTabMenuList}
                                    numColumns={2}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={renderDeliveryTimeTabMenuRows}
                                />
                            </View>
                        </View>
                    }

                    <TouchableOpacity disabled={isCheckoutDisable}
                        style={[styles.checkOutBtn, { backgroundColor: isCheckoutDisable ? allColors.lightBlack : allColors.black }]}
                        onPress={() => navigate(Routes.PaymentMethodsSelectScreen)}>
                        <Text style={styles.checkOutBtnTxt}>Checkout</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DeliveryInfoScreen;
