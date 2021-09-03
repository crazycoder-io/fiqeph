import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import {Card} from "../components";
import {PHOTOS} from "../utils/SampleDummyData";
import {HomeScreenProps} from "../types";

const Home: React.FC<HomeScreenProps> = (props): JSX.Element => {
    return (
        <ScrollView style={styles.contain}>
            <Card cardData={PHOTOS} navigation={props.navigation} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contain: {
        display: "flex",
        flex: 1,
        flexDirection: "column"
    }
});

export default Home;
