import React from "react";
import {StyleSheet} from "react-native";
import {Card, IconButton, Colors, Title, Paragraph} from "react-native-paper";
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

    return (
        <>
            {cardData ? (
                <Card key={cardData.id} style={styles.card}>
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
    }
});

export default Cart;
