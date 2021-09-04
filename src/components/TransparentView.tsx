import React from "react";
import {Colors, ActivityIndicator, Modal, Portal} from "react-native-paper";
import {TransparentViewProps} from "../types";

const TransparentView: React.FC<TransparentViewProps> = props => {
    const {visible} = props;

    return (
        <Portal>
            <Modal visible={visible} contentContainerStyle={{backgroundColor: "transparent"}}>
                <ActivityIndicator animating={true} color={Colors.red400} />
            </Modal>
        </Portal>
    );
};

export default TransparentView;
