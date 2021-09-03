import React from "react";
import {View, StyleSheet} from "react-native";
import {Button, Colors} from "react-native-paper";
import {BottomNavigationProps} from "../types";

const BottomNavigation: React.FC<BottomNavigationProps> = (props): JSX.Element => {
    const Navigate = (route: string) => {
        props.navigation.navigate(route);
    };

    const blue = Colors.blue600;
    const red = Colors.red500;

    return (
        <View style={styles.contain}>
            <Button color={blue} onPress={() => Navigate("Home")} icon="home">
                Home
            </Button>
            <Button color={red} onPress={() => Navigate("Search")} icon="search-web">
                Search
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    contain: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        height: 60,
        backgroundColor: "transparent"
    }
});

export default BottomNavigation;
