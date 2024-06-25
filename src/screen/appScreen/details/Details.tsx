import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DetailsProps } from './interface';
import { styles } from './style';

const Details: React.FC<DetailsProps> = ({ description, width, height, views }) => {
    return (
        <View style={styles.details}>
            <Text>{description}</Text>
            <Text>Dimensions: {width} x {height}</Text>
            <Text>Views: {views}</Text>
        </View>
    );
};

export default Details;