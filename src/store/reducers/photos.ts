import {GET_IMAGE_LIST, GET_IMAGE_LIST_SUCCESS, GET_IMAGE_LIST_FAIL} from "../types";
import {Actions, CardData} from "../../types";
import {compare} from "../../utils/compare";

const INITIAL_STATE = {
    photos_list: [],
    photos_list_loading: false,
    photo: {},
    photo_loading: false,
    error: null
};

export default (state = INITIAL_STATE, actions: Actions) => {
    const {type, payload} = actions;
    switch (type) {
        case GET_IMAGE_LIST:
            return {
                ...state,
                photos_list_loading: true
            };
        case GET_IMAGE_LIST_SUCCESS:
            return {
                ...state,
                photos_list_loading: false,
                photos_list:
                    state.photos_list.length > 0
                        ? [
                              ...state.photos_list,
                              ...compare(state.photos_list, payload as Array<CardData>)
                          ]
                        : [...state.photos_list, ...(payload as Array<CardData>)]
            };
        case GET_IMAGE_LIST_FAIL:
            return {
                ...state,
                photos_list_loading: false,
                error: payload
            };
        default:
            return state;
    }
};
