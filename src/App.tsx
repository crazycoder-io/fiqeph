import React from "react";
import {StyleSheet, View} from "react-native";
import {BottomNavigation, Text} from "react-native-paper";

const HomeRoute = () => <Text>HomeRoute</Text>;

const SearchRoute = () => <Text>SearchRoute</Text>;

const App = (): JSX.Element => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: "home", title: "Home", icon: "home", color: "#009688"},
        {key: "search", title: "Search", icon: "search-web", color: "#795548"}
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        search: SearchRoute
    });

    return (
        <View style={styles.contain}>
            <Text>Welcome to Fiqeph</Text>
            <BottomNavigation
                navigationState={{index, routes}}
                onIndexChange={setIndex}
                renderScene={renderScene}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    contain: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
    bottom: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0
    }
});

export default App;
