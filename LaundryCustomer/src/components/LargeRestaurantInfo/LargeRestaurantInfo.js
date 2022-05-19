import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Component
import CachableImage from '../CachableImage/CachableImage';
//Dummy Data
import SubItemsDummy from '../../DummyData/SubItemsDummyData';

//Utils
import styles from './style';
import * as images from '../../assets/images/map';
import globalStyles from '../../assets/styles/globalStyles';
import Routes from '../../navigation/Routes';
import {navigate} from '../../utility/NavigationService';
import Action from '../../redux/action';
class LargeRestaurantInfo extends PureComponent {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.onPress()}
        style={styles.mainView}>
        {/*--Restaurant Image Start--*/}
        <View style={styles.imageView}>
          <CachableImage
            source={{ uri: this.props.imageIconPath }}
            style={[globalStyles.flex, { borderRadius: this.props.imageBorderRadius }]}
            resizeMode={'stretch'}
          />
        </View>
        {/*--Restaurant Image End--*/}

        {this.props.title != "" && <View
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.marginTop5,
            globalStyles.alignItemsCenter,
          ]}>
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.flex,
              globalStyles.alignItemsCenter,
            ]}>
            {/*--Title Start--*/}
            <Text style={styles.titleStyle}>
              {this.props.title + ' / ' + this.props.rating}
            </Text>
            {/*--Title End--*/}

            {/*--Star Icon Start--*/}
            <Image
              source={images.generalIcons.starIcon}
              style={styles.starIcon}
              resizeMode={'contain'}
            />
            {/*--Star Icon End--*/}
          </View>

          {/*--Delivery Time Start--*/}
          <Text style={styles.deliveryTimeText}>{this.props.deliveryTime}</Text>
          {/*--Delivery Time End Start--*/}
        </View>
        }
        {this.props.title != "" && <View
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.alignItemsCenter,
          ]}>
          {/*--Description Start--*/}
          <View style={globalStyles.flex}>
            <Text style={styles.descriptionText}>{this.props.description}</Text>
          </View>
          {/*--Description End--*/}

          {/*--Delivery Fee Start--*/}
          {/* <View style={globalStyles.flexDirectionRow}>
            <Text style={styles.descriptionText}>{'Delivery:'}</Text>
            <Text style={styles.deliveryFee}>{this.props.deliveryFee}</Text>
          </View> */}
          {/*--Delivery Fee End--*/}
          <TouchableOpacity onPress={() => {
            this.props.onPressCompare()
          }}>
            <View style={globalStyles.flexDirectionRow}>
              <Text style={styles.comparetext}>Compare</Text>
            </View>
          </TouchableOpacity>

        </View>}
      </TouchableOpacity>
    );
  }
}

/*---- Default Props Start -------*/
LargeRestaurantInfo.defaultProps = {
  deliveryFee: '0',
  deliveryTime: '',
  description: '',
  imageIconPath: '',
  imageBorderRadius: 5,
  rating: 0,
  title: '',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
LargeRestaurantInfo.propTypes = {
  deliveryFee: PropTypes.string,
  deliveryTime: PropTypes.string,
  description: PropTypes.string,
  imageIconPath: PropTypes.string,
  imageBorderRadius: PropTypes.number,
  onPress: PropTypes.func,
  rating: PropTypes.number,
  title: PropTypes.string,
  onPressCompare: PropTypes.func,

};
/*---- Prop Type Expectations End -------*/

export default LargeRestaurantInfo;
