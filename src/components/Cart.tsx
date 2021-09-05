import React from "react";
import {StyleSheet, Image} from "react-native";
import {Card, IconButton, Colors, Title, Paragraph, Portal, Modal} from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import {useDispatch} from "react-redux";
import {CardComponentProps} from "../types";
import {endDownloadImage, startDownloadImage} from "../store/actions/app";
import {Share, Download} from "../functions";

const Cart: React.FC<CardComponentProps> = (props): JSX.Element => {
    const dispatch = useDispatch();
    const {cardData} = props;

    const downloadImage = async (uri: string) => {
        dispatch(startDownloadImage());
        await Download(uri);
        dispatch(endDownloadImage());
    };

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return (
        <>
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={hideModal}
                    contentContainerStyle={styles.modalStyle}>
                    <IconButton
                        size={20}
                        color="#FFF"
                        icon="close"
                        style={styles.closeButton}
                        onPress={hideModal}
                    />
                    <Image source={{uri: cardData.uri}} style={{width: "100%", height: "50%"}} />
                </Modal>
            </Portal>
            {cardData ? (
                <Card onPress={showModal} key={cardData.id} style={styles.card}>
                    <Card.Title title={cardData.title} subtitle={"@" + cardData.user.username} />
                    <Card.Cover source={{uri: cardData.uri}} />
                    <Card.Content>
                        <Title>{cardData.user.name}</Title>
                        <Paragraph>
                            <Icon name="heart" color="red" size={15} /> {cardData.likes}
                        </Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <IconButton
                            size={20}
                            icon="share"
                            color={Colors.blue400}
                            onPress={() => Share(cardData.uri)}
                        />
                        <IconButton
                            size={20}
                            icon="download"
                            color={Colors.red500}
                            onPress={() => downloadImage(cardData.uri)}
                        />
                    </Card.Actions>
                </Card>
            ) : (
                <Title>There is no data to show!</Title>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    card: {
        marginTop: 5,
        marginBottom: 5
    },
    closeButton: {
        position: "absolute",
        backgroundColor: Colors.red500,
        top: 0,
        right: 0,
        padding: 5
    },
    modalStyle: {
        display: "flex",
        flex: 1,
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, .4)"
    }
});

export default Cart;
