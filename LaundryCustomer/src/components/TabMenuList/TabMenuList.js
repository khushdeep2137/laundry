import React from 'react';
import {FlatList} from 'react-native';

//Third Party
import PropTypes from 'prop-types';

//Utilities
import globalStyles from '../../assets/styles/globalStyles';

const TabMenuList = props => {
  return (
    <FlatList
      // Performance settings
      //initialNumToRender={2} // Reduce initial render amount
      // maxToRenderPerBatch={1} // Reduce number in each render batch
      // windowSize={7} // Reduce the window size
      showsHorizontalScrollIndicator={false}
      horizontal
      data={props.informationArray}
      renderItem={props.customSlideComponent}
      contentContainerStyle={props.contentContainerStyle}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

/*---- Default Props Start -------*/
TabMenuList.defaultProps = {
  informationArray: [],
  contentContainerStyle : globalStyles.paddingLeftGeneral,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
TabMenuList.propTypes = {
  customSlideComponent: PropTypes.func,
  informationArray: PropTypes.array,
  contentContainerStyle : PropTypes.object,
};
/*---- Prop Type Expectations End -------*/
export default TabMenuList;
