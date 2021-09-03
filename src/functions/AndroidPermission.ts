import {Alert, PermissionsAndroid} from "react-native";

const getPermissionAndroid = async (): Promise<boolean | undefined> => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: "Image Download Permission",
                message: "Your permission is required to save images to your device",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return true;
        }
        Alert.alert(
            "Save remote Image",
            "Grant Me Permission to save Image",
            [{text: "OK", onPress: () => console.log("OK Pressed")}],
            {cancelable: false}
        );
    } catch (err) {
        let errorMessage = "Failed to do something exceptional";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        Alert.alert(
            "Save remote Image",
            "Failed to save Image: " + errorMessage,
            [{text: "OK", onPress: () => console.log("OK Pressed")}],
            {cancelable: false}
        );
    }
};

export default getPermissionAndroid;
