import React from 'react';
import {Image} from 'react-native';
import {horizontalScale, verticalScale} from '../utility/Scale';

module.exports = {
  data: [
    {
      id: 1,
      title: 'Dry Cleaning',
      deliveryFee: 4.45,
      description: 'Cleaning',
      activeImageComponent: (
        <Image
          source={require('../assets/images/dry-cleaning.png')}
          style={{
            height: verticalScale(59),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      inactiveImageComponent: (
        <Image
          source={require('../assets/images/dry-cleaning.png')}
          style={{
            height: verticalScale(59),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    },
    {
      id: 2,
      title: 'Ironing',
      description: 'Ironing',
      deliveryFee: 12.00,
      activeImageComponent: (
        <Image
          source={require('../assets/images/ironing.png')}
          style={{
            height: verticalScale(59),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      inactiveImageComponent: (
        <Image
          source={require('../assets/images/ironing.png')}
          style={{
            height: verticalScale(59),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    },
    {
      id: 3,
      title: 'Wash & Ironing',
      deliveryFee: 1.05,
      description: '48 Places',
      activeImageComponent: (
        <Image
          source={require('../assets/images/ironing-and-wash.png')}
          style={{
            height: verticalScale(59),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      inactiveImageComponent: (
        <Image
          source={require('../assets/images/ironing-and-wash.png')}
          style={{
            height: verticalScale(59),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    },
    {
      id: 4,
      title: 'Duvet Cleaning',
      deliveryFee: 2.25,
      description: '153 Places',
      activeImageComponent: (
        <Image
          source={require('../assets/images/duvet-cleaning.png')}
          style={{
            height: verticalScale(59),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      inactiveImageComponent: (
        <Image
        source={require('../assets/images/duvet-cleaning.png')}
          style={{
            height: verticalScale(59),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    },
    {
      id: 5,
      title: 'Stain Treatment',
      deliveryFee: 1.45,
      description: '39 Places',
      activeImageComponent: (
        <Image
          source={require('../assets/images/stain-treatment.png')}
          style={{
            height: verticalScale(59),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      inactiveImageComponent: (
        <Image
          source={require('../assets/images/stain-treatment.png')}
          style={{
            height: verticalScale(59),
            width: horizontalScale(59),
            borderRadius: 3,
          }}
        />
      ),
      isActive: false,
    }
  ],
};
