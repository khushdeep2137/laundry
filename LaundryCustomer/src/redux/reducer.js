/* eslint-disable */
import React from 'react';
import { Text } from 'react-native'

//Third Party
import { REHYDRATE } from 'redux-persist/src/constants';

//Components
import IconText from '../components/IconText/IconText';

//Publicly Available Icons that Can be Used for Commercial Purposes
import PayPal from '../assets/images/paypalSVG.svg';

//Utils
import ActionType from './action-type';
import globalStyles from '../assets/styles/globalStyles';

const reducerInitialState = {
  authToken: null,
  userInfo: null,
  internetConnected: false,
  showActivityLoader: false,
  appFirstLaunch: true,
  selectedLanguage: null,
  isLoggedIn: false,
  profileTabInitialScreen: null,
  messageHistory: [],
  foodOptions: [],
  payPalAddresses: [],
  tabMenuList: [],
  laundryTabMenuList: [],
  browseList: [],
  filterHighLightsList: [],
  typeOfFoodList: [],
  sortByTitleList: [],
  userAddressList: [],
  currentAddress: null,
  restaurantList: [],
  subItems: [],
  compareItems :[],
  menuList: [],
  userReviewList: [],
  checkoutList: [],
  deliveryItem: {},
  orderedItems: {},
  foodItems: [],
  FAQList: [],
  favoriteList: [],
  shareEarnList: [],
  orderHistoryList: [],
  invoiceData: [],
  couponList: [],
  deliveryAddressData: {},
  favoritedItems: [],
  selectedCartItem: {},
  DeliveryTabMenuList: [],
  DeliveryDateTabMenuList: [],
  DeliveryTimeTabMenuList: [],
  PickupDateTabMenuList: [],
  PickupTimeTabMenuList: [],


};

const reducerLogoutState = {
  authToken: null,
  showActivityLoader: false,
  autoLogout: false,
  isLoggedIn: false,
  messageHistory: [],
  foodOptions: [],
  payPalAddresses: [],
  tabMenuList: [],
  laundryTabMenuList: [],
  browseList: [],
  filterHighLightsList: [],
  typeOfFoodList: [],
  sortByTitleList: [],
  userAddressList: [],
  currentAddress: null,
  restaurantList: [],
  subItems: [],
  compareItems :[],
  menuList: [],
  userReviewList: [],
  checkoutList: [],
  deliveryItem: {},
  orderedItems: {},
  foodItems: [],
  FAQList: [],
  favoriteList: [],
  shareEarnList: [],
  orderHistoryList: [],
  invoiceData: [],
  couponList: [],
  favoritedItems: [],
  deliveryAddressData: {},
  selectedCartItem: {},
};

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
const reducer = (state = reducerInitialState, action) => {
  switch (action.type) {
    case ActionType.storeAuthToken:
      return Object.assign({}, state, { authToken: action.data });

    case ActionType.storeUserInfo:
      return Object.assign({}, state, { userInfo: action.data });

    case ActionType.updateInternetStatus:
      return Object.assign({}, state, { internetConnected: action.data });

    case ActionType.showActivityLoader:
      return Object.assign({}, state, { showActivityLoader: action.data });

    case ActionType.hideActivityLoader:
      return Object.assign({}, state, { showActivityLoader: action.data });

    case ActionType.performAutoLogout:
      return Object.assign({}, state, { autoLogout: action.data });

    case ActionType.selectedLanguage:
      return Object.assign({}, state, { selectedLanguage: action.data });

    case ActionType.isLoggedIn:
      return Object.assign({}, state, { isLoggedIn: action.data });

    case ActionType.updateAppFirstLaunchToFalse:
      return Object.assign({}, state, { appFirstLaunch: false });

    case ActionType.setProfileTabInitialScreen:
      return Object.assign({}, state, { profileTabInitialScreen: action.data });

    case ActionType.storeMessages:
      return Object.assign({}, state, { messageHistory: action.data });

    case ActionType.pushNewMessage:
      let tempData = [action.data, ...state.messageHistory.messages]
      return Object.assign({}, state, { messageHistory: { messages: tempData } });

    case ActionType.storeFoodOptions:
      return Object.assign({}, state, { foodOptions: action.data });

    case ActionType.storePayPalAddresses:
      let payPalAddressData = action.data;
      let tempPayPalAddressData = payPalAddressData.map((itemData) => {
        return {
          ...itemData,
          component: <IconText title={itemData.email} leftIconComponent={<PayPal />} />
        };
      })
      return Object.assign({}, state, { payPalAddresses: tempPayPalAddressData });

    case ActionType.addPayPalAddress:
      let newAddress = action.data;
      let payPalAddresses = state.payPalAddresses;
      payPalAddresses.map((value) => value.isActive = false)
      payPalAddresses.push({
        "id": 0,
        "isActive": true,
        "email": newAddress,
        component: <IconText title={newAddress} leftIconComponent={<PayPal />} />
      });
      return Object.assign({}, state, { payPalAddresses: payPalAddresses });

    case ActionType.changePayPalAddresses:
      let tempPayPalAddressChangeData = state.payPalAddresses.map((object) => {
        if (object.id == action.data) {
          return { ...object, isActive: true }
        } else return { ...object, isActive: false }
      })
      return Object.assign({}, state, { payPalAddresses: tempPayPalAddressChangeData });

    case ActionType.storeTabMenuItems:
      return Object.assign({}, state, { tabMenuList: action.data });

    case ActionType.storeLaundryTabItems:
      return Object.assign({}, state, { laundryTabMenuList: action.data });

    case ActionType.toggleTabMenuItem:
      let tempTabData = state.tabMenuList
      const indexTab = tempTabData.findIndex(project => project.id === action.data.id);
      tempTabData[indexTab].isActive = !tempTabData[indexTab].isActive;
      return Object.assign({}, state, { tabMenuList: tempTabData });

    case ActionType.storeBrowseList:
      return Object.assign({}, state, { browseList: action.data });

    case ActionType.storeFilterHighLightsList:
      return Object.assign({}, state, { filterHighLightsList: action.data });

    case ActionType.toggleFilterHighLightsItem:
      let tempFilterHighlightData = state.filterHighLightsList
      const indexHighLight = tempFilterHighlightData.findIndex(project => project.id === action.data.id);
      tempFilterHighlightData[indexHighLight].isActive = !tempFilterHighlightData[indexHighLight].isActive;
      return Object.assign({}, state, { filterHighLightsList: tempFilterHighlightData });

    case ActionType.storeTypeOfFoodList:
      return Object.assign({}, state, { typeOfFoodList: action.data });

    case ActionType.toggleTypeOfFoodItem:
      let tempFilterTypeOfFood = state.typeOfFoodList
      const indexTypeofFood = tempFilterTypeOfFood.findIndex(project => project.id === action.data.id);
      tempFilterTypeOfFood[indexTypeofFood].isActive = !tempFilterTypeOfFood[indexTypeofFood].isActive;
      return Object.assign({}, state, { typeOfFoodList: tempFilterTypeOfFood });

    case ActionType.storeSortByTitleList:
      return Object.assign({}, state, { sortByTitleList: action.data });

    case ActionType.toggleSortByTitleItem:
      let tempFilterSortByTitle = state.sortByTitleList
      const indexSortByTitle = tempFilterSortByTitle.findIndex(project => project.id === action.data.id);
      tempFilterSortByTitle[indexSortByTitle].isActive = !tempFilterSortByTitle[indexSortByTitle].isActive;
      return Object.assign({}, state, { sortByTitleList: tempFilterSortByTitle });

    case ActionType.storeUserAddress:
      let userAddressData = action.data;
      let tempUserAddressData = userAddressData.map((itemData) => {
        return {
          ...itemData,
          component: <Text style={globalStyles.commonAddressText} >{itemData.address}</Text>
        };
      })
      return Object.assign({}, state, { userAddressList: tempUserAddressData });

    case ActionType.addUserAddress:
      let userAddressValue = action.data;
      let addressList = state.userAddressList;
      addressList.push({
        id: addressList[addressList.length - 1].id + 1,
        isActive: false,
        address: userAddressValue,
        component: <Text style={globalStyles.commonAddressText} >{userAddressValue}</Text>
      });
      return Object.assign({}, state, { userAddressList: addressList });

    case ActionType.changeUserAddress:
      let tempUserAddressChangeData = state.userAddressList.map((object) => {
        if (object.id == action.data) {
          return { ...object, isActive: true }
        } else return { ...object, isActive: false }
      })
      return Object.assign({}, state, { userAddressList: tempUserAddressChangeData });

    case ActionType.setCurrentAddress:
      return Object.assign({}, state, { currentAddress: action.data });

    case ActionType.storeRestaurantList:
      return Object.assign({}, state, { restaurantList: action.data });

    case ActionType.storeSubItemData:
      return Object.assign({}, state, { subItems: action.data });

      case ActionType.storeCompareItemData:
        return Object.assign({}, state, { compareItems: action.data });

    case ActionType.toggleFoodOption:
      let tempFoodOption = state.foodOptions;
      const indexFoodOption = tempFoodOption.findIndex(project => project.id === action.data);
      tempFoodOption[indexFoodOption].isActive = !tempFoodOption[indexFoodOption].isActive;
      return Object.assign({}, state, { foodOptions: tempFoodOption });

    case ActionType.storeMenuList:
      return Object.assign({}, state, { menuList: action.data });

    case ActionType.storeUserReviewList:
      return Object.assign({}, state, { userReviewList: action.data });

    case ActionType.storeCheckoutList:
      let checkOutData = action.data;
      if (checkOutData.length > 0) {
        let tempCheckoutData = checkOutData.map((object) => {
          let total = 0;

          object.services.forEach(element => {
            total += element.deliveryFee * object.itemPurchased;
          });
          return { ...object, totalPrice: total };
        })
        return Object.assign({}, state, { checkoutList: tempCheckoutData });
      } else {
        return Object.assign({}, state, { checkoutList: action.data });
      }

    case ActionType.storeDeliveryItem:
      return Object.assign({}, state, { deliveryItem: action.data });

    case ActionType.storeOrderedItem:
      return Object.assign({}, state, {
        orderedItems: { restaurantName: action.restaurantName, itemsOrdered: action.itemsOrdered }
      });

    case ActionType.storeFoodItems:
      return Object.assign({}, state, { foodItems: action.data });

    case ActionType.deleteCheckoutItem:
      let tempCheckOutList = state.checkoutList
      const indexCheckout = tempCheckOutList.findIndex(project => project.id === action.data.id && isEqual(project.services, action.data.services));
      tempCheckOutList.splice(indexCheckout, 1)
      return Object.assign({}, state, { checkoutList: tempCheckOutList });

    case ActionType.updateCounterOfCheckoutList:
      let tempCheckOutCounterList = state.checkoutList
      const indexCheckoutCount = tempCheckOutCounterList.findIndex(project => project.id === action.data.id && isEqual(project.services, action.data.services));
      tempCheckOutCounterList[indexCheckoutCount].itemPurchased = action.counter;
      let total = 0;
      tempCheckOutCounterList[indexCheckoutCount].services.forEach(element => {
        total += element.deliveryFee * action.counter;
      });
      tempCheckOutCounterList[indexCheckoutCount].totalPrice = total;
      return Object.assign({}, state, { checkoutList: tempCheckOutCounterList });

    case ActionType.storeFAQs:
      return Object.assign({}, state, { FAQList: action.data });

    case ActionType.storeFavoriteList:
      return Object.assign({}, state, { favoriteList: action.data });

    case ActionType.toggleFavoriteItem:
      let favoritedItems = state.favoritedItems;
      let index = favoritedItems.indexOf(action.data);
      if (index < 0) {
        favoritedItems.push(action.data);
      }
      else {
        favoritedItems.splice(index, 1);
      }
      return Object.assign({}, state, { favoritedItems: favoritedItems });

    case ActionType.storeShareEarnList:
      return Object.assign({}, state, { shareEarnList: action.data });

    case ActionType.storeOrderHistoryList:
      return Object.assign({}, state, { orderHistoryList: action.data });

    case ActionType.storeInvoiceData:
      let invoiceData = action.data;
      if (invoiceData.hasOwnProperty('itemsOrdered') && invoiceData.itemsOrdered.length > 0) {
        const tempItemOrderedList = invoiceData.itemsOrdered
        let tempItemOrderedData = tempItemOrderedList.map((object) => {
          return { ...object, totalPrice: object.itemPrice * object.itemNum };
        })
        action.data.itemsOrdered = tempItemOrderedData
        return Object.assign({}, state, { invoiceData: action.data });
      } else { return Object.assign({}, state, { invoiceData: action.data }); }

    case ActionType.updateCounterOfInvoiceList:
      let invoiceList = state.invoiceData.itemsOrdered
      const indexInvoiceCount = invoiceList.findIndex(project => project.id === action.data);
      invoiceList[indexInvoiceCount].itemNum = action.counter;
      invoiceList[indexInvoiceCount].totalPrice = invoiceList[indexInvoiceCount].itemPrice * action.counter;
      const tempInvoiceList = state.invoiceData
      tempInvoiceList.itemsOrdered = invoiceList
      return Object.assign({}, state, { invoiceData: tempInvoiceList });

    case ActionType.updateInvoiceStatus:
      let tempInvoiceStatus = state.invoiceData
      tempInvoiceStatus.isConfirmed = action.data
      return Object.assign({}, state, { invoiceData: tempInvoiceStatus });

    case ActionType.storeCouponList:
      return Object.assign({}, state, { couponList: action.data });

    case ActionType.storeDeliveryAddressData:
      return Object.assign({}, state, { deliveryAddressData: action.data });

    case ActionType.updateDeliveryItemStatus:
      let object = {};
      object[action.data] = { isActive: true }
      return Object.assign({}, state, { deliveryItem: { ...state.deliveryItem, ...object } })

    case ActionType.storeSelectedCartItem:
      return Object.assign({}, state, { selectedCartItem: action.data });

    case ActionType.storeDeliveryOptionsTabMenuItems:
      return Object.assign({}, state, { DeliveryOptionsTabMenuList: action.data });

    case ActionType.storeDeliveryDateTabMenuItems:
      return Object.assign({}, state, { DeliveryDateTabMenuList: action.data });

    case ActionType.storeDeliveryTimeTabMenuItems:
      return Object.assign({}, state, { DeliveryTimeTabMenuList: action.data });
    case ActionType.storePickupDateTabMenuItems:
      return Object.assign({}, state, { PickupDateTabMenuList: action.data });

    case ActionType.storePickupTimeTabMenuItems:
      return Object.assign({}, state, { PickupTimeTabMenuList: action.data });

    case REHYDRATE:
      return { ...state, ...reducerLogoutState };

    default:
      return state;
  }
};

export { reducer, reducerInitialState };
