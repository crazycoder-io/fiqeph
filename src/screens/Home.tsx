import React from "react";
import {View, StyleSheet, FlatList, Text} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {Card, TransparentView} from "../components";
import {AppState, CardData, HomeScreenProps, PhotoSate} from "../types";
import {getImageList} from "../store/actions/photos";

const Home: React.FC<HomeScreenProps> = (props): JSX.Element => {
    const dispatch = useDispatch();

    const [page, setPage] = React.useState(1);

    const appProps = useSelector((state: AppState) => state.appReducer);
    const photosProps = useSelector((state: PhotoSate) => state.photosReducer);
    const {photos_list, photos_list_loading, error} = photosProps;

    React.useEffect(() => {
        dispatch(getImageList({page}));
    }, [page]);

    return (
        <View style={styles.contain}>
            <TransparentView visible={photos_list_loading || appProps.downloaded} />
            {error && <Text>{error}</Text>}
            {!error && photos_list.length > 0 && (
                <FlatList
                    data={photos_list}
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
    contain: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        margin: 5
    },
    error: {
        color: "red",
        fontSize: 20
    }
});

export default Home;
