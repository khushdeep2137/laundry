import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

//Component
import CachableImage from '../CachableImage/CachableImage';
import Counter from '../Counter/Counter';
import ImagePopUp from '../ImagePopUp/ImagePopUp';
import ReviewDisplay from '../ReviewDisplay/ReviewDisplay';
import BorderDivider from '../BorderDivider/BorderDivider';

//Third Party
import PropTypes from 'prop-types';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import { horizontalScale, verticalScale } from '../../utility/Scale';
import Action from '../../redux/action';

//Third Party
import { useDispatch } from 'react-redux';

const FoodItem = props => {
  //Image Popup set
  const [isImagePopUpShow, setImagePopUpShow] = useState(false);

  return (
    <View>
      <TouchableOpacity
        disabled={true}
        onPress={() => props.onItemPress && props.onItemPress()}
        style={[
          styles.container,
          {
            paddingHorizontal: props.paddingHorizontal,
            borderBottomLeftRadius: props.isRateVisible ? 0 : 10,
            borderBottomRightRadius: props.isRateVisible ? 0 : 10,
            borderTopLeftRadius: props.isActive && props.leftTopIcon ? 0 : 10,
          },
        ]}>
        {/* --- Top Left Icon Start --*/}
        {props.isActive && props.leftTopIcon && (
          <View style={styles.leftProductIcon}>
            {props.leftTopIcon && props.leftTopIcon}
          </View>
        )}
        {/* --- Top Left Icon End --*/}

        {/* --- Top Right Icon Start --*/}
        {props.topRightIconComponent && (<TouchableOpacity
          onPress={() => {
            props.onTopRightIconPress && props.onTopRightIconPress()
          }
          }
          style={styles.productIcon}>
          {
            typeof props.topRightIconComponent === 'object' &&
            props.topRightIconComponent}
          {
            typeof props.topRightIconComponent !== 'object' && (
              <Image
                style={{
                  borderRadius: 3,
                  height: verticalScale(20),
                  width: horizontalScale(20),
                }}
                source={props.topRightIconComponent}
              />
            )}
        </TouchableOpacity>)}
        {/* --- Top Right Icon End --*/}

        <View style={[globalStyles.flexDirectionRow, styles.subContainer]}>
          {props.showTotalCount && (
             <>
            <View style={styles.totalCountView}>
              <Text style={styles.totalCountText}>
                {props.itemPurchasedCount} 
              </Text>
            </View>
             <View >
             <Text style={styles.totalCountText}>
               {'x    '} 
             </Text>
           </View>
          </>
            
          )}

          {/*---Show Popup When Pressing the Food Item Image & Food Item Image Start ---*/}
        {(props.imageIconPath.length > 0 || props.imageIconComponent) && <TouchableOpacity
            onPress={() => setImagePopUpShow(props.showImagePopup)}
            style={styles.imageContainer}>
            {props.imageIconPath.length > 0 && (
              <CachableImage
                source={{ uri: props.imageIconPath }}
                style={styles.imageIcon}
              />
            )}
            {!props.imageIconPath && props.imageIconComponent && (
              <View style={styles.imageIcon}>{props.imageIconComponent}</View>
            )}
          </TouchableOpacity>}
          {/*---Show Popup When Pressing the Food Item Image & Food Item Image End ---*/}

          <View style={globalStyles.flex}>
            {/*-- Food Item Title Start --*/}
            <View style={[globalStyles.flexDirectionRow, globalStyles.flex]}>
              <View style={globalStyles.flex}>
                {/*-- Shows only one line and if not completely visible puts dots instead --*/}
                <Text numberOfLines={1} style={styles.title}>
                  {props.title}
                </Text>
              </View>

            </View>
            {/*-- Food Item Title End --*/}

            {/*--Delivery Fee Start--*/}
            {!props.showTotalCount && (
              <Text style={styles.deliveryFee}>{props.deliveryFee}</Text>
            )}
            {/*--Delivery Fee End--*/}


            {/*-- Food Item Description Start --*/}
            {/* <View style={[globalStyles.flex, globalStyles.justifyCenter]}>
              <Text numberOfLines={1} style={styles.descriptionText}>
                {props.description}
              </Text>
            </View> */}
            {/*-- Food Item Description End --*/}

            {/*-- Food Item Rating Start--*/}
            {/* <View
              style={[
                globalStyles.flexDirectionRow,
                globalStyles.flex,
                globalStyles.alignItemsCenter,
              ]}>
            
              <View style={[globalStyles.flex, globalStyles.justifyFlexEnd]}>
                <ReviewDisplay
                  rating={props.rating}
                  ratingNum={props.ratingNum}
                  isDescriptionShown={true}
                />
              </View>
            
            </View> */}
            {/*-- Food Item Rating End--*/}

          </View>




          {/*-- Food Item Total Count/Add To Cart/Counter Start--*/}
          <View style={styles.spaceBetween}>

            {/*--Counter Start--*/}
            {props.isCounterVisible && (
              <View style={[globalStyles.flex]}>
                <Counter
                  minValue={props.counterMinValue}
                  isDisabled={props.isCounterDisabled}
                  onChange={number =>
                    props.onCounterChange && props.onCounterChange(number)
                  }
                  initialValue={props.counterStartingValue}
                />
              </View>
            )}
            {/*--Counter End--*/}
            {/*--Add to Cart Icon Start--*/}
            {props.isAddToCartVisible && (
              <TouchableOpacity
                onPress={() => {
                  props.addToCartOnPress && props.addToCartOnPress();
                }
                }
                style={styles.containerCommonStyle}
                activeOpacity={0.7}>
                {/*--Title Start--*/}
                <Text style={styles.activeTitleStyle}>Add To Cart</Text>
                {/*--Title End--*/}
              </TouchableOpacity>
              // <TouchableOpacity
              //   onPress={() =>
              //     props.addToCartOnPress && props.addToCartOnPress()
              //   }
              //   style={globalStyles.marginLeft15}>
              //   <Image
              //     style={{
              //       width: horizontalScale(20),
              //       height: verticalScale(20),
              //       borderRadius: 3,
              //     }}
              //     source={require('../../assets/placeholders/20x20.png')}
              //   />
              // </TouchableOpacity>
            )}
            {/*--Add to Cart Icon End--*/}


          </View>
        </View>
        {/*-- Food Item Total Count/Add To Cart/Counter End--*/}


        {/*-- Add On View Start--*/}
        {props.isAddOnVisible && props.addOnItems.length > 0 && (
          <View >
            <Text style={[styles.addOnTxt]}>{'Add Ons'}</Text>
            {props.addOnItems.map((item, index) => {
              return (
                <View key={'add_ons' + index} >
                  <View style={[globalStyles.flex, globalStyles.justifySpaceBetween, globalStyles.flexDirectionRow]}>
                    <Text style={styles.addOnTypeText}>{item.title}</Text>
                    <Text style={styles.addOnTypePrice}>{'$' + item.deliveryFee}</Text>
                  </View>
                  {props.addOnItems.length > index + 1 && (<BorderDivider
                    containerTopMargin={8}
                    containerBottomMargin={8}
                    activeAreaAlignment={'left'}
                    activeAreaWidth={0}
                    isActiveOnly={false}
                    activeAreaHeight={1}
                  />)}
                </View>
              )
            })}
            {/* <View style={[globalStyles.flex, globalStyles.justifySpaceBetween, globalStyles.flexDirectionRow]}>
              <Text style={styles.addOnTypeText}>Ironing</Text>
              <Text style={styles.addOnTypePrice}>$12</Text>
            </View> */}
          </View>
        )}
        {/*-- Add On View End--*/}
      </TouchableOpacity>

      {/*-- Food Item Rate and Reorder Start--*/}
      {props.isRateVisible && (
        <View style={styles.rateSectionView}>
          <TouchableOpacity
            onPress={() => props.onPressReorder && props.onPressReorder()}
            style={styles.sectionView}>
            <Text style={styles.sectionText}>{'Reorder'}</Text>
          </TouchableOpacity>
          <View style={styles.sectionBorderView} />
          <TouchableOpacity
            onPress={() => props.onPressRate && props.onPressRate()}
            style={styles.sectionView}>
            <Text style={styles.sectionText}>{'Rate'}</Text>
          </TouchableOpacity>
        </View>
      )}
      {/*-- Food Item Rate and Reorder End--*/}

      {/*-- Food Item Popup View Start--*/}
      {isImagePopUpShow && (
        <ImagePopUp
          closeModal={() => setImagePopUpShow(false)}
          showImage={isImagePopUpShow}
          imagePath={props.imageIconPath}
          imageComponent={props.imageIconComponent}
        />
      )}
      {/*-- Food Item Popup View End--*/}


    </View>
  );
};

/*---- Default Props Start -------*/
FoodItem.defaultProps = {
  counterStartingValue: 0,
  counterMinValue: 0,
  deliveryFee: '$0',
  description: '',
  imageIconPath: '',
  imageIconComponent: null,
  isActive: false,
  isAddToCartVisible: true,
  isCounterDisabled: false,
  isCounterVisible: false,
  isRateVisible: true,
  itemPrice: 0,
  itemPurchasedCount: 0,
  leftTopIcon: null,
  rating: 0,
  ratingNum: 0,
  showTotalCount: false,
  showImagePopup: true,
  title: '',
  topRightIconComponent: null,
  isAddOnVisible: false,
  paddingHorizontal: 0,
  addOnItems: []
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
FoodItem.propTypes = {
  addToCartOnPress: PropTypes.func,
  counterStartingValue: PropTypes.number,
  counterMinValue: PropTypes.number,
  deliveryFee: PropTypes.string,
  description: PropTypes.string,
  imageIconPath: PropTypes.string,
  isActive: PropTypes.bool,
  isAddToCartVisible: PropTypes.bool,
  isCounterDisabled: PropTypes.bool,
  isCounterVisible: PropTypes.bool,
  imageIconComponent: PropTypes.object,
  isRateVisible: PropTypes.bool,
  itemPrice: PropTypes.number,
  itemPurchasedCount: PropTypes.number,
  leftTopIcon: PropTypes.object,
  onCounterChange: PropTypes.func,
  onItemPress: PropTypes.func,
  onPressRate: PropTypes.func,
  onPressReorder: PropTypes.func,
  onTopRightIconPress: PropTypes.func,
  rating: PropTypes.number,
  ratingNum: PropTypes.number,
  showTotalCount: PropTypes.bool,
  showImagePopup: PropTypes.bool,
  title: PropTypes.string,
  topRightIconComponent: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]),
  isAddOnVisible: PropTypes.bool,
  paddingHorizontal: PropTypes.number,
  addOnItems: PropTypes.array,
};
/*---- Prop Type Expectations End -------*/
export default FoodItem;
