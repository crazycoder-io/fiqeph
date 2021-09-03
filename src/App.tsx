/* eslint-disable react/prop-types */
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import SplashScreen from "react-native-splash-screen";
import {BottomNavigation, Header} from "./components";
import {HomeScreen, DetailScreen, SearchScreen} from "./screens";

const Stack = createStackNavigator(); // Create a stack navigator to moving between Home & Detail
const Tab = createBottomTabNavigator(); // Create a bottom tab navigator through react navigation

const HomeStack = () => (
    <Stack.Navigator
        screenOptions={{
            header: props => {
                const {headerTitle} = props.options;
                return (
                    <Header
                        title={headerTitle ? headerTitle : "fiqeph"}
                        navigation={props.navigation}
                    />
                );
            }
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle: "Home"}} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{headerTitle: "Detail"}} />
    </Stack.Navigator>
);

const App = (): JSX.Element => {
    React.useEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBar={BottomNavigation}
                screenOptions={{
                    header: props => {
                        const {headerTitle} = props.options;
                        return (
                            <Header
                                title={headerTitle ? headerTitle : "fiqeph"}
                                navigation={props.navigation}
                            />
                        );
                    }
                }}>
                <Tab.Screen name="HomeStack" component={HomeStack} options={{headerShown: false}} />
                <Tab.Screen
                    name="Search"
                    component={SearchScreen}
                    options={{headerTitle: "Search"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
