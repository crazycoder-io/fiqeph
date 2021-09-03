/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import {AppRegistry} from "react-native";
import App from "./src/App";
import {name as appName} from "./app.json";
import {Provider as PaperProvider} from "react-native-paper";
import "react-native-gesture-handler";
import {Provider} from "react-redux";

import store from "./src/store";

export default function Main() {
    return (
        <PaperProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
