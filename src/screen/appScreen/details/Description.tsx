


import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { HomeDescriptionProps } from './interface';

const Description: React.FC<HomeDescriptionProps> = ({ home, unlocked}) => {

    if(!unlocked){
        return <></>
    }

    return (
        <View style={styles.descriptionContainer}>
            <Text style={styles.price}>{home.price.toLocaleString()}</Text>
            <View style={styles.detailsContainer}>
                <Text style={styles.detail}>Bedrooms: {home.bedrooms}</Text>
                <Text style={styles.detail}>Bathrooms: {home.bathrooms}</Text>
                <Text style={styles.detail}>Area: {home.area} sq ft</Text>
            </View>
            <Text style={styles.description}>{home.description}</Text>
        </View>
    );
};

export default Description;