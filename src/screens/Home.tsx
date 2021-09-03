import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import {Card} from "../components";
import {PHOTOS} from "../utils/SampleDummyData";

const Home = (): JSX.Element => {
    return (
        <ScrollView style={styles.contain}>
            <Card cardData={PHOTOS} />
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
