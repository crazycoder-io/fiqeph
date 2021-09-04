/* eslint-disable react/prop-types */
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import SplashScreen from "react-native-splash-screen";
import {BottomNavigation, Header} from "./components";
import {HomeScreen, SearchScreen} from "./screens";

const Tab = createBottomTabNavigator(); // Create a bottom tab navigator through react navigation

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
                <Tab.Screen name="Home" component={HomeScreen} options={{headerTitle: "Home"}} />
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
