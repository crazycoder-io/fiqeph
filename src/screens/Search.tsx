import React from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import {Searchbar} from "react-native-paper";
import {PHOTOS} from "../utils/SampleDummyData";
import {Card} from "../components";
import {SearchComponentProps} from "../types";

const Search: React.FC<SearchComponentProps> = props => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [photos, setPhoto] = React.useState<Array<{id: number; title: string; uri: string}>>([]);

    const onChangeSearch = (query: string) => setSearchQuery(query);
    const makeCall = () => {
        const n = Math.floor(Math.random() * 10);
        console.log(n);
        setPhoto(PHOTOS.splice(n, PHOTOS.length - 1));
    };

    React.useEffect(() => {
        if (searchQuery === "") {
            console.log("bos");
            setPhoto([]);
        }
    }, [searchQuery]);

    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                onEndEditing={makeCall}
                value={searchQuery}
            />
            {photos.length > 0 && (
                <ScrollView style={styles.scrollView}>
                    <Card cardData={photos} navigation={props.navigation} />
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 10
    },
    scrollView: {
        padding: 5,
        margin: 5
    }
});

export default Search;
