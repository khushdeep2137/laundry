import React from 'react';
//Component
import CachableImage from '../components/CachableImage/CachableImage';
//Utils
import globalStyles from '../assets/styles/globalStyles';
module.exports = {
  data: {
    itemsOrdered: [
      {
        id: 0,
        //  imagePath:
        // 'https://5.imimg.com/data5/QM/KK/YS/SELLER-1510182/coat-blazers-500x500.jpg',
        imageComponent: <CachableImage
          source={require('../assets/images/blazer.png')}
          style={[globalStyles.flex, { borderRadius: 10 }]}
          resizeMode={'stretch'}
        />,
        //This is an example of what you potentically could put here,
        title: 'Blazer',
        description: 'Lorem ipsum dolore sito ...',
        rating: 4.9,
        ratingNum: 2734,
        itemNum: 1,
        itemPrice: 5.15,
        isActive: false,
        isCounterDisabled: false,
      },
      {
        id: 1,
        // imagePath:
        //  'https://images.unsplash.com/photo-1552526881-721ce8509abb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80',
        imageComponent: <CachableImage
          source={require('../assets/images/jeans.png')}
          style={[globalStyles.flex, { borderRadius: 10 }]}
          resizeMode={'stretch'}
        />,
        title: 'Jeans Pant',
        description: 'Lorem ipsum dolore sito ...',
        rating: 4.9,
        ratingNum: 2734,
        itemNum: 2,
        itemPrice: 12.45,
        isActive: false,
        isCounterDisabled: false,
      },
      {
        id: 2,
        //  imagePath:
        //   'https://images.unsplash.com/photo-1565004602745-718e1b0d44f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=690&q=80',
        imageComponent: <CachableImage
          source={require('../assets/images/kurta.png')}
          style={[globalStyles.flex, { borderRadius: 10 }]}
          resizeMode={'stretch'}
        />,
        title: 'Kurta',
        description: 'Lorem ipsum dolore sito ...',
        rating: 4.9,
        ratingNum: 2734,
        itemNum: 2,
        itemPrice: 11.25,
        isActive: false,
        isCounterDisabled: true,
      },
      {
        id: 3,
        //  imagePath:
        //  'https://images.unsplash.com/photo-1554521948-6891dbc1cde7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        imageComponent: <CachableImage
          source={require('../assets/images/shirt.png')}
          style={[globalStyles.flex, { borderRadius: 10 }]}
          resizeMode={'stretch'}
        />,
        title: 'shirt',
        description: 'Lorem ipsum dolore sito ...',
        rating: 4.9,
        ratingNum: 2734,
        itemNum: 2,
        itemPrice: 16.25,
        isActive: false,
        isCounterDisabled: true,
      },
    ],
    invoiceNum: '30WT43GD54',
    deliveryAddress: '81 Charter Street',
    deliveryCity: 'Boston, MA',
    deliveryFee: 3.95,
    deliveryDate: 1611747877,
    taxValue: 15,
    driverName: 'George Becker',
    sellerName: "Monica's Trattoria",
    isConfirmed: false,
    signatureSellerImagePath:
      'https://www.seekpng.com/png/detail/646-6460681_fake-signature-png-line-art.png',
    signatureShipperImagePath:
      'https://www.seekpng.com/png/detail/646-6460681_fake-signature-png-line-art.png',
    deliveredBy: 'Bike',
  },
};
