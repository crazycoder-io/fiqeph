import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {BottomNavigation} from "./components";
import {HomeScreen, SearchScreen} from "./screens";

const Tab = createBottomTabNavigator(); // Create a bottom tab navigator through react navigation

const App = (): JSX.Element => {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBar={BottomNavigation}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
