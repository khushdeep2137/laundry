/* eslint-disable */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import Routes from '../../navigation/Routes';
import styles from './style';
import {horizontalScale} from '../../utility/Scale';

//Publicly Available Icons that Can be Used for Commercial Purposes
import LogoIcon from '../../components/icons/LogoIcon/LogoIcon';


class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: horizontalScale(74),
        }}>
        <LogoIcon colored={true} />
        <Text style={[globalStyles.logoFontDobule, globalStyles.marginTop15]}>
          Dobule
        </Text>
        <Text
          style={[
            globalStyles.fontBodyTextStyle1,
            globalStyles.textCenter,
            styles.detailWidth,
          ]}>
          Curabitur sit amet massa nunc. Fusce at tristique magna. Fusce eget
          dapibus dui.
        </Text>
        <TouchableOpacity
          style={[globalStyles.marginTop30, styles.buttonTitleContainer]}
          onPress={() => this.props.navigation.navigate(Routes.ChooseLanguage)}>
          <Text style={styles.buttonTitle}>WELCOME</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Welcome;
