import React from 'react';
//Component
import CachableImage from '../components/CachableImage/CachableImage';
//Utils
import globalStyles from '../assets/styles/globalStyles';
/*------------------------------------ Sub Items Dummy Data for Filter Screen Start --------------------------------*/
module.exports = {
  data: [
    {
      id: 0,
      title: 'Blazer',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Blazer',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/blazer.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //   imageIconPath:
      // 'https://5.imimg.com/data5/QM/KK/YS/SELLER-1510182/coat-blazers-500x500.jpg',
      isActive: true,
      itemPurchased: 1,
      type :0,
      laundryId : 1,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 1,
      title: 'Jeans Pant',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/jeans.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
       // resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://media.gettyimages.com/photos/directly-above-shot-of-jeans-pant-over-white-background-picture-id1161148084?s=170667a',
      isActive: false,
      itemPurchased: 1,
      type :0,
      laundryId : 1,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 2,
      title: 'Kurta',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/kurta.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ir8w_3lggc8cly1dLZ63u8Otio92KmuZ1w&usqp=CAU',
      isActive: false,
      itemPurchased: 1,
      type :0,
      laundryId : 1,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 3,
      title: 'Shirt',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Chocolate Brownies',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shirt.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //     'https://media.istockphoto.com/photos/mens-shirt-picture-id488160041?k=20&m=488160041&s=612x612&w=0&h=OH_-skyES8-aeTvDQHdVDZ6GKLsqp6adFJC8u6O6_UY=',
      isActive: true,
      itemPurchased: 1,
      type :0,
      laundryId : 1,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 4,
      title: 'Shorts',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://5.imimg.com/data5/TH/SH/JQ/SELLER-84307731/mens-casual-wear-cotton-shorts-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :0,
      laundryId : 1,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 5,
      title: 'Lower Shorts',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/lower-shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //   'https://5.imimg.com/data5/XO/RP/MY-21762497/mens-formal-trouser-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :0,
      laundryId : 1,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },


    {
      id: 6,
      title: 'Blazer',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Blazer',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/blazer.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //   imageIconPath:
      // 'https://5.imimg.com/data5/QM/KK/YS/SELLER-1510182/coat-blazers-500x500.jpg',
      isActive: true,
      itemPurchased: 1,
      type :0,
      laundryId : 2,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 7,
      title: 'Jeans Pant',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/jeans.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
       // resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://media.gettyimages.com/photos/directly-above-shot-of-jeans-pant-over-white-background-picture-id1161148084?s=170667a',
      isActive: false,
      itemPurchased: 1,
      type :0,
      laundryId : 2,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 8,
      title: 'Kurta',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/kurta.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ir8w_3lggc8cly1dLZ63u8Otio92KmuZ1w&usqp=CAU',
      isActive: false,
      itemPurchased: 1,
      type :0,
      laundryId : 2,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 9,
      title: 'Shirt',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Chocolate Brownies',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shirt.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //     'https://media.istockphoto.com/photos/mens-shirt-picture-id488160041?k=20&m=488160041&s=612x612&w=0&h=OH_-skyES8-aeTvDQHdVDZ6GKLsqp6adFJC8u6O6_UY=',
      isActive: true,
      itemPurchased: 1,
      type :0,
      laundryId : 2,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 10,
      title: 'Shorts',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://5.imimg.com/data5/TH/SH/JQ/SELLER-84307731/mens-casual-wear-cotton-shorts-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :0,
      laundryId : 2,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 11,
      title: 'Lower Shorts',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/lower-shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //   'https://5.imimg.com/data5/XO/RP/MY-21762497/mens-formal-trouser-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :0,
      laundryId : 2,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },

    {
      id: 12,
      title: 'Blazer',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Blazer',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/blazer.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //   imageIconPath:
      // 'https://5.imimg.com/data5/QM/KK/YS/SELLER-1510182/coat-blazers-500x500.jpg',
      isActive: true,
      itemPurchased: 1,
      type :0,
      laundryId : 3,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 13,
      title: 'Jeans Pant',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/jeans.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
       // resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://media.gettyimages.com/photos/directly-above-shot-of-jeans-pant-over-white-background-picture-id1161148084?s=170667a',
      isActive: false,
      itemPurchased: 1,
      type :0,
      laundryId : 3,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 14,
      title: 'Kurta',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/kurta.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ir8w_3lggc8cly1dLZ63u8Otio92KmuZ1w&usqp=CAU',
      isActive: false,
      itemPurchased: 1,
      type :0,
      laundryId : 3,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 15,
      title: 'Shirt',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Chocolate Brownies',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shirt.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //     'https://media.istockphoto.com/photos/mens-shirt-picture-id488160041?k=20&m=488160041&s=612x612&w=0&h=OH_-skyES8-aeTvDQHdVDZ6GKLsqp6adFJC8u6O6_UY=',
      isActive: true,
      itemPurchased: 1,
      type :0,
      laundryId : 3,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 16,
      title: 'Shorts',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://5.imimg.com/data5/TH/SH/JQ/SELLER-84307731/mens-casual-wear-cotton-shorts-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :0,
      laundryId : 3,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 17,
      title: 'Lower Shorts',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/lower-shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //   'https://5.imimg.com/data5/XO/RP/MY-21762497/mens-formal-trouser-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :0,
      laundryId : 3,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },

    {
      id: 18,
      title: 'Blazer',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Blazer',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/blazer.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //   imageIconPath:
      // 'https://5.imimg.com/data5/QM/KK/YS/SELLER-1510182/coat-blazers-500x500.jpg',
      isActive: true,
      itemPurchased: 1,
      type :0,
      laundryId : 4,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 19,
      title: 'Jeans Pant',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/jeans.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
       // resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://media.gettyimages.com/photos/directly-above-shot-of-jeans-pant-over-white-background-picture-id1161148084?s=170667a',
      isActive: false,
      itemPurchased: 1,
      type :0,
      laundryId : 4,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 20,
      title: 'Kurta',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/kurta.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ir8w_3lggc8cly1dLZ63u8Otio92KmuZ1w&usqp=CAU',
      isActive: false,
      itemPurchased: 1,
      type :0,
      laundryId : 4,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 21,
      title: 'Shirt',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Chocolate Brownies',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shirt.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //     'https://media.istockphoto.com/photos/mens-shirt-picture-id488160041?k=20&m=488160041&s=612x612&w=0&h=OH_-skyES8-aeTvDQHdVDZ6GKLsqp6adFJC8u6O6_UY=',
      isActive: true,
      itemPurchased: 1,
      type :0,
      laundryId : 4,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 22,
      title: 'Shorts',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://5.imimg.com/data5/TH/SH/JQ/SELLER-84307731/mens-casual-wear-cotton-shorts-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :0,
      laundryId : 4,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 23,
      title: 'Lower Shorts',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/lower-shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //   'https://5.imimg.com/data5/XO/RP/MY-21762497/mens-formal-trouser-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :0,
      laundryId : 4,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },


    {
      id: 24,
      title: 'Saree',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Blazer',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/blazer.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //   imageIconPath:
      // 'https://5.imimg.com/data5/QM/KK/YS/SELLER-1510182/coat-blazers-500x500.jpg',
      isActive: true,
      itemPurchased: 1,
      type :1,
      laundryId : 1,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 25,
      title: 'Kurtis',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/jeans.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
       // resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://media.gettyimages.com/photos/directly-above-shot-of-jeans-pant-over-white-background-picture-id1161148084?s=170667a',
      isActive: false,
      itemPurchased: 1,
      type :1,
      laundryId : 1,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 1.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 26,
      title: 'Lehanga',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/kurta.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ir8w_3lggc8cly1dLZ63u8Otio92KmuZ1w&usqp=CAU',
      isActive: false,
      itemPurchased: 1,
      type :1,
      laundryId : 1,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 27,
      title: 'Midi Overcoat',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Chocolate Brownies',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shirt.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //     'https://media.istockphoto.com/photos/mens-shirt-picture-id488160041?k=20&m=488160041&s=612x612&w=0&h=OH_-skyES8-aeTvDQHdVDZ6GKLsqp6adFJC8u6O6_UY=',
      isActive: true,
      itemPurchased: 1,
      type :1,
      laundryId : 1,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 28,
      title: 'Salwar Suit Pant',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://5.imimg.com/data5/TH/SH/JQ/SELLER-84307731/mens-casual-wear-cotton-shorts-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :1,
      laundryId : 1,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 29,
      title: 'Skirts',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/lower-shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //   'https://5.imimg.com/data5/XO/RP/MY-21762497/mens-formal-trouser-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :1,
      laundryId : 1,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },


    {
      id: 30,
      title: 'Saree',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Blazer',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/blazer.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //   imageIconPath:
      // 'https://5.imimg.com/data5/QM/KK/YS/SELLER-1510182/coat-blazers-500x500.jpg',
      isActive: true,
      itemPurchased: 1,
      type :1,
      laundryId : 2,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 31,
      title: 'Kurtis',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/jeans.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
       // resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://media.gettyimages.com/photos/directly-above-shot-of-jeans-pant-over-white-background-picture-id1161148084?s=170667a',
      isActive: false,
      itemPurchased: 1,
      type :1,
      laundryId : 2,
      services :[
     
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 32,
      title: 'Lehanga',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/kurta.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ir8w_3lggc8cly1dLZ63u8Otio92KmuZ1w&usqp=CAU',
      isActive: false,
      itemPurchased: 1,
      type :1,
      laundryId : 2,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 33,
      title: 'Midi OverCoat',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Chocolate Brownies',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shirt.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //     'https://media.istockphoto.com/photos/mens-shirt-picture-id488160041?k=20&m=488160041&s=612x612&w=0&h=OH_-skyES8-aeTvDQHdVDZ6GKLsqp6adFJC8u6O6_UY=',
      isActive: true,
      itemPurchased: 1,
      type :1,
      laundryId : 2,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 34,
      title: 'Salwar Suit Pant',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://5.imimg.com/data5/TH/SH/JQ/SELLER-84307731/mens-casual-wear-cotton-shorts-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :1,
      laundryId : 2,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 35,
      title: 'Skirts',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/lower-shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //   'https://5.imimg.com/data5/XO/RP/MY-21762497/mens-formal-trouser-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :1,
      laundryId : 2,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },

    {
      id: 36,
      title: 'Saree',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Blazer',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/blazer.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //   imageIconPath:
      // 'https://5.imimg.com/data5/QM/KK/YS/SELLER-1510182/coat-blazers-500x500.jpg',
      isActive: true,
      itemPurchased: 1,
      type :1,
      laundryId : 3,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 37,
      title: 'Kurtis',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/jeans.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
       // resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://media.gettyimages.com/photos/directly-above-shot-of-jeans-pant-over-white-background-picture-id1161148084?s=170667a',
      isActive: false,
      itemPurchased: 1,
      type :1,
      laundryId : 3,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 38,
      title: 'Lehanga',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/kurta.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ir8w_3lggc8cly1dLZ63u8Otio92KmuZ1w&usqp=CAU',
      isActive: false,
      itemPurchased: 1,
      type :1,
      laundryId : 3,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 39,
      title: 'Midi Overcoat',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Chocolate Brownies',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shirt.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //     'https://media.istockphoto.com/photos/mens-shirt-picture-id488160041?k=20&m=488160041&s=612x612&w=0&h=OH_-skyES8-aeTvDQHdVDZ6GKLsqp6adFJC8u6O6_UY=',
      isActive: true,
      itemPurchased: 1,
      type :1,
      laundryId : 3,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 40,
      title: 'Salwar Suit Pant',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://5.imimg.com/data5/TH/SH/JQ/SELLER-84307731/mens-casual-wear-cotton-shorts-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :1,
      laundryId : 3,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 41,
      title: 'Skirts',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/lower-shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //   'https://5.imimg.com/data5/XO/RP/MY-21762497/mens-formal-trouser-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :1,
      laundryId : 3,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },

    {
      id: 42,
      title: 'Saree',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Blazer',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/blazer.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //   imageIconPath:
      // 'https://5.imimg.com/data5/QM/KK/YS/SELLER-1510182/coat-blazers-500x500.jpg',
      isActive: true,
      itemPurchased: 1,
      type :1,
      laundryId : 4,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 43,
      title: 'Kurtis',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/jeans.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
       // resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://media.gettyimages.com/photos/directly-above-shot-of-jeans-pant-over-white-background-picture-id1161148084?s=170667a',
      isActive: false,
      itemPurchased: 1,
      type :1,
      laundryId : 4,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 44,
      title: 'Lehanga',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/kurta.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ir8w_3lggc8cly1dLZ63u8Otio92KmuZ1w&usqp=CAU',
      isActive: false,
      itemPurchased: 1,
      type :1,
      laundryId : 4,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 45,
      title: 'Midi Overcoat',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Chocolate Brownies',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shirt.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //     'https://media.istockphoto.com/photos/mens-shirt-picture-id488160041?k=20&m=488160041&s=612x612&w=0&h=OH_-skyES8-aeTvDQHdVDZ6GKLsqp6adFJC8u6O6_UY=',
      isActive: true,
      itemPurchased: 1,
      type :1,
      laundryId : 4,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 46,
      title: 'Salwar Suit Pant',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://5.imimg.com/data5/TH/SH/JQ/SELLER-84307731/mens-casual-wear-cotton-shorts-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :1,
      laundryId : 4,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 47,
      title: 'Skirts',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/lower-shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //   'https://5.imimg.com/data5/XO/RP/MY-21762497/mens-formal-trouser-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :1,
      laundryId : 4,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },


    {
      id: 48,
      title: 'Shirt',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Blazer',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/blazer.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //   imageIconPath:
      // 'https://5.imimg.com/data5/QM/KK/YS/SELLER-1510182/coat-blazers-500x500.jpg',
      isActive: true,
      itemPurchased: 1,
      type :2,
      laundryId : 1,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 49,
      title: 'TShirt',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/jeans.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
       // resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://media.gettyimages.com/photos/directly-above-shot-of-jeans-pant-over-white-background-picture-id1161148084?s=170667a',
      isActive: false,
      itemPurchased: 1,
      type :2,
      laundryId : 1,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 50,
      title: 'Pant',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/kurta.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ir8w_3lggc8cly1dLZ63u8Otio92KmuZ1w&usqp=CAU',
      isActive: false,
      itemPurchased: 1,
      type :2,
      laundryId : 1,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 51,
      title: 'Gown',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Chocolate Brownies',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shirt.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //     'https://media.istockphoto.com/photos/mens-shirt-picture-id488160041?k=20&m=488160041&s=612x612&w=0&h=OH_-skyES8-aeTvDQHdVDZ6GKLsqp6adFJC8u6O6_UY=',
      isActive: true,
      itemPurchased: 1,
      type :2,
      laundryId : 1,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 52,
      title: 'Midi Skirts',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://5.imimg.com/data5/TH/SH/JQ/SELLER-84307731/mens-casual-wear-cotton-shorts-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :2,
      laundryId : 1,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 53,
      title: 'Tops',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/lower-shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //   'https://5.imimg.com/data5/XO/RP/MY-21762497/mens-formal-trouser-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :2,
      laundryId : 1,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },


    {
      id: 54,
      title: 'Shirt',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Blazer',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/blazer.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //   imageIconPath:
      // 'https://5.imimg.com/data5/QM/KK/YS/SELLER-1510182/coat-blazers-500x500.jpg',
      isActive: true,
      itemPurchased: 1,
      type :2,
      laundryId : 2,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 55,
      title: 'TShirt',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/jeans.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
       // resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://media.gettyimages.com/photos/directly-above-shot-of-jeans-pant-over-white-background-picture-id1161148084?s=170667a',
      isActive: false,
      itemPurchased: 1,
      type :2,
      laundryId : 2,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 56,
      title: 'Pant',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/kurta.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ir8w_3lggc8cly1dLZ63u8Otio92KmuZ1w&usqp=CAU',
      isActive: false,
      itemPurchased: 1,
      type :2,
      laundryId : 2,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 57,
      title: 'Gown',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Chocolate Brownies',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shirt.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //     'https://media.istockphoto.com/photos/mens-shirt-picture-id488160041?k=20&m=488160041&s=612x612&w=0&h=OH_-skyES8-aeTvDQHdVDZ6GKLsqp6adFJC8u6O6_UY=',
      isActive: true,
      itemPurchased: 1,
      type :2,
      laundryId : 2,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 58,
      title: 'Midi Skirts',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://5.imimg.com/data5/TH/SH/JQ/SELLER-84307731/mens-casual-wear-cotton-shorts-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :2,
      laundryId : 2,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 59,
      title: 'Tops',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/lower-shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //   'https://5.imimg.com/data5/XO/RP/MY-21762497/mens-formal-trouser-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :2,
      laundryId : 2,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },


    {
      id: 60,
      title: 'Shirt',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Blazer',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/blazer.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //   imageIconPath:
      // 'https://5.imimg.com/data5/QM/KK/YS/SELLER-1510182/coat-blazers-500x500.jpg',
      isActive: true,
      itemPurchased: 1,
      type :2,
      laundryId : 3,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 61,
      title: 'TShirt',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/jeans.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
       // resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://media.gettyimages.com/photos/directly-above-shot-of-jeans-pant-over-white-background-picture-id1161148084?s=170667a',
      isActive: false,
      itemPurchased: 1,
      type :2,
      laundryId : 3,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 62,
      title: 'Pant',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/kurta.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ir8w_3lggc8cly1dLZ63u8Otio92KmuZ1w&usqp=CAU',
      isActive: false,
      itemPurchased: 1,
      type :2,
      laundryId : 3,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 63,
      title: 'Gown',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Chocolate Brownies',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shirt.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //     'https://media.istockphoto.com/photos/mens-shirt-picture-id488160041?k=20&m=488160041&s=612x612&w=0&h=OH_-skyES8-aeTvDQHdVDZ6GKLsqp6adFJC8u6O6_UY=',
      isActive: true,
      itemPurchased: 1,
      type :2,
      laundryId : 3,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 64,
      title: 'Midi Skirts',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://5.imimg.com/data5/TH/SH/JQ/SELLER-84307731/mens-casual-wear-cotton-shorts-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :2,
      laundryId : 3,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 65,
      title: 'Tops',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/lower-shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //   'https://5.imimg.com/data5/XO/RP/MY-21762497/mens-formal-trouser-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :2,
      laundryId : 3,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 66,
      title: 'Shirt',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Blazer',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/blazer.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //   imageIconPath:
      // 'https://5.imimg.com/data5/QM/KK/YS/SELLER-1510182/coat-blazers-500x500.jpg',
      isActive: true,
      itemPurchased: 1,
      type :2,
      laundryId : 4,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 67,
      title: 'TShirt',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/jeans.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
       // resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://media.gettyimages.com/photos/directly-above-shot-of-jeans-pant-over-white-background-picture-id1161148084?s=170667a',
      isActive: false,
      itemPurchased: 1,
      type :2,
      laundryId : 4,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 68,
      title: 'Pant',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/kurta.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ir8w_3lggc8cly1dLZ63u8Otio92KmuZ1w&usqp=CAU',
      isActive: false,
      itemPurchased: 1,
      type :2,
      laundryId : 4,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 69,
      title: 'Gown',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Chocolate Brownies',
      deliveryFee: 3.45,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shirt.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //     'https://media.istockphoto.com/photos/mens-shirt-picture-id488160041?k=20&m=488160041&s=612x612&w=0&h=OH_-skyES8-aeTvDQHdVDZ6GKLsqp6adFJC8u6O6_UY=',
      isActive: true,
      itemPurchased: 1,
      type :2,
      laundryId : 4,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 70,
      title: 'Midi Skirts',
      rating: 4.5,
      deliveryTime: '31min',
      description: 'Pancakes with Caramel & Chocolate Ice Cream',
      deliveryFee: 4,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      //  imageIconPath:
      //   'https://5.imimg.com/data5/TH/SH/JQ/SELLER-84307731/mens-casual-wear-cotton-shorts-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :2,
      laundryId : 4,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },
    {
      id: 71,
      title: 'Tops',
      rating: 2,
      deliveryTime: '31min',
      description: 'Lilian, Rouses, Bouquets.',
      deliveryFee: 5,
      review: 145,
      imageIconComponent: <CachableImage
        source={require('../assets/images/lower-shorts.png')}
        style={[globalStyles.flex, { borderRadius: 10 }]}
        resizeMode={'stretch'}
      />,
      // imageIconPath:
      //   'https://5.imimg.com/data5/XO/RP/MY-21762497/mens-formal-trouser-500x500.jpg',
      isActive: false,
      itemPurchased: 1,
      type :2,
      laundryId : 4,
      services :[{
        id: 1,
        title: 'Dry Cleaning',
        deliveryFee: 4.45,
        description: 'Cleaning',
      },
      {
        id: 2,
        title: 'Ironing',
        description: 'Ironing',
        deliveryFee: 12.00,
        isActive: false,
      },
      {
        id: 3,
        title: 'Wash & Ironing',
        deliveryFee: 1.05,
        description: '48 Places',
        isActive: false,
      },
      {
        id: 4,
        title: 'Duvet Cleaning',
        deliveryFee: 2.25,
        description: '153 Places',
        isActive: false,
      },
      {
        id: 5,
        title: 'Stain Treatment',
        deliveryFee: 1.45,
        description: '39 Places',
        isActive: false,
      }]
    },

  ],
};
