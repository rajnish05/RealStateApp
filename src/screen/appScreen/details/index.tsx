import React, { useState } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
//@ts-ignore
import haversine from 'haversine';
import Header from './Header';
import ImageDisplay from './ImageDisplay';
import Details from './Details';
import Breadcrumbs from './Breadcrumbs';
import { HomeDetailScreenProps } from './interface';
import UnlockButton from './UnlockButton';
import useLocation from '../../../customHooks/useLocation';

const HomeDetailScreen: React.FC<HomeDetailScreenProps> = ({ route }) => {

    const { homeData } = route.params
    const { address, description, width, height, views, breadcrumbs, image, unlocked, lat, long } = homeData || {}

    const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [isWithinRange, setIsWithinRange] = useState(false);
    const location = useLocation();
    console.log("🚀 ~ location:", location)

    React.useEffect(() => {
        // const distance = haversine(
        //     { latitude, longitude },
        //     { latitude: lat, longitude: long },
        //     { unit: 'meter' }
        // );

        // setIsWithinRange(distance <= 30);
    }, [lat, long,location])

    const handleUnlock = () => {
        Alert.alert("Unlocked", "You have unlocked the home!");
    };


    if (Boolean(!homeData)) {
        return (
            <View>
                <Text>{"No home data available"}</Text>
            </View>
        );
    }

    return (
        <ScrollView  >
            <Header address={address} />
            <ImageDisplay imageUrl={image} />
            <Details description={description} width={width} height={height} views={views} />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <UnlockButton unlocked={unlocked} onPress={() => { }} />
        </ScrollView>
    );
};

export default HomeDetailScreen;
