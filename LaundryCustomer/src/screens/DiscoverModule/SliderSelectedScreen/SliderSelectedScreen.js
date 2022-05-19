/* eslint-disable */
import React, { useState, useEffect, useCallback, createRef } from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

//Third Party
import { useSelector, useDispatch } from 'react-redux';
//import {ActionSheetCustom as ActionSheet} from 'react-native-custom-actionsheet';
import ActionSheet from 'react-native-actions-sheet';

//Components
import CommonFoodCategoryMenu from '../../../components/CommonFoodCategoryMenu/CommonFoodCategoryMenu';
import CommonTabMenuList from '../../../components/CommonTabMenuList/CommonTabMenuList';
import FoodItem from '../../../components/FoodItem/FoodItem';
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import NoInformationText from '../../../components/NoInformationText/NoInformationText';
import SearchBoxWithRightIcon from '../../../components/SearchBoxWithRightIcon/SearchBoxWithRightIcon';
import SingleFoodItemInfo from '../../../components/SingleFoodItemInfo/SingleFoodItemInfo';
import TitleWithSideIcons from '../../../components/TitleWithSideIcons/TitleWithSideIcons';
import LargeRestaurantInfo from '../../../components/LargeRestaurantInfo/LargeRestaurantInfo';
import TabMenuItem from '../../../components/TabMenuItem/TabMenuItem';
import TabMenuList from '../../../components/TabMenuList/TabMenuList';
import Counter from '../../../components/Counter/Counter';


//Publicly Available Icons that Can be Used for Commercial Purposes
import ActiveBlock from '../../../assets/icons/discoverMenuIcons/active_blockSVG.svg';
import ActiveList from '../../../assets/icons/discoverMenuIcons/active_listSVG.svg';
import InActiveBlock from '../../../assets/icons/discoverMenuIcons/inactive_block.svg';
import InActiveList from '../../../assets/icons/discoverMenuIcons/inactive_list.svg';
import PriceDown from '../../../assets/icons/discoverMenuIcons/down_arrowSVG.svg';
import PriceUp from '../../../assets/icons/discoverMenuIcons/up_arrowSVG.svg';
import Search from '../../../assets/icons/discoverMenuIcons/searchSVG.svg';

//@TODO - Replace with Placeholder
import FavoriteInactiveIcon from '../../../assets/icons/discoverMenuIcons/favoriteSVG.svg';
import FavoriteActiveIcon from '../../../assets/icons/discoverMenuIcons/favoriteActiveSVG.svg';

//Publicly Available Icons that Can be Used for Commercial Purposes
import Menu from '../../../assets/icons/discoverMenuIcons/filtersSVG.svg';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import { BUTTON_TYPE, FONT_FAMILY } from '../../../constants/constants';
import { allColors } from '../../../assets/styles/mainColors';
import { loadPagination } from '../../../utility/Helper';
import { navigate } from '../../../utility/NavigationService';
import Routes from '../../../navigation/Routes';

//Dummy Data
import SubItemsDummy from '../../../DummyData/SubItemsDummyData';
import FoodOptionDummy from '../../../DummyData/FoodOptionTypeDummyData';

import { ScrollView } from 'react-native-gesture-handler';
import { horizontalScale, scaleFontSize, screenHeight, verticalScale } from '../../../utility/Scale';

import CheckBox from "@react-native-community/checkbox";
//right title icon definition with the function names
const rightIconArray = [
  { functionName: 'SearchClicked', component: <Search height={30} width={30} /> },
  { functionName: 'MenuClick', component: <Menu /> },
];
const options = [
  { id: 0, title: 'Men', isActive: true },
  { id: 1, title: 'Women', isActive: false },
  { id: 2, title: 'Kids', isActive: false },
];
const isEqual = function (value, other) {
  // Get the value type
  var type = Object.prototype.toString.call(value);

  // If the two objects are not the same type, return false
  if (type !== Object.prototype.toString.call(other)) return false;

  // If items are not an object or array, return false
  if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

  // Compare the length of the length of the two items
  var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
  var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
  if (valueLen !== otherLen) return false;

  // Compare two items
  var compare = function (item1, item2) {

    // Get the object type
    var itemType = Object.prototype.toString.call(item1);

    // If an object or array, compare recursively
    if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
      if (!isEqual(item1, item2)) return false;
    }

    // Otherwise, do a simple comparison
    else {

      // If the two items are not the same type, return false
      if (itemType !== Object.prototype.toString.call(item2)) return false;

      // Else if it's a function, convert to a string and compare
      // Otherwise, just compare
      if (itemType === '[object Function]') {
        if (item1.toString() !== item2.toString()) return false;
      } else {
        if (item1 !== item2) return false;
      }

    }
  };

  // Compare properties
  if (type === '[object Array]') {
    for (var i = 0; i < valueLen; i++) {
      if (compare(value[i], other[i]) === false) return false;
    }
  } else {
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        if (compare(value[key], other[key]) === false) return false;
      }
    }
  }

  // If nothing failed, return true
  return true;

};
const actionSheetRef = createRef();


/* --- Start Title Top View --- */
const TitleWithTopIconView = props => {
  const [searchView, setSearchView] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [headerTitle, setHeaderTitle] = useState(
    props.route.params.headerTitle,
  );
  const dispatch = useDispatch();

  //set the data from dummy data for tab menu
  // const storeLaundryTabData = useCallback(
  //   () => dispatch(Action.storeLaundryTabItems(options)),
  //   [dispatch],
  // );

  const tabOptions = useSelector(state => state.laundryTabMenuList, []);
  //on click of right icons, what functions should be shown
  function handleRightIconClick(value) {
    switch (value) {
      case 'SearchClicked': {
        setHeaderTitle(searchView ? props.route.params.headerTitle : '');
        setSearchView(!searchView);
        break;
      }
      case 'MenuClick': {
        navigate(Routes.FilterScreen);
        break;
      }
      default:
        return;
    }
  }
  // useEffect(() => {
  //   storeLaundryTabData();
  // }, [storeLaundryTabData]);

  //change the title if search view value is greater
  useEffect(() => {
    if (searchValue.length > 0) {
      setHeaderTitle(searchValue);
    } else {
      if (searchView) {
        setHeaderTitle('');
      } else {
        setHeaderTitle(props.route.params.headerTitle);
      }
    }
  }, [searchValue]);

  const changingTabOption = item => {
    tabOptions.forEach(option => {
      if (option.id == item.id) {
        option.isActive = true
      }
      else {
        option.isActive = false;
      }

    });
    dispatch(Action.storeLaundryTabItems(tabOptions));
    dispatch(Action.storeSubItemData(SubItemsDummy.data.filter(x => x.laundryId == props.route.params.item.id && x.type == item.id)))
  };
  //Single Tab Menu Item which gets information from tabMenuList
  const renderTabMenuRows = ({ item }) => {
    return (
      <TabMenuItem
        key={'tab_' + item.id}
        componentPaddingHorizontal={30}
        itemData={item}
        onPress={itemData => changingTabOption(itemData)}
        title={item.title}
        isActive={item.isActive}
        componentMarginRight={20}
        iconComponent={item.iconPath}
      />
    );
  };
  return (
    <View>

      {/*------- Header Start -----*/}
      <Header
        title={headerTitle}
        onLeftIconPress={() => props.navigation.goBack()}
        onRightIconPress={() => props.navigation.toggleDrawer()}
      />

      {/*------- Header End -----*/}
      <LargeRestaurantInfo
        key={'large_restaurant_header_picture_'}
        imageBorderRadius={0}
        onPress={() =>
          console.log("")
        }
        imageIconPath={"https://5.imimg.com/data5/XS/XU/GLADMIN-40871312/laundry-services-500x500.png"}
      />
      {/*---- shows search box if user clicked on search box ----*/}
      <View style={globalStyles.horizontalGeneralPadding}>
        {searchView ? (
          <SearchBoxWithRightIcon
            placeholder={'Search Here..'}
            containerMarginTop={15}
            containerMarginBottom={10}
            rightIconComponent={<Menu />}
            value={searchValue}
            onBlur={() => {
              if (searchView) {
                handleRightIconClick('SearchClicked');
              }
            }}
            onChangeText={text => setSearchValue(text)}
            onPressRightIcon={() => navigate(Routes.FilterScreen)}
          />
        ) : (
          <TitleWithSideIcons
            titleFontWeight={'normal'}
            fontSize={24}
            title={props.topTitle}
            containerTopPadding={17}
            containerBottomPadding={23}
            rightIconComponentsArray={rightIconArray}
            iconOnPress={value => handleRightIconClick(value)}
          />
        )}
      </View>
      <TabMenuList
        informationArray={tabOptions}
        customSlideComponent={renderTabMenuRows}
      />


    </View>
  );
};

/* --- End Title Top View --- */

/* --- Start Tab Menu --- */
const TabMenuView = () => {
  return (
    <View style={globalStyles.marginTop15}>
      <CommonTabMenuList />
    </View>
  );
};
/* --- End Tab Menu --- */



const RenderItemAttributes = props => {
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
        <View style={globalStyles.flex}>
          <Text numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>

        </View>
        <View >
          <Text style={styles.deliveryFee}>{'$' + item.deliveryFee}</Text>
        </View>
      </View>
    </TouchableOpacity>)
}

/* --- Start Best Dish Menu --- */
const ListingView = props => {
  // console.log(props)
  // const [laundry , setLaundry] = useState(props.item);
  const dispatch = useDispatch();
  const [itemList, setItemList] = useState([]);
  // const selectedItem = useSelector(state => state.selectedCartItem, {});
  const [selectedItem, setSelectedItem] = useState({});
  const [attributes, setAttributes] = useState(FoodOptionDummy.data);

  const [blockView, setBlockView] = useState(false);
  const [listView, setListView] = useState(true);
  const [offset, setOffset] = useState(1);
  const [noDataAvailable, setNoDataAvailable] = useState(false);
  const [ascendingOrder, setAscendingOrder] = useState(true);
  const checkOutItems = useSelector(state => state.checkoutList, []);
  // const showActionSheet = () => actionSheetRef.current?.setModalVisible()
  //get data for sub items in the redux store
  // const storeSubItemList = useCallback(
  //   () => dispatch(Action.storeSubItemData(SubItemsDummy.data.filter(x=>x.laundryId == laundry.id && x.type == 0))),
  //   [dispatch],
  // );
  const subItems = useSelector(state => state.subItems, []);
  const favoritedItems = useSelector(state => state.favoritedItems, [])
  //update after store update
  // useEffect(() => {
  //   storeSubItemList();
  // }, []);

  //pagination for items being viewed

  useEffect(() => {
    setOffset(1)
    pagination(subItems, [], 4, 1);
  }, [subItems]);

  useEffect(() => {
    actionSheetRef.current?.setModalVisible();
  }, [selectedItem]);

  //pagination for items being viewed
  useEffect(() => {
    if (offset > 1) {
      pagination(subItems, itemList, 4, offset);
    }
  }, [offset]);

  //sort them in order
  useEffect(() => {
    if (itemList.length > 0) {
      setItemList(Array.from(itemList).reverse());
    }
  }, [ascendingOrder]);

  //pagination function
  function pagination(array, renderItems, page_size, page_number) {
    let temp = loadPagination(array, page_size, page_number);
    if (temp.length > 0) {
      if (ascendingOrder) {
        setItemList([...renderItems, ...temp]);
      } else {
        setItemList([...temp, ...renderItems]);
      }
      if (subItems.length <= renderItems.length + page_size) {
        setNoDataAvailable(true);
      } else {
        setNoDataAvailable(false);
      }
    } else {
      setNoDataAvailable(true);
    }
  }

  //load more button if there are many items available in the list
  const LoadMoreButton = () => (
    <View style={globalStyles.marginTop30}>
      {noDataAvailable ? null : (
        <LongButton
          title={'LOAD MORE'}
          titleFontSize={18}
          titleFontColor={allColors.black}
          titleFontWeight={'300'}
          titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
          type={BUTTON_TYPE.LIGHT}
          onPress={() => setOffset(offset => offset + 1)}
        />
      )}
    </View>
  );

  const addToCheckout = (item) => {
    item.services = item.services.filter(x => x.isSelected);
    if (checkOutItems.length > 0 && item.laundryId == checkOutItems[0].laundryId) {
      let index = checkOutItems.findIndex(x => x.id == item.id && isEqual(x.services, item.services))
      if (index >= 0) {
        checkOutItems[index].itemPurchased += item.itemPurchased;
      }
      else {
        checkOutItems.push(item);
      }
    }
    else {
      checkOutItems.splice(0, checkOutItems.length)
      checkOutItems.push(item)
    }
    dispatch(Action.storeCheckoutList(checkOutItems))
    //  if item exist in cart then update item count
    // if (checkOutItems.find(item) >= 0) {

    //   //if couter is less then zero or equal to zero means remove the item from cart
    //   dispatch(Action.updateCounterOfCheckoutList(item.id, item.itemPurchased))
    // }
    // else {
    //   item.restaurantId = route.params.restaurantId
    //   // clear previous cart items if new restautant item added
    //   let index = checkOutItems.findIndex(x => x.id == item.id)
    //   if (index >= 0) {
    //     if (val != 0) {
    //       checkOutItems[index].itemPurchased = val;
    //     }
    //     else {
    //       checkOutItems.splice(index, 1)
    //     }
    //   }
    //   else {
    //     item.itemPurchased = val;
    //     checkOutItems.push(item)
    //   }
    //   dispatch(Action.storeCheckoutList(checkOutItems))
    // }
  }

  const addToCartOnPress = (item) => {
    setSelectedItem({ data: item, time: Date.now() });
    //  actionSheetRef.current?.setModalVisible();
  }

  const getCounterValue = (item) => {
    let val = 0;
    let items = checkOutItems.filter(x => x.id == item.id);
    if (items.length > 0) {
      items.forEach(x => {
        val +=  x.itemPurchased;
      })
    }
    return val;
  }

  const onCounterChange = (item , val) =>{
     let prevVal =  getCounterValue(item);
     if(prevVal > val ){
      let index = checkOutItems.reverse().findIndex(x => x.id == item.id);
      checkOutItems.splice(index,1);
      dispatch(Action.storeCheckoutList(checkOutItems.reverse()))
     }
     else{
       addToCartOnPress(item)
     }
  }
  //renders the rows when the item is viewed in 100% width
  const renderListRows = ({ item }) => {
    return (
      <>
        <FoodItem
          key={'food_item_row' + item.id}
          title={item.title}
          rating={item.rating}
          item={item}
          description={item.description}
          deliveryFee={'$' + item.services[0].deliveryFee}
          ratingNum={item.review}
          isRateVisible={false}
          // topRightIconComponent={favoritedItems.indexOf(item.id) >=0 ? <FavoriteActiveIcon /> : <FavoriteInactiveIcon /> }
          //onTopRightIconPress={() =>  dispatch(Action.toggleFavoriteItem(item.id))}
          addToCartOnPress={() => { addToCartOnPress(item) }}
          imageIconPath={item.imageIconPath}
          imageIconComponent={item.imageIconComponent}
          isAddToCartVisible={getCounterValue(item)==0}
          counterStartingValue={getCounterValue(item)}
          isCounterVisible={getCounterValue(item)>0}
          onCounterChange={(val) => onCounterChange(item , val)}
        />

      </>
    );
  };


  const AttributeActionSheet = props => {
    const [item, setItem] = useState(selectedItem != undefined && selectedItem.data != undefined ? JSON.parse(JSON.stringify(selectedItem.data)) : {});
    const [isCartButtonDisable, setIsCartButtonDisable] = useState(true);
    const onChangeCheckboxValue = (service) => {
      let index = item.services.findIndex(x => x.id == service.id)
      item.services[index].isSelected = item.services[index].isSelected != undefined ? !item.services[index].isSelected : true;
      setItem(item);
      let val = item.services.filter(x => x.isSelected).length > 0;
      setIsCartButtonDisable(!val);
    }

    const onChangeCounterValue = (val) => {
      item.itemPurchased = val;
      setItem(item);
    }
    return (
      <ActionSheet extraScroll={true} ref={actionSheetRef} headerAlwaysVisible={true} gestureEnabled={true} >
        <View style={{
          height: screenHeight * 0.65, paddingHorizontal: horizontalScale(30)

        }}  >

          <View style={{ paddingVertical: verticalScale(20) }}>
            <Text style={[globalStyles.commonTitleText, { fontWeight: '500' }]}>{'Add Ons Options'}</Text>
            <Text style={styles.titleText}>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry'}</Text>
          </View>
          <View style={[{ height: screenHeight * 0.40 }]}>
            <ScrollView
              nestedScrollEnabled={true}
              onScrollEndDrag={() =>
                actionSheetRef.current?.handleChildScrollEnd()
              }
              onScrollAnimationEnd={() =>
                actionSheetRef.current?.handleChildScrollEnd()
              }
              onMomentumScrollEnd={() =>
                actionSheetRef.current?.handleChildScrollEnd()
              }
            >
              <FlatList
                key={'AttributeActionSheet'}
                showsVerticalScrollIndicator={false}
                data={item.services}
                // extraData={refresh}
                renderItem={({ item }) => (<RenderItemAttributes item={item} onValueChange={() => {
                  onChangeCheckboxValue(item)
                }} />)}
                contentContainerStyle={[
                  globalStyles.paddingTop10,
                  globalStyles.commonScrollViewPadding,
                ]}
                ItemSeparatorComponent={() => <View style={{ height: 17 }} />}
                keyExtractor={(item, index) => index.toString()}
              />

            </ScrollView>
          </View>

          <View style={[globalStyles.flex, globalStyles.flexDirectionRow, globalStyles.justifySpaceBetween, globalStyles.alignItemsCenter
          ]}>
            <View style={[globalStyles.flex]}>
              {/* <Counter
                minValue={1}
                isDisabled={true}
                onChange={number => {
                  onChangeCounterValue(number)
                }
                }
                initialValue={item.itemPurchased}
              /> */}
            </View>

            <View style={{ width: '40%', height: 55 }}>
              <TouchableOpacity disabled={isCartButtonDisable}
                onPress={() => addToCheckout(item)
                }
                style={[styles.containerCommonStyle, { flex: 1, justifyContent: 'center', borderRadius: 30, alignItems: 'center', padding: verticalScale(5), backgroundColor: isCartButtonDisable ? allColors.lightBlack : allColors.black }]}
                activeOpacity={0.7}>
                <Text style={[{ alignSelf: 'center' }, styles.activeTitleStyle]}>Add To Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>




      </ActionSheet>
    );
  };
  //renders rows of two items in the same row
  const renderBlockRows = ({ item, index }) => {
    return (
      <SingleFoodItemInfo
        key={'block_row_' + index}
        index={index}
        title={item.title}
        rating={item.rating}
        deliveryTime={item.deliveryTime}
        description={item.description}
        deliveryFee={'$' + item.deliveryFee}
        showCartIcon={true}
        isAddToCartVisible={true}
        topRightIconComponent={favoritedItems.indexOf(item.id) >= 0 ? <FavoriteActiveIcon /> : <FavoriteInactiveIcon />}
        onTopRightIconPress={() => dispatch(Action.toggleFavoriteItem(item.id))}
        addToCartOnPress={() => navigate(Routes.AddToCartScreen)}
        imageIconPath={item.imageIconPath}
        imageIconComponent={item.imageIconComponent}
      />
    );
  };

  return (
    <View
      style={[
        globalStyles.marginTop15,
        globalStyles.flex,
        globalStyles.justifyCenter,
      ]}>
      {itemList.length > 0 ? (
        <View style={globalStyles.flex}>
          {/* ------ List Settings Start ----- */}
          <View
            style={[
              globalStyles.horizontalGeneralPadding,
              globalStyles.flexDirectionRow,
              globalStyles.alignItemsCenter,
              globalStyles.width100,
              globalStyles.marginBottom5,
            ]}>
            <View
              style={[
                globalStyles.flexDirectionRow,
                globalStyles.alignItemsCenter,
                globalStyles.justifySpaceBetween,
                globalStyles.flex,
              ]}>
              {/*------ Choose a list type to see the food items with start-------------*/}
              {/* <View
                style={[
                  globalStyles.flexDirectionRow,
                  globalStyles.alignItemsCenter,
                ]}>
                <Text style={styles.titleText}>{'List Items:'}</Text>
                <TouchableOpacity
                  onPress={() => {
                    setBlockView(true);
                    setListView(false);
                  }}
                  style={styles.verticalStyle}>
                  {blockView ? (
                    <ActiveBlock height={20} width={20} />
                  ) : (
                    <InActiveBlock height={18} width={18} />
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setListView(true);
                    setBlockView(false);
                  }}
                  style={styles.verticalStyle}>
                  {listView ? (
                    <ActiveList height={20} width={20} />
                  ) : (
                    <InActiveList height={20} width={20} />
                  )}
                </TouchableOpacity>
              </View> */}
              {/*------ Choose a list type to see the food items with end-------------*/}

              {/*------ List item filters start -------------*/}
              {/* <View
                style={[
                  globalStyles.flexDirectionRow,
                  globalStyles.alignItemsCenter,
                ]}>
                <TouchableOpacity style={globalStyles.marginRight5}>
                  <Menu height={15} width={15} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setAscendingOrder(!ascendingOrder)}
                  style={[
                    styles.horizontalStyle,
                    globalStyles.flexDirectionRow,
                    globalStyles.alignItemsCenter,
                    globalStyles.marginLeft5,
                  ]}>
                  <Text style={styles.titleText}>{'Price:'}</Text>
                  {ascendingOrder && <PriceDown />}
                  {!ascendingOrder && <PriceUp
                    height={20}

                  />}
                </TouchableOpacity>
              </View> */}
              {/*------ List item filters end -------------*/}
            </View>
          </View>
          {/* ------ List Settings End ----- */}

          {/* ------ Choose Render FlatList according to the user list type selection ----- */}
          <View
            style={[globalStyles.horizontalGeneralPadding, globalStyles.flex]}>
            {blockView ? (
              <FlatList
                //performance settings
                //initialNumToRender={1} // Reduce initial render amount
                //maxToRenderPerBatch={1} // Reduce number in each render batch
                // windowSize={7} // Reduce the window size
                key={'1'}
                showsVerticalScrollIndicator={false}
                data={itemList}
                numColumns={2}
                renderItem={renderBlockRows}
                contentContainerStyle={[
                  globalStyles.paddingTop10,
                  globalStyles.commonScrollViewPadding,
                ]}
                ItemSeparatorComponent={() => <View style={{ height: 27 }} />}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={() => <LoadMoreButton />}
              />
            ) : (
              <FlatList
                //performance settings
                //initialNumToRender={2} // Reduce initial render amount
                //maxToRenderPerBatch={1} // Reduce number in each render batch
                // windowSize={7} // Reduce the window size
                key={'2'}
                showsVerticalScrollIndicator={false}
                data={itemList}
                renderItem={renderListRows}
                contentContainerStyle={[
                  globalStyles.paddingTop15,
                  globalStyles.commonScrollViewPadding,
                ]}
                ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                keyExtractor={(item, index) => index.toString()}
                onEndReachedThreshold={0.01}
                onEndReached={info => {
                  setOffset(offset => offset + 1)
                }}
              //  ListFooterComponent={() => <LoadMoreButton />}
              />
            )}
            <AttributeActionSheet />
          </View>


        </View>
      ) : (
        <NoInformationText />
      )}


    </View>
  );
};
/* --- End Best Dish Menu --- */


//View Cart button 
const ViewCartButton = ({ laundryId }) => {
  const cartItems = useSelector(state => state.checkoutList, [])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)


  //update the items
  useEffect(() => {
    updateItemTotalPrice()
  }, [cartItems])

  //update the items totals
  function updateItemTotalPrice() {
    if (cartItems.length > 0) {
      let total = 0;
      let totalCount = 0;
      for (let i = 0; i < cartItems.length; i++) {
        //   total += cartItems[i].totalPrice;
        totalCount += cartItems[i].itemPurchased;
        cartItems[i].services.forEach(service => {
          if (service.isSelected != undefined && service.isSelected) {
            total += service.deliveryFee * cartItems[i].itemPurchased;
          }
        })
      }
      setTotalItems(totalCount)
      setTotalPrice(total)
    } else {
      setTotalItems(0)
      setTotalPrice(0)
    }
  }
  //button text style setup
  const textCommonStyle = {
    color: allColors.white,
  };
  //common style setup
  const containerCommonStyle = {
    backgroundColor: allColors.yellow,
  };



  return (cartItems.length > 0 && cartItems[0].laundryId == laundryId && <View >

    <TouchableOpacity
      style={[
        containerCommonStyle,
        styles.buttonStyles,
        globalStyles.horizontaPadding20,
      ]}
      onPress={() => navigate(Routes.CheckOutScreen, { title: 'Restaurant' })}
    >

      <View style={[globalStyles.flex, { flexDirection: 'column' }]}>
        <Text style={[textCommonStyle]}>
          {totalItems} ITEMS
        </Text>
        <Text style={[textCommonStyle]}>
          $ {totalPrice.toFixed(2)}
        </Text>
      </View>
      {/*--Title Start--*/}
      <View style={[globalStyles.flex, { flexDirection: 'row-reverse' }]} >
        <Text style={[textCommonStyle]}>
          {"View Cart"}
        </Text>
      </View>
      {/*--Title End--*/}

    </TouchableOpacity>
  </View>)

};

const SliderSelectedScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const storeLaundryTabData = useCallback(
    () => dispatch(Action.storeLaundryTabItems(options)),
    [dispatch],
  );
  //const tabOptions = useSelector(state => state.laundryTabMenuList, []);
  const storeSubItemList = useCallback(
    () => dispatch(Action.storeSubItemData(SubItemsDummy.data.filter(x => x.laundryId == route.params.item.id && x.type == 0))),
    [dispatch],
  );

  useEffect(() => {
    storeLaundryTabData();
  }, []);
  useEffect(() => {
    storeSubItemList();
  }, []);
  /* --- Start Top Category Menu --- */
  const TopCategoriesMenu = () => (
    <View>
      <CommonFoodCategoryMenu />
    </View>
  );
  /* --- End Top Category Menu --- */

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      <ScrollView>
        {/*---- Title with top icon view Start (see definition above) ----*/}

        <TitleWithTopIconView
          topTitle={route.params.topTitle}
          route={route}
          navigation={navigation}
        />
        {/*---- Title with top icon view End----*/}

        {/*----- Top Categories Menu Start-----*/}
        {/* <TopCategoriesMenu /> */}
        {/*----- Top Categories Menu End-----*/}

        {/*----- Tab filters view start -----*/}
        {/* <TabMenuView /> */}
        {/*----- Tab filters view end -----*/}

        {/*---- Food Item List View Start (see definition above) -----*/}
        <ListingView />
        {/*---- Food Item List View End (see definition above) -----*/}
      </ScrollView>
      <ViewCartButton laundryId={route.params.item.id} />
    </SafeAreaView>
  );
};

export default SliderSelectedScreen;
