import React from 'react';
import {horizontalScale, verticalScale} from '../utility/Scale';
import {Image} from 'react-native';

module.exports = {
  data: [
    {
      id: 0,
      title: 'Blazer',
      icon: (
        <Image
          source={require('../assets/placeholders/33x30.png')}
          style={{
            height: verticalScale(30),
            width: horizontalScale(33),
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    },
    {
      id: 1,
      title: 'Jeans Pant',
      icon: (
        <Image
          source={require('../assets/placeholders/33x30.png')}
          style={{
            height: verticalScale(30),
            width: horizontalScale(33),
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    },
    {
      id: 2,
      title: 'Kurta',
      icon: (
        <Image
          source={require('../assets/placeholders/33x30.png')}
          style={{
            height: verticalScale(30),
            width: horizontalScale(33),
            borderRadius: 3,
          }}
        />
      ),
      isActive: true,
    },
    {
      id: 3,
      title: 'Shirt',
      icon: (
        <Image
          source={require('../assets/placeholders/33x30.png')}
          style={{
            height: verticalScale(30),
            width: horizontalScale(33),
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    },
    {
      id: 4,
      title: 'Shorts',
      icon: (
        <Image
          source={require('../assets/placeholders/33x30.png')}
          style={{
            height: verticalScale(30),
            width: horizontalScale(33),
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    },
    {
      id: 5,
      title: 'Lower Shorts',
      icon: (
        <Image
          source={require('../assets/placeholders/33x30.png')}
          style={{
            height: verticalScale(30),
            width: horizontalScale(33),
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    },
   
    
    // {
    //   id: 7,
    //   title: 'Pizza',
    //   icon: (
    //     <Image
    //       source={require('../assets/placeholders/33x30.png')}
    //       style={{
    //         height: verticalScale(30),
    //         width: horizontalScale(33),
    //         borderRadius: 3,
    //       }}
    //     />
    //   ),
    //   isActive: true,
    // },
    // {
    //   id: 8,
    //   title: 'Coffee',
    //   icon: (
    //     <Image
    //       source={require('../assets/placeholders/33x30.png')}
    //       style={{
    //         height: verticalScale(30),
    //         width: horizontalScale(33),
    //         borderRadius: 3,
    //       }}
    //     />
    //   ),
    //   isActive: false,
    // },
    // {
    //   id: 9,
    //   title: 'Sushi',
    //   icon: (
    //     <Image
    //       source={require('../assets/placeholders/33x30.png')}
    //       style={{
    //         height: verticalScale(30),
    //         width: horizontalScale(33),
    //         borderRadius: 3,
    //       }}
    //     />
    //   ),
    //   isActive: false,
    // },
    // {
    //   id: 10,
    //   title: 'Fruits',
    //   icon: (
    //     <Image
    //       source={require('../assets/placeholders/33x30.png')}
    //       style={{
    //         height: verticalScale(30),
    //         width: horizontalScale(33),
    //         borderRadius: 3,
    //       }}
    //     />
    //   ),
    //   isActive: false,
    // },
    // {
    //   id: 11,
    //   title: 'Home Chef',
    //   icon: (
    //     <Image
    //       source={require('../assets/placeholders/33x30.png')}
    //       style={{
    //         height: verticalScale(30),
    //         width: horizontalScale(33),
    //         borderRadius: 3,
    //       }}
    //     />
    //   ),
    //   isActive: true,
    // },
  ],
};
