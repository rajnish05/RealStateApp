import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import HomeCard from './HomeCard';
import { Homes, Home } from '../../../utils/Home';
import { styles } from './styles'
import * as RootNavigation from '../../../navigation/RootNavigation'
import { ScreenNames } from '../../../utils/ScreenNames';


const HomeScreen: React.FC = () => {


    const handleOnPressHome = (item: Home) => {
        RootNavigation.navigate(ScreenNames.DetailScreen,{home:item})
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={Homes}
                keyExtractor={(item: Home) => item.id.toString()}
                renderItem={({ item }) => (
                    <HomeCard
                        address={item.address}
                        image={item.image}
                        description={item.description}
                        onPress={() => { handleOnPressHome(item) }}
                    />
                )}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};


export default HomeScreen;
