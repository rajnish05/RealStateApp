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
            cardStyle={{ backgroundColor: 'transparent' }}
            tintColor='#ffffff'
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            <Stack.Screen
                name={ScreenNames.HomeScreen}
                component={HomeScreen}
                options={{
                    gestureEnabled: false,
                }}
            />
            <Stack.Screen
                name={ScreenNames.DetailScreen}
                component={DetailScreen}
                options={{
                    gestureEnabled: false,
                }}
            />

        </Stack.Navigator>
    )

}


export default AppStack; 