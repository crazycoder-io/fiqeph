import {Alert} from "react-native";
import RNFetchBlob from "rn-fetch-blob";
import Share from "react-native-share";
import {Error} from "../types";

const onShare = async (uri: string) => {
    try {
        const resp = await RNFetchBlob.fetch("GET", uri);
        let base64image = resp.data as string;
        base64image = "data:image/png;base64," + base64image;
        share(base64image);
    } catch (error) {
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        Alert.alert(errorMessage);
    }
};

const share = (image: string) => {
    const shareOptions = {
        title: "Share",
        url: image,
        message: "From fiqeph app"
    };

    Share.open(shareOptions)
        .then(res => {
            console.log(res);
        })
        .catch((err: Error) => {
            console.log(err.message);
        });
};

export default onShare;
