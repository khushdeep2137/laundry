import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utils
import {
  horizontalScale,
  scaleFontSize,
  screenWidth,
  verticalScale,
} from '../../utility/Scale';
import {FONT_FAMILY} from '../../constants/constants';
import {allColors} from '../../assets/styles/mainColors';
import PickupActive  from '../../assets/icons/generalIcons/dropoff_active.svg';
import DropoffActive from '../../assets/icons/generalIcons/pickup_active.svg';

const TabMenuItem = props => {
  const containerCommonStyle = {
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(props.componentPaddingHorizontal),
    marginBottom: verticalScale(props.componentMarginBottom),
    marginTop: verticalScale(props.componentMarginTop),
    marginLeft: horizontalScale(props.componentMarginLeft),
    marginRight: horizontalScale(props.componentMarginRight),
    backgroundColor: props.isActive ? allColors.darkYellow :  props.componentDisable?  allColors.lightGreyText : allColors.white,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 40,
    borderWidth: props.isActive ? 0 : props.componentDisable? 0.1: 0.5,
    width :horizontalScale(props.componentWidth),
    justifyContent : props.componentJustifyContent,
  };

  const activeTitleStyle = {
    fontFamily: props.isActive
      ? FONT_FAMILY.RobotoCondensedRegular
      : FONT_FAMILY.RobotoCondensedLight,
    fontSize: scaleFontSize(12),
    fontWeight: props.isActive ? 'normal' : '300',
    color: props.isActive ? allColors.white : allColors.black,
    marginRight: props.iconComponent ? horizontalScale(5) : 0,
    marginLeft: props.frontIconComponent ? horizontalScale(5) : 0,
    opacity: props.componentDisable?0.3:1,
  };

  return (
    <TouchableOpacity
    disabled={props.componentDisable} 
      style={containerCommonStyle}
      onPress={() => props.onPress(props.itemData)}
      activeOpacity={0.7}>
         {/*--Icon Start--*/}
      {  typeof props.frontIconComponent === 'object' &&
            props.frontIconComponent}
      {/*--Icon End--*/}
      {/*--Title Start--*/}
      <Text style={activeTitleStyle}>{props.title}</Text>
      {/*--Title End--*/}

      {/*--Icon Start--*/}
      {props.iconComponent}
      {/*--Icon End--*/}
    </TouchableOpacity>
  );
};

/*---- Default Props Start -------*/
TabMenuItem.defaultProps = {
  componentMarginBottom: 0,
  componentMarginLeft: 0,
  componentMarginRight: 0,
  componentMarginTop: 0,
  componentPaddingHorizontal : 10,
  iconComponent: null,
  frontIconComponent:null,
  isActive: false,
  title: '',
  componentWidth :screenWidth * 0.33,
  componentJustifyContent : 'center',
  componentDisable:false
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
TabMenuItem.propTypes = {
  componentMarginBottom: PropTypes.number,
  componentMarginLeft: PropTypes.number,
  componentMarginRight: PropTypes.number,
  componentMarginTop: PropTypes.number,
  componentPaddingHorizontal :PropTypes.number,
  iconComponent: PropTypes.object,
  frontIconComponent: PropTypes.object,
  isActive: PropTypes.bool,
  onPress: PropTypes.func,
  title: PropTypes.string,
  componentWidth: PropTypes.number,
  componentJustifyContent : PropTypes.string,
  componentDisable: PropTypes.bool,
};
/*---- Prop Type Expectations End -------*/
export default TabMenuItem;
