import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { HomeHeaderProps } from './interface';
import { styles } from './styles';
import { ProfileFilled, logout } from '../../../assets';
import { currentUser, logOutuser } from '../../../services/AuthService';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

const HomeHeader: React.FC<HomeHeaderProps> = () => {

  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const _currentUser = currentUser()
    setUser(_currentUser);
  }, []);

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{"RealState"}</Text>
      <View style={styles.logoutButton}>
        <View style = {styles.profileContainer}>
          <Image source={ProfileFilled} style={styles.profileFilled} />
          <Text >{user?.email?.split("@")?.[0]}</Text>
        </View>
        <TouchableOpacity onPress={logOutuser} >
          <Image source={logout} style={styles.logoutIcon} />
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default HomeHeader;
