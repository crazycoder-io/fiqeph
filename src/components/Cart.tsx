import React from "react";
import {StyleSheet} from "react-native";
import {Card, IconButton, Colors, ActivityIndicator, Modal, Portal} from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import {CardComponentProps, AppState} from "../types";
import {endDownloadImage, startDownloadImage} from "../store/actions/app";
import {Share, Download} from "../functions";

const Cart: React.FC<CardComponentProps> = (props): JSX.Element => {
    const dispatch = useDispatch();
    const {cardData} = props;

    const appProps = useSelector((state: AppState) => state.appReducer);

    const TransparentView = () => (
        <Portal>
            <Modal
                visible={appProps.downloaded}
                contentContainerStyle={{backgroundColor: "transparent"}}>
                <ActivityIndicator animating={true} color={Colors.red400} />
            </Modal>
        </Portal>
    );

    const downloadImage = async (uri: string) => {
        dispatch(startDownloadImage());
        await Download(uri);
        dispatch(endDownloadImage());
    };

    return (
        <>
            <TransparentView />
            {cardData.length > 0 ? (
                cardData.map(card => (
                    <Card
                        key={card.id}
                        style={styles.card}
                        onPress={() => props.navigation.navigate("Detail")}>
                        <Card.Cover source={{uri: card.uri}} />
                        <Card.Actions>
                            <IconButton
                                size={20}
                                icon="share"
                                color={Colors.blue400}
                                onPress={() => Share(card.uri)}
                            />
                            <IconButton
                                size={20}
                                icon="download"
                                color={Colors.red500}
                                onPress={() => downloadImage(card.uri)}
                            />
                        </Card.Actions>
                    </Card>
                ))
            ) : (
                <Card style={styles.card} onPress={() => props.navigation.navigate("Detail")}>
                    <Card.Cover source={{uri: "https://picsum.photos/600"}} />
                    <Card.Actions>
                        <IconButton
                            size={20}
                            icon="share"
                            color={Colors.blue400}
                            onPress={() => console.log("Pressed")}
                        />
                        <IconButton
                            size={20}
                            icon="download"
                            color={Colors.red500}
                            onPress={() => console.log("Pressed")}
                        />
                    </Card.Actions>
                </Card>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    card: {
        marginTop: 5,
        marginBottom: 5
    }
});

export default Cart;
