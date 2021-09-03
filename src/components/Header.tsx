import React from "react";
import {Appbar} from "react-native-paper";
import {HeaderComponentProps} from "../types";

const Header: React.FC<HeaderComponentProps> = props => {
    return (
        <Appbar.Header>
            {props.title !== "Home" && (
                <Appbar.BackAction onPress={() => props.navigation.goBack()} />
            )}
            <Appbar.Content title={props.title} />
        </Appbar.Header>
    );
};

export default Header;
