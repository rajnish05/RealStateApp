//@ts-ignore
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import HomeScreen from "../screen/appScreen/home";
import DetailScreen from "../screen/appScreen/details";
import { ScreenNames } from '../utils/ScreenNames';

const Stack = createStackNavigator();


const AppStack = () => {

    return (
        <Stack.Navigator
            initialRouteName={ScreenNames.HomeScreen}
                // mode="card"
                cardStyle={{ backgroundColor: 'transparent' }}
            // headerMode="screen"
            tintColor='#ffffff'
            screenOptions={{
                headerShown: false,
                gestureDirection: 'horizontal',
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            <Stack.Screen
                name={ScreenNames.HomeScreen}
                component={HomeScreen}
                options={{
                    gestureEnabled: false,
                    swipeEnabled: false
                }}
            />
            <Stack.Screen
                name={ScreenNames.DetailScreen}
                component={DetailScreen}
                options={{
                    gestureEnabled: false,
                    swipeEnabled: false
                }}
            />

        </Stack.Navigator>
    )

}


export default AppStack; 