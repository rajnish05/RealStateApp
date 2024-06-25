import React from 'react';
import { View, FlatList } from 'react-native';
import HomeCard from './HomeCard';
import { Home } from '../../../utils/Home';
import { styles } from './styles'
import * as RootNavigation from '../../../navigation/RootNavigation'
import { ScreenNames } from '../../../utils/ScreenNames';
import { useDataContext } from '../../../context/DataProvider';
import HomeHeader from './HomeHeader';

const HomeScreen: React.FC = () => {
    const { data } = useDataContext() || {}

    const handleOnPressHome = async (item: Home) => {
        RootNavigation.navigate(ScreenNames.DetailScreen, { homeData: item })
    }

    return (
        <View style={styles.container}>
            <HomeHeader />
            <FlatList
                data={data}
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
