import {DOWNLOAD_IMAGE, DOWNLOADED_IMAGE} from "../types";
import {Actions} from "../../types";

const INITIAL_STATE = {
    downloaded: false
};

export default (state = INITIAL_STATE, actions: Actions) => {
    const {type} = actions;

    switch (type) {
        case DOWNLOAD_IMAGE:
            return {
                ...state,
                downloaded: true
            };
        case DOWNLOADED_IMAGE:
            return {
                ...state,
                downloaded: false
            };
        default:
            return state;
    }
};
