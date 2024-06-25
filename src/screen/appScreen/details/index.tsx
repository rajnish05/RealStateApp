import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import haversine from 'haversine';
import { RouteProp, useRoute } from '@react-navigation/native';
//@ts-ignore
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import { styles } from './style';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Detail'>;

type Props = {
  navigation: DetailScreenNavigationProp;
  route: DetailScreenRouteProp;
};

const DetailScreen: React.FC<Props> = ({ route }) => {
  const { home } = route.params;
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [isWithinRange, setIsWithinRange] = useState(false);

//   useEffect(() => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setUserLocation({ latitude, longitude });

//         const distance = haversine(
//           { latitude, longitude },
//           { latitude: home.latitude, longitude: home.longitude },
//           { unit: 'meter' }
//         );

//         setIsWithinRange(distance <= 30);
//       },
//       (error) => {
//         Alert.alert("Error", "Failed to get current location");
//         console.error(error);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   }, [home.latitude, home.longitude]);

  const handleUnlock = () => {
    Alert.alert("Unlocked", "You have unlocked the home!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{home?.address}</Text>
      <Text style={styles.description}>{home?.description}</Text>
      {isWithinRange && <Button title="Unlock" onPress={handleUnlock} />}
    </View>
  );
};



export default DetailScreen;
