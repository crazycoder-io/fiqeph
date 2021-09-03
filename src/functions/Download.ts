import {Platform, Alert} from "react-native";
import RNFetchBlob from "rn-fetch-blob";
import CameraRoll from "@react-native-community/cameraroll";
import {GetPermissionAndroid} from "./";

const handleDownload = async (uri: string) => {
    try {
        if (Platform.OS === "android") {
            const granted = await GetPermissionAndroid();
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            if (!granted) {
                return;
            }
        }
        const dirs = RNFetchBlob.fs.dirs;
        const path =
            Platform.OS === "ios"
                ? dirs["MainBundleDir"] + "/" + new Date().valueOf().toString()
                : dirs.DownloadDir + "/" + new Date().valueOf().toString();

        const res = await RNFetchBlob.config({
            fileCache: true,
            appendExt: "png",
            indicator: true,
            IOSBackgroundTask: true,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                path: path,
                description: "Image"
            }
        }).fetch("GET", uri);

        await CameraRoll.save(res.data);
    } catch (error) {
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        Alert.alert(errorMessage);
    }
};

export default handleDownload;
