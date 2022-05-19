/* eslint-disable */
import React, { useState, useEffect, createRef } from 'react';
import {
    View, Text, ScrollView, SafeAreaView, TouchableOpacity, PermissionsAndroid,
    Platform, Image
} from 'react-native';


//Third Party
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';


//Components
import Header from '../../../components/Header/Header';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import { navigate } from '../../../utility/NavigationService';
import Routes from '../../../navigation/Routes';
import Action from '../../../redux/action';
import { allColors } from '../../../assets/styles/mainColors';
import { horizontalScale, screenHeight, screenWidth, verticalScale } from '../../../utility/Scale';
import { TextInput } from 'react-native-gesture-handler';


import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import { useSelector, useDispatch } from 'react-redux';
Geocoder.init("AIzaSyANG0-LliP9w-QPFBo1Oz7WyYoXgra2Tcc", { language: "en" });


const mapViewRef = createRef();

const LocationInfoScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const [forDropOff, setForDropOff] = useState(route.params.forDropOff);
    const deliveryDetails = useSelector(state => state.deliveryAddressData, [])
    const [location, setLocation] = useState('');
    const [
        currentLongitude,
        setCurrentLongitude
    ] = useState(0);
    const [
        currentLatitude,
        setCurrentLatitude
    ] = useState(0);
    const [
        locationStatus,
        setLocationStatus
    ] = useState('');
    const [
        loading,
        setLoading
    ] = useState(true);
    useEffect(() => {
        const requestLocationPermission = async () => {
            if (Platform.OS === 'ios') {
                getOneTimeLocation();
                subscribeLocationLocation();
            } else {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'Location Access Required',
                            message: 'This App needs to Access your location',
                        },
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //To Check, If Permission is granted
                        getOneTimeLocation();
                        subscribeLocationLocation();
                    } else {
                        setLocationStatus('Permission Denied');
                    }
                } catch (err) {
                    console.warn(err);
                }
            }
        };
        requestLocationPermission();
        return () => {
            Geolocation.clearWatch(watchID);
        };
    }, []);

    function onSubmit() {
        debugger
        if (forDropOff) {
            deliveryDetails.deliveryInformation = {
                address: location,
                latitude: currentLatitude,
                longitude: currentLongitude
            }
        }
        else {
            deliveryDetails.pickupInformation = {
                address: location,
                latitude: currentLatitude,
                longitude: currentLongitude
            }
        }
        dispatch(Action.storeDeliveryAddressData(deliveryDetails))
        navigate(Routes.DeliveryInfoScreen)

    }

    const getOneTimeLocation = () => {
        setLocationStatus('Getting Location ...');
        Geolocation.getCurrentPosition(
            //Will give you the current location
            (position) => {
                setLocationStatus('You are Here');
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                //Setting Latitude state
                setCurrentLatitude(latitude);
                //Setting Longitude state
                setCurrentLongitude(longitude);
                animateToRegion(latitude, longitude)
            },
            (error) => {
                setLocationStatus(error.message);
            },
            {
                enableHighAccuracy: false,
                timeout: 30000,
                maximumAge: 1000
            },
        );
    };

    const subscribeLocationLocation = () => {
        watchID = Geolocation.watchPosition(
            (position) => {
                //Will give you the location on location change

                setLocationStatus('You are Here');
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                //Setting Latitude state
                setCurrentLatitude(latitude);
                //Setting Longitude state
                setCurrentLongitude(longitude);
                animateToRegion(latitude, longitude)

            },
            (error) => {
                setLocationStatus(error.message);
            },
            {
                enableHighAccuracy: false,
                maximumAge: 1000
            },
        );
    };

    const animateToRegion = (latitude, longitude) => {
        Geocoder.from(latitude, longitude)
            .then(json => {
                debugger
                var addressComponent = json.results[0].formatted_address
                let region = {
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                };
                mapViewRef.current.animateToRegion(region)
                setCurrentLatitude(latitude);
                setCurrentLongitude(longitude);
                setLocation(addressComponent);
                setLoading(false);
            })
            .catch(error => console.warn(error));

    }

    return (
        <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
            {/*------- Header Start -----*/}
            <Header title={"Choose Location"} onLeftIconPress={() => navigation.goBack()} onRightIconPress={() => navigation.toggleDrawer()} />
            {/*------- Header End -----*/}
            <ScrollView style={globalStyles.flex} showsVerticalScrollIndicator={false} contentContainerStyle={globalStyles.commonScrollViewPadding}>
                <View style={[
                    globalStyles.marginBottom11,
                    globalStyles.flex,
                    globalStyles.horizontalGeneralPadding,
                    { borderRadius: 5 },
                ]} >
                    <Text style={styles.mainHeading}>Choose Location</Text>
                    {<MapView
                        ref={mapViewRef}
                        // initialRegion={{
                        //     latitude: 37.78825,
                        //     longitude: -122.4324,
                        //     latitudeDelta: 0.0922,
                        //     longitudeDelta: 0.0421,
                        // }}
                        // region={{
                        //     latitude: currentLatitude,
                        //     longitude: currentLongitude,
                        //     latitudeDelta: 0.0922,
                        //     longitudeDelta: 0.0421,
                        // }}
                        provider={PROVIDER_GOOGLE}
                        style={[{ height: screenHeight * 0.50 }, globalStyles.flex]}
                        followUserLocation={true}
                        showsUserLocation={true}
                        zoomEnabled={true}
                        onPress={(e) => animateToRegion(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude)}
                    >
                        <Marker draggable
                            coordinate={{
                                latitude: currentLatitude,
                                longitude: currentLongitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                            onDragEnd={(e) => animateToRegion(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude)}>
                            <Image source={require('../../../assets/images/marker.png')} style={{ height: 35, width: 35 }} />
                        </Marker>
                    </MapView>}
                    <View style={styles.locationEntry}>
                        <Text style={styles.subHeading}>Enter Location Manually</Text>
                        <TextInput value={location} style={styles.textInputStyle} placeholder='Location'
                            onChangeText={(text) => setLocation(text)}  >
                        </TextInput>
                    </View>

                    <TouchableOpacity
                        style={[styles.checkOutBtn, { backgroundColor: allColors.black }]}
                        onPress={() => onSubmit()}
                    >
                        <Text style={styles.checkOutBtnTxt}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LocationInfoScreen;
