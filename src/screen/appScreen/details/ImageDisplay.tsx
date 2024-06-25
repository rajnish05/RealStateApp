import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { ImageDisplayProps } from './interface';
import { styles } from './style';

const { width } = Dimensions.get('window');

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl }) => {
    return (
        <View style={styles.imageContainer}>
            <Image
                source={{ uri: imageUrl }}
                style={{ width: width, height: width }}
                resizeMode="cover"
            />
        </View>
    );
};

export default ImageDisplay;
