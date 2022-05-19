import React, { useState,useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Publicly Available Icons that Can be Used for Commercial Purposes
import CounterPlus from '../../assets/icons/generalIcons/counterIcons/counter_addSVG.svg';
import CounterMinus from '../../assets/icons/generalIcons/counterIcons/counter_minusSVG.svg';
import DisablePlus from '../../assets/icons/generalIcons/counterIcons/counter_add_disabledSVG.svg';
import DisableMinus from '../../assets/icons/generalIcons/counterIcons/counter_minus_disabledSVG.svg';
import LargePlus from '../../assets/icons/generalIcons/counterIcons/counter_large_addSVG.svg';
import LargeMinus from '../../assets/icons/generalIcons/counterIcons/counter_large_minusSVG.svg';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import { scaleFontSize } from '../../utility/Scale';
import { allColors } from '../../assets/styles/mainColors';

const Counter = props => {
  //set initial number
  const [initialNumber, setStartingNumber] = useState(props.initialValue);

  useEffect(()=>{
    setStartingNumber(props.initialValue)
  },[props])
  //Function to execute when pressing minus
  function decrementNumber() {
    let minValue = props.minValue ? props.minValue : 0;
    if (initialNumber > minValue) {
      setStartingNumber(initialNumber - 1);
      props.onChange && props.onChange(initialNumber - 1);
    }
  }

  //Function to execute when pressing plus
  function incrementNumber() {
    setStartingNumber(initialNumber + 1);
    props.onChange && props.onChange(initialNumber + 1);
  }

  const numberStyle = {
    fontSize: props.isLarge ? scaleFontSize(16) : scaleFontSize(14),
  };

  return (
    <View
      style={[globalStyles.flexDirectionRow, globalStyles.alignItemsCenter]}>
      {/*-- Minus Icon Container Start --*/}
      <TouchableOpacity
        disabled={props.isDisabled}
        style={[styles.commonButtonView, { borderTopRightRadius: 0, borderBottomRightRadius: 0 }]}
        onPress={() => decrementNumber()}>
        {props.isDisabled ? (
          <DisableMinus />
        ) : props.isLarge ? (
          <LargeMinus />
        ) : (
          <CounterMinus />
        )}
      </TouchableOpacity>
      {/*-- Minus Icon Container End --*/}

      {/*-- Value Start --*/}
      <View style={[{
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: allColors.borderBlack,
      }]} >
        <Text style={[styles.number, numberStyle]}>{initialNumber}</Text>
      </View>
      {/*-- Value End --*/}

      {/*-- Plus Icon Container Start --*/}
      <TouchableOpacity
        disabled={props.isDisabled}
        style={[styles.commonButtonView, { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }]}
        onPress={() => incrementNumber()}>
        {props.isDisabled ? (
          <DisablePlus />
        ) : props.isLarge ? (
          <LargePlus />
        ) : (
          <CounterPlus />
        )}
      </TouchableOpacity>
      {/*-- Plus Icon Container End --*/}
    </View>
  );
};
/*---- Default Props Start -------*/
Counter.defaultProps = {
  initialValue: 0,
  isDisabled: false,
  isLarge: false,
  minValue: 0,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
Counter.propTypes = {
  isDisabled: PropTypes.bool,
  initialValue: PropTypes.number,
  isLarge: PropTypes.bool,
  minValue: PropTypes.number,
  onChange: PropTypes.func,
};
/*---- Prop Type Expectations End -------*/
export default Counter;
