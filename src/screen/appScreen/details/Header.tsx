import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { HeaderProps } from './interface';
import { goBackIcon } from '../../../assets';
import { goBack } from '../../../navigation/RootNavigation';

const Header: React.FC<HeaderProps> = ({ address }) => {

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
                <Image
                    source={goBackIcon}
                    style={styles.gobackIcon}
                />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
                <Text style={styles.address}>{address}</Text>
            </View>
        </View>
    );
};

export default Header;
