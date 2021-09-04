import React from "react";
import {View, StyleSheet, FlatList, Text} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {Searchbar} from "react-native-paper";
import {Card, TransparentView} from "../components";
import {SearchComponentProps, SearchSate, AppState} from "../types";
import {searchImages} from "../store/actions/search";

const Search: React.FC<SearchComponentProps> = props => {
    const dispatch = useDispatch();

    const [searchQuery, setSearchQuery] = React.useState("");
    const [page, setPage] = React.useState(1);

    const appProps = useSelector((state: AppState) => state.appReducer);
    const searchProps = useSelector((state: SearchSate) => state.searchReducer);
    const {search_photos_list, search_photos_list_loading, error} = searchProps;

    const onChangeSearch = (query: string) => setSearchQuery(query);
    const makeCall = () => {
        dispatch(searchImages({page, search: searchQuery}));
    };

    React.useEffect(() => {
        dispatch(searchImages({page, search: searchQuery}));
    }, [page]);

    return (
        <View style={styles.container}>
            <TransparentView visible={search_photos_list_loading || appProps.downloaded} />
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                onEndEditing={makeCall}
                value={searchQuery}
            />
            {error && <Text>{error}</Text>}
            {!error && search_photos_list.length > 0 && (
                <FlatList
                    data={search_photos_list}
                    keyExtractor={item => item.id}
                    onEndReachedThreshold={1.5}
                    onEndReached={() => setPage(prevState => prevState + 1)}
                    renderItem={card => <Card cardData={card.item} />}
                />
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
