import React, { useState, createRef, useEffect, useCallback } from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';

//Third Party
import { ActionSheetCustom as ActionSheet } from 'react-native-custom-actionsheet';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigationState } from '@react-navigation/native';

//Components
import ActionSheetItem from '../../../components/ActionSheetItem/ActionSheetItem';
import BorderCategory from '../../../components/BorderCategory/BorderCategory';
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import Header from '../../../components/Header/Header';
import TitleWithSideIcons from '../../../components/TitleWithSideIcons/TitleWithSideIcons';
import TabMenuItem from '../../../components/TabMenuItem/TabMenuItem';
import LongButton from '../../../components/LongButton/LongButton';
import CachableImage from '../../../components/CachableImage/CachableImage';

//Publicly Available Icons that Can be Used for Commercial Purposes

import ARROWLEFT from '../../../assets/icons/generalIcons/arrowIcons/arrow_leftSVG.svg';

//Dummy Data
import FoodTypesDummyData from '../../../DummyData/FoodOptionTypeDummyData';
import ItemsDummy from '../../../DummyData/RestaurantListDummyData.json';
import SubItemsDummy from '../../../DummyData/SubItemsDummyData';

//Utils

import globalStyles from '../../../assets/styles/globalStyles';
import { horizontalScale, screenHeight, screenWidth, verticalScale } from '../../../utility/Scale';
import styles from './style';
import { func } from 'prop-types';

import CheckBox from "@react-native-community/checkbox";
import { allColors } from '../../../assets/styles/mainColors';
import { BUTTON_TYPE, FONT_FAMILY } from '../../../constants/constants';


const actionSheetRef = createRef();

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.comparisonItems}>
    <Text >{title}</Text>
  </View>
);


const CompareScreen = ({ navigation }) => {
  debugger
  const dispatch = useDispatch();
  const [laundries, setLaundries] = useState(ItemsDummy.data);
  const [selectedLaundries, setSelectedLaundries] = useState([]);
  const [services, setServices] = useState(FoodTypesDummyData.data);
  const [firstLaundryItems, setFirstLaundryItems] = useState([]);
  const [items, setItems] = useState([]);
  const [secondLaundryItems, setSecondLaundryItems] = useState([]);
  const [isAddToCompareButtonDisable, setIsAddToCompareButtonDisable] = useState(true);
  const [isShowCompareItems, setIsShowCompareItems] = useState(false);

  useEffect(() => {
    services[0].isActive = true
    setServices(services)
  }, [])

  useEffect(() => {
    if (selectedLaundries.length == 2) {
      setFirstLaundryItems(SubItemsDummy.data.filter(x => x.laundryId == selectedLaundries[0].id))
      setSecondLaundryItems(SubItemsDummy.data.filter(x => x.laundryId == selectedLaundries[1].id))
      setItems(SubItemsDummy.data.filter(x => x.laundryId == selectedLaundries[0].id))
    }
  }, [selectedLaundries])

  function getFirstItemPrice(item) {
    let price = "-";
    let val = firstLaundryItems.find(x => x.title == item.title);
    if (val != undefined) {
      let service = services.find(x => x.isActive)
      if (service != undefined) {
        let serviceIndex = val.services.findIndex(x => x.id == service.id)
        if (serviceIndex >= 0) {
        price = '$' + val.services[serviceIndex].deliveryFee;
        }
      }
    }
    return price;
  }

  function getSecondItemPrice(item) {
    let price = "-";
    let val = secondLaundryItems.find(x => x.title == item.title);
    if (val != undefined) {
      let service = services.find(x => x.isActive)
      if (service != undefined) {
        let serviceIndex = val.services.findIndex(x => x.id == service.id)
        if (serviceIndex >= 0) {
        price = '$' + val.services[serviceIndex].deliveryFee;
        }
      }
    }
    return price;
  }

  function onChangeLaundryServiceTab(item) {
    services.forEach(x => {
      if (x.id == item.id) {
        x.isActive = true;
      }
      else {
        x.isActive = false;
      }
    })
    setServices(services)
    let data = SubItemsDummy.data.filter(x => x.laundryId == selectedLaundries[0].id)
    setItems(JSON.parse(JSON.stringify(data)) )
  }

  const onChangeCheckboxValue = (item) => {
    let index = laundries.findIndex(x => x.id == item.id)
    laundries[index].isSelected = laundries[index].isSelected != undefined ? !laundries[index].isSelected : true;
    let val = laundries.filter(x => x.isSelected).length != 2;
    setLaundries(laundries)
    setIsAddToCompareButtonDisable(val);
  }


  const onPressCompare = () => {
    let data = laundries.filter(x => x.isSelected);
    setSelectedLaundries(data)
    setIsShowCompareItems(true);
    laundries.forEach(x=> {
      x.isSelected = false;
    })
    setLaundries(laundries);
  }
  /*------ Common Reused border view divider Start -------*/
  const CommonBorderView = () => (
    <BorderDivider
      containerTopMargin={18}
      containerBottomMargin={16}
      activeAreaAlignment={'left'}
      activeAreaWidth={0}
      isActiveOnly={false}
      activeAreaHeight={1}
    />
  );
  /*------ Common Reused border view divider end -------*/

  const RenderItem  = props => {
    debugger
    const [item, setItem] = useState(props.item);
    const [isSelected, setIsSelected] = useState(props.item.isActive != undefined ? props.item.isActive : false);
    return(
    <TabMenuItem
      key={'laundry_services_tab_' + item.id}
      itemData={item}
      onPress={itemData => { 
        props.onValueChange();
        setIsSelected(!isSelected);
     }}
      title={item.title}
      isActive={isSelected}
      componentMarginRight={horizontalScale(15)}
      iconComponent={item.iconPath}
      //   componentPaddingHorizontal={horizontalScale(10)}
      componentMarginTop={verticalScale(10)}
      componentDisable={item.isDisable}
    />)
  };

  const comparisonItems = ({ item }) => {
    debugger
    return (
      <View style={[styles.container]} >
        <View style={[globalStyles.flexDirectionRow, styles.subContainer, globalStyles.alignItemsCenter, globalStyles.justifySpaceBetween]}>

          <View style={{ width: screenWidth * 0.30 }}>
            <Text>{item.title}</Text>
          </View>
          <View style={{ width: screenWidth * 0.20 }}>
            <Text style={styles.deliveryFee}>{getFirstItemPrice(item)} </Text>
          </View>
          <View style={{ width: screenWidth * 0.20 }} >
            <Text style={styles.deliveryFee}>{getSecondItemPrice(item)}</Text>
          </View>
        </View>
      </View>)

  }


  const RenderLaundries = props => {
    const [item, setItem] = useState(props.item);
    const [isSelected, setIsSelected] = useState(props.item.isSelected != undefined ? props.item.isSelected : false);

    return (
      <TouchableOpacity
        // disabled={true}
        style={[styles.container]} onPress={() => {
          props.onValueChange();
          setIsSelected(!isSelected);

        }}>
        <View style={[globalStyles.flexDirectionRow, styles.subContainer, globalStyles.alignItemsCenter, globalStyles.justifySpaceBetween]}>

          <View style={styles.checkboxContainer}>
            <CheckBox
              color={allColors.lightGreyText}
              style={styles.checkbox}
              value={isSelected}
              onValueChange={() => {
                props.onValueChange();
                setIsSelected(!isSelected);
              }}
            />
          </View>

          <View style={styles.imageContainer}>
          <CachableImage
                source={{ uri: item.imageIconPath }}
                style={styles.imageIcon}
              />
          </View>
          <View style={globalStyles.flex}>
            <Text numberOfLines={1} style={styles.title}>
              {item.title} 
            </Text>

          </View>
          {/* <View >
            <Text style={styles.deliveryFee}>{'$' + item.deliveryFee}</Text>
          </View> */}
        </View>
      </TouchableOpacity>)
  }

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------ Header start -----------*/}
      <Header onLeftIconPress={() => navigation.goBack()} onRightIconPress={() => navigation.toggleDrawer()} />
      {/*------- Header End -----*/}
      <ScrollView
        style={globalStyles.flex}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyles.commonScrollViewPadding}>
        {/*------ Title and Description with options start -----------*/}
        <View style={globalStyles.horizontalGeneralPadding}>
          <Text style={styles.mainHeading}>Comparison</Text>
          <Text style={styles.mainDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</Text>

          {!isShowCompareItems && (<>
            <FlatList
              key={'Laundries'}
              showsVerticalScrollIndicator={false}
              data={laundries}
              // extraData={refresh}
              renderItem={({ item }) => (<RenderLaundries item={item} onValueChange={() => {
                onChangeCheckboxValue(item)
              }} />)}
              contentContainerStyle={[
                globalStyles.paddingTop10,
                globalStyles.commonScrollViewPadding,
              ]}
              ItemSeparatorComponent={() => <View style={{ height: 17 }} />}
              keyExtractor={(item, index) => index.toString()}
            />

            <View style={globalStyles.marginTop25}>
              <LongButton
                title={'Compare'}
                titleFontSize={18}
                titleFontColor={allColors.white}
                titleFontWeight={'400'}
                titleFontFamily={FONT_FAMILY.RobotoRegular}
                type={isAddToCompareButtonDisable ? BUTTON_TYPE.DISABLED : BUTTON_TYPE.SECONDARY}
                onPress={() => onPressCompare()}
              />
            </View>

          </>)}



          {isShowCompareItems && (<>

            <FlatList horizontal
              data={services}
              renderItem={({ item }) => (<RenderItem item={item} onValueChange={() => {
                onChangeLaundryServiceTab(item)
              }} />)}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />


            <CommonBorderView />


            <FlatList
              data={items}
              renderItem={comparisonItems}
              extraData={services}
              ListHeaderComponentStyle={[globalStyles.flex, globalStyles.flexDirectionRow, globalStyles.justifySpaceBetween]}
              ListHeaderComponent={() => {
                return (
                  <View style={[styles.headerContainer]} >
                    <View style={[globalStyles.flexDirectionRow, styles.subContainer, globalStyles.alignItemsCenter, globalStyles.justifySpaceBetween]}>
                      <View style={{ width: screenWidth * 0.30 }}>
                      </View>
                      <View style={{ width: screenWidth * 0.20 }}>
                        <Text style={[globalStyles.title]} >{selectedLaundries[0].title}</Text>
                      </View>
                      <View style={{ width: screenWidth * 0.20 }}>
                        <Text style={[globalStyles.title]} >{selectedLaundries[1].title}</Text>

                      </View>
                    </View>
                  </View>
                )


              }}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />

          </>)}

        </View>
        {/*------ Title and Description with options end -----------*/}




      </ScrollView>
    </SafeAreaView>
  );
};

export default CompareScreen;
