import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import Header from './Header';
import ImageDisplay from './ImageDisplay';
import Details from './Details';
import Breadcrumbs from './Breadcrumbs';
import { HomeDetailScreenProps } from './interface';
import UnlockButton from './UnLockButton';

const HomeDetailScreen: React.FC<HomeDetailScreenProps> = ({ route }) => {
    const { homeData } = route.params
    const { address, description, width, height, views, breadcrumbs, image,unlocked } = homeData || {}

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
