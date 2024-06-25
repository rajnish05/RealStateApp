// HomeCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {styles} from './styles'
import { HomeCardProps } from './interface';



const HomeCard: React.FC<HomeCardProps> = ({ address, image, description ,onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.address}>{address}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};



export default HomeCard;
