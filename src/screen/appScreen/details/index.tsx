import React, { useState } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
//@ts-ignore
import haversine from 'haversine';
import Header from './Header';
import ImageDisplay from './ImageDisplay';
import Details from './Details';
import Breadcrumbs from './Breadcrumbs';
import { HomeDetailScreenProps, locationProps } from './interface';
import UnlockButton from './UnlockButton';
import useLocation from '../../../customHooks/useLocation';
import { useDataContext } from '../../../context/DataProvider';
import { Home } from '../../../utils/Home';
import Description from './Description';

const HomeDetailScreen: React.FC<HomeDetailScreenProps> = ({ route }) => {

    const { homeData } = route.params
    const { id, address, description, width, height, views, breadcrumbs, image, lat, long } = homeData || {}
    const [isWithinRange, setIsWithinRange] = useState(false);
    const location: locationProps = useLocation();
    const { data, setData, homeDetail } = useDataContext() || {}

    const isUnlocked = React.useMemo(() => {
        return data?.find(obj => obj.id === id)?.unlocked;
    }, [data])

    React.useEffect(() => {
        const { latitude, longitude } = location
        const distance = haversine(
            { latitude, longitude },
            { latitude: lat, longitude: long },
            { unit: 'meter' }
        );

        setIsWithinRange(distance <= 30);
    }, [lat, long, location])

    const handleUnlock = async () => {
        setData((_data: Home[]) => {
            return _data?.map((_home: Home) => {
                return {
                    ..._home,
                    unlocked: _home.id === id
                }
            })
        })
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
            <UnlockButton showUnlock={isWithinRange} unlocked={isUnlocked} onPress={handleUnlock} />
            <Description home={homeDetail} unlocked={Boolean(isUnlocked)} />
        </ScrollView>
    );
};

export default HomeDetailScreen;
